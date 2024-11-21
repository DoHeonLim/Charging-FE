import { User } from '@/types/user';
import axios from 'axios';

const url = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: `${url}/api`,
  withXSRFToken: true,
  withCredentials: true,
});

export const getUserAPI = () => api.get<{ user: User }, any>('profile');

export const getUserImg = (car_name: string) =>
  api.get<{ carImg: string }, any>(`car-imgs-by-name/:${car_name}`);

export const putUserAPI = (nickName: string, carName: string) =>
  api.put<{ nickName: string; carName: string }, any>('profile', {
    nickName: nickName,
    carName: carName,
  });

export const carImgsByName = (selectedModel: string) =>
  api.get<{ selectedModel: string }, any>(`car-imgs-by-name/${encodeURIComponent(selectedModel)}`);

export const saveProfileImg = (value: File) =>
  api.post<{ profilePhoto: File }, any>('profile-pics', {
    header: {
      'content-type': 'multipart/form-data',
    },
    profilePhoto: value,
  });
