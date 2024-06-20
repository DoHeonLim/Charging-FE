import { User } from '@/types/user';
import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();
axios.defaults.withCredentials = true;

export const getCookie = (name: string) => {
  console.log('쿠키 이름', name), console.log('쿠키 내용', cookies.get(name));
  return cookies.get(name);
};

export const setCookie = (name: string, value: string) => {
  return cookies.set(name, value, { maxAge: 60 * 60 * 3, path: '/' });
};

export const getUserAPI = () =>
  axios.get<User, any>('http://localhost:3000/profile', {
    withCredentials: true,
  });

// function getCookie(name: string) {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2 || parts !== undefined) return parts.pop()?.split(';').shift();
//   return null; // 배열이 비어있을 때는 null을 반환
// }

// // 사용 예시
// const connectSid = getCookie('connect.sid');
// if (connectSid) {
//   setUserSession(connectSid);
//   console.log('connect.sid:', connectSid);
// } else {
//   console.log('connect.sid is undefined or not found.');
// }
