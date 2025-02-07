import Image from "next/image";

const logos = [
  "/zapier.png",
  "/pipdrive.png",
  "/clbBank.png",
  "/Z_logo.png",
  "/burnt.png",
  "/pandaDoc.png",
  "/moz.png",
];

const Sponsors = () => {
  const combinedLogos = [...logos, ...logos]; // Original + Duplicate

  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <div className="flex items-center gap-8 sm:gap-12 animate-seamlessSlide whitespace-nowrap">
        {combinedLogos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Sponsor logo ${index + 1}`}
            width={120}
            height={120}
            className="w-auto h-auto max-h-[40px] sm:max-h-[60px] object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;