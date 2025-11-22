import { Component } from "react";
import CircularText from "./CircularText";

export default class Included extends Component {
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
    }, 2000);
  }

  stopAutoSlide = () => {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  nextSlide = () => {
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex + 1) % 6
    }));
  }

  prevSlide = () => {
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex - 1 + 6) % 6
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
    const { currentIndex } = this.state;
    
    // Updated committee members data
    const committeeMembers = [
      { id: 1, name: 'Dr. T Venkateswara Rao', role: 'Faculty Co-ordinator', imageUrl: '10.webp', linkedinUrl: 'https://www.linkedin.com/in/dr-t-venkateswara-rao/' },
      { id: 2, name: 'Tanishk Kapoor', role: 'President', imageUrl: 'https://res.cloudinary.com/dy5utqlkm/image/upload/v1763376310/D56_0101_-_Copy_sbe7g9.png', linkedinUrl: 'https://www.linkedin.com/in/tanishk-kapoor-64722828a/' },
      { id: 3, name: 'Sujal Singh', role: 'Vice President', imageUrl: 'https://res.cloudinary.com/dy5utqlkm/image/upload/v1763482021/Untitled_design__1_-removebg-preview_nhpkbh.png', linkedinUrl: 'https://www.linkedin.com/in/sujalsingh28/' },
      { id: 4, name: 'Sonakshi Saxena', role: 'General Secretary', imageUrl: 'https://res.cloudinary.com/dy5utqlkm/image/upload/v1763376454/IMG-20251117-WA0020_q9ewge.png', linkedinUrl: 'https://www.linkedin.com/in/sona14saxena' },
      { id: 5, name: 'Yeshu Agarwal', role: 'Tech Lead', imageUrl: 'https://res.cloudinary.com/dy5utqlkm/image/upload/v1763375023/img_yeshu_v41boo.png', linkedinUrl: 'https://www.linkedin.com/in/yeshu-agarwal-linkdedin' },
      { id: 6, name: 'Nitin Vishwakarma', role: 'Design Lead', imageUrl: 'https://res.cloudinary.com/dy5utqlkm/image/upload/v1763377075/Untitled_design-removebg-preview_lpfvlu.png', linkedinUrl: 'https://www.linkedin.com/in/nitin-vishwakarma/' },
    ];
    
    return (
      <div id="ourgoals" className="w-full py-8 grid grid-cols-1 xl:grid-cols-2 bg-white">
        <div className="flex flex-col justify-items-start">
          <div className="absolute h-6 bg-[#bbecff] w-[180px] items-center rounded-2xl flex gap-2 mx-6 py-2 px-4">
            <div className="h-4 w-4 ml-1">
              <svg
                fill="#000000"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"></path>
                </g>
              </svg>
            </div>
            <span className="font-sans text-sm font-light text-black uppercase">
              Evaluators
            </span>
          </div>
          <h1 className="font-serif font-light text-3xl md:text-5xl px-6 py-10 leading-tight">
            Evaluation Committee
          </h1>
          
          {/* Mobile Carousel */}
          <div className="mt-0 xl:hidden">
            <div className="relative w-full">
              <div 
                className="overflow-hidden"
                onTouchStart={this.handleTouchStart}
                onTouchMove={this.handleTouchMove}
                onTouchEnd={this.handleTouchEnd}
              >
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {committeeMembers.map((member, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="flex flex-col items-center">
                        <div className="w-64 h-80 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                          {member.imageUrl ? (
                            <img 
                              src={member.imageUrl} 
                              alt={member.name} 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.parentElement.innerHTML = `<span className="text-gray-500 text-lg">${member.name}</span>`;
                              }}
                            />
                          ) : (
                            <span className="text-gray-500 text-lg">{member.name}</span>
                          )}
                        </div>
                        <div className="flex items-center mt-2 flex-col">
                          <div className="flex items-center">
                            {/* Replaced profile icon with LinkedIn icon and made it clickable */}
                            {member.linkedinUrl ? (
                              <a 
                                href={member.linkedinUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-5 h-5 mr-2 text-blue-600 hover:text-blue-800"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                              </a>
                            ) : (
                              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                              </svg>
                            )}
                            <p className="text-lg font-serif">{member.name}</p>
                          </div>
                          <p className="text-sm text-gray-600">{member.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Dots */}
              <div className="flex justify-center mt-4 space-x-2">
                {committeeMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => this.setState({ currentIndex: index })}
                    className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Circular Text for Mobile at Bottom */}
          <div className="relative h-40 mt-8 xl:hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <CircularText
                text="DESIGN*CODE*PUBLISH*"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class w-32 h-32"
              />
            </div>
          </div>
          
          {/* Desktop Grid Layout */}
          <div className="mt-0 hidden xl:block">
            <div className="grid grid-cols-2 gap-8">
              {committeeMembers.map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-64 h-80 md:w-64 md:h-80 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                    {member.imageUrl ? (
                      <img 
                        src={member.imageUrl} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.parentElement.innerHTML = `<span className="text-gray-500 text-lg">${member.name}</span>`;
                        }}
                      />
                    ) : (
                      <span className="text-gray-500 text-lg">{member.name}</span>
                    )}
                  </div>
                  <div className="flex items-center mt-2 flex-col">
                    <div className="flex items-center">
                      {/* Replaced profile icon with LinkedIn icon and made it clickable */}
                      {member.linkedinUrl ? (
                        <a 
                          href={member.linkedinUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-5 h-5 mr-2 text-blue-600 hover:text-blue-800"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      ) : (
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                        </svg>
                      )}
                      <p className="text-lg font-serif">{member.name}</p>
                    </div>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
              {/* Circular Text below 5th image */}
              <div className="col-span-2 flex justify-center mt-8">
                <CircularText
                  text="DESIGN*CODE*PUBLISH*"
                  onHover="speedUp"
                  spinDuration={20}
                  className="custom-class w-32 h-32"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="font-serif font-light text-3xl md:text-5xl px-6 py-10 leading-tight">
            Requirements for Day 2
          </h1>
          <div className="relative bg-[#f7f3ef] w-[90%] border-black border-1 mx-auto shadow-md mb-6 px-6 md:px-26">
            <img
              className="absolute object-cover top-0 left-0 h-12 w-12 md:h-16 md:w-16 bg-[#bbecff] p-4"
              src="https://peekinsights.co/wp-content/uploads/2024/09/icon-magnifying-glass.svg"
              alt=""
            />
            <h2 className="font-serif text-xl md:text-3xl md:mt-2 mt-12 py-2 mb-6">
              Technical Equipment
            </h2>
            <p className="font-sans text-sm md:text-xl py-2 font-light mb-12 text-center">
              Essential technical equipment needed for Day 2 of the event.
            </p>
            <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-4 md:mb-6">
              <div className="h-4 w-4 md:h-5 md:w-5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#292D32"
                      strokeWidth="0.792"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M7.75 12L10.58 14.83L16.25 9.17004"
                      stroke="#292D32"
                      strokeWidth="0.792"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <span className="text-sm md:text-xl font-sans font-light">
                Projector and screen for main stage
              </span>
            </div>
            <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-4 md:mb-6">
              <div className="h-4 w-4 md:h-5 md:w-5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#292D32"
                      strokeWidth="0.792"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M7.75 12L10.58 14.83L16.25 9.17004"
                      stroke="#292D32"
                      strokeWidth="0.792"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <span className="text-sm md:text-xl font-sans font-light">
                Wireless Mics (3),  Wired Mics (2)
              </span>
            </div>
           
            <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-4 md:mb-6">
              <div className="h-4 w-4 md:h-5 md:w-5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#292D32"
                      strokeWidth="0.792"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M7.75 12L10.58 14.83L16.25 9.17004"
                      stroke="#292D32"
                      strokeWidth="0.792"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <span className="text-sm md:text-xl font-sans font-light">
                Tripods for Mics (2),Sound System
              </span>
            </div>
           
          </div>
          <div className="relative bg-[#f7f3ef] w-[90%] border-black border-1 mx-auto shadow-md mb-6 px-6 md:px-26">
            <img
              className="absolute top-0 left-0 object-cover h-12 w-12 md:h-16 md:w-16 bg-[#ffd3c0] p-4"
              src="https://peekinsights.co/wp-content/uploads/2024/09/icon-opacity.svg"
              alt=""
            />
            <h2 className="font-serif text-xl mt-12 md:text-3xl md:mt-2 py-2 mb-6">
              Venue & Logistics
            </h2>
            <p className="font-sans text-sm md:text-xl py-2 font-light mb-12 text-center">
              Venue setup and logistical requirements for Day 2.
            </p>
            <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-4 md:mb-6">
              <div className="h-4 w-4 md:h-5 md:w-5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#292D32"
                      strokeWidth="0.792"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M7.75 12L10.58 14.83L16.25 9.17004"
                      stroke="#292D32"
                      strokeWidth="0.792"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <span className="text-sm md:text-xl font-sans font-light">
                Main hall for briefings and judging
              </span>
            </div>
            <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-4 md:mb-6">
              <div className="h-4 w-4 md:h-5 md:w-5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#292D32"
                      strokeWidth="0.792"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M7.75 12L10.58 14.83L16.25 9.17004"
                      stroke="#292D32"
                      strokeWidth="0.792"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <span className="text-sm md:text-xl font-sans font-light">
                Adequate seating and tables for 30 teams
              </span>
            </div>
            <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-4 md:mb-6">
              <div className="h-4 w-4 md:h-5 md:w-5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#292D32"
                      strokeWidth="0.792"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M7.75 12L10.58 14.83L16.25 9.17004"
                      stroke="#292D32"
                      strokeWidth="0.792"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <span className="text-sm md:text-xl font-sans font-light">
                3 Long Tables , Guest Chairs and Tables(6)
              </span>
            </div>
          
            <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-4 md:mb-6">
              <div className="h-4 w-4 md:h-5 md:w-5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#292D32"
                      strokeWidth="0.792"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M7.75 12L10.58 14.83L16.25 9.17004"
                      stroke="#292D32"
                      strokeWidth="0.792"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <span className="text-sm md:text-xl font-sans font-light">
                Podium,3 Camphor,Lamp (Candle Lighting)
              </span>
            </div>
            
            
            <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-4 md:mb-6">
              <div className="h-4 w-4 md:h-5 md:w-5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#292D32"
                      strokeWidth="0.792"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M7.75 12L10.58 14.83L16.25 9.17004"
                      stroke="#292D32"
                      strokeWidth="0.792"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <span className="text-sm md:text-xl font-sans font-light">
                Match Box, Water dispensers (3)
              </span>
            </div>
            
          </div>
          <div className="relative bg-[#f7f3ef] w-[90%] border-black border-1 mx-auto shadow-md mb-6 px-6 md:px-26">
            <img
              className="absolute top-0 left-0 object-cover h-12 w-12 md:h-16 md:w-16 bg-[#f7d681] p-4"
              src="https://peekinsights.co/wp-content/uploads/2024/09/icon-checklist.svg"
              alt=""
            />
            <h2 className="font-serif text-xl md:text-3xl mt-12 md:mt-2 py-2 mb-6">
              Permissions Required
            </h2>
            <p className="font-sans text-sm md:text-xl py-2 font-light mb-12 text-center">
              Official permissions needed to conduct Day 2 of the event.
            </p>
            <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-4 md:mb-6">
              <div className="h-4 w-4 md:h-5 md:w-5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#292D32"
                      strokeWidth="0.792"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M7.75 12L10.58 14.83L16.25 9.17004"
                      stroke="#292D32"
                      strokeWidth="0.792"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <span className="text-sm md:text-xl font-sans font-light leading-tight">
                Permission from the DSW Office for the event and overall coordination.
              </span>
            </div>
            <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-4 md:mb-6">
              <div className="h-4 w-4 md:h-5 md:w-5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#292D32"
                      strokeWidth="0.792"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M7.75 12L10.58 14.83L16.25 9.17004"
                      stroke="#292D32"
                      strokeWidth="0.792"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <span className="text-sm md:text-xl font-sans font-light leading-tight">
                Approval to send official event announcement and registration link to all students.
              </span>
            </div>
            <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-4 md:mb-6">
              <div className="h-4 w-4 md:h-5 md:w-5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#292D32"
                      strokeWidth="0.792"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M7.75 12L10.58 14.83L16.25 9.17004"
                      stroke="#292D32"
                      strokeWidth="0.792"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <span className="text-sm md:text-xl font-sans font-light leading-tight">
                Confirmation and booking of the proposed venue for Day 2.
              </span>
            </div>
            <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-4 md:mb-6">
              <div className="h-4 w-4 md:h-5 md:w-5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#292D32"
                      strokeWidth="0.792"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M7.75 12L10.58 14.83L16.25 9.17004"
                      stroke="#292D32"
                      strokeWidth="0.792"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <span className="text-sm md:text-xl font-sans font-light leading-tight">
                Permission from the Administration Office for logistics and infrastructure support.
              </span>
            </div>
            <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-4 md:mb-6">
              <div className="h-4 w-4 md:h-5 md:w-5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#292D32"
                      strokeWidth="0.792"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M7.75 12L10.58 14.83L16.25 9.17004"
                      stroke="#292D32"
                      strokeWidth="0.792"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <span className="text-sm md:text-xl font-sans font-light leading-tight">
                Permission for technical equipment setup.
              </span>
            </div>
            <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-4 md:mb-6">
              <div className="h-4 w-4 md:h-5 md:w-5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#292D32"
                      strokeWidth="0.792"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M7.75 12L10.58 14.83L16.25 9.17004"
                      stroke="#292D32"
                      strokeWidth="0.792"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <span className="text-sm md:text-xl font-sans font-light leading-tight">
                Permission to collect entry fees via university channels.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}