// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination, Autoplay } from "swiper/modules";

// import olivia from "../assets/olivia.jpeg";
// import grace from "../assets/grace.jpeg";
// import lizzie from "../assets/lizzie.jpeg";
// import star from "../assets/truststar.svg";

// const slides = [
//   {
//     title:
//       "Design2Code has helped our startup tremendously. Thanks to their timely efforts, we've seen a succesfull increse in online sales and performance across our entire platform. Design2Code truly is amazing at what they do!",
//     desc: "Olivia Zorzut",
//     proff: "Co-founder, The Fox Tan",
//     pfp: olivia,
//   },
//   {
//     title: "Design2Code team are fantastic eCommerce designers and CRO specialists. They has also gone above and beyond and have been an important part of my business's growth and success. It is great to have them in my corner.",
//     desc: "Grace Armstrong",
//     proff: "Founder, Begin to Arrive",
//     pfp: grace,
//   },
//   {
//     title: "Design2Code is incredibly accommodating and flexible and goes above and beyond to deliver on a brief. They are an asset as a business partner to any company!",
//     desc: "Lizzie Waley",
//     proff: "Co-founder, Sundae Body",
//     pfp: lizzie,
//   },
// ];

// const Testimonials = () => {
//   return (
//     <div className="w-full py-16 bg-cover bg-center border-t-1">
//       <div className="bg-[#bbecff] items-center w-[280px] h-[5vh] rounded-2xl flex justify-center gap-2 mx-auto">
//         <div className="flex">
//           <img
//             className="h-5 w-5 object-cover"
//             src={star}
//             alt=""
//           />
//           <img
//             className="h-5 w-5 object-cover"
//             src={star}
//             alt=""
//           />
//           <img
//             className="h-5 w-5 object-cover"
//             src={star}
//             alt=""
//           />
//           <img
//             className="h-5 w-5 object-cover"
//             src={star}
//             alt=""
//           />
//           <img
//             className="h-5 w-5 object-cover"
//             src={star}
//             alt=""
//           />
//         </div>
//         <span className="font-sans text-sm uppercase">
//           trusted by top brands
//         </span>
//       </div>
//       <div className="max-w-5xl mx-auto px-4 mt-4 text-center">
//         <h2 className="text-3xl md:text-5xl font-serif text-center mb-10 leading-tight">
//           Helping brands like yours exceed conversion goals
//         </h2>

//         <Swiper
//           spaceBetween={30}
//           slidesPerView={1}
//           pagination={{ clickable: true }}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//           }}
//           loop={true}
//           modules={[Pagination, Autoplay]}
//           className="w-full max-w-3xl mx-auto"
//         >
//           {slides.map((item, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-[#bbecff] py-10 px-6 min-h-[50vh] shadow-md text-left">
//                 <h3 className="text-xl text-gray-600 mb-3">
//                   {item.title}
//                 </h3>
//                 <div className="flex flex-row mt-25">
//                   <img
//                     className="h-14 w-14 object-cover rounded-full"
//                     src={item.pfp}
//                     alt=""
//                   />
//                   <div className="pl-6">
//                     <p className="text-black text-xl font-serif">
//                       {item.desc}
//                     </p>
//                     <p className="text-black text- font-serif">
//                       {item.proff}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
