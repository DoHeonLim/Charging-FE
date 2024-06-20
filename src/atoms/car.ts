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
/**
 * @carAtom car[]타입이거나 null
 */
export const carDataAtom = atom<Car[] | null>(null);
/**
 * @carAtom carImage[]타입이거나 null
 */
export const carImageDataAtom = atom<CarImage[] | null>(null);
/**
 * @carAtom carReview[]타입이거나 null
 */
export const carReviewDataAtom = atom<CarReview[] | null>(null);

// export const reviewAtom = atom<number | null>(null);
