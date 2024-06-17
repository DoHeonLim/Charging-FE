// import logo from '../assets/images/ourlogo.png';

// import { Button } from '@/components/ui/button';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';
// import { Label } from '@/components/ui/label';


// function Login() {
//   return (
//     <div className='grid place-items-center mt-36'>
//       <Card className='w-[350px]'>
//         <CardHeader>
//           <div
//             style={{
//               display: 'flex',
//               flexDirection: 'column', // 자식 요소를 수직으로 나열
//               justifyContent: 'center', // 자식 요소를 수직 가운데 정렬
//               alignItems: 'center', // 자식 요소를 수평 가운데 정렬
//               textAlign: 'center', // 텍스트를 가운데 정렬
//             }}
//           >
//             <img
//               src={logo}
//               alt='Description of image'
//               style={{ width: '100px', height: 'auto', marginBottom: '10px' }}
//             />

//             <CardDescription className='text-inherit text-sm'>
//               차징은 전기차 사용자를 위한 커뮤니티 플랫폼입니다.
//             </CardDescription>
//           </div>

//           <div style={{ marginTop: '40px', marginBottom: '-15px' }}>
//             <CardTitle className='text-3xl font-extrabold'>Log In</CardTitle>
//           </div>
//         </CardHeader>

//         <CardContent>
//           <div className='grid gap-4'>
//             <Button
//               variant='outline'
//               className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
//             >
//               Continue with Google
//             </Button>

//             <Button
//               variant='outline'
//               className='flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
//             >
//               Continue with Naver
//             </Button>

//             <Button
//               variant='outline'
//               className='flex w-full justify-center rounded-md bg-amber-400 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400'
//             >
//               Continue with Kakao
//             </Button>
//           </div>
//         </CardContent>
//         <CardFooter className='flex justify-center'>
//           <p className='mb-0 mt-2 pt-1 text-sm font-semibold'>
//             Don't have an account?{' '}
//             <a
//               href='#!'
//               className='text-orange-500 transition duration-150 ease-in-out hover:text-orange-600 focus:text-orange-600 active:text-orange-700'
//             >
//               Register
//             </a>
//           </p>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }
// export default Login;


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
    // 인증 코드가 URL 쿼리 파라미터에 포함되어 있을 때 처리
    const urlParams = new URLSearchParams(location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');
    const error = urlParams.get('error');

    if (code) {
      // 여기서 백엔드에 인증 코드를 보내고 토큰을 요청합니다.
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
    const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${googleClientId}&scope=openid%20profile%20email&redirect_uri=${googleRedirectUri}`;
    window.location.href = googleLoginUrl;
  };

  const handleNaverLogin = () => {
    const stateString = Math.random().toString(36).substring(2);
    const naverLoginUrl = `https://nid.naver.com/oauth2.0/authorize?client_id=${naverClientId}&response_type=code&redirect_uri=${naverRedirectUri}&state=${stateString}`;
    window.location.href = naverLoginUrl;
  };

  const handleKakaoLogin = () => {
    const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoClientId}&redirect_uri=${kakaoRedirectUri}&response_type=code`;
    window.location.href = kakaoLoginUrl;
  };

  return (
    <div className='grid place-items-center mt-36'>
      <Card className='w-[350px]'>
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
            <CardDescription className='text-inherit text-sm'>
              차징은 전기차 사용자를 위한 커뮤니티 플랫폼입니다.
            </CardDescription>
          </div>
          <div style={{ marginTop: '40px', marginBottom: '-15px' }}>
            <CardTitle className='text-3xl font-extrabold'>Log In</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4'>
            <Button
              variant='outline'
              className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              onClick={handleGoogleLogin}
            >
              Continue with Google
            </Button>
            <Button
              variant='outline'
              className='flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
              onClick={handleNaverLogin}
            >
              Continue with Naver
            </Button>
            <Button
              variant='outline'
              className='flex w-full justify-center rounded-md bg-amber-400 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400'
              onClick={handleKakaoLogin}
            >
              Continue with Kakao
            </Button>
          </div>
        </CardContent>
        <CardFooter className='flex justify-center'>
          <p className='mb-0 mt-2 pt-1 text-sm font-semibold'>
            Don't have an account?{' '}
            <a
              href='#!'
              className='text-orange-500 transition duration-150 ease-in-out hover:text-orange-600 focus:text-orange-600 active:text-orange-700'
            >
              Register
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;