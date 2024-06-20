import Footer from './Footer';
import Header from './Header';


type LayoutProps = {
  children: React.ReactNode;
};

function LayoutMain({ children }: LayoutProps) {
  return (
    <div>
        <div>
            <Header />
        </div>
        <main className='h-full'>{children}</main>
        <Footer />
    </div>
  );
}

export default LayoutMain;