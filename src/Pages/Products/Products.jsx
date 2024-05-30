import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
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
    {
      id: 5,
      image: "https://dummyimage.com/424x264",
      category: "CATEGORY",
      title: "The Catalyzer",
      price: "$16.00",
    },
    {
      id: 6,
      image: "https://dummyimage.com/425x265",
      category: "CATEGORY",
      title: "Shooting Stars",
      price: "$21.15",
    },
    {
      id: 7,
      image: "https://dummyimage.com/427x267",
      category: "CATEGORY",
      title: "Neptune",
      price: "$12.00",
    },
    {
      id: 8,
      image: "https://dummyimage.com/428x268",
      category: "CATEGORY",
      title: "The 400 Blows",
      price: "$18.40",
    },
  ];

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-14 mx-auto">
          <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
            Products
          </h1>
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
                  {" "}
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.category}
                  </h3>
                  <div className="flex justify-between">
                    <div>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {product.title}
                      </h2>
                      <p className="mt-1">{product.price}</p>
                    </div>
                    <div>
                      <button
                        type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
