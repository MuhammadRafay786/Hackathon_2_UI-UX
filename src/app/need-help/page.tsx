import React from "react";

const NeedHelp: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Need Help?</h1>
      <p className="text-lg text-gray-600">
        We’re here to assist you with any questions or concerns. Please check
        our FAQs or reach out to our support team.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6">
        Contact Information
      </h2>
      <ul className="list-disc list-inside mt-4 text-gray-700">
        <li>
          Email:{" "}
          <a href="mailto:support@comforty.com" className="text-blue-500">
            support@comforty.com
          </a>
        </li>
        <li>Phone: +1-800-123-4567</li>
        <li>Live Chat: Available from 9:00 AM to 5:00 PM EST</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-6">Quick Links</h2>
      <ul className="list-disc list-inside mt-4 text-gray-700">
        <li>
          <a href="/faq" className="text-blue-500 hover:underline">
            Frequently Asked Questions
          </a>
        </li>
        <li>
          <a href="/contact" className="text-blue-500 hover:underline">
            Contact Form
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NeedHelp;