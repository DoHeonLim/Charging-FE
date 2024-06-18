import React from 'react';
import LayoutMain from '@/components/Layout/LayoutMain';
import BackgroundVideo from '../components/ui/backgroundVideo';
import AnimatedText from '../components/ui/animatedText';
import { Button } from '@/components/ui/button';
import forest from '../assets/images/forest-black.jpg';

const Main: React.FC = () => {
  return (
    <LayoutMain>
      <div className="relative min-h-screen overflow-auto flex flex-col">
        {/* 비디오 배경과 상단 텍스트 */}
        <div className="relative h-screen w-full flex flex-col items-center justify-center">
          <BackgroundVideo />
          <div className="absolute z-10 text-center text-neutral-500"
            style={{ right: '150px' }}>
            <h1 className="text-4xl">
              <AnimatedText text="Think Green, Drive Clean" />
            </h1>
          </div>
        </div>

        {/* 비디오 아래 빈 박스 */}
        <div className="flex-grow bg-black text-white pt-20 pb-30">
          <div className="flex flex-col items-center">
            {/* 하단 텍스트와 버튼 */}
            <div className="text-center text-white mb-20">
              <h3 className="text-xl mb-4">The Future is Sustainable</h3>
              <p className="mb-6 max-w-2xl mx-auto">
                We’re building a world powered by solar energy, running on batteries and transported by electric vehicles. Explore the most recent impact of our products, people and supply chain.
              </p>
              <Button 
                variant="default" 
                size="lg"
                onClick={() => window.location.href='/login'}
                className="bg-yellow-500 hover:bg-yellow-600"
              >
                Explore Impact
              </Button>
            </div>

            {/* 이미지 박스 */}
            <div className="mt-10">
              <img src={forest} alt="Forest" className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </LayoutMain>
  );
};

export default Main;
