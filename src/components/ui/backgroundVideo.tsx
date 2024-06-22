import React from 'react';

const BackgroundVideo: React.FC = () => {
  return (
    <div className='absolute inset-0 overflow-hidden'>
      <video autoPlay loop muted className='w-full h-full object-cover'>
        <source src='/video/main_vedio_ev_final.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='absolute inset-0 bg-white opacity-20'></div>
    </div>
  );
};

export default BackgroundVideo;
