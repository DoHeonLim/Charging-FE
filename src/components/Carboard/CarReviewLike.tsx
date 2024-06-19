import likeicon from '@/assets/images/좋아요 로고.png';
import { like } from '@/data/like';
import axios from 'axios';
axios.get('//localhost:3000/');
const CarReviewLike = () => {
  //   function LikePlus() {}
  return (
    <div className='flex'>
      <img src={likeicon} />
      <div className='text-black hover:text-black/50 hover:cursor-pointer'>
        {/* onClick={() => LikePlus()} */}
        {like[0].count}
      </div>
    </div>
  );
};
export default CarReviewLike;
