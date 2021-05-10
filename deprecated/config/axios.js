import axios from "axios";
import { endpoint } from "./config";

const instance = axios.create({
  baseURL: endpoint.jsonfy
})

export default instance;