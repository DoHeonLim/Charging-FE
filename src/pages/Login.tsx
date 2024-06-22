import logo from '../assets/images/ourlogo.png';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';

const Login = () => {
  // const navigate = useNavigate();

  const handleGoogleLogin = () => {
    const googleLoginUrl = `http://kdt-ai-10-team02.elicecoding.com/api/login/federated/google`;
    window.location.href = googleLoginUrl;
  };

  const handleNaverLogin = () => {
    const naverLoginUrl = `http://kdt-ai-10-team02.elicecoding.com/api/login/federated/naver`;
    window.location.href = naverLoginUrl;
  };

  const handleKakaoLogin = () => {
    const kakaoLoginUrl = `http://kdt-ai-10-team02.elicecoding.com/api/login/federated/kakao`;
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
    </div>
  );
};

export default Login;
