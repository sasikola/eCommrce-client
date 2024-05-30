import React from "react";
import { Link } from "react-router-dom";
import Banners from "./Banners";

const Home = () => {
  const products = [
    {
      id: 1,
      image: "https://dummyimage.com/420x260",
      category: "CATEGORY",
      title: "The Catalyzer",
      price: "$16.00",
    },
    {
      id: 2,
      image: "https://dummyimage.com/421x261",
      category: "CATEGORY",
      title: "Shooting Stars",
      price: "$21.15",
    },
    {
      id: 3,
      image: "https://dummyimage.com/422x262",
      category: "CATEGORY",
      title: "Neptune",
      price: "$12.00",
    },
    {
      id: 4,
      image: "https://dummyimage.com/423x263",
      category: "CATEGORY",
      title: "The 400 Blows",
      price: "$18.40",
    },
  ];

  return (
    <>
      <div>
        <Banners />
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-between items-center md:mb-10 mb-6">
            <h1 className="text-3xl font-medium title-font text-gray-900">
              Products
            </h1>
            <Link
              to="/products"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium text-sm px-5 py-2.5 mb-2 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <span className="block sm:hidden">View More</span>
              <span className="hidden sm:block">View More Products</span>
            </Link>
          </div>
          <div className="flex flex-wrap -m-4">
            {products.map((product) => (
              <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link
                  to={`/product/${product.id}`}
                  className="block relative h-48  overflow-hidden"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={product.image}
                  />
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {product.title}
                  </h2>
                  <p className="mt-1">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
