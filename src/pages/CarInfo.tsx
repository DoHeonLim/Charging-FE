//import component
import Layout from '@/components/Layout/Layout';
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from '@/components/ui/minimal-card';
import { Dock, DockIcon } from '@/components/ui/dock';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import ModalExample from '@/components/ui/modalexample';
import { Button } from '@/components/ui/button';
//import data
// import { carData } from '@/data/car';
//import type & atom
import { Car } from '@/types/car';
import { carAtom, carDataAtom, openAtom } from '@/atoms/car';
import { useSetAtom, useAtom } from 'jotai';
//import image
import carImage from '../assets/images/d.png';
import KoreanCarIcons from '@/assets/images/car-logo/car-logo';
import GlobalCarIcons from '@/assets/images/car-logo/car-logo2';
//import function
import { useState, useCallback, useEffect } from 'react';
//import axios
import axios from 'axios';

function CarInfo() {
  const [selectedBrand, setSelectedBrand] = useState('현대');
  const setModalIsOpen = useSetAtom(openAtom);
  const [selectCar, setSelectCar] = useAtom(carAtom);
  const [carData, setCarData] = useAtom(carDataAtom);
  const onClickSelectCar = useCallback((car: Car) => {
    setSelectCar(car);
    setModalIsOpen(true);
  }, []);

  useEffect(() => {
    setSelectCar(selectCar);
  }, [selectCar]);

  useEffect(() => {
    getCars();
    // axios.get('//localhost:3000/cars').then((res) => {
    //   const result = res.data.cars;
    //   setCarData(result);
    //   console.log(carData);
    // });
  }, []);

  const getCars = async () => {
    const result = await axios.get<{ cars: Car[] }, any>('//localhost:3000/cars');
    const cars = result.data.cars;
    setCarData(cars);
    console.log(carData);
  };
  // function Reveal() {
  //   const filteredBrandCars = carData ? [0].filter((car: Car) => car.brand === selectedBrand) : '';
  //   return (
  //     filteredBrandCars &&
  //     filteredBrandCars.map((car: Car, idx: any) => (
  //       <div key={idx}>
  //         <MinimalCard key={car.id} onClick={() => onClickSelectCar(car)}>
  //           {/* //car */}
  //           <MinimalCardImage src={carImage} alt={car.name} />
  //           <MinimalCardTitle>{car.brand + ' ' + car.name}</MinimalCardTitle>
  //           <MinimalCardDescription>
  //             {car.model_year} | 복합전비 : {car.fuel_efficiency} ㎞/kWh | {car.car_type}
  //           </MinimalCardDescription>
  //           <Button
  //             onClick={() => onClickSelectCar(car)}
  //             className='w-[64px] h-[48px] hover:bg-yellow-600/75'
  //           >
  //             상세보기
  //           </Button>
  //         </MinimalCard>
  //       </div>
  //     ))
  //   );
  // }

  return (
    <Layout>
      <title className='flex justify-center text-2xl'>전기차 정보 게시판</title>
      <HoverCard openDelay={0.2} closeDelay={0.2}>
        <HoverCardTrigger asChild>
          <Dock>
            {KoreanCarIcons.map((item) => (
              <div
                onClick={() => {
                  setSelectedBrand(item.name);
                  // Reveal();
                }}
              >
                <DockIcon>
                  <img src={item.src} className='w-[36px] h-[36px]' />
                </DockIcon>
              </div>
            ))}
          </Dock>
        </HoverCardTrigger>
        <HoverCardContent side='top' className='flex justify-center'>
          국내 전기차 브랜드
        </HoverCardContent>
      </HoverCard>
      <HoverCard openDelay={0.2} closeDelay={0.2}>
        <HoverCardTrigger asChild>
          <Dock>
            {GlobalCarIcons.map((item) => (
              <div
                onClick={() => {
                  setSelectedBrand(item.name);
                  // Reveal();
                }}
              >
                <DockIcon>
                  <img src={item.src} className='w-[36px] h-[36px]' />
                </DockIcon>
              </div>
            ))}
          </Dock>
        </HoverCardTrigger>
        <HoverCardContent className='flex justify-center'>해외 전기차 브랜드</HoverCardContent>
      </HoverCard>
      <div className='w-full min-h-[800px] max-w-8xl flex justify-center'>
        <div className='min-h-[100px] p-4 rounded-lg'>
          <div className='w-[300px] grid grid-cols-1 sm:grid-cols-2 sm:w-[600px] lg:grid-cols-3 lg:w-[1000px] gap-4'>
            {/* <Reveal /> */}
            <ModalExample />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CarInfo;
