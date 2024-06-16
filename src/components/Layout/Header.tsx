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

/** image */
import { Menu } from 'lucide-react';
import logo from '../../assets/images/logo.png';

function Header() {
  return (
    <header className='sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 sm:flex justify-between'>
      <nav className='hidden w-full h-16 flex-row gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-10 '>
        <Link to={'/'} className='flex h-16 items-center gap-2 text-lg font-semibold md:text-base '>
          <div
            className='bg-cover bg-no-repeat bg-center w-32 h-16'
            style={{
              backgroundImage: `url(${logo})`,
            }}
          ></div>
          <span className='sr-only'>차징</span>
        </Link>

        <Link to={'/'} className='text-muted-foreground transition-colors hover:text-foreground'>
          메인
        </Link>
        <Link
          to={'/carinfo'}
          className='text-muted-foreground transition-colors hover:text-foreground'
        >
          차 정보 게시판
        </Link>
        <Link
          to={'/chargermap'}
          className='text-muted-foreground transition-colors hover:text-foreground'
        >
          전기차 충전소
        </Link>
        <Link
          to={'/recommend'}
          className='text-muted-foreground transition-colors hover:text-foreground'
        >
          전기차 추천
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline' size='icon' className='shrink-0 md:hidden'>
            <Menu className='h-5 w-5' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <nav className='grid gap-6 text-lg font-medium'>
            <Link to={'/'} className='flex items-center gap-2 text-lg font-semibold'>
              <span className='sr-only'>차징</span>
            </Link>
            <Link to={'/'} className='text-muted-foreground hover:text-foreground'>
              메인
            </Link>
            <Link to={'/carinfo'} className='text-muted-foreground hover:text-foreground'>
              전기차 정보
            </Link>
            <Link to={'/map'} className='text-muted-foreground hover:text-foreground'>
              전기차 충전소
            </Link>
            <Link to={'/recommend'} className='text-muted-foreground hover:text-foreground'>
              전기차 추천
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className='flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 sm:ml-auto'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className='mr-10'>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <Link to={'/setting/profile'} className='text-muted-foreground hover:text-foreground'>
              <DropdownMenuItem>내프로필</DropdownMenuItem>
            </Link>
            <Link to={'/setting/account'} className='text-muted-foreground hover:text-foreground'>
              <DropdownMenuItem>계정 관리</DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <Link to={'/setting/activity'} className='text-muted-foreground hover:text-foreground'>
              <DropdownMenuItem>활동 내역</DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem>로그아웃</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

export default Header;
