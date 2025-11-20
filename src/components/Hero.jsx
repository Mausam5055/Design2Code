import { Link } from "react-router-dom";
import tick from "../assets/tick.jpg";

const Hero = () => {
  return (
    <div>
      <div className="w-full mb-4 grid grid-cols-1 md:grid-cols-2 md:h-[80vh] place-items-center linear-grid font-mono">
        <div className="pt-16 md:pt-20">
          <h1 className="mt-8 px-5 md:px-6 text-[6vh] md:text-[8vh] md:mt-0 leading-[1.1] tracking-tighter md:tracking-tight text-left capitalize">
            Great product originate from great design
            <span>
              
              <img
                className="object-cover h-8 md:h-12 inline-block gap-2"
                src={tick}
                alt="tick"
              />
            </span>
          </h1>
          <h4 className="px-5 md:px-6 mt-10 md:text-lg text-left tracking-tighter  ">
            We{`'`}re hosting a 2 day&apos;s sprint to find the best front-end champs on campus. You just show up, team up, and code. This is for the coders who want to flex their CSS skills and the designers who want to see their vision built right.
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 pt-8 md:pt-0">
            <Link
              to="/register"
              className="flex items-center w-[90%] h-14 ml-5 md:ml-6 mt-4 md:mt-20 rounded-xl justify-between border-2 border-black hover:bg-white hover:text-black transition"
            >
              <span className="px-4 md:text-lg capitalize">Submit your team!</span>
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
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </g>
                </svg>
              </div>
            </Link>
            <button className="flex items-center w-[90%] h-14 ml-5 md:ml-6 mt-2 md:mt-20 bg-white text-black rounded-xl justify-between border-2 border-black hover:bg-black hover:text-white">
              <a className="px-4 md:text-lg" href="">
                Know More
              </a>
              <div className="h-8 w-8 mr-4">
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
                      d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="relative w-full h-[45vh] md:h-[80vh] mt-10 md:flex justify-center pt-4 hidden">
          <div className=" absolute border-1 border-black rounded-[14vh] md:rounded-[22vh] lg:rounded-[29vh] w-[28vh] md:w-[45vh] lg:w-[60%] h-full items-center">
            <img
              className="w-full h-full rounded-[14vh] md:rounded-[22vh] lg:rounded-[29vh] object-cover"
              src="1.jpeg"
              alt=""
            />
          </div>
          <div className="absolute w-[11vh] md:w-[18vh] h-[8vh] md:h-[14vh] z-10 top-[8%] left-[70%]">
            <img
              className="rounded-lg object-cover"
              src="image1.png"
              alt=""
            />
          </div>
          <div className="absolute w-[11vh] md:w-[18vh] h-[7vh] md:h-[12vh] z-10 bottom-[12%] right-[62%] md:right-[68%] hidden md:block">
            <img
              className="rounded-lg object-cover"
              src="image3.png"
              alt=""
            />
          </div>
          {/* <div className="absolute w-[28vh] h-[10vh] z-10 bottom-[5%] left-1/2">
            <img
              className="rounded-lg object-cover"
              src="https://peekinsights.co/wp-content/themes/starter/img/brandgrowth.svg"
              alt=""
            />
          </div> */}
        </div>
      </div>
      <div className="relative w-full overflow-hidden py-1 border-t border-b bg-white flex items-center justify-center mt-12">
       
        <div className="w-full">
          <div className="flex w-max items-center animate-marquee mx-auto gap-24">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex items-center">
                  <img
                    className="h-14 object-contain filter invert"
                    src="VITB-Logo.svg"
                    alt=""
                  />
                  <svg viewBox="-100 0 600 150" className="items-center px-4 h-20 md:h-24">
                    <defs>
                      <filter id="glitch">
                        <feTurbulence baseFrequency="0.8" numOctaves="1" result="t"/>
                        <feDisplacementMap in="SourceGraphic" in2="t" scale="10" xChannelSelector="R" yChannelSelector="G"/>
                      </filter>
                    </defs>
                    <rect width="100%" height="100%" fill="#ffffff"/>
                    <g filter="url(#glitch)" transform="translate(0, 10)">
                      <text x="0" y="55%" fontSize="64" textAnchor="start" fill="#000000">Design<tspan fill="red">2</tspan>Code</text>
                    </g>
                  </svg>
                  <img
                    className="h-14 object-contain filter invert"
                    src="UXClub.svg"
                    alt=""
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
