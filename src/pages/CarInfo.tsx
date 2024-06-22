//import type & atom
import { Car } from '@/types/car';
import { carAtom, carDataAtom, carImageDataAtom, carReviewDataAtom, openAtom } from '@/atoms/car';
import { userIdAtom } from '@/atoms/auth';
import { useSetAtom, useAtom } from 'jotai';
//import image
import KoreanCarBrandIcons from '@/data/car-logo';
import GlobalCarBrandIcons from '@/data/car-logo2';
//import function
import { useState, useCallback, useEffect } from 'react';
//import axios
import { Cars, CarImages, CarReviews } from '@/apis/carApi';
import { getUserAPI } from '@/apis/userApi';
import ShowCarDeTailModal from '@/components/Carboard/showcardetailmodal';
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
import { Button } from '@/components/ui/button';

//자동차 게시판
function CarInfo() {
  //상태들
  const [selectedBrand, setSelectedBrand] = useState('현대');
  const setModalIsOpen = useSetAtom(openAtom);
  const [selectCar, setSelectCar] = useAtom(carAtom);
  const [carData, setCarData] = useAtom(carDataAtom);
  const [carImageData, setCarImageData] = useAtom(carImageDataAtom);
  const setCarReviewData = useSetAtom(carReviewDataAtom);
  const [userId, setUserId] = useAtom(userIdAtom);

  const handleSelectCarChange = useCallback((car: Car) => {
    setSelectCar(car);
    setModalIsOpen(true);
  }, []);

  // useEffect(() => {}, [carReviewData]);

  //전체 차량 정보 및 이미지 조회
  const getCars = async () => {
    try {
      const result = await Cars();
      const cars = result.data.cars;
      setCarData(cars);
      const result2 = await CarImages();
      const carImages = result2.data.carsImg;
      setCarImageData(carImages);
      const user = await getUserAPI();
      setUserId(user.data.user_id);
    } catch (e) {
      console.log('로그인이 되어있지 않습니다');
    }
  };
  //페이지 첫 렌더링시 getCars() 실행
  useEffect(() => {
    getCars();
  }, [userId]);

  //개별 차량 리뷰 정보 조회 (개별 차량 클릭 시 실행)
  const getCarComment = async (carId: number) => {
    try {
      const result = await CarReviews(carId);
      const reviews = result.data.reviews;
      setCarReviewData(reviews);
      console.log(reviews);
    } catch (e) {
      console.log(e);
    }
  };
  //selectCar가 변경될 시 바로 렌더링
  useEffect(() => {
    setSelectCar(selectCar); //모달 끌때 null값으로 변경되고 selectCar가 변경되지 않아서 발생하는 문제 -> Modalclose에 setSelectCar(null)추가
    getCarComment(selectCar ? selectCar.id : 0);
  }, [selectCar]);

  //전체 차량 정보 보여주는 컴포넌트 생성
  function ShowCarDescription() {
    const filteredBrandCars = carData
      ? carData.filter((car: Car) => car.brand === selectedBrand)
      : ''; //carData의 요소 중 선택된 브랜드의 차종들
    return (
      filteredBrandCars &&
      filteredBrandCars.map((car: Car, idx) => (
        <div key={idx}>
          <MinimalCard key={car.id} onClick={() => handleSelectCarChange(car)}>
            <MinimalCardImage
              src={carImageData ? carImageData[car.id - 1].img_url : ''}
              //car.id와 carImage의 인덱스가 1차이 남을 이용(현 서비스에서는 차종 추가의 가능성이 희박하기에 사용 가능 but 차종이 추가되거나 인덱스가 섞일 시 사용하기 어려우므로 추후 car.id와 carImageData.car_id가 일치해야 하는 조건 추가)
              alt={car.name}
            />
            <MinimalCardTitle>{car.brand + ' ' + car.name}</MinimalCardTitle>
            <MinimalCardDescription>
              {car.model_year} | 복합전비 : {car.fuel_efficiency} ㎞/kWh | {car.car_type}
            </MinimalCardDescription>
            <Button
              onClick={() => handleSelectCarChange(car)}
              className='w-[64px] h-[48px] hover:bg-yellow-600/75'
            >
              상세보기
            </Button>
          </MinimalCard>
        </div>
      ))
    );
  }

  return (
    <Layout>
      <title className='flex justify-center text-2xl'>전기차 정보 게시판</title>
      <HoverCard openDelay={0.2} closeDelay={0.2}>
        <HoverCardTrigger asChild>
          <Dock>
            {KoreanCarBrandIcons.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setSelectedBrand(item.name);
                  ShowCarDescription();
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
            {GlobalCarBrandIcons.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setSelectedBrand(item.name);
                  ShowCarDescription();
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
          <div className='w-[350px] grid grid-cols-1 sm:grid-cols-2 sm:w-[720px] lg:grid-cols-3 lg:w-[1100px] gap-4'>
            <ShowCarDescription />
            <ShowCarDeTailModal />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CarInfo;
