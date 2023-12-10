import React, { useState, useEffect } from "react";
import axios from "axios";
import { filterCars } from "../../api/filter";
import { deleteCar } from "../../api/car";
import { Link } from "react-router-dom";
import { AiFillDelete } from 'react-icons/ai';

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [models, setModels] = useState(null);
  const [colours, setColours] = useState(null);
  const [names, setNames] = useState(null);
  const [year, setYear] = useState(null);
  const [render,setRender]=useState(false)
  const [filter, setFilter] = useState({
    model: null,
    colour: null,
    name: null,
    year: null,
    powerOfMotor: null,
    price: null,
  });
  useEffect(() => {
    // Fetch data from your API here
    axios
      .post("http://localhost:9292/api/cars/filter", {})
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    axios
      .get("http://localhost:9292/api/cars/year")
      .then((response) => {
        setYear(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    axios
      .get("http://localhost:9292/api/cars/names")
      .then((response) => {
        setNames(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    axios
      .get("http://localhost:9292/api/cars/colour")
      .then((response) => {
        setColours(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    axios
      .get("http://localhost:9292/api/cars/model")
      .then((response) => {
        setModels(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  useEffect(() => {
    async function filters() {
      let filteredCars = await filterCars(filter);
      if(!filteredCars.error){
        setCars(filteredCars);
      }
    }
    filters();
  }, [filter,render]);
  async function handleDelete(id){
    console.log(id);
    let a= await deleteCar({
      id:id
  })
  setRender(!render)
  }
  function handleLogout() {
    localStorage.removeItem("token");
    window.location.reload();
  }
  console.log(cars);
  return (
    <div>
      <div className="destek-cont">
        <h2 style={{textDecoration:"none",color:"black",padding:"3px 20px",fontSize:"12px"}}>Dəstək: +(994)55-641-60-18</h2>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "1%",marginLeft:"1%" }}>
        <div>
          {names !== null && (
            <select
              onChange={async (e) => {
                setFilter((prev) => ({ ...prev, name: e.target.value }));
              }}
              name=""
              placeholder="Select"
              id=""
              style={{ width: "100%", padding: "2%" }}
            >
              <option>Select a marka</option>
              {names.map((el, i) => (
                <option key={i} value={el}>
                  {el}
                </option>
              ))}
            </select>
          )}
        </div>
        <div>
          {models !== null && (
            <select
              onChange={async (e) => {
                setFilter((prev) => ({ ...prev, model: e.target.value }));
              }}
              name=""
              placeholder="Select"
              id=""
              style={{ width: "100%", padding: "2%" }}
            >
              <option>Select a model</option>

              {models.map((el, i) => (
                <option key={i} value={el}>
                  {el}
                </option>
              ))}
            </select>
          )}
        </div>
        <div>
          {colours !== null && (
            <select
              onChange={async (e) => {
                setFilter((prev) => ({ ...prev, colour: e.target.value }));
              }}
              name=""
              placeholder="Select"
              id=""
              style={{ width: "100%", padding: "2%" }}
            >
              <option>Select a colour</option>
              {colours.map((el, i) => (
                <option key={i} value={el}>
                  {el}
                </option>
              ))}
            </select>
          )}
        </div>
        <Link onClick={()=>{window.location.reload()}} style={{textDecoration:"none",color:"black",border:"1px solid black",padding:"3px 20px",fontSize:"12px",backgroundColor:"lightblue",borderRadius:"10px"}} >Refresh</Link>
          <Link style={{textDecoration:"none",color:"black",border:"1px solid black",padding:"3px 20px",fontSize:"12px",backgroundColor:"lightblue",borderRadius:"10px"}} to="/adding-car">Create a new car</Link>
          <Link style={{textDecoration:"none",color:"black",border:"1px solid black",padding:"3px 20px",fontSize:"12px",backgroundColor:"lightblue",borderRadius:"10px"}} to="/ownCars">My Cars</Link>
        {/* <div>
          {year !== null && (
            <select
              onChange={async (e) => {
                setFilter((prev) => ({ ...prev, year: e.target.value }));
              }}
              name=""
              placeholder="Select"
              id=""
              style={{ width: "100%", padding: "2%" }}
            >
              <option>Select a year</option>
              {year.map((el, i) => (
                <option key={i} value={el}>
                  {el}
                </option>
              ))}
            </select>
          )}
        </div> */}
      </div>
      <ul style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
        {cars.map((car) => (
          <div style={{border:"1px solid black",borderRadius:"10px",display:"flex",justifyContent:"center",flexDirection:"column",padding:"2%",margin:"5%"}} key={car.id}>
            <img style={{width:"100%"}} src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
            <div style={{margin:"3%"}}>
            <p>Name: {car.name}</p>
            <p>Model: {car.model}</p>
            <p>Colour: {car.colour}</p>
            <p>Power of Motor: {car.powerOfMotor}</p>
            <p>Price: {car.price} $</p>
            <p>Year: {car.year}</p>
            </div>
           </div>
          
        ))}
      </ul>
      <div
        style={{ cursor: "pointer",  padding: "3%",display:"flex",alignItems:"flex-end",justifyContent:"flex-end" }}
        onClick={handleLogout}
      >
        <p style={{padding:"1% 3%",borderRadius:"10px",border:"1px solid black",backgroundColor:"#117a8b",color:"white"}}>Log Out</p>
      </div>
    </div>
  );
};

export default CarList;
