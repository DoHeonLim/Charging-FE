import Footer from './Footer';
import HeaderMain from './HeaderMain';


type LayoutProps = {
  children: React.ReactNode;
};

function LayoutMain({ children }: LayoutProps) {
  return (
    <div>
        <div className="mt-4">
            <HeaderMain />
        </div>
        <main className='h-full'>{children}</main>
        <Footer />
    </div>
  );
}

export default LayoutMain;