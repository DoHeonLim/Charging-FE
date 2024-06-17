import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSetAtom } from 'jotai';
import logo from '../assets/images/ourlogo.png';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { authAtom } from '@/atoms/auth';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const setAuth = useSetAtom(authAtom);

  const naverClientId = import.meta.env.VITE_NAVER_CLIENT_ID;
  const naverRedirectUri = import.meta.env.VITE_NAVER_REDIRECT_URI;
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const googleRedirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
  const kakaoClientId = import.meta.env.VITE_KAKAO_CLIENT_ID;
  const kakaoRedirectUri = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');
    const error = urlParams.get('error');

    if (code) {
      axios.post('/api/auth/social-login', { code, state })
        .then(response => {
          const token = response.data.token;
          // 토큰을 로컬 스토리지에 저장하여 로그인 상태 유지
          localStorage.setItem('authToken', token);
          setAuth(response.data); // 상태 관리
          navigate('/main'); // 메인 페이지로 리디렉션
        })
        .catch(error => {
          console.error('Error during social login', error);
        });
    }

    if (error) {
      console.error('Error during social login', error);
    }
  }, [location, navigate, setAuth]);

  const handleGoogleLogin = () => {
    const googleLoginUrl = `http://localhost:3000/login/federated/google`;
    window.location.href = googleLoginUrl;
  };

  const handleNaverLogin = () => {
    const stateString = Math.random().toString(36).substring(2);
    const naverLoginUrl = `http://localhost:3000/login/federated/naver`;
    window.location.href = naverLoginUrl;
  };
  
  const handleKakaoLogin = () => {
    const kakaoLoginUrl = `http://localhost:3000/login/federated/kakao`;
    window.location.href = kakaoLoginUrl;
  };

  return (
    <div className='grid place-items-center mt-36'>
      <Card className='w-[360px]'>
        <CardHeader>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <img
              src={logo}
              alt='Description of image'
              style={{ width: '100px', height: 'auto', marginBottom: '10px' }}
            />
            <CardDescription className='text-inherit text-s'>
              차징은 전기차 사용자를 위한 커뮤니티 플랫폼입니다.
            </CardDescription>
          </div>

          <div style={{ marginTop: '50px', marginBottom: '5px' }}>
            <div className="flex items-center mt-18">
              <div className="border-t border-2 border-gray-300 flex-grow"></div>
              <div className="px-3 text-gray-800 font-semibold text-xl">로 그 인</div>
              <div className="border-t border-2 border-gray-300 flex-grow"></div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4'>
            <Button
              variant='outline'
              className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              onClick={handleGoogleLogin}
            >
              Google로 로그인
            </Button>
            <Button
              variant='outline'
              className='flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
              onClick={handleNaverLogin}
            >
              네이버로 로그인
            </Button>
            <Button
              variant='outline'
              className='flex w-full justify-center rounded-md bg-amber-400 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400'
              onClick={handleKakaoLogin}
            >
              카카오로 로그인
            </Button>
          </div>
        </CardContent>
        
      </Card>
    </div>
  );
};

export default Login;