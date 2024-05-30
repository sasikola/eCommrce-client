import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Banners from "./Banners";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getSingleProduct } from "../../Redux/productSlice";
// import AliceCarousel from "react-alice-carousel";

const Home = () => {
  const { productList } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // const responsive = {
  //   0: { items: 1 },
  //   568: { items: 2 },
  //   1024: { items: 3 },
  // };

  const items =
    productList &&
    productList.slice(0, 4).map((product) => (
      <div key={product._id} className="lg:w-1/4 md:w-1/2 p-2 w-full">
        <div className="bg-white p-3 shadow-lg">
          <Link
            to={`/product/${product._id}`}
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
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {product.name}
                </h2>
                <p className="mt-1">₹{product.price}</p>
              </div>
              <div>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 font-medium text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Add to Cart
                </button>
              </div>
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
        <div className="container px-5 py-16 md:py-12 mx-auto">
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
          <div className="flex flex-wrap -m-4 ">
            {/* <AliceCarousel
              autoPlay
              autoPlayStrategy="none"
              autoPlayInterval={2000}
              animationDuration={2000}
              responsive={responsive}
              infinite
              touchTracking={false}
              disableDotsControls
              disableButtonsControls
              items={items}
            /> */}
            {items}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
