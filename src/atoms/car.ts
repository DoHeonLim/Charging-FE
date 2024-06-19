import { atom } from 'jotai';
import { Car } from '@/types/car';
/**
 * @openAtom boolean
 */
export const openAtom = atom<boolean>(false);
/**
 * @carAtom car타입이거나 null
 */
export const carAtom = atom<Car | null>(null);

export const carDataAtom = atom<Car[] | null>(null);
