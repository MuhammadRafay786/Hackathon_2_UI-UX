import { Plus } from "lucide-react";

const Pages = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-5 flex flex-col items-center mb-10">
      <div className="flex flex-col gap-4 w-full">
        <h1 className="font-roboto text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#333333] text-center">
          Questions Look Here
        </h1>
        <p className="font-inter font-normal text-sm md:text-base lg:text-lg leading-6 text-[#4F4F4F] text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full mt-10">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="w-full min-h-[170px] bg-[#F7F7F7] flex flex-col gap-3 justify-center p-4 rounded-lg shadow-sm"
            >
              <div className="flex justify-between items-center">
                <h1 className="font-inter font-bold text-base sm:text-lg md:text-[18px] leading-[26px] text-[#333333]">
                  What types of chairs do you offer?
                </h1>
                <Plus className="flex-shrink-0" />
              </div>
              <p className="font-inter font-normal text-sm md:text-base lg:text-lg leading-6 text-[#4F4F4F]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Pages;