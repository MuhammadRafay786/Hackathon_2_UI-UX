import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 bg-[#F0F2F3] mb-20 relative rounded-bl-[48px] before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-full before:h-full before:rounded-bl-[48px] before:clip-custom">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-24 items-center min-h-[500px] md:min-h-[750px]">
        {/* Left Side */}
        <div className="flex flex-col gap-4 w-full md:w-1/2 text-center md:text-left">
          <p className="font-inter font-normal text-xs sm:text-sm leading-normal tracking-wider pt-10 md:pt-0">
            Welcome to chairy
          </p>
          <div className="flex flex-col gap-6 sm:gap-8">
            <h1 className="font-inter font-bold text-3xl sm:text-4xl lg:text-[60px] leading-tight lg:leading-[66px] text-[#272343]">
              Best Furniture Collection for your interior.
            </h1>
            <div className="flex justify-center md:justify-start">
              <Link
                href="/shop"
                className="inline-flex items-center gap-3 px-4 py-3 sm:px-6 sm:py-4 rounded-lg bg-[#029FAE] text-white text-sm sm:text-base font-medium hover:bg-[#076770] transition-transform transform hover:scale-105"
              >
                Shop Now
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/seat.png"
            alt="seat"
            className="w-full h-auto max-w-[434px] object-contain"
            width={434}
            height={500}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;