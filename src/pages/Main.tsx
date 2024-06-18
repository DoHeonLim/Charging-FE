import React from 'react';
import Layout from '@/components/Layout/Layout';
import BackgroundVideo from '@/components/ui/backgroundVideo';

const Main: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundVideo />
      <div className="relative z-10">
        <Layout>
          <div className="text-white text-center">
            <h1 className="text-4xl">메인 페이지</h1>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default Main;