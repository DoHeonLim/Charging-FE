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
import { Label } from '@/components/ui/label';


function Login() {
  return (
    <div className='grid place-items-center mt-36'>
      <Card className='w-[350px]'>
        <CardHeader>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column', // 자식 요소를 수직으로 나열
              justifyContent: 'center', // 자식 요소를 수직 가운데 정렬
              alignItems: 'center', // 자식 요소를 수평 가운데 정렬
              textAlign: 'center', // 텍스트를 가운데 정렬
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
            >
              Continue with Google
            </Button>

            <Button
              variant='outline'
              className='flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
            >
              Continue with Naver
            </Button>

            <Button
              variant='outline'
              className='flex w-full justify-center rounded-md bg-amber-400 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400'
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
}
export default Login;
