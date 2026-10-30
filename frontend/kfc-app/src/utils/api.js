<<<<<<< HEAD
const API_BASE_URL =
    process.env.REACT_APP_API_URL || "http://localhost:8080";

export { API_BASE_URL };

export const apiUrl = (path) => {
    return `${API_BASE_URL}/${String(path).replace(/^\/+/, "")}`;
=======
const API_BASE_URL =
    process.env.REACT_APP_API_URL || "http://localhost:8080";

export { API_BASE_URL };

export const apiUrl = (path) => {
    return `${API_BASE_URL}/${String(path).replace(/^\/+/, "")}`;
>>>>>>> 77ebcaa6d7d7d2b92481a3ed07869ab1e4d61a49
};