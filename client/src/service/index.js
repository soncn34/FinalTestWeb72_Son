import axios from "axios";
import { getValueFromLocalStorage } from "../utils"


const axiosInstanceAuthen = axios.create({
    baseURL: "http://localhost:3001",
})

const axiosInstance = axios.create({
    baseURL: "http://localhost:3001",
})

axiosInstanceAuthen.interceptors.request.use((config) => {
    const token = getValueFromLocalStorage("token");
    if (!token) {
      window.location.href = "/auth/login";
      return config;
    }
    try {
      // const decodedToken = jwtDecode(token);
      // if (decodedToken?.exp * 1000 < new Date().getTime()) {
      //   window.location.href = "/auth/login";
      //   return config;
      // }
  
      config.headers.Authorization = `Bearer ${getValueFromLocalStorage(
        "token"
      )}`;
    } catch (error) {
      window.location.href = "/auth/login";
      console.log(error);
    }
  
    return config;
  });

//   axiosInstanceAuthen.interceptors.request.use((config) => {
//     const token = getValueFromLocalStorage("token")
// // console.log("token", token);
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`
//     }

//     return config
// })

const login = (username, password) => {
    return axiosInstance.post('/user/login', { username, password })
}

const createProduct = (data) => {
    return axiosInstanceAuthen.post('/product', data)
}

const getProduct = (pageSize = 3, pageIndex = 1) => {
    return axiosInstance.get(`/product/get-paging?pageSize=${pageSize}&pageIndex=${pageIndex}`)
}

const getProductById = (productId) => {
    return axiosInstance.get(`/product/${productId}`)
}

const updateProduct = (id, data) => {
    return axiosInstance.put(`/product/${id}`, data)
}

const deleteProduct = (id) => {
    return axiosInstance.delete(`/product/${id}`)
}

export {
    login,
    createProduct,
    getProduct,
    getProductById,
    updateProduct,
    deleteProduct
}

