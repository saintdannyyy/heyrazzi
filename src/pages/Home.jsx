import icon from "/src/assets/icon.png";
import side from "/src/assets/side.png";
import iPhone from "/src/assets/iPhone.png";
import SignUp from "/src/assets/signup.svg";
import Invitereviews from "/src/assets/invitereviews.svg";
import Create from "/src/assets/create.svg";
import Track from "/src/assets/track.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowCircleUpRight } from "@untitled-ui/icons-react";

const Home = () => {
  return (
    <div className="bg-[#FFFAF6] px-40">
      {/* first section */}
      <section className="hero flex top-16 pt-8 items-center">
        <div>
          <p className="flex items-center text-lg text-gray-500">
            <img src={icon} alt="HeyRazzi Logo" className="h-8 w-8 mr-2" />
            The best tool for creators
          </p>
          <h1 className="text-6xl font-medium mt-4">
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

      {/* second section */}
      <section className="mt-20">
        <div className="flex items-center text-white">
          <div className="flex flex-col m-10 space-y-4">
            <div className="bg-[#45B3E8] p-10 rounded-3xl shadow-lg">
              <h2 className="text-2xl font-semibold">
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
              <h3 className="text-2xl text-gray-700 font-semibold">
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
              <h3 className="text-2xl text-gray-100 font-semibold">
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
        <h2 className="text-7xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF7900] to-[#8cb2d4]">
            How It Works?
          </span>
        </h2>
        <div className="flex items-center justify-around m-2">
          {/* 1/4 frame */}
          <div className="items-center border-2 rounded-3xl border-gray-300 m-4 bg-white">
            <div className="flex items-center">
              <p className="text-7xl text-gray-300">01</p>
              <img src={SignUp} alt="Sign Up" />
            </div>
            <div className="m-5">
              <h3 className="text-2xl font-semibold">Sign Up</h3>
              <p className="text-gray-400">
                Quickly sign up and set up <br /> your HeyRazzi account.
              </p>
            </div>
          </div>
          {/* 2/4 frame */}
          <div className="items-center border-2 rounded-3xl border-gray-300 m-4 bg-white">
            <div className="flex items-center">
              <div>
                <p className="text-7xl text-gray-300">02</p>
                <div className="m-5">
                  <h3 className="text-3xl font-semibold text-gray-700">
                    Create Your Portfolio
                  </h3>
                  <p className="text-gray-400 mt-2">
                    Upload your work, choose your layout, and customize it to
                    match your brand.
                  </p>
                </div>
              </div>
              <img src={Create} alt="Create Portfolio" height={40} className="mt-28" />
            </div>
          </div>
          {/* 3/4 frame */}
          <div className="items-center border-2 rounded-3xl border-gray-300 m-4 bg-white">
            <div className="flex items-center">
              <p className="text-7xl text-gray-300">03</p>
              <img src={Invitereviews} alt="Invite Reviews" />
            </div>
            <div className="m-5">
              <h3 className="text-3xl font-semibold text-gray-800">
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
                <p className="text-7xl text-gray-300">04</p>
                <div className="m-5">
                  <h3 className="text-3xl font-semibold text-gray-800">
                    Track and Grow
                  </h3>
                  <p className="text-gray-400 mt-2">
                    Use our analytics tools to see what’s working and refine your
                    strategies for even better results.
                  </p>
                </div>
              </div>
              <img src={Track} alt="Track and Grow" height={40} className="mt-28" />
            </div> 
          </div>
        </div>
      </section>

      {/* FAQS */}
      <div></div>
    </div>
  );
};

export default Home;
