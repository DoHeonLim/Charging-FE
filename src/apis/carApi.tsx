import { Car, CarImage, CarReview } from '@/types/car';
import axios from 'axios';

function AxiosErrorHandle(err: any) {
  if (err.res) {
    console.log(err.res.data, err.res.status, err.headers);
  } else if (err.req) {
    console.log(err.req);
  } else {
    console.log('Error', err.message);
  }
  console.log(err.config);
}

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-type': 'application/json',
  },
  withXSRFToken: true,
});
export const Cars = () =>
  instance.get<{ cars: Car[] }, any>('/cars').catch((err) => AxiosErrorHandle(err));

export const CarImages = () =>
  instance.get<{ carImages: CarImage[] }, any>('/car-imgs').catch((err) => AxiosErrorHandle(err));

export const CarReviews = (carId: number) =>
  instance
    .get<{ carReviews: CarReview[] }, any>(`/cars/${carId}/reviews`)
    .catch((err) => AxiosErrorHandle(err));

export const PostCarLikes = (carId: number, reviewId: number) =>
  instance
    .post(`/cars/${carId}/reviews/${reviewId}/review-likes`)
    .then((res) => console.log('성공', res.data))
    .catch((err) => AxiosErrorHandle(err));

export const DeleteReviews = (carId: number, reviewId: number) =>
  instance.delete(`/cars/${carId}/reviews/${reviewId}`).catch((err) => AxiosErrorHandle(err));

export const PutReviews = (carId: number, reviewId: number) =>
  instance
    .put(`/cars/${carId}/reviews/${reviewId}`, { content: '' })
    .catch((err) => AxiosErrorHandle(err));
