import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';
import axios from 'axios';

// API 호출 함수
const getUserReviewsAPI = async () => {
  try {
    const response = await axios.get(
      'http://kdt-ai-10-team02.elicecoding.com/api/profile/reviews',
      {
        withCredentials: true,
        withXSRFToken: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user reviews');
  }
};

interface Review {
  content: string;
  reactionCount: number; // 수정: string -> number
  time: string;
}

const ProfileCard3 = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getUserReviewsAPI();
        if (data && data.reviews) {
          console.log(data.reviews); // 데이터를 콘솔에 출력하여 확인
          setReviews(data.reviews);
        } else {
          setError('No reviews found');
        }
      } catch (error) {
        console.error('Error fetching user reviews:', error);
        setError('유저 리뷰를 가져오는 데 문제가 발생했습니다.');
      }
    };

    fetchReviews();
  }, []);

  return (
    <Card className='w-full'>
      <CardHeader>
        <h3 className='text-xl font-semibold'>활동 내역</h3>
        <Separator className='my-4' />
      </CardHeader>
      <CardContent>
        {error ? (
          <p className='text-red-500'>{error}</p>
        ) : reviews.length === 0 ? (
          <p className='text-gray-500'>작성된 게시글이 없습니다.</p>
        ) : (
          <Table>
            <TableCaption>유저 활동 내역입니다.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>글 내용</TableHead>
                <TableHead>반응 수</TableHead>
                <TableHead className='text-right'>작성 시간</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reviews.map((review, index) => (
                <TableRow key={index}>
                  <TableCell className='font-medium'>{review.content}</TableCell>
                  <TableCell>{review.reactionCount}</TableCell>
                  <TableCell className='text-right'>
                    {new Date(review.time).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>총 {reviews.length}개의 글</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        )}
      </CardContent>
    </Card>
  );
};

export default ProfileCard3;
