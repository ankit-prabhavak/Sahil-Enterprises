import axios from "axios";
const apiUrl = import.meta.env.VITE_APP_URL;

export const postData = async (url, formData) => {
  try {
    const response = await fetch(`${apiUrl}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // adjust the content type as needed
        "Authorization": `Bearer ${localStorage.getItem("token")}`, // include your api key in the authorization
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data;

  } catch (error) {
    console.error("AUTH POST ERROR:", error.message);
    return {
      success: false,
      message: error.message,
    };
  }
};