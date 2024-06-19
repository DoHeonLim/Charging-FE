import { atom } from 'jotai';
import { Car } from '@/types/car';
/**
 * @carAtom car타입이거나 null
 */
export const carAtom = atom<Car | null>(null);
/**
 * @openAtom boolean
 */
export const openAtom = atom<boolean>(false);
