import axios from "axios";
import { User } from "../@types/user";

const API_BASE_URL = "http://192.168.0.112:3000";

const getJobs = async () => {
  const response = await axios.get(`${API_BASE_URL}/vagas`);
  return response.data;
};

const getUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/usuarios`);
  return response.data;
};

const postUsers = async (data: User) => {
  const response = await axios.post(`${API_BASE_URL}/usuarios`, data);
  return response.status;
};

const api = {
  jobs: {
    get: getJobs,
  },
  users: {
    get: getUsers,
    post: postUsers,
  },
};

export default api;
