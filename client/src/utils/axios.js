import axios from "axios";

const instance = axios.create({
  // baseURL:
  //   process.env.NODE_ENV === "production"
  //     ? "https://bingo-game-mhs.herokuapp.com"
  //     : "http://localhost:5000",
  baseURL: "https://bingo-game-mhs.herokuapp.com"
});

export default instance;
