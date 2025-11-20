import { useMemo, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MAX_TEAM_SIZE = 3;
const emailDomainRegex = /@vitbhopal\.ac\.in$/i;
const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';

const HackathonRegister = () => {
  const [formData, setFormData] = useState({
    leadName: '',
    leadEmail: '',
    leadPhone: '',
    teamSize: 1,
    members: [
      { name: '', email: '' },
      { name: '', email: '' },
    ],
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setSubmitting] = useState(false);

  const teammateCount = useMemo(() => Math.max(0, Number(formData.teamSize) - 1), [formData.teamSize]);

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleMemberChange = (index, field, value) => {
    setFormData((prev) => {
      const nextMembers = [...prev.members];
      nextMembers[index] = { ...nextMembers[index], [field]: value };
      return { ...prev, members: nextMembers };
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.leadName.trim()) newErrors.leadName = 'Team lead name is required.';
    if (!emailDomainRegex.test(formData.leadEmail.trim())) {
      newErrors.leadEmail = 'Use your @vitbhopal.ac.in email.';
    }
    if (!formData.leadPhone.trim()) {
      newErrors.leadPhone = 'Phone number is required.';
    }

    const size = Number(formData.teamSize);
    if (!Number.isInteger(size) || size < 1 || size > MAX_TEAM_SIZE) {
      newErrors.teamSize = 'Team size must be between 1 and 3.';
    }

    for (let i = 0; i < teammateCount; i += 1) {
      const member = formData.members[i];
      if (!member?.name?.trim()) {
        newErrors[`memberName${i}`] = 'Name is required.';
      }
      if (!emailDomainRegex.test(member?.email?.trim() || '')) {
        newErrors[`memberEmail${i}`] = 'Use @vitbhopal.ac.in email.';
      }
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: '', message: '' });

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length) {
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(`${API_BASE}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadName: formData.leadName.trim(),
          leadEmail: formData.leadEmail.trim(),
          leadPhone: formData.leadPhone.trim(),
          teamSize: Number(formData.teamSize),
          members: formData.members.slice(0, teammateCount).map((member) => ({
            name: member.name.trim(),
            email: member.email.trim(),
          })),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.errors?.join('\n') || 'Something went wrong.');
      }

      setStatus({ type: 'success', message: result.message });
      setFormData({
        leadName: '',
        leadEmail: '',
        leadPhone: '',
        teamSize: 1,
        members: [
          { name: '', email: '' },
          { name: '', email: '' },
        ],
      });
      setErrors({});
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Unable to submit right now.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 font-mono">
        <section className="max-w-4xl mx-auto linear-grid rounded-3xl border border-black/10 shadow-[16px_16px_0_0_rgba(0,0,0,0.1)] p-6 sm:p-10">
          <p className="text-sm uppercase tracking-widest text-black/70 mb-4">UX Club Hackathon</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">Register your team</h1>
          <p className="text-lg text-black/80 mb-10 max-w-2xl">
            Submit details for everyone on your squad. Every email must use the official{' '}
            <span className="font-semibold">@vitbhopal.ac.in</span> domain. Teams can have up to three people.
          </p>

          {status.message && (
            <div
              className={`mb-8 rounded-2xl border px-4 py-3 text-sm sm:text-base ${
                status.type === 'success'
                  ? 'border-green-600 bg-green-50 text-green-800'
                  : 'border-red-600 bg-red-50 text-red-800'
              }`}
            >
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-10">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Team lead</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold tracking-wide uppercase mb-2" htmlFor="leadName">
                    Full name
                  </label>
                  <input
                    id="leadName"
                    type="text"
                    className="w-full rounded-2xl border border-black/20 bg-white px-4 py-3 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10"
                    value={formData.leadName}
                    onChange={(e) => updateField('leadName', e.target.value)}
                    placeholder="Riya Sharma"
                  />
                  {errors.leadName && <p className="mt-2 text-sm text-red-600">{errors.leadName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold tracking-wide uppercase mb-2" htmlFor="leadEmail">
                    VIT Email ID
                  </label>
                  <input
                    id="leadEmail"
                    type="email"
                    className="w-full rounded-2xl border border-black/20 bg-white px-4 py-3 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10"
                    value={formData.leadEmail}
                    onChange={(e) => updateField('leadEmail', e.target.value)}
                    placeholder="riya.sharma@vitbhopal.ac.in"
                  />
                  {errors.leadEmail && <p className="mt-2 text-sm text-red-600">{errors.leadEmail}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold tracking-wide uppercase mb-2" htmlFor="leadPhone">
                    Phone number
                  </label>
                  <input
                    id="leadPhone"
                    type="tel"
                    className="w-full rounded-2xl border border-black/20 bg-white px-4 py-3 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10"
                    value={formData.leadPhone}
                    onChange={(e) => updateField('leadPhone', e.target.value)}
                    placeholder="+91 98765 43210"
                  />
                  {errors.leadPhone && <p className="mt-2 text-sm text-red-600">{errors.leadPhone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold tracking-wide uppercase mb-2" htmlFor="teamSize">
                    Team size
                  </label>
                  <select
                    id="teamSize"
                    className="w-full rounded-2xl border border-black/20 bg-white px-4 py-3 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10"
                    value={formData.teamSize}
                    onChange={(e) => updateField('teamSize', Math.min(MAX_TEAM_SIZE, Number(e.target.value)))}
                  >
                    {[1, 2, 3].map((size) => (
                      <option key={size} value={size}>
                        {size} {size === 1 ? 'member' : 'members'}
                      </option>
                    ))}
                  </select>
                  {errors.teamSize && <p className="mt-2 text-sm text-red-600">{errors.teamSize}</p>}
                </div>
              </div>
            </div>

            {teammateCount > 0 && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Teammates</h2>
                <div className="space-y-8">
                  {Array.from({ length: teammateCount }).map((_, index) => (
                    <div
                      key={`member-${index}`}
                      className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-inner"
                    >
                      <p className="text-sm uppercase tracking-[0.25em] text-black/60 mb-4">
                        Member {index + 2}
                      </p>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label className="block text-xs font-semibold uppercase mb-2" htmlFor={`memberName-${index}`}>
                            Full name
                          </label>
                          <input
                            id={`memberName-${index}`}
                            type="text"
                            className="w-full rounded-2xl border border-black/20 bg-white px-4 py-3 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10"
                            value={formData.members[index].name}
                            onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                            placeholder="Aarav Mishra"
                          />
                          {errors[`memberName${index}`] && (
                            <p className="mt-2 text-sm text-red-600">{errors[`memberName${index}`]}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-xs font-semibold uppercase mb-2" htmlFor={`memberEmail-${index}`}>
                            VIT Email ID
                          </label>
                          <input
                            id={`memberEmail-${index}`}
                            type="email"
                            className="w-full rounded-2xl border border-black/20 bg-white px-4 py-3 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10"
                            value={formData.members[index].email}
                            onChange={(e) => handleMemberChange(index, 'email', e.target.value)}
                            placeholder="aarav.mishra@vitbhopal.ac.in"
                          />
                          {errors[`memberEmail${index}`] && (
                            <p className="mt-2 text-sm text-red-600">{errors[`memberEmail${index}`]}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-2xl border-2 border-black bg-black px-6 py-3 text-lg font-semibold text-white transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Submitting...' : 'Submit registration'}
              </button>
              <p className="text-sm text-black/70">
                We will email your team lead after reviewing the submission.
              </p>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HackathonRegister;


