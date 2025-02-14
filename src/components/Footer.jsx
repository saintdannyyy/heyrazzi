import React from "react";
import { Link } from "react-router-dom"; // Use `next/link` if you're using Next.js

const Footer = () => {
  return (
    <footer className="gradient-border br-5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-400 hover:text-white transition-colors">
                  Our Features
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-gray-400 hover:text-white transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Community */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/explore-templates" className="text-gray-400 hover:text-white transition-colors">
                  Explore Templates
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/for-enterprise" className="text-gray-400 hover:text-white transition-colors">
                  For Enterprise
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-400 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help-topics" className="text-gray-400 hover:text-white transition-colors">
                  Help Topics
                </Link>
              </li>
              <li>
                <Link to="/getting-started" className="text-gray-400 hover:text-white transition-colors">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link to="/features-how-tos" className="text-gray-400 hover:text-white transition-colors">
                  Features and How-Tos
                </Link>
              </li>
              <li>
                <Link to="/trust-center" className="text-gray-400 hover:text-white transition-colors">
                  Trust Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Trust and Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Trust and Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Log In and Create Account */}
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4">
            <Link to="/login" className="text-gray-400 hover:text-white transition-colors">
              Log in
            </Link>
            <Link to="/create-account" className="text-gray-400 hover:text-white transition-colors">
              Create Account
            </Link>
          </div>
          <p className="text-gray-400 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} HeyRazzi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;