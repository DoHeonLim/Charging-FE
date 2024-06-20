import { Charger } from '@/types/charger';
import { Comments } from '@/types/user';
import { atom } from 'jotai';

/**
 * @chargerAtom Charger타입의 배열이거나 null값
 */
// export const chargersAtom = atom<Charger[] | null>(null);
export const chargersAtom = atom<Charger[] | null>(null);
/**
 * @selectChargerAtom 마커 클릭 시 충전소 정보
 */
export const selectChargerAtom = atom<Charger | null>(null);

/**
 * @selectChargerAtom 마커 클릭 시 충전소 정보 리스트
 */
export const selectChargerListAtom = atom<Charger[] | null>(null);

export const pageAtom = atom<number>(1);

export const commentListAtom = atom<Comments[] | null>(null);
