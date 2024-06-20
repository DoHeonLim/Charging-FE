import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import axios from 'axios';
import WhiteIcon from '../assets/images/userXmark'; // React 컴포넌트로 사용될 SVG

export function AccountForm() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleAccountDelete = async () => {
    if (isChecked) {
      try {
        // 계정 삭제 요청 보내기
        await axios.delete('/profile', { withCredentials: true });
        alert('회원 탈퇴가 완료되었습니다.');
        // 추가적으로 로그아웃 처리 및 리다이렉트 할 수 있습니다.
        window.location.href = '/';
      } catch (error) {
        console.error('계정 삭제 실패:', error);
        alert('계정 삭제에 실패했습니다.');
      }
    } else {
      alert('계정 삭제에 관한 주의 사항에 동의해 주세요.');
    }
  };

  return (
    <div className="space-y-8 p-4 w-full"> 
      <h1 className="text-3xl font-bold mb-4">계정 삭제</h1>
      <Separator className="my-8" />

      <div className="mt-4 mb-4 flex items-start space-x-4">
      
      <svg width="40px" height="40px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet">
        <path d="M5.9 62c-3.3 0-4.8-2.4-3.3-5.3L29.3 4.2c1.5-2.9 3.9-2.9 5.4 0l26.7 52.5c1.5 2.9 0 5.3-3.3 5.3H5.9z" fill="#ffce31">
        </path>
        <g fill="#231f20">
        <path d="M27.8 23.6l2.8 18.5c.3 1.8 2.6 1.8 2.9 0l2.7-18.5c.5-7.2-8.9-7.2-8.4 0">
        </path><circle cx="32" cy="49.6" r="4.2"></circle></g>
      </svg>

        <div className="flex flex-col text-ml">
          <p>회원 탈퇴일로부터 계정과 닉네임을 포함한 계정 정보(아이디/이메일/닉네임)는</p>
          <p>60일간 보관(잠김)되며, 60일 경과된 후에는 모든 개인 정보는 완전히 삭제되며 더 이상 복구할 수 없게 됩니다.</p>
        </div>
      </div>

      <div className="mb-4">
        <input
          type="checkbox"
          id="account-delete-checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        <label htmlFor="account-delete-checkbox">계정 삭제에 관한 주의 사항을 읽고 이에 동의합니다.</label>
      </div>

      <div className="flex justify-end"> {/* 버튼을 오른쪽 끝으로 정렬 */}
        <Button
          onClick={handleAccountDelete}
          disabled={!isChecked}
          className={`bg-red-500 text-white py-2 px-10 rounded ${
            isChecked ? 'hover:bg-red-700' : 'opacity-50 cursor-not-allowed'
          } flex items-center`}
        >
          <WhiteIcon className="w-4 h-4 mr-2" />
          회원 탈퇴
        </Button>
      </div>
    </div>
  );
}

export default AccountForm;




