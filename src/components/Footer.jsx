import { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="w-full bg-[#151515] py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-white leading-tight text-center">
              Join the Design2Code Hackathon
            </h1>
            
            <div className="flex flex-col items-center justify-center">
              {/* Links - Centered */}
              <div className="flex flex-col gap-3 text-base md:text-lg text-white text-center">
                <a href="#register" className="hover:text-red-500 transition-colors cursor-pointer">Register Now</a>
                <a href="#details" className="hover:text-red-500 transition-colors cursor-pointer">Hackathon Details</a>
                <a href="#contact" className="hover:text-red-500 transition-colors cursor-pointer">Contact UX Club</a>
              </div>
              
              {/* Social Icons */}
              <div className="flex gap-4 items-center mt-6">
                <a 
                  href="https://www.linkedin.com/company/uxclub" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                    className="hover:fill-red-500 transition-colors"
                  >
                    <path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z" transform="translate(-124, -7319)" />
                  </svg>
                </a>
                
                <a 
                  href="https://twitter.com/uxclub" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform cursor-pointer"
                  aria-label="Twitter/X"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#fff"
                    viewBox="0 0 16 16"
                    className="hover:fill-red-500 transition-colors"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg>
                </a>
                
                <a 
                  href="https://instagram.com/uxclub" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform cursor-pointer"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#fff"
                    viewBox="0 0 16 16"
                    className="hover:fill-red-500 transition-colors"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gray-700 my-6 md:my-8" />

          {/* Bottom Section with Logo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* SVG Logo - Centered */}
            <div className="flex justify-center">
              <svg viewBox="0 0 600 120" className="w-full max-w-md h-auto">
                <g filter="url(#glitch)" transform="translate(60, 0)">
                  <text x="0" y="55%" fontSize="64" textAnchor="start" fill="#ffffff">Design<tspan fill="red">2</tspan>Code</text>
                </g>
              </svg>
            </div>

            {/* Copyright Info */}
            <div className="flex flex-col md:flex-row md:justify-end gap-2 md:gap-8 text-sm md:text-base text-center md:text-right">
              <div className="text-white text-center">
                Organized by UX Club
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
