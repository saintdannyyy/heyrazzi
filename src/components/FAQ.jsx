import { ChevronDown, ChevronUp } from "@untitled-ui/icons-react";
import { useState } from "react";
import whitelogo from "@/assets/whitelogo.png";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

return (
    <div>
        <div className="flex items-center justify-between cursor-pointer  bg-orange-400 rounded-3xl"
            onClick={() => setIsOpen(!isOpen)}>
            <h3 className="text-xl font-semibold text-gray-200 bg-orange-400 rounded-3xl p-4">{question}</h3>
            <span className="text-gray-500 w-8 h-8 mr-10">{isOpen ? <ChevronUp className="hover:bg-orange-300 hover:rounded-full" color="white"/> : <ChevronDown className="hover:bg-orange-300 hover:rounded-full" color="white"/>}</span>
        </div>
        {isOpen && <p className="text-gray-600 mt-2">{answer}</p>}
    </div>
);
};

const FAQSection = () => {
const faqs = [
    {
        question: "Can I try HeyRazzi for free?",
        answer: "Yes, we offer a free trial for new users to explore HeyRazzi.",
    },
    {
        question: "How do I sign up?",
        answer: "You can sign up by visiting our website and clicking on the 'Sign Up' button.",
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and bank transfers.",
    },
    {
        question: "Is customer support available 24/7?",
        answer: "Yes, our customer support team is available 24/7 to assist you.",
    },
    {
        question: "Can I cancel my subscription at any time?",
        answer: "Yes, you can cancel your subscription at any time from your account settings.",
    },
    {
        question: "Do you offer discounts for annual subscriptions?",
        answer: "Yes, we offer a discount if you choose an annual subscription plan.",
    },
];

return (
    <div className="bg-gradient-to-r from-[#FF7900] via-[#e79b58] to-[#FF7900] m-40 px-20 py-3 rounded-lg shadow-lg">
        <h2 className="text-6xl font-medium text-white text-center mb-8">
            Frequently Asked <br/> Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 p-5">
            {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
        <div className="flex justify-center mt-4 pb-5">
        <img src={whitelogo} className="h-10 w-10"/>
        </div>
    </div>
);
};

export default FAQSection;