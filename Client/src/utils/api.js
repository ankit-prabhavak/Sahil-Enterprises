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
  withCredentials: true, // cookies will be sent automatically
});

export default api;

// POST
export const postData = async (url, body) => {
  try {
    const { data } = await api.post(url, body);
    return data;
  } catch (error) {
    return handleError(error);
  }
};

// GET
export const fetchDataFromAPI = async (url, params = {}) => {
  try {
    const { data } = await api.get(url, { params });
    return data;
  } catch (error) {
    return handleError(error);
  }
};

// PUT
export const editData = async (url, body) => {
  try {
    const { data } = await api.put(url, body);
    return data;
  } catch (error) {
    return handleError(error);
  }
};

// DELETE
export const deleteData = async (url) => {
  try {
    const { data } = await api.delete(url);
    return data;
  } catch (error) {
    return handleError(error);
  }
};

const handleError = (error) => {
  console.error("API ERROR:", error);

  return {
    success: false,
    error: true,
    message:
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      error.message ||
      "Something went wrong",
  };
};