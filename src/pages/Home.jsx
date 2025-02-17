import React from "react";
import Macbook from "@/assets/macbook.png";
import icon from "@/assets/icon.png";
import side from "@/assets/side.png";
import iPhone from "@/assets/iPhone.png";
import signup from "@/assets/signup.svg";
import create from "@/assets/create.svg";
import invitereviews from "@/assets/invitereviews.svg";
import track from "@/assets/trackngrow.png";
import whitelogo from "@/assets/whitelogo.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowCircleUpRight } from "@untitled-ui/icons-react";
import FAQSection from "@/components/FAQ";
import Testimonials from "@/components/Testimonial";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Home = () => {
  return (
    <>
    <div className="sticky top-0 left-0 right-0 bg-white z-10">
        <Header />
      </div>
    <div className="bg-[#FFFAF6] mx-40">
      
      {/* first section */}
      <section className="hero flex top-10 pt-8 items-center">
        <div>
          <p className="flex items-center text-base text-gray-500">
            <img src={icon} alt="HeyRazzi Logo" className="h-8 w-8 mr-2" />
            The best tool for creators
          </p>
          <h1 className="text-5xl font-medium mt-4">
            Display Your Craft,
            <br />
            Attract More Clients, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF7900] to-[#B3A19A]">
              Elevate Your
            </span>{" "}
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF7900] to-[#B3A19A]">
              Business
            </span>
          </h1>
          <div className="flex items-center mt-5">
            <Input
              placeholder="Enter your username"
              className="w-60 bg-gray-200 mr-3"
            />
            <button
              className="flex w-10 h-10 bg-orange-500 items-center justify-center p-2 border rounded-lg"
              aria-label="Submit"
            >
              <ArrowCircleUpRight
                size={24}
                fill="none"
                color="white"
                strokeWidth="2"
              />
            </button>
          </div>
        </div>
        <div className="flex ml-10">
          <img src={side} alt="Side Image" className="max-w-full h-auto" />
        </div>
      </section>

      {/* after hero */}
      <section
        className="after-hero mt-10 bg-cover bg-center"
        style={{ backgroundImage: `url("@/assets/afterhero.png")` }}
      >
        <div className="block items-center p-36 text-center">
          <p>
            HeyRazzi is the ultimate online platform designed for photographers,
            videographers, and creative professionals who aim to elevate their
            online presence.
          </p>
          <br />
          <p>
            Our user-friendly platform offers powerful tools to create visually
            stunning portfolios that capture your unique artistic vision.
          </p>
        </div>
        <div className="flex items-center bg-gradient-to-r from-[#FFFAF6] to-[#af8763] p-5 rounded-3xl mt-5">
          <img src={whitelogo} alt="White Logo" className="h-10 w-10" />
        </div>
      </section>

      {/* second section */}
      <section className="mt-20">
        <div className="flex items-center text-white">
          <div className="flex flex-col m-10 space-y-4">
            <div className="bg-[#45B3E8] p-10 rounded-3xl shadow-lg">
              <h2 className="text-xl font-semibold">
                Advanced Analytics Dashboard
              </h2>
              <p className="mt-2">
                Access detailed analytics to understand how visitors interact
                with your portfolio. Learn which works are getting the most
                attention and how to optimize your presentation for maximum
                engagement.
              </p>
            </div>
            <div className="p-10 rounded-3xl shadow-lg gradient-border">
              <h3 className="text-xl text-gray-700 font-semibold">
                Client Feedback Integration
              </h3>
              <p className="mt-2 text-gray-600">
                Directly collect and display reviews from your clients on your
                portfolio page. This not only boosts your credibility but also
                builds trust with potential clients browsing your site.
              </p>
            </div>
          </div>
          <div className="bg-[#FF7900] p-10 rounded-3xl shadow-lg">
            <img src={iPhone} alt="iPhone" className="max-w-full h-auto" />
            <div>
              <h3 className="text-xl text-gray-100 font-semibold">
                Professional Portfolios
              </h3>
              <p className="mt-2 text-gray-300">
                Create stunning, responsive portfolios that showcase your best
                work. With easy-to-use templates and customization options, you
                can present your projects in a way that truly reflects your
                artistic vision.
              </p>
              <Button className="bg-white mt-2 w-fit text-orange-600 font-semibold">
                Create Account{" "}
                <ArrowCircleUpRight
                  size={30}
                  fill="none"
                  color="orange"
                  strokeWidth="4"
                />{" "}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works  */}
      <section className="how mt-10">
        <h2 className="text-6xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF7900] to-[#8cb2d4]">
            How It Works?
          </span>
        </h2>
        <div className="flex items-center justify-around m-2">
          {/* 1/4 frame */}
          <div className="items-center border-2 rounded-3xl border-gray-300 m-4 bg-white">
            <div className="flex items-center">
              <p className="text-6xl text-gray-300">01</p>
              <img src={signup} alt="Sign Up" />
            </div>
            <div className="m-5">
              <h3 className="text-xl font-semibold">Sign Up</h3>
              <p className="text-gray-400">
                Quickly sign up and set up <br /> your HeyRazzi account.
              </p>
            </div>
          </div>
          {/* 2/4 frame */}
          <div className="items-center border-2 rounded-3xl border-gray-300 m-4 bg-white">
            <div className="flex items-center">
              <div>
                <p className="text-6xl text-gray-300">02</p>
                <div className="m-5">
                  <h3 className="text-xl font-semibold text-gray-700">
                    Create Your Portfolio
                  </h3>
                  <p className="text-gray-400 mt-2">
                    Upload your work, choose your layout, and customize it to
                    match your brand.
                  </p>
                </div>
              </div>
              <img
                src={create}
                alt="Create Portfolio"
                height={40}
                className="mt-28"
              />
            </div>
          </div>
          {/* 3/4 frame */}
          <div className="items-center border-2 rounded-3xl border-gray-300 m-4 bg-white">
            <div className="flex items-center">
              <p className="text-6xl text-gray-300">03</p>
              <img src={invitereviews} alt="Invite Reviews" />
            </div>
            <div className="m-5">
              <h3 className="text-xl font-semibold text-gray-800">
                Invite Reviews
              </h3>
              <p className="text-gray-400 mt-2">
                Send requests to past clients for reviews that will be directly
                displayed on your portfolio.
              </p>
            </div>
          </div>
          {/* 4/4 frame */}
          <div className="items-center border-2 rounded-3xl border-gray-300 m-4 bg-white">
            <div className="flex items-center">
              <div>
                <p className="text-6xl text-gray-300">04</p>
                <div className="m-5">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Track and Grow
                  </h3>
                  <p className="text-gray-400 mt-2">
                    Use our analytics tools to see what’s working and refine
                    your strategies for even better results.
                  </p>
                </div>
              </div>
              <img src={track} alt="Track and Grow" className="mt-28 h-10" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="faq mt-5">
        <div className="flex items-center">
          <FAQSection />
        </div>
      </section>

      {/* testimonials  */}
      <section className="hear mt-5">
        <Testimonials />
      </section>

      {/* showcase */}
      <section className="mt-5">
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#45B3E8] rounded-3xl p-8 md:p-10">
          {/* Left Side: Text and Input */}
          <div className="flex-1 p-6 md:p-10">
            <h2 className="text-5xl md:text-7xl text-white font-semibold leading-tight">
              Ready to showcase <br /> your work to the <br />
              world?
            </h2>
            <div className="flex items-center mt-5">
              <Input
                placeholder="Enter your username"
                className="w-60 p-6 bg-[#9dc2e4] mr-3 rounded-lg border-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                className="flex w-12 h-12 bg-orange-500 items-center justify-center p-2 rounded-lg hover:bg-orange-600 transition-colors"
                aria-label="Submit"
              >
                <ArrowCircleUpRight
                  size={24}
                  fill="none"
                  color="white"
                  strokeWidth="1"
                />
              </button>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="flex-1 flex justify-center md:justify-end pt-6 md:pt-10">
            <img
              src={Macbook} // Replace with your image path
              alt="Macbook"
              className="h-60 w-auto md:h-80"
            />
          </div>
        </div>
      </section>

      {/* footer */}
      <section className="footer mt-16 mb-10">
        <Footer />
      </section>
    </div>
    </>
  );
};

export default Home;
