import axios from "axios";

const api = axios.create({
  baseURL: "https://db-de-carro.vercel.app/"
});
export default api;

export const fetchCar = async () => {
  try {
    const response = await axios.get("https://db-de-carro.vercel.app/");
    return response;
    console.log(response);
  } catch (error) {
    console.error("Error fetching Social Media:", error);
    throw error;
  }
};


function Search() {
    api
      .get("/supercars")
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("error fetching data", error);
      });
  }