import axios from "axios";

let apiUrl = "https://poo-poo-pee-pee.herokuapp.com/api";

// const apiUrls = {
//   production: "https://poo-poo-pee-pee.herokuapp.com/api",
//   development: "http://localhost:3000/api",
// };

// if (window.location.hostname === "localhost") {
//   apiUrl = apiUrls.development;
// } else {
//   apiUrl = apiUrls.production;
// }

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
