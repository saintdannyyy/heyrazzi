import React from "react";
import Heyrazzi from "../assets/logo.png";
import side from "../assets/side.png";
import logo from "@/assets/logo.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowCircleUpRight } from "@untitled-ui/icons-react";
import Footer from "@/components/Footer";

const SignUp = () => {
  return (
    <div className="mx-32 mt-5">
      <a
        href="/"
        aria-label="Homepage"
        className="inline-block h-10 w-24 border-0"
      >
        <img src={logo} alt="HeyRazzi Logo" className="h-full w-full" />
      </a>
      <div className="flex h-screen mt-20">
        <div>
          <h1 className="text-8xl font-semibold">
            Join <br />
            HeyRazzi
          </h1>
          <p className="text-gray-400 mt-2 pl-[20%]">Sign up for free!</p>
          <form>
            <div className="flex mt-2">
              <Input
                placeholder="Name"
                className="mr-2 rounded-lg bg-[#D1D1D1] w-1/2 p-6"
              />
              <Input
                placeholder="Email"
                className="mr-2 rounded-lg bg-[#D1D1D1] w-1/2 p-6"
              />
            </div>
            <div className="mt-3">
              <Input
                placeholder="Enter your username"
                className="rounded-lg bg-[#D1D1D1] p-6"
              />
              <Input
                placeholder="Password"
                className="mt-3 rounded-lg bg-[#D1D1D1] p-6"
              />
              <Button className="mt-2 p-7 bg-orange-500">
                Create Account <ArrowCircleUpRight stroke="1" color="white" />
              </Button>
            </div>
          </form>
          <div className="mt-5 text-center text-2xl font-semibold">
            <p>
              Already have an account?{" "}
              <a href="/login" className="text-orange-500 font-bold">
                Login
              </a>
            </p>
          </div>
        </div>
        <div className="flex">
          <img src={side} alt="Side Image" className="max-w-full h-full" />
        </div>
      </div>

      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};
export default SignUp;
