import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import trophy from "../../../public/trophy 1.png";
import group from "../../../public/Group (2).png";
import customer_support from "../../../public/customer-support.png";

const ContactPage = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto flex flex-col gap-10 md:gap-16 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 text-center mt-8 md:mt-16">
          <h1 className="font-poppins font-semibold text-2xl md:text-4xl leading-tight text-[#000000]">
            Get In Touch With Us
          </h1>
          <p className="font-poppins font-normal text-sm md:text-base leading-6 text-[#9F9F9F] max-w-2xl">
            For more information about our product & services, feel free to drop
            us an email. Our staff will always be there to help you out.
          </p>
        </div>

        {/* Contact Details and Form */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Section */}
          <div className="flex flex-col gap-8 lg:w-1/2">
            <div className="flex gap-4">
              <FaLocationDot className="text-xl sm:text-2xl text-[#029FAE]" />
              <div>
                <h2 className="font-poppins font-medium text-lg md:text-xl text-[#000000]">
                  Address
                </h2>
                <p className="font-inter text-sm md:text-base text-[#000000]">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <FaPhoneAlt className="text-xl sm:text-2xl text-[#029FAE]" />
              <div>
                <h2 className="font-poppins font-medium text-lg md:text-xl text-[#000000]">
                  Phone
                </h2>
                <p className="font-inter text-sm md:text-base text-[#000000]">
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <MdOutlineAccessTimeFilled className="text-xl sm:text-2xl text-[#029FAE]" />
              <div>
                <h2 className="font-poppins font-medium text-lg md:text-xl text-[#000000]">
                  Working Time
                </h2>
                <p className="font-inter text-sm md:text-base text-[#000000]">
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-6 lg:w-1/2">
            {["Your name", "Email address", "Subject"].map((label, index) => (
              <div key={index} className="flex flex-col gap-2">
                <label className="font-poppins font-medium text-sm md:text-base text-[#000000]">
                  {label}
                </label>
                <input
                  type="text"
                  placeholder={
                    label === "Your name"
                      ? "Enter your name"
                      : label === "Email address"
                      ? "Enter your email"
                      : "Optional"
                  }
                  className="w-full h-12 md:h-14 border-2 border-[#9F9F9F] rounded-lg px-4 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#029FAE]"
                />
              </div>
            ))}
            <div className="flex flex-col gap-2">
              <label className="font-poppins font-medium text-sm md:text-base text-[#000000]">
                Message
              </label>
              <textarea
                placeholder="Type your message here..."
                className="w-full h-28 md:h-40 border-2 border-[#9F9F9F] rounded-lg px-4 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#029FAE]"
              />
            </div>
            <div className="w-full lg:w-1/3 rounded-lg bg-[#029FAE] hover:bg-[#077c86] text-center shadow-md transition-transform transform hover:scale-105">
              <Link
                href="/contact"
                className="block py-3 text-white font-poppins font-normal text-sm md:text-base"
              >
                Submit
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Features Section */}
      <div className="bg-[#F4F4F4] py-8 md:py-16 mt-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
          {[trophy, group, customer_support].map((icon, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white shadow-md rounded-lg p-6"
            >
              <Image
                src={icon}
                alt={`feature-${index}`}
                width={60}
                height={60}
              />
              <div>
                <h3 className="font-poppins font-semibold text-lg md:text-xl text-[#242424]">
                  {index === 0
                    ? "High Quality"
                    : index === 1
                    ? "Warranty Protection"
                    : "24/7 Support"}
                </h3>
                <p className="font-poppins text-sm md:text-base text-[#898989]">
                  {index === 0
                    ? "Crafted from top materials"
                    : index === 1
                    ? "Over 2 years"
                    : "Dedicated support"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactPage;