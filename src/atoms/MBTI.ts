import { atom } from 'jotai';
/**
 * @MBTIAtom mbti결과 값이거나 null
 */
export const MBTIAtom = atom<string | null>(null);
