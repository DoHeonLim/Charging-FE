import { Separator } from '@radix-ui/react-separator';
import logo from '../../assets/images/logo.png';
function Footer() {
  return (
    <footer className='flex justify-between w-full border-t-[1px]'>
      <div className='flex-1 text-xs p-4'>
        <div className='flex justify-center text-sm'>팀 구성</div>
        <div className='flex justify-between'>
          <div>프론트</div>
          <div>백엔드</div>
        </div>
        <Separator className='bg-yellow-300 my-2 w-full h-[2px]' />
        <div className='flex justify-between'>
          <div>
            <ul>임도헌★</ul>
            <ul>김경하</ul>
            <ul>김재근</ul>
          </div>
          <div>
            <ul className='flex justify-end'>김홍진</ul>
            <ul className='flex justify-end'>원경혜</ul>
            <ul className='flex justify-end'>한유림</ul>
          </div>
        </div>
      </div>
      <div className='flex-[2_2_0%] text-xs p-4'>
        <div className='flex justify-center text-sm'>기술 스택</div>
        <div className='flex justify-between'>
          <div>프론트</div>
          <div>데이터분석</div>
          <div>백엔드</div>
        </div>
        <Separator className='bg-yellow-300 my-2 w-full h-[2px]' />
        <div className='flex justify-between'>
          <div>
            <ul>React</ul>
            <ul>TypeScript</ul>
            <ul>Eslint</ul>
          </div>
          <div>
            <ul className='flex justify-end'>Vite</ul>
            <ul className='flex justify-end'>Shadcn</ul>
            <ul className='flex justify-end'>Tailwind</ul>
          </div>
          <div>
            <ul className='flex justify-end'>Axios</ul>
            <ul className='flex justify-end'>Jotai</ul>
            <ul className='flex justify-end'>Prettier</ul>
          </div>
          <div>
            <ul className='flex justify-end'>Express</ul>
            <ul className='flex justify-end'>PostgreSQL</ul>
            <ul className='flex justify-end'>Passport</ul>
          </div>
          <div>
            <ul className='flex justify-end'>Oauth</ul>
            <ul className='flex justify-end'>Multer</ul>
            <ul className='flex justify-end'>Nanoid</ul>
          </div>
          <div>
            <ul className='flex justify-end'>Python</ul>
            <ul className='flex justify-end'>Pandas</ul>
            <ul className='flex justify-end'>Recharts</ul>
          </div>
        </div>
      </div>
      <div
        className='bg-cover bg-no-repeat bg-center w-32 h-16 place-self-center'
        style={{
          backgroundImage: `url(${logo})`,
        }}
      ></div>
      <span className='sr-only'>차징</span>
      <div className='flex flex-1 place-self-center text-xs'>
        © 2024 Charging Inc. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
