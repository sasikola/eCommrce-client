// Import necessary components and styles
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

// Lazy load the Navbar component
const Navbar = lazy(() => import("./components/Navbar"));

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
