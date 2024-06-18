import React from 'react';
import LayoutMain from '@/components/Layout/LayoutMain';
import BackgroundVideo from '../components/ui/backgroundVideo';
import AnimatedText from '../components/ui/animatedText';

const Main: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundVideo />
      <div className="relative z-10">
        <LayoutMain>
        <div className="absolute right-0 transform -translate-y-1/2 mr-[170px] mt-[300px] text-neutral-500">
            <h1 className="text-4xl">
              <AnimatedText text="Think Green, Drive Clean" />
            </h1>
          </div> 
        </LayoutMain>
       
      </div>
    </div>
  );
};

export default Main;