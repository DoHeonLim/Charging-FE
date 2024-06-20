import React from 'react';
import LayoutMain from '@/components/Layout/LayoutMain';
import BackgroundVideo from '../components/ui/backgroundVideo';
import AnimatedText from '../components/ui/animatedText';
import { Button } from '@/components/ui/button';
import {
  CustomLineChart,
  CustomPieChart,
  CustomBarChart,
  CustomTreeMapChart,
} from '@/components/ui/chart';
import forest from '../assets/images/main_picture_charger.jpg';

const Main: React.FC = () => {
  return (
    <LayoutMain>
      <div className='relative min-h-screen overflow-auto flex flex-col'>
        {/* 비디오 배경과 텍스트 */}
        <div className='relative h-screen w-full flex flex-col items-center justify-center'>
          <BackgroundVideo />
          <div className='absolute z-10 text-center text-neutral-600' style={{ right: '150px' }}>
            <h1 className='text-4xl'>
              <AnimatedText text='T.h.i.n.k G.r.e.e.n, D.r.i.v.e C.l.e.a.n' />
            </h1>
          </div>
        </div>

        <div className='flex-grow pt-10 pb-30'>
          <div className='flex flex-col items-center'>
            <CustomLineChart></CustomLineChart>
            <CustomPieChart></CustomPieChart>
            <CustomBarChart></CustomBarChart>
            <CustomTreeMapChart></CustomTreeMapChart>
          </div>
        </div>

        {/* 그래프 아래 페이지 소개글 */}
        <div className='flex-grow bg-white text-white pt-20 pb-30'>
          <div className='flex flex-col items-center'>
            {/* 하단 텍스트와 버튼 */}
            <div className='text-center text-black text-neutral-600 mt-10 mb-20'>
              <h3 className='text-xl mb-4'></h3>
              <p className='pt-20 mb-6 max-w-2xl mx-auto'>
                어떤 말을 넣어야 할지 모르겠다. (추후 수정 필요)
                <br />
                나는 전기차를 사고 싶다.
                <br />
                그런데 전기차에 대한 배경지식이 부족하다.
                <br />
                그래서 어떤 기준으로 전기차를 선택해야 하는지 감이 안잡힌다.
                <br />
                전기차 정보를 한번에 볼 수 있고,
                <br />
                전기차 구매에 대한 다양한 정보를 얻고 싶다.
                <br />
                그런 웹사이트는 없는걸까?
                <br />
              </p>
              <Button
                variant='default'
                size='lg'
                onClick={() => (window.location.href = '/login')}
                className='hover:bg-yellow-500'
              >
                둘러보기
              </Button>
            </div>

            {/* 이미지 박스 */}
            <div className='mt-10'>
              <img src={forest} alt='Forest' className='max-w-full h-auto' />
            </div>
          </div>
        </div>
      </div>
    </LayoutMain>
  );
};

export default Main;

// The Future is Sustainable
// We’re building a world powered by solar energy, running on batteries and transported
//               by electric vehicles. Explore the most recent impact of our products, people and
//               supply chain.
