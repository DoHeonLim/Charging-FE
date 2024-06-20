import { Car, CarImage, CarReview } from '@/types/car';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-type': 'application/json',
  },
  withXSRFToken: true,
});
export const Cars = () => instance.get<{ cars: Car[] }, any>('/cars');

export const CarImages = () => instance.get<{ carImages: CarImage[] }, any>('/car-imgs');

export const CarReviews = (carId: number) =>
  instance.get<{ carReviews: CarReview[] }, any>(`/cars/${carId}/reviews`);
