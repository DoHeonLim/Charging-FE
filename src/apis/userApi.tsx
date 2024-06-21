import { User } from '@/types/user';
import axios from 'axios';

export const getUserAPI = () =>
  axios.get<User, any>('http://localhost:3000/profile', {
    withCredentials: true,
    withXSRFToken: true,
  });


export const getUserInfoByIdAPI = (userId: string) =>
   axios.get<{ name: string; nickname: string }>(`http://localhost:3000/user/${userId}`, {
    withCredentials: true,
});