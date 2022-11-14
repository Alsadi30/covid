import axios from "axios";

export const jwtAuthToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY3OTEyNTUwLCJleHAiOjE2NzA1MDQ1NTB9.4AWTuvVCtiXEzLCRrK5Q0yy59uxRiGOWa3QkDF1pCLY";

export const backend_base_api = "http://localhost:1337/api";

export const AuthBackEndApi = axios.create({
  baseURL: `${backend_base_api}/auth/local`,
});

export const BackEndApi = axios.create({
  baseURL: `${backend_base_api}`,
});

export const setAuthToken = (token) => {
  if (token) {
    BackEndApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    console.log(BackEndApi.defaults.headers.common["Authorization"]);
  } else {
    axios.defaults.headers.common["Authorization"] = "";
  }
};
