import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import User from "@/assets/user.png";

const Testimonials = () => {
  // Custom Arrow Components
  const CustomArrow = ({ onClick, direction }) => (
    <button
      className={`absolute w-10 bg-orange-500 text-white transform -translate-y-1/2 z-10 p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors ${direction === "prev" ? "left-4" : "right-4"}`}
      onClick={onClick}
    >
      {direction === "prev" ? "<" : ">"}
    </button>
  );

  // Carousel settings for multi-item display
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 testimonials at once
    slidesToScroll: 1, // Scroll one at a time
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: <CustomArrow direction="prev" />, // Custom previous arrow
    nextArrow: <CustomArrow direction="next" />, // Custom next arrow
    responsive: [
      {
        breakpoint: 1024, // Adjust for tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Adjust for mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Testimonials data
  const testimonials = [
    {
      name: "Mike Greenfield",
      role: "CEO of the COMPANY NAME",
      text: "Lorem ipsum dolor sit amet. Ut quas omnis et laboriosam libero es dignissimos aspernatur sed rerum magnam ut esse exercitationem ut veniam distinctio. Sed fugiat possimus ab accusamus harum eos vitae placerat eum corporis.",
    },
    {
      name: "Jane Doe",
      role: "Photographer",
      text: "Lorem ipsum dolor sit amet. Ut quas omnis et laboriosam libero es dignissimos aspernatur sed rerum magnam ut esse exercitationem ut veniam distinctio. Sed fugiat possimus ab accusamus harum eos vitae placerat eum corporis.",
    },
    {
      name: "John Smith",
      role: "Creative Director",
      text: "Lorem ipsum dolor sit amet. Ut quas omnis et laboriosam libero es dignissimos aspernatur sed rerum magnam ut esse exercitationem ut veniam distinctio. Sed fugiat possimus ab accusamus harum eos vitae placerat eum corporis.",
    },
    {
      name: "Sarah Johnson",
      role: "Graphic Designer",
      text: "Lorem ipsum dolor sit amet. Ut quas omnis et laboriosam libero es dignissimos aspernatur sed rerum magnam ut esse exercitationem ut veniam distinctio. Sed fugiat possimus ab accusamus harum eos vitae placerat eum corporis.",
    },
    {
      name: "Alex Brown",
      role: "Freelancer",
      text: "Lorem ipsum dolor sit amet. Ut quas omnis et laboriosam libero es dignissimos aspernatur sed rerum magnam ut esse exercitationem ut veniam distinctio. Sed fugiat possimus ab accusamus harum eos vitae placerat eum corporis.",
    },
  ];

  return (
    <section className="hear mt-5 py-12 bg-gray-50">
      {/* Heading */}
      <h2 className="text-5xl mb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF7900] to-[#8cb2d4]">
          Hear from Our<br />Users
        </span>
      </h2>

      {/* Carousel */}
      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-2">
                <div className="border-2 border-r-gray-300 rounded-3xl p-6 shadow-lg h-full hover:shadow-xl transition-shadow">
                <div className="flex items-center">
                    <img src={User} className="h-10 w-10 m-4"/>
                    <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                    {testimonial.name}
                    </h3>
                    <p className="text-gray-500">{testimonial.role}</p>
                    </div>                 
                </div>
                <p className="text-gray-600 italic mt-2">"{testimonial.text}"</p>
                
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;