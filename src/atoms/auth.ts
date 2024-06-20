import { User } from '@/types/user';
import { atom } from 'jotai';

export const authAtom = atom(null);

export const userAtom = atom<User | null>(null);

export const sessionAtom = atom<string>('');

export const userIdAtom = atom<string>('');
