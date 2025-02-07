import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const AllProductpage = () => {
  const products = [
    {
      src: "/chair2popular.png",
      name: "Library Stool Chair",
      price: 20,
      badge: "New",
    },
    {
      src: "/sofa_pink_1.png",
      name: "Pink Sofa",
      price: 20,
      originalPrice: 30,
      badge: "Sale",
    },
    { src: "/yellowChair.png", name: "Yellow Chair", price: 20 },
    { src: "/sofa2.png", name: "Modern Sofa", price: 20 },
    { src: "/table3.png", name: "Wooden Table", price: 20, badge: "New" },
    {
      src: "/seat02popular.png",
      name: "Executive Seat",
      price: 20,
      originalPrice: 30,
      badge: "Sale",
    },
    { src: "/pilow.png", name: "Pillow Seat", price: 20 },
    { src: "/chair2popular.png", name: "Library Stool Chair", price: 20 },
    { src: "/lastPro.png", name: "Comfort Chair", price: 20, badge: "New" },
    {
      src: "/sofa_pink_1.png",
      name: "Pink Sofa",
      price: 20,
      originalPrice: 30,
      badge: "Sale",
    },
    { src: "/yellowChair.png", name: "Yellow Chair", price: 20 },
    { src: "/chair2Pro.jpg", name: "Professional Chair", price: 20 },
  ];

  const featuredProducts = [
    { src: "/table3.png" },
    { src: "/lastPro.png" },
    { src: "/sofa_pink_1.png" },
    { src: "/chair2popular.png" },
    { src: "/yellowChair.png" },
    { src: "/chair2Pro.jpg" },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
        {/* Heading */}
        <h1 className="font-inter text-2xl sm:text-3xl md:text-4xl leading-tight font-semibold mt-8 text-[#272343] text-center lg:text-left lg:pl-4">
          All Products
        </h1>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 lg:px-0">
          {products.map((product, index) => (
            <div key={index} className="w-full max-w-[358px] mx-auto">
              <div className="product-card bg-white rounded-lg p-4">
                <div className="relative">
                  {product.badge && (
                    <div
                      className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-md text-sm ${
                        product.badge === "New"
                          ? "bg-[#01AD5A] text-white"
                          : "bg-[#FF6F61] text-white"
                      }`}
                    >
                      {product.badge}
                    </div>
                  )}
                  <div className="aspect-square relative w-full">
                    <Link href={`/shop?product=${index}`}>
                      <Image
                        src={product.src}
                        alt={product.name}
                        width={358}
                        height={358}
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </Link>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-[#007580] text-sm md:text-base">
                      {product.name}
                    </p>
                    <div className="flex gap-2 items-center">
                      <p className="text-[#272343] font-medium text-lg">
                        ${product.price}
                      </p>
                      {product.originalPrice && (
                        <p className="text-[#9A9CAA] line-through text-sm">
                          ${product.originalPrice}
                        </p>
                      )}
                    </div>
                  </div>
                  <button className="p-2 md:p-3 bg-[#029FAE] hover:bg-[#076068] rounded-lg">
                    <ShoppingCart className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-full bg-[#F7F7F7] overflow-hidden mt-14">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-10 px-4 sm:px-6 lg:px-8">
          <h1 className="font-roboto font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-[#000000] pt-6 sm:pt-10 text-center">
            Or Subscribe To The Newsletter
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 justify-between items-center w-full max-w-[643px]">
            <div className="flex flex-col w-full sm:w-[80%]">
              <p className="font-roboto font-semibold text-sm text-[#1E283280]">
                Email address...
              </p>
              <div className="w-full h-[2px] bg-[#000000]" />
            </div>
            <button className="font-sans font-normal text-sm text-[#1E2832] underline border-b-2 border-[#000000] cursor-pointer whitespace-nowrap">
              SUBMIT
            </button>
          </div>
          <div className="flex flex-col items-center w-full">
            <h1 className="font-roboto font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-[#000000] pt-6 sm:pt-10 text-center">
              Follow products and discounts on Instagram
            </h1>
            <div className="my-6 w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 place-items-center">
              {featuredProducts.map((product, index) => (
                <div key={index} className="relative w-full max-w-[186px]">
                  <Link href={`/shop?product=${index}`}>
                    <Image
                      src={product.src}
                      alt={`instagram-product-${index}`}
                      width={186}
                      height={186}
                      className="object-cover rounded-lg"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProductpage;