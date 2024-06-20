import { PostCarLikes } from '@/apis/carApi';
import yellowthumbup from '@/assets/images/yellowthumbup.png';
import blackthumbup from '@/assets/images/blackthumbup.png';
// import { CarReview } from '@/types/car';
import { useAtomValue } from 'jotai';
import { carAtom, carReviewDataAtom } from '@/atoms/car';

// const carReviewData = useAtomValue(carReviewDataAtom);

const CarReviewLike = (props: string | any) => {
  const selectCar = useAtomValue(carAtom);
  const carReviewData = useAtomValue(carReviewDataAtom);

  const countstr: string[] = Object.values(props);
  const countnum: number = parseInt(countstr[0]);
  console.log(countnum);
  function LikeCorrect() {
    const newcount = countnum + 1;
    console.log(newcount);
    PostCarLikes(selectCar ? selectCar.id : 0, carReviewData ? carReviewData[0].review_id : 0);
  }
  // 정리
  //로그인이 된 상태에서(도헌님께 여쭤보기 value?)
  // 좋아요div를 누르면 selectCar.id @useAtomValue(carAtom);와 carReviewData.reviewId @useAtomValue(carReviewDataAtom);를 읽는다.
  //post 요청을 날린다. @PostCarLikes(selectCar? selectCar.id : 0, carReviewData?.reviewId); 그리고 재렌더링을 한다.

  // ,,,,,,,,,,if (!userId //도헌님이 말씀하신방법 get.(프로필 어쩌구에서) userId를 가져온다.(로그인이 되어있으면 userId를 가져올 수 있고 그거의 유무로 판단)) {
  //   return (
  //     <div className='flex justify-left items-center'>
  //       {carReviewData ? (
  //         carReviewData[0].state ? (
  //           <img src={yellowthumbup} />
  //         ) : (
  //           <img src={blackthumbup} />
  //         )
  //       ) : null}
  //       <div className='text-black pl-[2px]'>{countnum}</div>
  //     </div>
  //   );
  // }
  return (
    //userId가 있다면(로그인이 되어있다면) 좋아요 버튼에 호버:마우스 커서, 색상바뀜, 눌렀을때 좋아요 수정기능 활성화
    <div
      className='flex justify-left items-center hover:cursor-pointer'
      onClick={() => LikeCorrect()}
    >
      {carReviewData ? (
        carReviewData[0].state ? (
          <img src={yellowthumbup} />
        ) : (
          <img src={blackthumbup} />
        )
      ) : null}
      <div className='text-black hover:text-black/50 pl-[2px]'>{countnum}</div>
    </div>
  );
};
export default CarReviewLike;
