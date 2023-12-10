import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { deleteCar } from "../../api/car";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const OwnCars = () => {
  const [cars, setCars] = useState([]);
  const [render, setRender] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    // Fetch data from your API here
    const token = JSON.parse(localStorage.getItem("token"))
    axios
      .post("http://localhost:9292/api/cars/ownCars", { "token":token.token})
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [render, setRender]);

  async function handleDelete(id) {
    console.log(id);
    let a = await deleteCar({
      id: id,
    });
    setRender(!render);
  }
  
  return (
    <div>
      <h1>Car List</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "15%" }}>

        <Link onClick={()=>{window.location.reload()}} style={{textDecoration:"none",color:"black",border:"1px solid black",padding:"3px",fontSize:"12px",backgroundColor:"lightblue"}} >Refresh</Link>
        <button
          className=""
          onClick={(e) => {
            navigate("/");
          }}
          type="submit"
        >
          Ana Səhifəyə Qayıt
        </button>
      </div>
      <ul style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
        {cars.map((car) => (
          <div style={{border:"1px solid black",borderRadius:"10px",display:"flex",justifyContent:"center",flexDirection:"column",padding:"2%",margin:"5%"}}>
            <ul key={car.id}>
            <img style={{width:"100%"}} src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
              <p>Name: {car.name}</p>
              <p>Model: {car.model}</p>
              <p>Colour: {car.colour}</p>
              <p>Power of Motor: {car.powerOfMotor}</p>
              <p>Price: {car.price} $</p>
              <p>Year: {car.year}</p>
            </ul>
            <button style={{width:"40%",margin:"0 auto"}}
              className="delete-button"
              onClick={() => {
                handleDelete(car.id); 
              }}
            >
              <AiFillDelete className="delete-icon" />
            </button>{" "}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default OwnCars;
