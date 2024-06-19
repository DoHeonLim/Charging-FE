import { Car, CarImage } from '@/types/car';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});
export const Cars = () => instance.get<{ cars: Car[] }, any>('/cars');

export const CarImages = () => instance.get<{ carImages: CarImage[] }, any>('/car-imgs');
