// starting my project of hackathon 2 (Muhammad Rafay Shahzad roll no:453475)
import FeaturedProducts from "./components/ui/FeaturedProducts";
import Hero from "./components/ui/Hero";
import Sponsors from "./components/ui/Sponsors";
import Categories from "./components/ui/TopCategories";
import PopularStyles from "./components/ui/PopularStyles";
import ProductList from "./components/ui/OurProducts";

export default function Home() {
  // Featured Products Data
  const cardBuild = [
    {
      id: 1,
      heading: "Featured Products",
      divText: "New",
      Image1: {
        src: "/oldChair.jpeg",
        alt: "Old Chair",
        width: 312,
        height: 312,
      },
      paragraph: "Library Stool Chair",
      amount: 20,
      classNameCart: "bg-[#029FAE]",
      isDiv: true,
      link: "/product/old-chair",
    },
    {
      id: 2,
      divText: "Sales",
      classNameDiv: "bg-[#F5813F]",
      Image1: {
        src: "/sofa_pink_1.png",
        alt: "Pink Sofa",
        width: 312,
        height: 312,
      },
      paragraph: "Library Stool Chair",
      amount: 20,
      cutamount: 30,
      classNameCart: "bg-gray-300",
      isDiv: true,
      link: "/product/pink-sofa",
    },
    {
      id: 3,
      Image1: {
        src: "/chair2.png",
        alt: "Chair 2",
        width: 312,
        height: 312,
      },
      paragraph: "Library Stool Chair",
      amount: 20,
      classNameCart: "bg-gray-300",
      isDiv: false,
      link: "/product/chair2",
    },
    {
      id: 4,
      Image1: {
        src: "/sofa2.png",
        alt: "Sofa 2",
        width: 312,
        height: 312,
      },
      paragraph: "Library Stool Chair",
      amount: 20,
      classNameCart: "bg-gray-300",
      isDiv: false,
      link: "/product/sofa2",
    },
  ];

  // Products Data for Our Product Section
  const products = [
    {
      id: 1,
      title: "Library Stool Chair",
      price: 20,
      image: "/01.jpg",
      isNew: true,
    },
    {
      id: 2,
      title: "Pink Sofa",
      price: 20,
      originalPrice: 30,
      image: "/02.jpg",
      isSale: true,
    },
    { id: 3, title: "Popular Chair", price: 20, image: "/03.jpg" },
    {
      id: 4,
      title: "Sofa",
      price: 20,
      originalPrice: 30,
      image: "/04.jpg",
      isSale: true,
    },
    { id: 5, title: "Wing Chair", price: 20, image: "/05.jpg", isNew: true },
    {
      id: 6,
      title: "Grey Chair",
      price: 20,
      originalPrice: 30,
      image: "/06.jpg",
      isSale: true,
    },
    { id: 7, title: "Modern Chair", price: 20, image: "/07.jpg" },
    { id: 8, title: "White Chair", price: 20, image: "/08.jpg" },
  ];

  // Top Categories Data
  const categoriesData = [
    {
      name: "Wing Chair",
      products: "3,584 Products",
      image: "/05.jpg",
    },
    {
      name: "Wooden Chair",
      products: "157 Products",
      image: "/08.jpg",
    },
    {
      name: "Desk Chair",
      products: "154 Products",
      image: "/09.png",
    },
  ];

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8">
      {/* Hero Section */}
      <Hero />

      {/* Sponsors Section */}
      <Sponsors />

      {/* Featured Products Section */}
      <section className="my-12 sm:my-16 lg:my-20">
        <FeaturedProducts heading="Featured Products" cards={cardBuild} />
      </section>

      {/* Top Categories Section */}
      <section className="my-20 sm:my-24 lg:my-28">
        <Categories title="Top Categories" categories={categoriesData} />
      </section>

      {/* Popular Styles Section */}
      <section className="my-20 sm:my-24 lg:my-28">
        <PopularStyles />
      </section>

      {/* Our Product Section */}
      <section className="my-20 sm:my-24 lg:my-28">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-[#1C1B1F] mb-8">
          Our Products
        </h2>
        <ProductList products={products} />
      </section>
    </div>
  );
}