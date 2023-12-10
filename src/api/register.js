import axios from "axios";

export const register = async (values) => {
  try {
    const response = await axios.post("http://localhost:9292/api/v1/auth/register",{
        "firstname":values.firstname,
        "lastname":values.lastname,
        "email": values.email,
        "password": values.password
    });
    const response1 = await axios.post("http://localhost:9292/api/v1/auth/afterRegister",{
        "firstname":values.firstname,
        "lastname":values.lastname,
        "email": values.email,
        "password": values.password
    });
    return response.data; // Return the data from the API call
  } catch (error) {
    console.error("Error fetching data:", error);
    return {error:error.response.data.message}; // Return an empty array or handle the error gracefully
  }
};
