import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSetAtom } from 'jotai';
import logo from '../assets/images/ourlogo.png';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { userIdAtom } from '@/atoms/auth';
import { getUserAPI } from '@/apis/userApi';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
 
  const setUserId = useSetAtom(userIdAtom);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');
    const error = urlParams.get('error');

    if (code) {
      axios
        .post('http://localhost:3000/api/auth/social-login', { code, state }, { withCredentials: true })
        .then(async () => {
          try {
            const user = await getUserAPI();
            setUserId(user.data.user.user_id); // 사용자 ID를 Jotai 상태에 저장
            toast.success('로그인이 성공적으로 되었습니다.');
            navigate('/dashboard'); // 로그인 성공 후 대시보드로 리디렉션
          } catch (userError) {
            console.error('Error fetching user info:', userError);
            toast.error('로그인이 실패했습니다. 다시 시도해주세요.');
            navigate('/login'); // 실패 시 로그인 페이지로 리디렉션
          }
        })
        .catch((error) => {
          console.error('Error during social login', error);
          toast.error('로그인이 실패했습니다. 다시 시도해주세요.');
          navigate('/login'); // 실패 시 로그인 페이지로 리디렉션
        });
    }

    if (error) {
      console.error('Error during social login', error);
      toast.error('로그인이 실패했습니다. 다시 시도해주세요.');
      navigate('/login'); // 실패 시 로그인 페이지로 리디렉션
    }
  }, [location, navigate, setUserId]);

  const handleGoogleLogin = () => {
    const googleLoginUrl = `http://localhost:3000/login/federated/google`;
    window.location.href = googleLoginUrl;
  };

  const handleNaverLogin = () => {
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
            <div className='flex items-center mt-18'>
              <div className='border-t border-2 border-gray-300 flex-grow'></div>
              <div className='px-3 text-gray-800 font-semibold text-xl'>로 그 인</div>
              <div className='border-t border-2 border-gray-300 flex-grow'></div>
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
      <ToastContainer /> {/* ToastContainer를 추가하여 알림을 표시 */}
    </div>
  );
};

export default Login;
