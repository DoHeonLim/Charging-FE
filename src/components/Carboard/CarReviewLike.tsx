import likeicon from '@/assets/images/좋아요 로고.png';
// import { CarReview } from '@/types/car';
// import { useAtomValue } from 'jotai';
// import { carReviewDataAtom } from '@/atoms/car';

// const carReviewData = useAtomValue(carReviewDataAtom);

const CarReviewLike = (props: string | any) => {
  const countstr: string[] = Object.values(props);
  const countnum: number = parseInt(countstr[0]);
  console.log(countnum);
  function LikePlus() {
    const newcount = countnum + 1;
    console.log(newcount);
  }
  return (
    <div className='flex justify-left'>
      <img src={likeicon} />
      <div
        className='text-black hover:text-black/50 hover:cursor-pointer'
        onClick={() => LikePlus()}
      >
        {countnum}
      </div>
    </div>
  );
};
export default CarReviewLike;
