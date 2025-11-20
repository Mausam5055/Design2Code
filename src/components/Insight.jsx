import { Component } from "react";

export default class Insight extends Component {
  render() {
    return (
      <div className="w-full border-b grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full bg-[#dcfebc] pt-6 md:pt-10 flex flex-col gap-4 md:gap-6">
          <div className="flex items-center">
            <div className="w-fit md:pl-6 pl-5">
              <img
                className="h-10 w-10 md:h-12 md:w-12 object-cover"
                src="https://peekinsights.co/wp-content/themes/starter/img/magnifying-glass.svg"
                alt=""
              />
            </div>
            <h3 className="font-mono text-xl md:text-3xl lg:text-4xl px-6 text-left">
              Design2Code
            </h3>
          </div>
          <p className="font-mono text-lg md:text-xl lg:text-xl px-6 leading-relaxed text-left pt-10">
            The UX Club of VIT Bhopal University is excited to propose the &quot;Design2Code&quot;. This event, spanning two days, is crafted to bridge the essential gap between design thinking and technical execution.
          </p>
          <div className="pb-8 md:pb-12"></div>
        </div>
        <div className="w-full py-6 pt-4 md:pt-20">
          <h4 className="font-sans font-light text-lg md:text-2xl lg:text-3xl mt-4 md:mt-15 px-6 leading-relaxed text-center">
            Unlike hackathons that focus purely on coding, this initiative places strong emphasis on a user-centred design process, recognising the importance of a robust UX foundation for successful digital products.
          </h4>
          <div className="px-6 mt-4 md:mt-8">
            <div className="border-2 border-black p-4 md:p-5 rounded-lg bg-white shadow-sm">
              <div className="space-y-3 md:space-y-4">
                <p className="font-sans font-medium text-base md:text-lg text-left"><strong>Event Name:</strong> Design2Code</p>
                <p className="font-sans font-medium text-base md:text-lg text-left"><strong>Organised By:</strong> UX Club, VIT Bhopal University</p>
                <div className="mt-3 md:mt-4">
                  <p className="font-sans font-medium text-base md:text-lg text-left"><strong>Proposed Dates & Format:</strong></p>
                  <ul className="list-disc pl-6 font-sans font-light text-base md:text-lg mt-2 space-y-1 md:space-y-2">
                    <li className="text-left">Day 1 (Online - Wireframe Submission): 23/11/2025</li>
                    <li className="text-left">Day 2 (Offline – Evaluation + Prize Distribution): 27/11/2025</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <button className="flex items-center h-12 md:h-14 ml-6 mt-8 md:mt-12 bg-black text-white rounded-xl justify-between border-2 border-black hover:bg-white hover:text-black transition-all duration-300">
            <a className="px-3 md:px-4 text-sm md:text-md font-semibold" href="">
              Register Now
            </a>
            <div className="h-5 w-5 md:h-6 md:w-6 mr-3 md:mr-4">
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
          </button>
        </div>
      </div>
    );
  }
}