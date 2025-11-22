import { Component } from "react";
import star from "../assets/star.svg";

export default class Benefit extends Component {
  render() {
    return (
      <div
        id="testimonials"
        className="w-full py- items-center grid bg-[#f7f3ef] justify-center"
      >
        {/* <div className="bg-[#bbecff] items-center rounded-2xl flex gap-2 mx-auto py-2 px-4">
          <div className="h-4 w-4 ml-1">
            <img className="object-cover" src={star} alt="" />
          </div>
          <span className="font-mono text-sm tracking-tight">Hackathon Aim</span>
        </div> */}
        {/* <h1 className="font-serif font-light text-3xl md:text-5xl px-6 py-10 text-center leading-tight">
          UX Club Hackathon 2025
        </h1> */}

        {/* Prize Structure Section */}
        <div className="bg-white w-[96%] lg:h-[100vh] border mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col justify-center lg:order-2 px-4 sm:px-6 lg:px-8 py-10 lg:py-0">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="">
                  <img className="object-cover h-8 w-8 md:h-14 md:w-14" src={star} alt="" />
                </div>
                <h2 className="font-mono font-medium text-3xl lg:text-4xl leading-none tracking-tight text-gray-900">
                  Prize Structure
                </h2>
              </div>
              <div className="w-16 h-[1px] bg-[#bbecff]"></div>

              <div className="relative bg-[#f7f3ef] w-[100%] border-black border-1 mx-auto shadow-md mb-6 px-6 md:px-26">
                <div className="">
                  <img
                    className="absolute object-cover top-0 left-0 h-12 w-12 md:h-16 md:w-16 bg-[#bbecff] p-4"
                    alt=""
                    src="https://peekinsights.co/wp-content/uploads/2024/09/icon-magnifying-glass.svg"
                  />
                </div>
                <h2 className="font-mono text-xl md:text-3xl capitalize text-center py-2 mt-8">
                  Exciting Rewards
                </h2>
                <p className="font-mono text-sm md:text-lg tracking-tight leading-[1.2] pt-3 font-light mb-8 text-center">
                  Exceptional prizes for outstanding teams, celebrating innovation and design excellence.
                </p>
                <div className="space-y-4 flex flex-col items-center">
                  <div className="flex items-center gap-3 mb-3">
                    <svg
                      className="w-8 h-8 text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <h3 className="font-mono text-2xl md:text-3xl text-gray-900 font-semibold">
                      Winning Team
                    </h3>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
                    ₹4,000
                  </p>
                  <div className="flex items-center bg-white rounded-2xl gap-2 w-fit px-2 my-2">
                    <span className="text-sm md:text-xl capitalize font-mono font-light py-2">
                      Cash Gift Card
                    </span>
                  </div>
                </div>

                <div className="space-y-3 font-sans text-base md:text-lg">
                  <div className="flex items-center bg-white rounded-2xl gap-2 w-fit px-2 my-2">
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
                    <span className="text-sm md:text-xl capitalize font-mono font-light py-2">
                      <span className="font-semibold">
                        Official Offline Certificates
                      </span>{" "}
                      for all winning team members
                    </span>
                  </div>

                  <div className="flex items-center bg-white rounded-2xl gap-2 w-fit px-2 my-2">
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
                    <span className="text-sm md:text-xl capitalize font-mono font-light py-2">
                      <span className="font-semibold">
                        Digital Participation Certificates
                      </span>{" "}
                      for all other participants
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 md:p-4 relative w-[90%] h-[60vh] my-auto mx-auto grid-pattern flex items-center justify-center">
           
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id="prizeMask">
                  <path d="M18.502 100.912L18.4857 99.9286C8.28339 98.2515 0.5 89.3913 0.5 78.7143V22.7143C0.5 10.8401 10.1259 1.21428 22 1.21428H78C88.4321 1.21428 97.1299 8.64466 99.0877 18.502L100.071 18.4857C101.748 8.28339 110.609 0.5 121.286 0.5L177.286 0.500002C189.16 0.500003 198.786 10.1259 198.786 22V78C198.786 88.432 191.355 97.1298 181.499 99.0876L181.515 100.071C191.716 101.748 199.5 110.609 199.5 121.286V177.286C199.5 189.16 189.874 198.786 178 198.786H122C111.568 198.786 102.87 191.355 100.912 181.498L99.9286 181.514C98.2515 191.716 89.3914 199.5 78.7143 199.5H22.7143C10.8401 199.5 1.21426 189.874 1.21426 178L1.21426 122C1.21426 111.568 8.64466 102.87 18.502 100.912Z"></path>
                </clipPath>
              </defs>
              <image
                href="2.jpg"
                loading="lazy"
                width="200"
                height="200"
                clipPath="url(#prizeMask)"
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



        {/* Event Vision Section */}
        <div className="bg-white w-[96%] py-2 border mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-10 lg:py-0">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="">
                  <img className="object-cover h-8 w-8 md:h-14 md:w-14" src={star} alt="" />
                </div>
                <h2 className="font-mono font-medium text-3xl lg:text-4xl leading-none tracking-tight text-gray-900">
                  Event Vision
                </h2>
              </div>
              <div className="w-16 h-[1px] bg-[#bbecff]"></div>
              <div className="relative bg-[#f7f3ef] w-[100%] border-black border-1 mx-auto shadow-md mb-6 px-6 md:px-26">
                  <div className="">
                    <img
                      className="absolute object-cover top-0 left-0 h-12 w-12 md:h-16 md:w-16 bg-[#bbecff] p-4"
                      src="https://peekinsights.co/wp-content/uploads/2024/09/icon-magnifying-glass.svg"
                      alt=""
                    />
                  </div>
                  <h2 className="font-mono text-xl md:text-3xl capitalize text-center py-2">
                    core philosophy
                  </h2>
                <p className="font-mono text-sm md:text-lg tracking-tight leading-[1.2] pt-5 font-light mb-12 text-center capitalize">
                  great products originate from great design.
                  The first day centres on a flexible online round, focused on problem-solving and wireframing.
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
                  <span className="text-sm md:text-lg capitalize font-mono font-light">
                    user-centric design approach
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
                  <span className="text-sm md:text-xl font-mono font-light capitalize">
                    prioritising design 
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
                  <span className="text-sm md:text-xl font-mono font-light capitalize ">
                    develop user flows
                  </span>
                </div>
              </div>
              {/* <div className="border-2 border-black p-4 md:p-5 rounded-lg bg-white shadow-sm">
                <p className="font-sans text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl text-center">
                  The core philosophy driving this hackathon is straightforward yet impactful: <span className="font-semibold text-gray-900">great products originate from great design</span>. The first day centres on a flexible online round, focused on problem-solving and wireframing. The top 30 teams, distinguished by their user-centric design approach, will advance to the second day, where they will realise their validated concepts through an intensive coding session. This structure mirrors industry practices and instils the valuable lesson of prioritising design before development.
                </p>
              </div> */}
            </div>
          </div>
          <div className="p-3 md:p-4 relative w-[90%] h-[60vh] my-auto py-10 mx-auto grid-pattern">
            <svg
              className="absolute top-[5%] right-[6%]"
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
                href="3.jpg"
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
        <div className="bg-white w-[96%] md:py-2 border mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col justify-center lg:order-2 px-4 sm:px-6 lg:px-8 lg:py-0">
            <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-10 lg:py-0">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="">
                  <img className="object-cover h-8 w-8 md:h-14 md:w-14" src={star} alt="" />
                </div>
                <h2 className="font-mono font-medium text-3xl lg:text-4xl leading-none tracking-tight text-gray-900">
                  Event Format (Day-1)
                </h2>
              </div>
              <div className="w-16 h-[1px] bg-[#bbecff]"></div>
              <div className="relative bg-[#f7f3ef] w-[100%] border-black border-1 mx-auto shadow-md mb-6 px-6 md:px-26">
                  <div className="">
                    <img
                      className="absolute object-cover top-0 left-0 h-12 w-12 md:h-16 md:w-16 bg-[#f7d681] p-4"
                        src="https://peekinsights.co/wp-content/uploads/2024/09/icon-opacity.svg"
                      alt=""
                    />
                  </div>
                  <h2 className="font-mono text-xl md:text-3xl capitalize text-center py-2 px-2 leading-tight">
                    Online Design Sprint
                  </h2>
                <p className="font-mono text-sm md:text-lg tracking-tight leading-[1.2] pt-3 font-light mb-8 text-center">
                  Teams will work remotely throughout the day to brainstorm, develop user flows, and create wireframes.
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
                  <span className="text-sm md:text-lg capitalize font-mono font-light">
                    Free registration
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
                  <span className="text-sm md:text-xl font-mono font-light">
                    Submit wireframes by 11:59 PM - 23/11/2025
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
                  <span className="text-sm md:text-xl font-mono font-light">
                    Judging based on User-Centricity, Innovation & Usability
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
                  <span className="text-sm md:text-xl font-mono font-light">
                    Top 30 teams announced by 11:00 PM - 24/11/2025
                  </span>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="p-3 md:p-4 relative w-[90%] h-[60vh] my-auto py-10 mx-auto grid-pattern">
            <div className="absolute w-[50%] h-[80%] bottom-[10%] left-[2%] z-10 ">
              <img src="" alt="" />
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
                href="4.jpg"
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

        {/* Event Format Section - Day 2 */}
        <div className="bg-white w-[96%] py-2 border mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-5 lg:py-0">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="">
                  <img className="object-cover h-8 w-8 md:h-14 md:w-14" src={star} alt="" />
                </div>
                <h2 className="font-mono font-medium text-3xl lg:text-4xl leading-none tracking-tight text-gray-900">
                  Event Format (Day-2)
                </h2>
              </div>
              <div className="w-16 h-[1px] bg-[#bbecff]"></div>
              <div className="relative bg-[#f7f3ef] w-[100%] border-black border-1 mx-auto shadow-md mb-6 px-6 md:px-26">
                  <div className="">
                    <img
                      className="absolute object-cover top-0 left-0 h-12 w-12 md:h-16 md:w-16 bg-[#bbffbf] p-4"
                      src="https://peekinsights.co/wp-content/uploads/2024/09/icon-magnifying-glass.svg"
                      alt=""
                    />
                  </div>
                  <h2 className="font-mono text-xl md:text-3xl capitalize text-center py-2 px-2 leading-tight">
                    Offline Live Code Evaluation
                  </h2>
                <p className="font-mono text-sm md:text-lg tracking-tight leading-[1.2] pt-3 font-light mb-8 text-center">
                  Shortlisted teams will demonstrate their developed models with guidance from senior club members.
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
                  <span className="text-sm md:text-lg capitalize font-mono font-light">
                    1:00 PM - 1:30 PM: Mandatory check-in
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
                  <span className="text-sm md:text-xl font-mono font-light">
                    1:30 PM - 2:00 PM: Inaugural ceremony & briefing
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
                  <span className="text-sm md:text-xl font-mono font-light">
                    2:00 PM - 3:20 PM: Model evaluation with guidance
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
                  <span className="text-sm md:text-xl font-mono font-light">
                    3:20 PM - 4:20 PM: Final demo, judging & prize distribution
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 md:p-4 relative w-[90%] h-[60vh] my-auto py-10 mx-auto grid-pattern">
            <svg
              className="absolute top-[5%] right-[6%]"
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
                href="5.jpg"
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

{/*         
        <div className="bg-white w-[96%] lg:h-[100vh] border mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-10 lg:py-0">
            <div className="space-y-6">
              <div>
                <h2 className="font-serif font-medium text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-900">
                  Event Format
                </h2>
                <p className="font-sans text-xl md:text-2xl text-[#bbecff] font-semibold mt-2">
                  Day 2
                </p>
              </div>
              <div className="w-16 h-1 bg-[#bbecff]"></div>

              <div className="space-y-5">
                <h3 className="font-serif text-2xl md:text-3xl text-gray-800">
                  Offline Live Code Evaluation
                  <span className="ml-2 inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">
                    Paid
                  </span>
                </h3>

                <div className="border-2 border-black p-4 md:p-5 rounded-lg bg-white shadow-sm">
                  <div className="font-sans text-sm md:text-base text-gray-700 leading-relaxed space-y-3">
                    <div className="pb-3 border-b border-gray-200">
                      <p className="font-semibold text-gray-900 mb-1 text-center">
                        1:00 PM - 1:30 PM
                      </p>
                      <p className="text-center">
                        Mandatory check-in for all shortlisted teams.
                      </p>
                    </div>

                    <div className="pb-3 border-b border-gray-200">
                      <p className="font-semibold text-gray-900 mb-1 text-center">
                        1:30 PM - 2:00 PM
                      </p>
                      <p className="text-center">
                        Inaugural Ceremony with welcome address and briefing on
                        event flow and rules.
                      </p>
                    </div>

                    <div className="pb-3 border-b border-gray-200">
                      <p className="font-semibold text-gray-900 mb-1 text-center">
                        2:00 PM - 3:20 PM
                      </p>
                      <p className="text-center">
                        Teams evaluated based on their developed models with
                        guidance from Senior Club Members.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900 mb-1 text-center">
                        3:20 PM - 4:20 PM
                      </p>
                      <p className="text-center">
                        Final demo, judging, prize distribution, and vote of
                        thanks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 md:p-4 relative w-[90%] h-[60vh] my-auto py-10 mx-auto grid-pattern">
            <div className="absolute w-[50%] h-[80%] bottom-[10%] left-[2%] z-10 ">
              <img src="" alt="" />
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
        </div> */}

        
      </div>
    );
  }
}
