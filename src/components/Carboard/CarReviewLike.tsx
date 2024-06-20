import likeicon from '@/assets/images/좋아요 로고.png';
import { CarReview } from '@/types/car';
import { useAtomValue } from 'jotai';
import { carReviewDataAtom } from '@/atoms/car';

// const carReviewData = useAtomValue(carReviewDataAtom);

const CarReviewLike = (props: string | any) => {
  //   function LikePlus() {}

  const count: Array<number> = Object.values(props);
  console.log(count[0]);
  return (
    <div className='flex justify-left'>
      <img src={likeicon} />
      <div className='text-black hover:text-black/50 hover:cursor-pointer'>
        {/* onClick={() => LikePlus()} */}
        {count[0]}
      </div>
    </div>
  );
};
export default CarReviewLike;
