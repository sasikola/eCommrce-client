import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userRegister } from "../../Redux/authSlice";
import { toast } from "react-toastify";

const Register = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsOpen(!isOpen);
    navigate("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      phone,
      email,
      password,
    };

    dispatch(userRegister(formData)).then((res) => {
      if (!res.error) {
        toast.success(res.payload.message);
        toggleModal();
        navigate("/login");
      } else {
        toast.error(res.payload);
      }
    });
  };

  return (
    <>
      {isOpen && (
        <div
          id="register-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto bg-gray-800 bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md">
            <div
              className="relative bg-white  "
              style={{ animation: "fadeIn 0.3s ease-out" }}
            >
              <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 ">
                  Register to our platform
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
                      htmlFor="name"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="John Doe"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Your phone number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="123-456-7890"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="name@company.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="password"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Your password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="••••••••"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="text-red-500 text-xs italic">
                      Please enter your password.
                    </p>
                  </div>
                  <div>
                    <button
                      className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Register your account
                    </button>

                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                      Already registered?{" "}
                      <Link
                        to="/login"
                        className="text-blue-700 hover:underline dark:text-blue-500"
                      >
                        Sign in
                      </Link>
                    </div>
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

export default Register;
