import React from "react";

class Pack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
    this.interval = null;
  }

  componentDidMount() {
    this.startAutoSlide();
  }

  componentWillUnmount() {
    this.stopAutoSlide();
  }

  startAutoSlide = () => {
    this.stopAutoSlide();
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  stopAutoSlide = () => {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  nextSlide = () => {
    const committeeMembers = [
      { id: 1, name: 'Dr. T Venkateswara Rao', role: 'Faculty Co-ordinator', imageUrl: 'https://res.cloudinary.com/dy5utqlkm/image/upload/v1763376310/D56_0101_-_Copy_sbe7g9.png', linkedinUrl: 'https://www.linkedin.com/in/dr-t-venkateswara-rao/', bgColor: 'bg-white', iconUrl: 'https://peekinsights.co/wp-content/uploads/2024/08/package-1-icon.svg' },
      { id: 2, name: 'Tanishk Kapoor', role: 'President', imageUrl: 'https://res.cloudinary.com/dy5utqlkm/image/upload/v1763376310/D56_0101_-_Copy_sbe7g9.png', linkedinUrl: 'https://www.linkedin.com/in/tanishk-kapoor-64722828a/', bgColor: 'bg-[#f1ee83]', iconUrl: 'https://peekinsights.co/wp-content/uploads/2024/08/package-2-icon.svg' },
      { id: 3, name: 'Sujal Singh', role: 'Vice President', imageUrl: 'https://res.cloudinary.com/dy5utqlkm/image/upload/v1763482021/Untitled_design__1_-removebg-preview_nhpkbh.png', linkedinUrl: 'https://www.linkedin.com/in/sujalsingh28/', bgColor: 'bg-[#e2c6ff]', iconUrl: 'https://peekinsights.co/wp-content/uploads/2024/08/package-2-icon.svg' },
      { id: 4, name: 'Sonakshi Saxena', role: 'General Secretary', imageUrl: 'https://res.cloudinary.com/dy5utqlkm/image/upload/v1763376454/IMG-20251117-WA0020_q9ewge.png', linkedinUrl: 'https://www.linkedin.com/in/sona14saxena', bgColor: 'bg-[#ffd4d4]', iconUrl: 'https://peekinsights.co/wp-content/uploads/2024/08/package-1-icon.svg' },
      { id: 5, name: 'Yeshu Agarwal', role: 'Tech Lead', imageUrl: 'https://res.cloudinary.com/dy5utqlkm/image/upload/v1763375023/img_yeshu_v41boo.png', linkedinUrl: 'https://www.linkedin.com/in/yeshu-agarwal-linkdedin', bgColor: 'bg-[#d4f1ff]', iconUrl: 'https://peekinsights.co/wp-content/uploads/2024/08/package-2-icon.svg' },
      { id: 6, name: 'Nitin Vishwakarma', role: 'Design Lead', imageUrl: 'https://res.cloudinary.com/dy5utqlkm/image/upload/v1763377075/Untitled_design-removebg-preview_lpfvlu.png', linkedinUrl: 'https://www.linkedin.com/in/nitin-vishwakarma/', bgColor: 'bg-[#c7ffd4]', iconUrl: 'https://peekinsights.co/wp-content/uploads/2024/08/package-1-icon.svg' },
    ];
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex + 1) % committeeMembers.length
    }));
  }

  prevSlide = () => {
    const committeeMembers = [
      { id: 1, name: 'Dr. T Venkateswara Rao', role: 'Faculty Co-ordinator', imageUrl: 'https://res.cloudinary.com/dy5utqlkm/image/upload/v1763376310/D56_0101_-_Copy_sbe7g9.png', linkedinUrl: 'https://www.linkedin.com/in/dr-t-venkateswara-rao/', bgColor: 'bg-white', iconUrl: 'https://peekinsights.co/wp-content/uploads/2024/08/package-1-icon.svg' },
      { id: 2, name: 'Tanishk Kapoor', role: 'President', imageUrl: 'https://res.cloudinary.com/dy5utqlkm/image/upload/v1763376310/D56_0101_-_Copy_sbe7g9.png', linkedinUrl: 'https://www.linkedin.com/in/tanishk-kapoor-64722828a/', bgColor: 'bg-[#f1ee83]', iconUrl: 'https://peekinsights.co/wp-content/uploads/2024/08/package-2-icon.svg' },
      { id: 3, name: 'Sujal Singh', role: 'Vice President', imageUrl: 'https://res.cloudinary.com/dy5utqlkm/image/upload/v1763482021/Untitled_design__1_-removebg-preview_nhpkbh.png', linkedinUrl: 'https://www.linkedin.com/in/sujalsingh28/', bgColor: 'bg-[#e2c6ff]', iconUrl: 'https://peekinsights.co/wp-content/uploads/2024/08/package-2-icon.svg' },
      { id: 4, name: 'Sonakshi Saxena', role: 'General Secretary', imageUrl: 'https://res.cloudinary.com/dy5utqlkm/image/upload/v1763376454/IMG-20251117-WA0020_q9ewge.png', linkedinUrl: 'https://www.linkedin.com/in/sona14saxena', bgColor: 'bg-[#ffd4d4]', iconUrl: 'https://peekinsights.co/wp-content/uploads/2024/08/package-1-icon.svg' },
      { id: 5, name: 'Yeshu Agarwal', role: 'Tech Lead', imageUrl: 'https://res.cloudinary.com/dy5utqlkm/image/upload/v1763375023/img_yeshu_v41boo.png', linkedinUrl: 'https://www.linkedin.com/in/yeshu-agarwal-linkdedin', bgColor: 'bg-[#d4f1ff]', iconUrl: 'https://peekinsights.co/wp-content/uploads/2024/08/package-2-icon.svg' },
      { id: 6, name: 'Nitin Vishwakarma', role: 'Design Lead', imageUrl: 'https://res.cloudinary.com/dy5utqlkm/image/upload/v1763377075/Untitled_design-removebg-preview_lpfvlu.png', linkedinUrl: 'https://www.linkedin.com/in/nitin-vishwakarma/', bgColor: 'bg-[#c7ffd4]', iconUrl: 'https://peekinsights.co/wp-content/uploads/2024/08/package-1-icon.svg' },
    ];
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex - 1 + committeeMembers.length) % committeeMembers.length
    }));
  }

  handleTouchStart = (e) => {
    this.stopAutoSlide();
    this.touchStartX = e.touches[0].clientX;
  }

  handleTouchMove = (e) => {
    this.touchEndX = e.touches[0].clientX;
  }

  handleTouchEnd = () => {
    if (this.touchStartX && this.touchEndX) {
      const diff = this.touchStartX - this.touchEndX;
      if (diff > 50) {
        this.nextSlide();
      } else if (diff < -50) {
        this.prevSlide();
      }
    }
    this.startAutoSlide();
    this.touchStartX = null;
    this.touchEndX = null;
  }

  render() {
    const committeeMembers = [
      { id: 1, name: 'Dr. T Venkateswara Rao', role: 'Faculty Co-ordinator', imageUrl: 'https://res.cloudinary.com/dy5utqlkm/image/upload/v1763376310/D56_0101_-_Copy_sbe7g9.png', linkedinUrl: 'https://www.linkedin.com/in/dr-t-venkateswara-rao/', bgColor: 'bg-white', iconUrl: 'https://peekinsights.co/wp-content/uploads/2024/08/package-1-icon.svg' },
      { id: 2, name: 'Tanishk Kapoor', role: 'President', imageUrl: 'https://res.cloudinary.com/dy5utqlkm/image/upload/v1763376310/D56_0101_-_Copy_sbe7g9.png', linkedinUrl: 'https://www.linkedin.com/in/tanishk-kapoor-64722828a/', bgColor: 'bg-[#f1ee83]', iconUrl: 'https://peekinsights.co/wp-content/uploads/2024/08/package-2-icon.svg' },
      { id: 3, name: 'Sujal Singh', role: 'Vice President', imageUrl: 'https://res.cloudinary.com/dy5utqlkm/image/upload/v1763482021/Untitled_design__1_-removebg-preview_nhpkbh.png', linkedinUrl: 'https://www.linkedin.com/in/sujalsingh28/', bgColor: 'bg-[#e2c6ff]', iconUrl: 'https://peekinsights.co/wp-content/uploads/2024/08/package-2-icon.svg' },
      { id: 4, name: 'Sonakshi Saxena', role: 'General Secretary', imageUrl: 'https://res.cloudinary.com/dy5utqlkm/image/upload/v1763376454/IMG-20251117-WA0020_q9ewge.png', linkedinUrl: 'https://www.linkedin.com/in/sona14saxena', bgColor: 'bg-[#ffd4d4]', iconUrl: 'https://peekinsights.co/wp-content/uploads/2024/08/package-1-icon.svg' },
      { id: 5, name: 'Yeshu Agarwal', role: 'Tech Lead', imageUrl: 'https://res.cloudinary.com/dy5utqlkm/image/upload/v1763375023/img_yeshu_v41boo.png', linkedinUrl: 'https://www.linkedin.com/in/yeshu-agarwal-linkdedin', bgColor: 'bg-[#d4f1ff]', iconUrl: 'https://peekinsights.co/wp-content/uploads/2024/08/package-2-icon.svg' },
      { id: 6, name: 'Nitin Vishwakarma', role: 'Design Lead', imageUrl: 'https://res.cloudinary.com/dy5utqlkm/image/upload/v1763377075/Untitled_design-removebg-preview_lpfvlu.png', linkedinUrl: 'https://www.linkedin.com/in/nitin-vishwakarma/', bgColor: 'bg-[#c7ffd4]', iconUrl: 'https://peekinsights.co/wp-content/uploads/2024/08/package-1-icon.svg' },
    ];

    return (
      <div className="w-full py-10 h-full items-center grid bg-[#dcfebc]">
        <div className="grid grid-cols-1">
          <h2 className="font-serif font-light text-3xl md:text-5xl px-6 leading-10 text-center mb-4">
            Evaluation Committee
          </h2>
          <h4 className="font-sans font-light text-xl md:text-2xl px-6 text-center mb-8">
            Meet Our Distinguished Panel of Evaluators
          </h4>
        </div>

        {/* Mobile Grid */}
        <div className="lg:hidden grid grid-cols-2 gap-4 px-4">
          {committeeMembers.map((member, index) => (
            <div key={index} className={`bg-white border rounded-lg shadow-md ${index === 0 || index === 5 ? 'col-span-2 max-w-[50%] mx-auto' : ''}`}>
              <div className={`border-b px-3 py-3 ${member.bgColor}`}>
                <div className="h-6 w-6 mb-1">
                  <img src={member.iconUrl} alt="" />
                </div>
                <h2 className="font-serif font-light text-base text-center">
                  {member.name}
                </h2>
                <p className="text-center text-gray-600 text-xs mt-1 font-sans">{member.role}</p>
              </div>
              <div className="px-3 py-3 flex flex-col items-center">
                <div className="w-full aspect-[4/5] bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden mb-3">
                  {member.imageUrl ? (
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-500 text-sm">{member.name}</span>
                  )}
                </div>
                {member.linkedinUrl && (
                  <a 
                    href={member.linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center w-full h-10 mb-2 bg-black text-white rounded-lg justify-between border-2 border-black hover:bg-white hover:text-black text-xs"
                  >
                    <span className="px-2">LinkedIn</span>
                    <div className="h-4 w-4 mr-2">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </g>
                      </svg>
                    </div>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {committeeMembers.map((member, index) => (
            <div key={index} className="bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className={`border-b px-6 py-6 ${member.bgColor}`}>
                <div className="h-10 w-10 mb-2">
                  <img src={member.iconUrl} alt="" />
                </div>
                <h2 className="font-serif font-light text-2xl md:text-3xl text-center">
                  {member.name}
                </h2>
                <p className="text-center text-gray-600 mt-2 font-sans">{member.role}</p>
              </div>
              <div className="px-6 pt-6 flex flex-col items-center">
                <div className="w-64 h-80 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden mb-6">
                  {member.imageUrl ? (
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-500 text-lg">{member.name}</span>
                  )}
                </div>
                {member.linkedinUrl && (
                  <a 
                    href={member.linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center w-[95%] h-12 mb-6 mt-4 bg-black text-white rounded-xl justify-between border-2 border-black hover:bg-white hover:text-black"
                  >
                    <span className="px-4 text-xl">LinkedIn Profile</span>
                    <div className="h-8 w-8 mr-4">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </g>
                      </svg>
                    </div>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Pack;
