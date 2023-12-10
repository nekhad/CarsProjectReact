import React, { useState } from "react";
import { addingCar } from "../../api/addingCar";
import { useNavigate } from "react-router-dom";
import "./addingCar.css";

const AddingCar = () => {
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [colour, setColour] = useState("");
  const [powerOfMotor, setPowerOfMotor] = useState("");
  const [price, setPrice] = useState("");
  const [err, setErr] = useState(null);
const [id,setId]=useState("")
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here, you can handle the form submission, such as sending the data to a server.
    // For simplicity, let's just log the data to the console.
    let a = await addingCar({
      name: name,
      model: model,
      year: year,
      colour: colour,
      price: price,
      powerOfMotor: powerOfMotor,
    });
    // if(a && a.message==="Successfully"){
    //   setErr(null)
    //     navigate(`/verification?data=${encodeURIComponent(email)}`)
    //   }
    //     setErr(a)
    // Clear the form fields after submission
    setName("");
    setModel("");
    setColour("");
    setYear("");
    setPowerOfMotor("");
    setPrice("");
    if (a.status === 200) {

      navigate(`/upload/${a.data.id}`);
    }
    setErr("Düzgün daxil et!");
  };

  return (
    <>
      <div className="addingCar-cont">
        <h2 className="addingCar-basliq">Adding Car</h2>
        <form onSubmit={handleSubmit}>
          <div className="addingCar-inps">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="addingCar-inps">
            <label htmlFor="model">Model:</label>
            <input
              type="text"
              id="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              required
            />
          </div>
          <div className="addingCar-inps">
            <label htmlFor="colour">Colour:</label>
            <input
              id="colour"
              value={colour}
              onChange={(e) => setColour(e.target.value)}
              required
            />
          </div>
          <div className="addingCar-inps">
            <label htmlFor="powerOfMotor">PowerOfMotor:</label>
            <input
              type="number"
              id="powerOfMotor"
              value={powerOfMotor}
              onChange={(e) => setPowerOfMotor(e.target.value)}
              required
            />
          </div>
          <div className="addingCar-inps">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="addingCar-inps">
            <label htmlFor="year">Year:</label>
            <input
              type="number"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            />
          </div>
          <div>
            <button
              onClick={(e) => {
                handleSubmit(e);
              }}
              className="addingCar-btn"
              type="submit"
            >
              Add
            </button>
          </div>
          <div></div>
          {err !== null && <p style={{ color: "red" }}>{err?.error || err}</p>}
        </form>
        <button
          className="return-btn"
          onClick={(e) => {
          }}
          type="submit"
        >
          Ana Səhifəyə Qayıt
        </button>
      </div>
    </>
  );
};

export default AddingCar;
