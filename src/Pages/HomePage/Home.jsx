import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Banners from "./Banners";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/productSlice";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
const Home = () => {
  const { productList, loading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const items =
    productList &&
    productList?.slice(0, 6).map((product) => (
      <div key={product.id} className="p-4 w-full">
        <Link
          to={`/product/${product.id}`}
          className="block relative h-48 overflow-hidden rounded"
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
          <div className="flex justify-between">
            <div>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                {product.name}
              </h2>
              <p className="mt-1">₹{product.price}</p>
            </div>
            <div>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    ));

  return (
    <>
      <div>
        <Banners />
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-between items-center mb-12">
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
          <AliceCarousel
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={3000}
            animationDuration={3000}
            infinite
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
