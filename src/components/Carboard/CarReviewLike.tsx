import { useEffect, useState } from 'react';
//import type & atom
import { userIdAtom } from '@/atoms/auth';
import { carAtom, carReviewDataAtom } from '@/atoms/car';
import { useAtomValue, useSetAtom } from 'jotai';
//import image
import yellowthumbup from '@/assets/images/yellowthumbup.png';
import blackthumbup from '@/assets/images/blackthumbup.png';
//import axios
import { PostCarLikes } from '@/apis/carApi';
import { CarReviews } from '@/apis/carApi';

const CarReviewLike = (props: { reactionCount: number; review_id: number; state: boolean }) => {
  const selectCar = useAtomValue(carAtom);
  const userId = useAtomValue(userIdAtom);
  const setCarReviewData = useSetAtom(carReviewDataAtom);

  //좋아요를 눌렀는지 상태값
  const [didlike, setDidLike] = useState(false);

  async function getCarComment(carId: number) {
    try {
      const result = await CarReviews(carId);
      const reviews = result.data.reviews;
      setCarReviewData(reviews);
    } catch (e) {
      console.log(e);
    }
  } //렌더링 및 carReviewData에 변동된 데이터 다시 지정

  if (!selectCar) return null;
  useEffect(() => {
    getCarComment(selectCar.id);
    setDidLike(false);
  }, [didlike]);
  //좋아요 누르면 like state 변동 및 재렌더링

  const LikeCorrect = async () => {
    if (!selectCar) return null;
    setDidLike(true);
    const result = await PostCarLikes(selectCar.id, props.review_id);
    console.log('좋아요 갱신!', result);
  }; //좋아요 누르면 POST 요청이 서버에 가고 콘솔에 찍힘
  return (
    //userId가 있다면(로그인이 되어있다면) 좋아요 버튼에 호버:마우스 커서, 색상바뀜, 눌렀을때 좋아요 수정기능 활성화
    userId ? (
      <div
        className='flex justify-left items-center hover:cursor-pointer w-[25px] h-[25px]'
        onClick={() => {
          LikeCorrect();
        }}
      >
        {props.state ? <img src={yellowthumbup} /> : <img src={blackthumbup} />}
        <div className='text-black hover:text-black/50 pl-[2px]'>{props.reactionCount}</div>
      </div>
    ) : (
      <div className='flex justify-left items-center w-[25px] h-[25px]'>
        {props.state ? <img src={yellowthumbup} /> : <img src={blackthumbup} />}
        <div className='text-black pl-[2px]'>{props.reactionCount}</div>
      </div>
    ) /* state가 true면 노란엄지척 false면 검은엄지척 */
  );
};
export default CarReviewLike;
