// src/services/authService.ts
import axios from 'axios';

const API = 'http://localhost:3000/api';

export const loginRequest = async (correo: string, contraseña: string) => {
  return axios.post(`${API}/auth/login`, { correo, contraseña });
};
