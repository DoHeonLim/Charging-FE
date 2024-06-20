// import { useState } from 'react';
// import { Separator } from '@/components/ui/separator';
// import ProfileCard1 from './ProfileCard1';
// import ProfileCard2 from './ProfileCard2';
// import ProfileCard3 from './ProfileCard3';

// export function ProfileForm() {
//   const [profileImage, setProfileImage] = useState<string>('');

//   const handleProfileImageChange = (newImage: string) => {
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
//               // profileImage={profileImage}
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
