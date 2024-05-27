// Import necessary components and styles
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy load the Navbar component
const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./Pages/Home"));
const Login = lazy(() => import("./components/auth/Login"));
const Register = lazy(() => import("./components/auth/Register"));

function App() {
  // State to manage modal open/close
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal state
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <ToastContainer
        toastClassName="toastContainerBox"
        transition={Flip}
        position="top-center"
      />

      <Router>
        <Navbar toggleModal={toggleModal} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login isOpen={isModalOpen} toggleModal={toggleModal} />}
          />

          {/* Route for register page */}
          <Route
            path="/register"
            element={
              <Register isOpen={isModalOpen} toggleModal={toggleModal} />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
