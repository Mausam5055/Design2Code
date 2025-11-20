/* eslint-env node */
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 4000;
const ALLOWED_EMAIL = /@vitbhopal\.ac\.in$/i;
const MAX_TEAM_SIZE = 3;

// MongoDB Schema
const registrationSchema = new mongoose.Schema({
  leadName: { type: String, required: true, trim: true },
  leadEmail: { type: String, required: true, trim: true },
  leadPhone: { type: String, required: true, trim: true },
  teamSize: { type: Number, required: true, min: 1, max: 3 },
  members: [{
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
  }],
  submittedAt: { type: Date, default: Date.now },
});

const Registration = mongoose.model('Registration', registrationSchema);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || '')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN?.split(',') || ['http://localhost:5173'],
    methods: ['POST', 'GET'],
  }),
);
app.use(express.json());

const validateTeam = (payload) => {
  const errors = [];
  const { leadName, leadEmail, leadPhone, teamSize, members } = payload;

  if (!leadName?.trim()) {
    errors.push('Team lead name is required.');
  }

  if (!leadEmail?.match(ALLOWED_EMAIL)) {
    errors.push('Team lead email must be a @vitbhopal.ac.in address.');
  }

  if (!leadPhone?.trim()) {
    errors.push('Team lead phone number is required.');
  }

  const size = Number(teamSize);
  if (!Number.isInteger(size) || size < 1 || size > MAX_TEAM_SIZE) {
    errors.push('Team size must be between 1 and 3.');
  }

  const expectedMembers = Math.max(0, size - 1);
  if ((members || []).length !== expectedMembers) {
    errors.push(`Expected ${expectedMembers} teammate entries.`);
  } else {
    members.forEach((member, index) => {
      if (!member?.name?.trim()) {
        errors.push(`Member ${index + 1} name is required.`);
      }
      if (!member?.email?.match(ALLOWED_EMAIL)) {
        errors.push(`Member ${index + 1} email must be a @vitbhopal.ac.in address.`);
      }
    });
  }

  return errors;
};

app.post('/api/register', async (req, res) => {
  try {
    const errors = validateTeam(req.body || {});

    if (errors.length) {
      return res.status(400).json({ ok: false, errors });
    }

    const submission = new Registration({
      leadName: req.body.leadName.trim(),
      leadEmail: req.body.leadEmail.trim(),
      leadPhone: req.body.leadPhone.trim(),
      teamSize: Number(req.body.teamSize),
      members: (req.body.members || []).map((member) => ({
        name: member.name.trim(),
        email: member.email.trim(),
      })),
    });

    await submission.save();

    return res.json({
      ok: true,
      message: 'Registration received! We will contact you soon.',
    });
  } catch (error) {
    console.error('Registration save error:', error);
    return res.status(500).json({
      ok: false,
      errors: ['Failed to save registration. Please try again.'],
    });
  }
});

app.get('/api/register', async (_, res) => {
  try {
    const totalSubmissions = await Registration.countDocuments();
    res.json({
      ok: true,
      totalSubmissions,
    });
  } catch (error) {
    console.error('Error fetching registration count:', error);
    res.status(500).json({
      ok: false,
      errors: ['Failed to fetch registration count.'],
    });
  }
});

app.get('/health', (_, res) => {
  res.json({ ok: true, uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`Hackathon registration server running on port ${PORT}`);
});


