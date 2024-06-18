// src/components/HeaderMain.tsx
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import logo from '../../assets/images/logoWhite.png';

function HeaderMain() {
    return (
      <header className='sticky top-0 flex items-center h-16 bg-transparent px-4 md:px-6 z-20'>
        <div className='flex items-center justify-between w-full'>
          {/* 로고 */}
          <Link to={'/'} className='flex h-16 items-center gap-2 text-lg font-semibold'>
            <div
              className='bg-cover bg-no-repeat bg-center w-24 h-12 opacity-75'
              style={{
                backgroundImage: `url(${logo})`,
              }}
            ></div>
            <span className='sr-only'>차징</span>
          </Link>
  
          {/* 네비게이션 메뉴 */}
          <nav className='hidden md:flex gap-6 text-lg font-medium justify-center mx-auto text-neutral-500'>
            <Link to={'/'} className='hover:text-neutral-700 transition-colors'>
              메인
            </Link>
            <Link to={'/carinfo'} className='hover:text-neutral-700 transition-colors'>
              차 정보 게시판
            </Link>
            <Link to={'/chargermap'} className='hover:text-neutral-700 transition-colors'>
              전기차 충전소
            </Link>
            <Link to={'/recommend'} className='hover:text-neutral-700 transition-colors'>
              전기차 추천
            </Link>
          </nav>
  
          {/* 우측 메뉴 */}
          <div className='flex items-center gap-4'>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant='outline' size='icon' className='md:hidden'>
                  <Menu className='h-5 w-5 text-neutral-500' />
                  <span className='sr-only'>Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side='left'>
                <nav className='grid gap-6 text-lg font-medium text-neutral-500'>
                  <Link to={'/'} className='hover:text-neutral-700 transition-colors'>
                    메인
                  </Link>
                  <Link to={'/carinfo'} className='hover:text-neutral-700 transition-colors'>
                    차 정보 게시판
                  </Link>
                  <Link to={'/chargermap'} className='hover:text-neutral-700 transition-colors'>
                    전기차 충전소
                  </Link>
                  <Link to={'/recommend'} className='hover:text-neutral-700 transition-colors'>
                    전기차 추천
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage src='https://github.com/shadcn.png' />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end' className='text-neutral-500'>
                <Link to={'/setting/profile'} className='hover:text-neutral-700'>
                  <DropdownMenuItem>내프로필</DropdownMenuItem>
                </Link>
                <Link to={'/setting/account'} className='hover:text-neutral-700'>
                  <DropdownMenuItem>계정 관리</DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <Link to={'/setting/activity'} className='hover:text-neutral-700'>
                  <DropdownMenuItem>활동 내역</DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='hover:text-neutral-700'>로그아웃</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    );
  }
  
  export default HeaderMain;