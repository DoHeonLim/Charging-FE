import React from 'react';
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
import Layout from '@/components/Layout/Layout';
import AnimatedChart from '@/components/Chart/CustomHookWrapper';

const Main: React.FC = () => {
  return (
    <Layout>
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

        <div className='flex flex-col pt-10 pb-30'>
          <div className='flex flex-col items-center'>
            <AnimatedChart>
              <CustomLineChart />
            </AnimatedChart>
            <AnimatedChart>
              <CustomPieChart />
            </AnimatedChart>
            <AnimatedChart>
              <CustomBarChart />
            </AnimatedChart>
            <AnimatedChart>
              <CustomTreeMapChart />
            </AnimatedChart>
          </div>
        </div>

        {/* 그래프 아래 페이지 소개글 */}
        <div className='flex-grow bg-white text-white pb-30'>
          <div className='flex flex-col items-center'>
            {/* 하단 텍스트와 버튼 */}
            <div className='text-center text-black text-neutral-600 mb-40'>
              <h3 className='text-xl mb-4'></h3>
              <p className='pt-20 mb-6 max-w-2xl mx-auto text-xl'>
                미래는 지속 가능합니다.
                <br />
                화석 연료를 태우는 것으로 인한 오염은 매년 전세계적으로 800만명의 조기 사망으로
                이어집니다.
                <br />
                이는 전세계적으로 5명 중 1명의 조기 사망을 차지합니다.
                <br />
                지속 가능한 에너지 경제를 위해서는 채굴과 원료 추출이 덜 필요합니다.
                <br />
                그렇기 때문에 점점 더 많은 사람들이 가격이나 정부의 정책 외의 환경적인 이유로
                전기차를 고려하기 시작했습니다.
                <br />
                그러나 전기차의 구매를 고려할 때, 아직도 많은 자료들이 퍼져 있다는 것을
                발견했습니다.
                <br />
                전기차를 생각하시는 분들과 전기차를 가지고 계신 모든 분들을 위한 깔끔한 커뮤니티,
                차징이 함께 시작합니다.
                <br />
              </p>
              <Button
                variant='default'
                size='lg'
                onClick={() => (window.location.href = '/login')}
                className='hover:bg-yellow-500'
              >
                시작하기
              </Button>
            </div>

            {/* 이미지 박스 */}
            <div className='mt-10'>
              <img src={forest} alt='Forest' className='max-w-full h-auto' />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Main;
