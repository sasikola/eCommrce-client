import React, { useState, useTransition } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../Redux/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isPending, startTransition] = useTransition();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    startTransition(() => {
      try {
        const formData = { phone, password, rememberMe };
        dispatch(userLogin(formData)).then((res) => {
          if (!res.error) {
            toast.success(res.payload.message);
            navigate("/");
          } else {
            toast.error(res.payload);
          }
        });
      } catch (error) {
        console.error(error);
      }
    });
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
    navigate("/");
  };

  return (
    <>
      {isOpen && (
        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto bg-gray-600 bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md">
            <div
              className="relative bg-white shadow "
              style={{ animation: "fadeIn 0.3s ease-out" }}
            >
              <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900">
                  Sign in to our platform
                </h3>
                <button
                  type="button"
                  onClick={toggleModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4">
                <form
                  className="bg-white px-8 pt-6 pb-8 mb-4"
                  onSubmit={handleSubmit}
                >
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="******************"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="text-red-500 text-xs italic">
                      Please enter your password.
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Sign In
                    </button>
                    <Link
                      to="/resetPassword"
                      className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                      href="#"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered?{" "}
                    <Link
                      to="/register"
                      className="text-blue-700 hover:underline dark:text-blue-500"
                    >
                      Create account
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
