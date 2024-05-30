// Import necessary components and styles
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./Pages/Profile/Profile";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import PublicRoutes from "./components/routes/PublicRoutes";
import Home from "./Pages/HomePage/Home";
import Footer from "./components/Footer";
import Products from "./Pages/Products/Products";

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
            element={
              <PublicRoutes>
                <Login isOpen={isModalOpen} toggleModal={toggleModal} />
              </PublicRoutes>
            }
          />

          <Route
            path="/register"
            element={
              <PublicRoutes>
                {" "}
                <Register isOpen={isModalOpen} toggleModal={toggleModal} />
              </PublicRoutes>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoutes>
                <Profile />
              </ProtectedRoutes>
            }
          />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
