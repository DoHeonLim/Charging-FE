// // import React, { useState, useEffect } from 'react';
// // import { Button } from '@/components/ui/button';
// // import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
// // import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogDescription,
// //   DialogFooter,
// //   DialogHeader,
// //   DialogTitle,
// //   DialogTrigger,
// // } from '@/components/ui/dialog';
// // import { Input } from '@/components/ui/input';
// // import { Label } from '@/components/ui/label';

// // // interface ProfileCard1Props {
// // //   initialName: string;
// // //   initialNickname: string;
// // //   // profileImage: string;
// // // }

// // const ProfileCard1 = (props: {
// //   initialName: string;
// //   initialNickname: string;
// //   // profileImage: string;
// // }) => {
// //   const [formData, setFormData] = useState({
// //     name: props.initialName,
// //     nickname: props.initialNickname,
// //   });
// //   const [image, setImage] = useState<string | null>(null);
// //   const [open, setOpen] = useState(false);
// //   const [nicknameError, setNicknameError] = useState<string | null>(null);

// //   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     if (event.target.files && event.target.files[0]) {
// //       const reader = new FileReader();
// //       reader.onload = (e) => {
// //         if (e.target?.result) {
// //           setImage(e.target.result as string);
// //         }
// //       };
// //       reader.readAsDataURL(event.target.files[0]);
// //     }
// //   };

// //   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     const { id, value } = event.target;
// //     setFormData((prevFormData) => ({
// //       ...prevFormData,
// //       [id]: value,
// //     }));
// //   };

// //   useEffect(() => {
// //     const { nickname } = formData;
// //     if (nickname.length < 2 || nickname.length > 10) {
// //       setNicknameError('닉네임은 2글자 이상, 10글자 이하로 입력해 주세요.');
// //     } else {
// //       setNicknameError(null);
// //     }
// //   }, [formData.nickname]);

// //   const handleSaveChanges = () => {
// //     if (!nicknameError) {
// //       setOpen(false);
// //       alert('저장이 완료되었습니다.');
// //     }
// //   };

// //   return (
// //     <Card className='w-[380px]'>
// //       <CardHeader />
// //       <CardContent>
// //         <div className='flex flex-col items-start'>
// //           <div className='flex items-center justify-between flex-wrap gap-6'>
// //             <div className='flex items-center gap-6'>
// //               <Avatar className='w-24 h-24 rounded-lg shadow-lg shadow-blue-gray-500/40'>
// //                 {image ? (
// //                   <AvatarImage src={image} alt='Profile Image' />
// //                 ) : (
// //                   <AvatarFallback>RD</AvatarFallback>
// //                 )}
// //               </Avatar>
// //               <div>
// //                 <h3>{formData.name}</h3>
// //                 <p>{formData.nickname}</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </CardContent>
// //       <CardFooter className='flex justify-end'>
// //         <Dialog open={open} onOpenChange={setOpen}>
// //           <DialogTrigger asChild>
// //             <Button
// //               variant='outline'
// //               className='bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded'
// //             >
// //               정보수정
// //             </Button>
// //           </DialogTrigger>
// //           <DialogContent className='sm:max-w-[425px]'>
// //             <DialogHeader>
// //               <DialogTitle>프로필 수정</DialogTitle>
// //               <DialogDescription>프로필 정보를 수정하고 이미지를 변경하세요.</DialogDescription>
// //             </DialogHeader>
// //             <div className='flex flex-col gap-4 py-4'>
// //               <div className='flex flex-col gap-1'>
// //                 <Label htmlFor='nickname' className='text-left'>
// //                   닉네임
// //                 </Label>
// //                 <Input id='nickname' value={formData.nickname} onChange={handleInputChange} />
// //                 {nicknameError && <p className='text-xs text-red-500 mt-1'>{nicknameError}</p>}
// //                 {!nicknameError && (
// //                   <p className='text-xs text-gray-400 mt-1'>
// //                     닉네임은 2글자 이상, 10글자 이하로 입력해 주세요.
// //                   </p>
// //                 )}
// //               </div>
// //               <div className='flex flex-col gap-1'>
// //                 <Label htmlFor='image' className='text-left'>
// //                   이미지
// //                 </Label>
// //                 <Input id='image' type='file' accept='image/*' onChange={handleImageChange} />
// //               </div>
// //               <p className='text-xs text-gray-400 mt-1'>권장 사이즈: 150px / 최대 250KB</p>
// //             </div>
// //             <DialogFooter>
// //               <Button
// //                 type='button'
// //                 onClick={handleSaveChanges}
// //                 className='bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded'
// //               >
// //                 저장
// //               </Button>
// //             </DialogFooter>
// //           </DialogContent>
// //         </Dialog>
// //       </CardFooter>
// //     </Card>
// //   );
// // };

// // export default ProfileCard1;
// import React, { useState } from 'react';
// import { Separator } from '@/components/ui/separator';
// import ProfileCard1 from './ProfileCard1';
// import ProfileCard2 from './ProfileCard2';
// import ProfileCard3 from './ProfileCard3';

// export function ProfileForm() {
//   const [profileImage, setProfileImage] = useState<string | null>(null);

//   const handleProfileImageChange = (newImage: string | null) => {
//     setProfileImage(newImage);
//   };

//   return (
//     <div className='space-y-8 p-4'>
//       <div className=' w-full'>
//         <h1 className='text-3xl font-bold mb-4'>계정 관리</h1>
//         <Separator className='my-8' />
//       </div>
//       <div className='flex flex-col gap-4'>
//         <div className='flex flex-col lg:flex-row gap-4'>
//           {/* 첫 번째 카드 */}
//           <div className='flex-1'>
//             {' '}
//             {/* flex-grow 적용 */}
//             <ProfileCard1
//               initialName='유저이름'
//               initialNickname='유저닉네임'
//               profileImage={profileImage}
//               onProfileImageChange={handleProfileImageChange}
//             />
//           </div>

//           {/* 두 번째 카드 */}
//           <div className='flex-1'>
//             {' '}
//             {/* flex-grow 적용 */}
//             <ProfileCard2 initialName='보유 차량' initialNickname='차종' />
//           </div>
//         </div>

//         {/* 세 번째 카드 */}
//         <div className='w-full'>
//           {' '}
//           {/* 동일 너비 */}
//           <ProfileCard3 />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProfileForm;
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface ProfileCard1Props {
  initialName: string;
  initialNickname: string;
}

const ProfileCard1: React.FC<ProfileCard1Props> = ({ initialName, initialNickname }) => {
  const [formData, setFormData] = useState({
    name: initialName,
    nickname: initialNickname,
  });
  const [image, setImage] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [nicknameError, setNicknameError] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  useEffect(() => {
    const { nickname } = formData;
    if (nickname.length < 2 || nickname.length > 10) {
      setNicknameError('닉네임은 2글자 이상, 10글자 이하로 입력해 주세요.');
    } else {
      setNicknameError(null);
    }
  }, [formData.nickname]);

  const handleSaveChanges = () => {
    if (!nicknameError) {
      setOpen(false);
      alert('저장이 완료되었습니다.');
    }
  };

  return (
    <Card className='w-[380px]'>
      <CardHeader />
      <CardContent>
        <div className='flex flex-col items-start'>
          <div className='flex items-center justify-between flex-wrap gap-6'>
            <div className='flex items-center gap-6'>
              <Avatar className='w-24 h-24 rounded-lg shadow-lg shadow-blue-gray-500/40'>
                {image ? (
                  <AvatarImage src={image} alt='Profile Image' />
                ) : (
                  <AvatarFallback>RD</AvatarFallback>
                )}
              </Avatar>
              <div>
                <h3>{formData.name}</h3>
                <p>{formData.nickname}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className='flex justify-end'>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant='outline'
              className='bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded'
            >
              정보수정
            </Button>
          </DialogTrigger>
          <DialogContent className='sm:max-w-[425px]'>
            <DialogHeader>
              <DialogTitle>프로필 수정</DialogTitle>
              <DialogDescription>프로필 정보를 수정하고 이미지를 변경하세요.</DialogDescription>
            </DialogHeader>
            <div className='flex flex-col gap-4 py-4'>
              <div className='flex flex-col gap-1'>
                <Label htmlFor='nickname' className='text-left'>
                  닉네임
                </Label>
                <Input id='nickname' value={formData.nickname} onChange={handleInputChange} />
                {nicknameError && <p className='text-xs text-red-500 mt-1'>{nicknameError}</p>}
                {!nicknameError && (
                  <p className='text-xs text-gray-400 mt-1'>
                    닉네임은 2글자 이상, 10글자 이하로 입력해 주세요.
                  </p>
                )}
              </div>
              <div className='flex flex-col gap-1'>
                <Label htmlFor='image' className='text-left'>
                  이미지
                </Label>
                <Input id='image' type='file' accept='image/*' onChange={handleImageChange} />
              </div>
              <p className='text-xs text-gray-400 mt-1'>권장 사이즈: 150px / 최대 250KB</p>
            </div>
            <DialogFooter>
              <Button
                type='button'
                onClick={handleSaveChanges}
                className='bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded'
              >
                저장
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard1;
