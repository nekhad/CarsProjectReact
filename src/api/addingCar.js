import axios from "axios";

export const addingCar = async (values) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"))
    console.log(token);
    const response = await axios.post("http://localhost:9292/api/cars/add",{
        "name":values.name,
        "model":values.model,
        "year": values.year,
        "colour": values.colour,
        "powerOfMotor":values.powerOfMotor,
        "price":values.price,
        "token":token.token
    });
    return response; // Return the data from the API call
  } catch (error) {
    console.error("Error fetching data:", error);
    return {error:error.response}; // Return an empty array or handle the error gracefully
  }
};
