import axios from "axios";

export const verify = async (values) => {
  try {
    const response = await axios.post("http://localhost:9292/api/v1/auth/verify",{
        "verificationCode":values.verificationCode,
        "email": values.email
    });
    return response.data; // Return the data from the API call
  } catch (error) {
    console.error("Error fetching data:", error);
    return {error:"It is not true verification code"}; // Return an empty array or handle the error gracefully
  }
};
