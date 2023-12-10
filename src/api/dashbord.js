import axios from "axios";

export const dashboard = async (values) => {
  try {
    const response = await axios.get("http://localhost:9292/api/cars/get");
    return response.data; // Return the data from the API call
  } catch (error) {
    console.error("Error fetching data:", error);
    return {error:"Error fetching data:"}; // Return an empty array or handle the error gracefully
  }
};
