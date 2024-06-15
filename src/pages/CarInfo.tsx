import Layout from '@/components/Layout/Layout';
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from '@/components/ui/minimal-card';
import carImage from '../assets/images/d.png';
import { Dock, DockIcon } from '@/components/ui/dock';
import Icons from '@/assets/images/car-logo/car-logo';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { useState } from 'react';
// export type IconProps = React.HTMLAttributes<SVGElement>;

function CarInfo() {
  const cards = [
    {
      brandname: 'hyundai',
      content: [
        {
          title: '현대 1',
          description:
            '2024.06 출시 | 소형SUV | 복합전비 5.1~5.4km/kWh ++++++ + + + + + + + ++ + + + + + ++ + ',
        },
        {
          title: '현대 2',
          description: '2024.04 출시 | 준중형 | 복합전비 4.8~5.7km/kWh',
        },
        {
          title: '현대 더 뉴 아이오닉5',
          description: '2024.03 출시 | 중형SUV | 복합전비 4.4~5.2km/kWh',
        },
        {
          title: '현대 4',
          description: '2023.09 출시 | 중형 | 복합전비 4.8',
        },
        {
          title: '현대 5',
          description: 'How to design with',
        },
        // {
        //   title: 'Sick title',
        //   description: 'How to design with
        // {
        //   title: 'Sick title',
        //   description: 'How to design with ',
        // },
      ],
    },

    {
      brandname: 'kia',
      content: [
        {
          title: '기아 1',
          description: '2023.09 출시 | 중형 | 복합전비 4.8',
        },
        {
          title: '기아 2',
          description: 'How to design with',
        },
      ],
    },
    {
      brandname: 'genesis',
      content: [
        {
          title: '제네시스 1',
          description: '2023.09 출시 | 중형 | 복합전비 4.8',
        },
        {
          title: '제네시스 2',
          description: 'How to design with',
        },
        {
          title: '제네시스 3',
          description: 'How to design with',
        },
      ],
    },
    {
      brandname: 'kgm',
      content: [
        {
          title: 'KGM 1',
          description: '2023.09 출시 | 중형 | 복합전비 4.8',
        },
        {
          title: 'KGM 2',
          description: 'How to design with',
        },
        {
          title: 'KGM 3',
          description: 'How to design with',
        },
        {
          title: 'KGM 4',
          description: 'How to design with',
        },
        {
          title: 'KGM 5',
          description: 'How to design with',
        },
        {
          title: 'KGM 6',
          description: 'How to design with',
        },
      ],
    },
  ];
  // const [show, setShow] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState('hyundai'); // 초기값 설정

  function Reveal() {
    const brandCards = cards.find((card) => card.brandname === selectedBrand);

    return (
      // show &&
      brandCards &&
      brandCards.content.map((car, idx) => (
        <MinimalCard key={idx}>
          <MinimalCardImage src={carImage} alt={car.title} />
          <MinimalCardTitle>{car.title}</MinimalCardTitle>
          <MinimalCardDescription>{car.description}</MinimalCardDescription>
        </MinimalCard>
      ))
    );
  }

  return (
    <Layout>
      <title className='flex justify-center text-2xl'>전기차 정보 게시판</title>
      <HoverCard openDelay={0.2} closeDelay={0.2}>
        <HoverCardTrigger asChild>
          <Dock>
            <DockIcon className='hover:[filter:blur(3px)]'>
              <Icons.hyundai
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('hyundai');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.kia
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('kia');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.genesis
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('genesis');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.kgm
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('kgm');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.daechang
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.jeis
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.dpeco
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.cevo
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.maiv
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.evkmc
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.smartev
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.evion
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.mobilitynetworks
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
          </Dock>
        </HoverCardTrigger>
        <HoverCardContent side='top' className='flex justify-center'>
          국내 전기차 브랜드
        </HoverCardContent>
      </HoverCard>
      <HoverCard openDelay={0.2} closeDelay={0.2}>
        <HoverCardTrigger asChild>
          <Dock>
            <DockIcon>
              <Icons.bmw
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.benz
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.audi
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.tesla
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.volkswagen
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.byd
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.lotus
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.polestar
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.volvo
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.lexus
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.lucid
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.rivian
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.dongfeng
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.rollsroyce
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.porsche
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.ford
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.jeep
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.peugeot
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.ds
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
          </Dock>
        </HoverCardTrigger>
        <HoverCardContent className='flex justify-center'>해외 전기차 브랜드</HoverCardContent>
      </HoverCard>
      <div className='w-full max-w-8xl flex justify-center'>
        <div className='min-h-[100px] p-4 rounded-lg'>
          <div className='w-[300px] grid grid-cols-1 sm:grid-cols-2 sm:w-[600px] lg:grid-cols-3 lg:w-[1000px] gap-4'>
            <Reveal />
            {/* {cards.map((card, idx) => (
              <MinimalCard key={idx}>
                <MinimalCardImage src={carImage} alt={card.title} />
                <MinimalCardTitle>{card.title}</MinimalCardTitle>
                <MinimalCardDescription>{card.description}</MinimalCardDescription>
              </MinimalCard>
            ))} */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CarInfo;
