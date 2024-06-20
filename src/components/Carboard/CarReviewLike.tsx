import { CarReviews, PostCarLikes } from '@/apis/carApi';
import yellowthumbup from '@/assets/images/yellowthumbup.png';
import blackthumbup from '@/assets/images/blackthumbup.png';
import { useAtomValue, useSetAtom } from 'jotai';
import { carAtom, carReviewDataAtom } from '@/atoms/car';
import { userIdAtom } from '@/atoms/auth';
import { useState, useRef, useEffect } from 'react';

// props는 카운트 수
const CarReviewLike = (props: { reactionCount: number; review_id: number }) => {
  const selectCar = useAtomValue(carAtom);
  const carReviewData = useAtomValue(carReviewDataAtom);
  const userId = useAtomValue(userIdAtom);
  // const [selectReview, setSelectReview] = useState(0);

  // const getCount = async () => {
  //   try {
  //     if (!selectCar) return null;
  //     const result = await CarReviews(selectCar.id);
  //     const reviews = result.data.reviews;
  //     setcarReviewData(reviews);
  //     console.log(reviews);
  //   } catch (e) {}
  // };

  // useEffect(() => {
  //   getCount();
  // }, []);

  // const countstr: string[] = Object.values(props);
  // const countnum: number = parseInt(countstr[0]);
  // // console.log(countnum);

  const LikeCorrect = async () => {
    if (!selectCar) return null;
    // setSelectReview();

    // const newcount = countnum + 1;

    const result = await PostCarLikes(selectCar.id, props.review_id);
    console.log(result);
  };
  // 정리
  // 좋아요div를 누르면 selectCar.id @useAtomValue(carAtom);와 carReviewData.reviewId @useAtomValue(carReviewDataAtom);를 읽는다.
  //post 요청을 날린다. @PostCarLikes(selectCar? selectCar.id : 0, carReviewData?.reviewId); 그리고 재렌더링을 한다.
  return (
    //userId가 있다면(로그인이 되어있다면) 좋아요 버튼에 호버:마우스 커서, 색상바뀜, 눌렀을때 좋아요 수정기능 활성화
    userId ? (
      <div
        className='flex justify-left items-center hover:cursor-pointer'
        onClick={() => {
          LikeCorrect();
        }}
      >
        {carReviewData ? (
          carReviewData[0].state ? (
            <img src={yellowthumbup} />
          ) : (
            <img src={blackthumbup} />
          )
        ) : null}
        <div className='text-black hover:text-black/50 pl-[2px]'>{props.reactionCount}</div>
      </div>
    ) : (
      <div className='flex justify-left items-center'>
        {carReviewData ? (
          carReviewData[0].state ? (
            <img src={yellowthumbup} />
          ) : (
            <img src={blackthumbup} />
          )
        ) : null}
        <div className='text-black pl-[2px]'>{props.reactionCount}</div>
      </div>
    )
  );
};
export default CarReviewLike;
