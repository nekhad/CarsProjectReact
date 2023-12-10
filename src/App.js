import React, { useEffect, useState } from "react"; // Import useState
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";
import Dashboard from "./components/home/Dashboard";
import Register from "./components/register/Register";
import Verification from "./components/verification/Verification";
import AddingCar from "./components/AddingCar/AddingCar";
import OwnCars from "./components/owncars/OwnCars";
import FileUpload from "./components/fileUpload/FileUpload";

function App() {
  const [isLogged, setIsLogged] = useState(false); // Use useState here
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogged(true);
    }
  }, [isLogged]);

  return (
    <div>
        <Routes>
          {isLogged ? (
        <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/adding-car" element={<AddingCar />} />
            <Route path="/ownCars" element={<OwnCars />} />
            <Route path="/upload/:id" element={<FileUpload />} />
            </>
          ) : (
            <>
              <Route path="/" element={<LoginPage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/verification" element={<Verification />} />
            </>
          )}
        </Routes>
    </div>
  );
}

export default App;
