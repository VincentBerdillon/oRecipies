/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { LocalStorage } from './LocalStorage';

// je crée une instance d'axios préconfiguré pour toutes les requêtes
export const axiosInstance = axios.create({
  baseURL: 'https://orecipes-api.onrender.com/api',
});

// Je rajoute un intercepteur, modifie la configuration avant chaque requête
axiosInstance.interceptors.request.use((config) => {
  // Je récupère l'utilisateur connecter en localStorage
  const user = LocalStorage.getItem('user');

  if (user) {
    // Je rajoute son token dans le header Authorization de ma requête
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});
