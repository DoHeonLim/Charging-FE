import Layout from '@/components/Layout/Layout';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import { WobbleCard } from '@/components/ui/wobble-card';

import testImg from '../assets/images/d.png';

function Main() {
  const imageUrl =
    'https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  return (
    <Layout>
      <div className='h-[40rem] relative  flex items-center justify-center'>
        <DirectionAwareHover imageUrl={imageUrl}>
          <p className='font-bold text-xl'>In the mountains</p>
          <p className='font-normal text-sm'>$1299 / night</p>
        </DirectionAwareHover>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full'>
        <WobbleCard
          containerClassName='col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]'
          className=''
        >
          <div className='max-w-xs'>
            <h2 className='text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white'>
              유저친화적 디자인
            </h2>
            <p className='mt-4 text-left  text-base/6 text-neutral-200'>
              With over 100,000 mothly active bot users, Gippity AI is the most popular AI platform
              for developers.
            </p>
          </div>
          <img
            src={testImg}
            width={500}
            height={500}
            alt='linear demo image'
            className='absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl'
          />
        </WobbleCard>
        <WobbleCard containerClassName='col-span-1 min-h-[300px]'>
          <h2 className='max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white'>
            전기차 정보 공유
          </h2>
          <p className='mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200'>
            If someone yells “stop!”, goes limp, or taps out, the fight is over.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName='col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]'>
          <div className='max-w-sm'>
            <h2 className='max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white'>
              전기차 충전소 한눈에 확인!!
            </h2>
            <p className='mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200'>
              With over 100,000 mothly active bot users, Gippity AI is the most popular AI platform
              for developers.
            </p>
          </div>
          <img
            src={testImg}
            width={500}
            height={500}
            alt='linear demo image'
            className='absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl'
          />
        </WobbleCard>
      </div>
    </Layout>
  );
}

export default Main;
