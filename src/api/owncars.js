import axios from "axios";

export const ownCars = async (values) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"))
    console.log(token);
    const response = await axios.post("http://localhost:9292/api/cars/ownCars",{
        "token":token.token
     });

  } catch (error) {
    console.error("Error fetching data:", error);
    return {error:"Error fetching data:"}; // Return an empty array or handle the error gracefully
  }
};
