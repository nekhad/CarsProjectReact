import axios from "axios";

export const deleteCar = async (values) => {
  try {
    console.log(values);
    console.log('salam 33yasim var');
    const response = await axios.delete(`http://localhost:9292/api/cars/${values.id}`,values);
    return response.data; // Return the data from the API call
  } catch (error) {
    console.error("Error fetching data:", error);
    return {error:"Error fetching data:"}; // Return an empty array or handle the error gracefully
  }
};
