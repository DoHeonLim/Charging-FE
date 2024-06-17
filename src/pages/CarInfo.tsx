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
import { carData } from '@/data/car';
// export type IconProps = React.HTMLAttributes<SVGElement>;

function CarInfo() {
  const [selectedBrand, setSelectedBrand] = useState('현대');

  function Reveal() {
    const filteredBrandCars = carData[0].cars.filter((car) => car.brand === selectedBrand);

    return (
      filteredBrandCars &&
      filteredBrandCars.map((car) => (
        <MinimalCard key={car.id}>
          <MinimalCardImage src={carImage} alt={car.name} />
          <MinimalCardTitle>{car.brand + ' ' + car.name}</MinimalCardTitle>
          <MinimalCardDescription>
            {car.model_year} | 복합전비 : {car.fuel_efficiency} ㎞/kWh | {car.car_type}
          </MinimalCardDescription>
        </MinimalCard>
      ))
    );
  }

  // function makeDockicon(props){
  //   const IconsProps = Icons[props.brandtype];
  //   return (
  //     <DockIcon>
  //       <IconsProps brand = {props.brandtype}
  //         className='h-6 w-6'
  //         onClick={() => {
  //           setSelectedBrand('현대');
  //           Reveal();
  //         }}
  //          />
  //     </DockIcon>
  //   );
  // }

  return (
    <Layout>
      <title className='flex justify-center text-2xl'>전기차 정보 게시판</title>
      <HoverCard openDelay={0.2} closeDelay={0.2}>
        <HoverCardTrigger asChild>
          <Dock>
            <DockIcon>
              <Icons.hyundai
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('현대');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.kia
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('기아');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.genesis
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('제네시스');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.kgm
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('KGM');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.daechang
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('대창 모터스');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.jeis
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('제이스모빌리티');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.dpeco
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('디피코');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.cevo
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('쎄보');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.maiv
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('마이브');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.evkmc
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('EVKMC');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.smartev
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('스마트');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.evion
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('이비온');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.mobilitynetworks
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('모빌리티네트웍스');
                  Reveal();
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
                  setSelectedBrand('BMW');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.benz
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('벤츠');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.audi
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('아우디');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.tesla
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('TESLA');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.volkswagen
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('폭스바겐');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.byd
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('BYD');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.lotus
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('로터스');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.polestar
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('폴스타');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.volvo
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('볼보');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.lexus
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('렉서스');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.lucid
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('루시드');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.rivian
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('리비안');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.dongfeng
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('동풍');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.rollsroyce
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('롤스로이스');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.porsche
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('포르쉐');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.ford
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('포드');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.jeep
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('지프');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.peugeot
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('푸조');
                  Reveal();
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.ds
                className='h-6 w-6'
                onClick={() => {
                  setSelectedBrand('DS3');
                  Reveal();
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
