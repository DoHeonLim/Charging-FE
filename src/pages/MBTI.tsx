import Layout from '@/components/Layout/Layout';

import MBTIImg from '../assets/images/MBTI.png';
import { Button } from '@/components/ui/button';
import logoImg from '../assets/images/small_logo.png';
import { useNavigate } from 'react-router-dom';

function MBTI() {
  const navigate = useNavigate();

  const navigateToMBTITest = () => {
    navigate('/mbti/test');
  };
  return (
    <Layout>
      <div className='relative w-[100vw] h-[50vw]'>
        <img src={MBTIImg} className='w-[100vw] h-[53vw]' />
        <img src={logoImg} className='absolute top-[10vw] left-[44vw] w-[10vw] h-[6vw]' />
        <Button
          className='absolute top-[23vw] left-[45vw] text-3xl w-48 h-20 hover:bg-orange-400 w-[10vw] h-[3vw]'
          onClick={navigateToMBTITest}
        >
          시작
        </Button>
      </div>
      {/* <MBTIForm /> */}
    </Layout>
  );
}

export default MBTI;
