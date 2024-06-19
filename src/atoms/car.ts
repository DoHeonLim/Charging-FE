import { atom } from 'jotai';
import { Car, CarImage, CarReview } from '@/types/car';
/**
 * @openAtom boolean
 */
export const openAtom = atom<boolean>(false);
/**
 * @carAtom car타입이거나 null
 */
export const carAtom = atom<Car | null>(null);

export const carDataAtom = atom<Car[] | null>(null);

export const carImageDataAtom = atom<CarImage[] | null>(null);

export const carReviewDataAtom = atom<CarReview[] | null>(null);
