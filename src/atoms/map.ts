import { atom } from 'jotai';
/**
 * @mapAtom naver.maps.Map타입이거나 null
 */
export const mapAtom = atom<naver.maps.Map | null>(null);
