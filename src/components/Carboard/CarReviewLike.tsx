import { PostCarLikes } from '@/apis/carApi';
import yellowthumbup from '@/assets/images/yellowthumbup.png';
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
    // PostCarLikes(selectCar? selectCar.id : 0, carReviewData?.reviewId);
  }
  // const 새로받아오는 값(carReviewData에 담겨올수도 있음/ 그럼 선언필요없) = useAtomValue(새로받아올아톰);
  //  if(!carReviewData.status)
  // //  !새로받아오는 값(boolean형태)
  //  {
  //   return (
  //     <div className='flex justify-left'>
  //       <img src={likeicon} /> *여기 아이콘 하고 색상 만 다르게!*
  //       <div
  //         className='text-black hover:text-black/50 hover:cursor-pointer'
  //         onClick={() => LikeCorrect()}
  //       >
  //         {countnum}
  //       </div>
  //     </div>
  //   );
  //  }
  //  else {
  return (
    <div
      className='flex justify-left items-center hover:cursor-pointer'
      onClick={() => LikeCorrect()}
    >
      <img src={yellowthumbup} />
      <div className='text-black hover:text-black/50 pl-[2px]'>{countnum}</div>
    </div>
  );
  // }
};

export default CarReviewLike;
