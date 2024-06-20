import { User } from '@/types/user';
import axios from 'axios';

export const getUserAPI = () =>
  axios.get<User, any>('http://localhost:3000/profile', {
    withCredentials: true,
    withXSRFToken: true,
  });
