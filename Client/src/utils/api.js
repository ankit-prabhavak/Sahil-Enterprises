// import axios from "axios";
// const apiUrl = import.meta.env.VITE_APP_URL;

// export const postData = async (url, formData) => {
//   try {
//     const response = await fetch(`${apiUrl}${url}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json", // adjust the content type as needed
//         "Authorization": `Bearer ${localStorage.getItem("token")}`, // include your api key in the authorization
//       },
//       body: JSON.stringify(formData),
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.message || "Something went wrong");
//     }

//     return data;

//   } catch (error) {
//     console.error("AUTH POST ERROR:", error.message);
//     return {
//       success: false,
//       message: error.message,
//     };
//   }
// };

import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
  withCredentials: true,
});

// Automatically attach token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

export const postData = async (url, formData) => {
  try {
    const { data } = await api.post(url, formData);
    return data;
  } catch (error) {
    console.error("POST ERROR:", error);

    return {
      success: false,
      message:
        error.response?.data?.message ||
        error.message ||
        "Something went wrong",
    };
  }
};

export const fetchDataFromAPI = async (url, params = {}) => {
  try {
    const { data } = await api.get(url, { params });
    return data;
  } catch (error) {
    console.error("GET ERROR:", error);

    return {
      success: false,
      message:
        error.response?.data?.message ||
        error.message ||
        "Something went wrong",
    };
  }
};

