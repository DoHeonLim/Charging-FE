import React from 'react';
import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
  profileImage: string | null;
};

function Layout({ children, profileImage }: LayoutProps) {
  return (
    <div>
      <Header profileImage={profileImage} />
      <main className='h-full mt-4'>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

