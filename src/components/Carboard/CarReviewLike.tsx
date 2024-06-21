import { useEffect, useState } from 'react';
//import type & atom
import { userIdAtom } from '@/atoms/auth';
import { carAtom, carReviewDataAtom } from '@/atoms/car';
import { useAtomValue } from 'jotai';
//import image
import yellowthumbup from '@/assets/images/yellowthumbup.png';
import blackthumbup from '@/assets/images/blackthumbup.png';
//import axios
import { PostCarLikes } from '@/apis/carApi';
import { CarReviews } from '@/apis/carApi';
import { carReview } from '@/data/carreview';

const CarReviewLike = (props: { reactionCount: number; review_id: number; state: boolean }) => {
  const selectCar = useAtomValue(carAtom);
  const userId = useAtomValue(userIdAtom);
  const carReviewData = useAtomValue(carReviewDataAtom);

  const [like, setLike] = useState(false);

  const getCarComment = async (carId: number) => {
    try {
      const result = await CarReviews(carId);
      const reviews = result.data.reviews;
      setCarReviewData(reviews);
      console.log('from CarReviewLike', reviews);
    } catch (e) {
      console.log(e);
    }
  };

  if (!selectCar) return null;

  useEffect(() => {
    getCarComment(selectCar.id);
    console.log('from car', props.reactionCount);
  }, [carReviewData]);

  const LikeCorrect = async () => {
    if (!selectCar) return null;
    const result = await PostCarLikes(selectCar.id, props.review_id);
    // setLike(result);
    //여기서 invalidhook 문제 터짐

    console.log(result);
  };
  // 정리
  // 좋아요div를 누르면 selectCar.id @useAtomValue(carAtom);와 carReviewData.reviewId @useAtomValue(carReviewDataAtom);를 읽는다.
  //post 요청을 날린다. @PostCarLikes(selectCar? selectCar.id : 0, carReviewData?.reviewId); 그리고 재렌더링을 한다.
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
    )
  );
};
export default CarReviewLike;
function setCarReviewData(reviews: any) {
  throw new Error('Function not implemented.');
}
