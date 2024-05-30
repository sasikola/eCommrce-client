import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../Redux/productSlice";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {product && (
        <div className=" mx-24 my-10 ">
          <div className="flex flex-col md:flex-row">
            <img
              src={product?.image}
              alt={product?.name}
              className="w-full md:w-1/2 rounded-lg"
            />
            <div className="md:ml-10">
              <h1 className="text-3xl font-bold mb-2">{product?.name}</h1>
              <p className="text-xl text-gray-800 mb-4">₹{product?.price}</p>
              <p className="text-gray-600">{product?.description}</p>
              <button className="mt-4 px-5 py-2 bg-blue-600 text-white ">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
