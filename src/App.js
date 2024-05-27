// Import necessary components and styles
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";



function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
