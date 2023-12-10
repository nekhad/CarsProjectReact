import axios from "axios";

export const login = async (values) => {
  try {
    const response = await axios.post("http://localhost:9292/api/v1/auth/authenticate",{
        "email": values.email,
        "password": values.password
    });
    return response.data; // Return the data from the API call
  } catch (error) {
    console.error("Error fetching data:", error);
    return {error:"Check out your credentials!"}; // Return an empty array or handle the error gracefully
  }
};
