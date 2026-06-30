import axios from "axios";

const axiosToken = axios.create({
  baseURL: `${import.meta.env.VITE_BURL}`,
  headers: {
    "Accept-Language": "en",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,

  },
});

export default axiosToken;