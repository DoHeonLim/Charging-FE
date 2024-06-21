import { Car, CarImage, CarReview } from '@/types/car';
import axios from 'axios';

// function AxiosErrorHandle(err: any) {
//   if (err.res) {
//     console.log(err.res.data, err.res.status, err.headers);
//   } else if (err.req) {
//     console.log(err.req);
//   } else {
//     console.log('Error', err.message);
//   }
//   console.log(err.config);
// }

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  withXSRFToken: true,
  withCredentials: true,
});
export const Cars = () => instance.get<{ cars: Car[] }, any>('/cars');
// .catch((err) => AxiosErrorHandle(err));

export const CarImages = () => instance.get<{ carImages: CarImage[] }, any>('/car-imgs');
// .catch((err) => AxiosErrorHandle(err));

export const CarReviews = (carId: number) =>
  instance.get<{ carReviews: CarReview[] }, any>(`/cars/${carId}/reviews`);

export const PostCarReviews = (carId: number, input: string) =>
  instance.post(`/cars/${carId}/reviews`, { content: input });

export const PutCarReviews = (carId: number, reviewId: number, input: string) =>
  instance.put(`/cars/${carId}/reviews/${reviewId}`, { content: input });

export const DeleteCarReviews = (carId: number, reviewId: number) =>
  instance.delete(`/cars/${carId}/reviews/${reviewId}`);

export const PostCarLikes = (carId: number, reviewId: number) =>
  instance.post(`/cars/${carId}/reviews/${reviewId}/review-likes`);
