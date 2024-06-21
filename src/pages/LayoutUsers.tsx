import React from 'react';
import { SidebarNav } from '../components/Sidebar/SidebarNav';
import { Separator } from '../components/ui/separator';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import { Outlet } from 'react-router-dom';

export const sidebarNavItems = [
  {
    title: '내 프로필',
    href: '/setting/profile',
  },
  {
    title: '계정 관리',
    href: '/setting/account',
  },
];

const LayoutUsers: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Header */}
      <Header />

      <div className='ml-44 mt-8 flex flex-1'>
        {/* Sidebar */}
        <SidebarNav items={sidebarNavItems} />

        <div className='flex mx-2 items-center space-x-4'>
          <Separator orientation='vertical' />
        </div>

        {/* Main content */}
        <main className='flex-1 p-6 mr-60'>
          <div>
            <Outlet />
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LayoutUsers;
