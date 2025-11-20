import { Component } from "react";
import star from "../assets/star.svg";

export default class Benefit extends Component {
  render() {
    return (
      <div id="testimonials" className="w-full py-10 items-center grid bg-[#f7f3ef] justify-center">
        <div className="bg-[#bbecff] items-center rounded-2xl flex gap-2 mx-auto py-2 px-4">
          <div className="h-4 w-4 ml-1">
            <img className="object-cover" src={star} alt="" />
          </div>
          <span className="font-sans text-sm uppercase tracking-wider">Hackathon Event</span>
        </div>
        <h1 className="font-serif font-light text-3xl md:text-5xl px-6 py-10 text-center leading-tight">
          UX Club Hackathon 2025
        </h1>
        
        {/* Event Vision Section */}
        <div className="bg-white w-[96%] lg:h-[100vh] border mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-10 lg:py-0">
            <div className="space-y-6">
              <h2 className="font-serif font-medium text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-900">
                Event Vision
              </h2>
              <div className="w-16 h-1 bg-[#bbecff]"></div>
              <div className="border-2 border-black p-4 md:p-5 rounded-lg bg-white shadow-sm">
                <p className="font-sans text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl text-center">
                  The core philosophy driving this hackathon is straightforward yet impactful: <span className="font-semibold text-gray-900">great products originate from great design</span>. The first day centres on a flexible online round, focused on problem-solving and wireframing. The top 30 teams, distinguished by their user-centric design approach, will advance to the second day, where they will realise their validated concepts through an intensive coding session. This structure mirrors industry practices and instils the valuable lesson of prioritising design before development.
                </p>
              </div>
            </div>
          </div>
          <div className="p-3 md:p-4 relative w-[90%] h-[60vh] my-auto py-10 mx-auto grid-pattern">
            <div className="absolute w-[40%] h-[80%] bottom-[10%] right-[2%] z-10 ">
              <img
                src=""
                alt=""
              />
            </div>
            <svg
              className="absolute top-[15%] right-[15%]"
              width="85%"
              height="85%"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id="clip0_224_605">
                  <path d="M50 50.5H50.5V50V49.5C23.2199 49.5 1.04241 27.6526 0.509799 0.5H199.491C198.957 27.6526 176.781 49.5 149.5 49.5V50V50.5H150C177.338 50.5 199.5 72.6619 199.5 100C199.5 125.033 180.918 145.726 156.795 149.038L156.791 150.028C180.949 153.556 199.5 174.363 199.5 199.5H0.5C0.5 174.363 19.0509 153.556 43.2094 150.028L43.2051 149.038C19.0823 145.726 0.5 125.033 0.5 100C0.5 72.6619 22.6619 50.5 50 50.5Z"></path>
                </clipPath>
              </defs>
              <image
                href=""
                width="200"
                height="200"
                clipPath="url(#clip0_224_605)"
                preserveAspectRatio="xMidYMid slice"
                loading="lazy"
              ></image>
              <path
                d="M50 50.5H50.5V50V49.5C23.2199 49.5 1.04241 27.6526 0.509799 0.5H199.491C198.957 27.6526 176.781 49.5 149.5 49.5V50V50.5H150C177.338 50.5 199.5 72.6619 199.5 100C199.5 125.033 180.918 145.726 156.795 149.038L156.791 150.028C180.949 153.556 199.5 174.363 199.5 199.5H0.5C0.5 174.363 19.0509 153.556 43.2094 150.028L43.2051 149.038C19.0823 145.726 0.5 125.033 0.5 100C0.5 72.6619 22.6619 50.5 50 50.5Z"
                fill="none"
                stroke="black"
                vectorEffect="non-scaling-stroke"
              ></path>
            </svg>
          </div>
        </div>
        
        {/* Event Format Section - Day 1 */}
        <div className="bg-white w-[96%] lg:h-[100vh] border mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col justify-center lg:order-2 px-4 sm:px-6 lg:px-8 py-10 lg:py-0">
            <div className="space-y-6">
              <div>
                <h2 className="font-serif font-medium text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-900">
                  Event Format
                </h2>
                <p className="font-sans text-xl md:text-2xl text-[#bbecff] font-semibold mt-2">Day 1</p>
              </div>
              <div className="w-16 h-1 bg-[#bbecff]"></div>
              
              <div className="space-y-4">
                <h3 className="font-serif text-2xl md:text-3xl text-gray-800">
                  Online Design Sprint <span className="text-sm md:text-base text-gray-500">(Design + Coding)</span> 
                  <span className="ml-2 inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">Free</span>
                </h3>
                
                <div className="border-2 border-black p-4 md:p-5 rounded-lg bg-white shadow-sm">
                  <div className="font-sans text-base md:text-lg text-gray-700 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-gray-900 min-w-[100px]">Mode:</span>
                      <span>Online</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-gray-900 min-w-[100px]">Start Time:</span>
                      <span>Problem statement disseminated via email at 9:00 AM on 22/11/2025</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-gray-900 min-w-[100px]">Activity:</span>
                      <span>Teams work remotely to brainstorm, develop user flows, and create wireframes</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-gray-900 min-w-[100px]">Deadline:</span>
                      <span>Submit wireframes (PDF/JPG/Figma link) via Google Form by 11:59 PM – 23/11/2025</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#bbecff]">
                  <p className="font-semibold text-gray-900 mb-2">Judging & Shortlisting:</p>
                  <ul className="space-y-2 list-disc pl-5 text-gray-700">
                    <li>Panel evaluates based on User-Centricity, Innovation, and Usability</li>
                    <li>Top 30 teams announced by 11:00 PM – 24/11/2025 via email</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-7 lg:order-1 relative h-[60vh] sm:h-[80vh] md:h-[80vh] w-[90%] my-auto mx-auto grid-pattern flex items-center justify-center">
            <div className="absolute w-[80%] h-[80%] rounded-full">
              <img
                className="w-full h-full rounded-full object-cover"
                src="demo.jpg"
                alt="Online Design Sprint"
              />
            </div>
          </div>
        </div>
        
        {/* Event Format Section - Day 2 */}
        <div className="bg-white w-[96%] lg:h-[100vh] border mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-10 lg:py-0">
            <div className="space-y-6">
              <div>
                <h2 className="font-serif font-medium text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-900">
                  Event Format
                </h2>
                <p className="font-sans text-xl md:text-2xl text-[#bbecff] font-semibold mt-2">Day 2</p>
              </div>
              <div className="w-16 h-1 bg-[#bbecff]"></div>
              
              <div className="space-y-5">
                <h3 className="font-serif text-2xl md:text-3xl text-gray-800">
                  Offline Live Code Evaluation 
                  <span className="ml-2 inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">Paid</span>
                </h3>
                
                <div className="border-2 border-black p-4 md:p-5 rounded-lg bg-white shadow-sm">
                  <div className="font-sans text-sm md:text-base text-gray-700 leading-relaxed space-y-3">
                    <div className="pb-3 border-b border-gray-200">
                      <p className="font-semibold text-gray-900 mb-1 text-center">1:00 PM - 1:30 PM</p>
                      <p className="text-center">Mandatory check-in for all shortlisted teams.</p>
                    </div>
                    
                    <div className="pb-3 border-b border-gray-200">
                      <p className="font-semibold text-gray-900 mb-1 text-center">1:30 PM - 2:00 PM</p>
                      <p className="text-center">Inaugural Ceremony with welcome address and briefing on event flow and rules.</p>
                    </div>
                    
                    <div className="pb-3 border-b border-gray-200">
                      <p className="font-semibold text-gray-900 mb-1 text-center">2:00 PM - 3:20 PM</p>
                      <p className="text-center">Teams evaluated based on their developed models with guidance from Senior Club Members.</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900 mb-1 text-center">3:20 PM - 4:20 PM</p>
                      <p className="text-center">Final demo, judging, prize distribution, and vote of thanks.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 md:p-4 relative w-[90%] h-[60vh] my-auto py-10 mx-auto grid-pattern">
            <div className="absolute w-[50%] h-[80%] bottom-[10%] left-[2%] z-10 ">
              <img
                src=""
                alt=""
              />
            </div>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id="myMask">
                  <path d="M18.502 100.912L18.4857 99.9286C8.28339 98.2515 0.5 89.3913 0.5 78.7143V22.7143C0.5 10.8401 10.1259 1.21428 22 1.21428H78C88.4321 1.21428 97.1299 8.64466 99.0877 18.502L100.071 18.4857C101.748 8.28339 110.609 0.5 121.286 0.5L177.286 0.500002C189.16 0.500003 198.786 10.1259 198.786 22V78C198.786 88.432 191.355 97.1298 181.499 99.0876L181.515 100.071C191.716 101.748 199.5 110.609 199.5 121.286V177.286C199.5 189.16 189.874 198.786 178 198.786H122C111.568 198.786 102.87 191.355 100.912 181.498L99.9286 181.514C98.2515 191.716 89.3914 199.5 78.7143 199.5H22.7143C10.8401 199.5 1.21426 189.874 1.21426 178L1.21426 122C1.21426 111.568 8.64466 102.87 18.502 100.912Z"></path>
                </clipPath>
              </defs>
              <image
                href=""
                loading="lazy"
                width="200"
                height="200"
                clipPath="url(#myMask)"
                preserveAspectRatio="xMidYMid slice"
              ></image>
              <path
                d="M18.502 100.912L18.4857 99.9286C8.28339 98.2515 0.5 89.3913 0.5 78.7143V22.7143C0.5 10.8401 10.1259 1.21428 22 1.21428H78C88.4321 1.21428 97.1299 8.64466 99.0877 18.502L100.071 18.4857C101.748 8.28339 110.609 0.5 121.286 0.5L177.286 0.500002C189.16 0.500003 198.786 10.1259 198.786 22V78C198.786 88.432 191.355 97.1298 181.499 99.0876L181.515 100.071C191.716 101.748 199.5 110.609 199.5 121.286V177.286C199.5 189.16 189.874 198.786 178 198.786H122C111.568 198.786 102.87 191.355 100.912 181.498L99.9286 181.514C98.2515 191.716 89.3914 199.5 78.7143 199.5H22.7143C10.8401 199.5 1.21426 189.874 1.21426 178L1.21426 122C1.21426 111.568 8.64466 102.87 18.502 100.912Z"
                fill="none"
                stroke="black"
                vectorEffect="non-scaling-stroke"
              ></path>
            </svg>
          </div>
        </div>
        
        {/* Prize Structure Section */}
        <div className="bg-gray-100 w-[96%] lg:h-[100vh] border mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col justify-center lg:order-2 px-4 sm:px-6 lg:px-8 py-10 lg:py-0">
            <div className="space-y-6">
              <h2 className="font-serif font-medium text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-900">
                Prize Structure
              </h2>
              <div className="w-16 h-1 bg-[#bbecff]"></div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border-2 border-gray-300 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <h3 className="font-serif text-2xl md:text-3xl text-gray-900 font-semibold">Winning Team</h3>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-gray-900">₹4,000</p>
                  <p className="text-gray-700 mt-2 font-sans">Cash Gift Card</p>
                </div>
                
                <div className="space-y-3 font-sans text-base md:text-lg">
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <svg className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-700"><span className="font-semibold">Official Offline Certificates</span> for all winning team members</p>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-700"><span className="font-semibold">Digital Participation Certificates</span> for all other participants</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-7 lg:order-1 relative h-[60vh] sm:h-[80vh] md:h-[80vh] w-[90%] my-auto mx-auto grid-pattern flex items-center justify-center">
            <div className="absolute w-[80%] h-[80%] rounded-full">
              <img
                className="w-full h-full rounded-full object-cover"
                src="demo2.jpg"
                alt="Prize Structure"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}