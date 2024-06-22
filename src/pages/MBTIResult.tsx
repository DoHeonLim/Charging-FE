import { MBTIAtom } from '@/atoms/MBTI';
import Layout from '@/components/Layout/Layout';
import { useAtomValue } from 'jotai';
import { resultMBTI } from '../data/MBTI';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import car from '../assets/images/car.png';
import angel from '../assets/images/wings.png';
import devil from '../assets/images/devil.png';
import road from '../assets/images/road.png';

/**
 * @mbti MBTI
 * @tendency 성향
 * @road 도로
 * @description 설명
 * @recommendCar 추천 자동차
 * @reason 이유
 */
type Result = {
  mbti: string;
  tendency: string;
  road: string;
  description: string;
  recommendCar: string;
  reason: string;
  src: string;
  best: string;
  worst: string;
};

function MBTIResult() {
  const MBTI = useAtomValue(MBTIAtom);
  const [result, setResult] = useState<Result>();

  useEffect(() => {
    setResult(resultMBTI.find((item) => item.mbti === MBTI));
    console.log(result);
  });
  if (!result) return null;

  return (
    <Layout>
      <div className='flex content-center justify-center'>
        <Card className='w-[900px] h-auto mt-[150px] border-orange-200 border-4'>
          <CardHeader className='flex justify-center'>
            <CardTitle className='flex justify-center text-5xl'>{result.tendency}</CardTitle>
            <CardTitle className='flex justify-center text-[#FAC40D] text-4xl'>
              {result.mbti}
            </CardTitle>
          </CardHeader>
          <CardContent className='flex-column justify-center content-center'>
            <div className='flex justify-center'>
              <img className='w-auto h-auto flex content-center' src={result.src} />
            </div>
            <div className='flex justify-center gap-4'>
              <img className='w-12 h-12' src={car} />
              <div className='flex justify-center text-2xl mt-2 font-bold'>
                어울리는 차 : {result.recommendCar}
              </div>
            </div>
            <div className='flex justify-center gap-4'>
              <img className='w-10 h-10' src={road} />
              <div className='flex justify-center text-2xl mt-2 font-bold'>
                어울리는 도로 : {result.road}
              </div>
            </div>
            <div className='flex justify-center text-2xl mt-4 leading-loose font-bold'>
              {result.reason}
            </div>
            <div className='flex justify-center justify-items-center text-2xl mt-4 leading-loose font-bold'>
              {result.description}
            </div>
            <div className='flex justify-center gap-20 mt-12'>
              <Card className='flex-column p-8'>
                <div className='text-2xl text-blue-800 font-bold'>영혼의 단짝</div>
                <img className='ml-4 w-24 h-24' src={angel} />
                <div className='flex justify-center text-xl font-bold'>{result.best}</div>
              </Card>
              <Card className='flex-column p-8'>
                <div className='text-2xl text-red-800 font-bold'>같이하면 지옥</div>
                <img className='ml-6 w-24 h-24' src={devil} />
                <div className='flex justify-center text-xl font-bold'>{result.worst}</div>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

export default MBTIResult;
