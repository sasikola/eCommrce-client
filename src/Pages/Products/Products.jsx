import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts, getSingleProduct } from "../../Redux/productSlice";

const Products = () => {
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

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-14 mx-auto">
          <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
            Products
          </h1>
          <div className="flex flex-wrap -m-4">
            {productList &&
              productList.map((product) => (
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
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
