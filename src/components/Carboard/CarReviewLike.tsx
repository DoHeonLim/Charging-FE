import likeicon from '@/assets/images/좋아요 로고.png';
import { CarReview } from '@/types/car';
import { useAtomValue } from 'jotai';
import { carReviewDataAtom } from '@/atoms/car';
// const carReviewData = useAtomValue(carReviewDataAtom);
const CarReviewLike = () => {
  //   function LikePlus() {}
  return (
    <div className='flex'>
      <img src={likeicon} />
      <div className='text-black hover:text-black/50 hover:cursor-pointer'>
        {/* onClick={() => LikePlus()} */}
        {/* {carReviewData ? carReviewData[0].reactionCount : ''} */}
      </div>
    </div>
  );
};
export default CarReviewLike;
