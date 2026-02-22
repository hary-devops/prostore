import {ShoppingCart, UserIcon } from 'lucide-react'
import Link from 'next/link';
import Image from 'next/image';
import { APP_NAME } from '@/lib/constant';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/theme-changer';
import Menu from './menu';


const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 p-2">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="images/logo.svg" alt={`${APP_NAME} Logo`} width={32} height={32} />
          <span className="hidden lg:block  text-lg font-bold">{APP_NAME}</span>
        </Link>
        <div className="flex items-end">
          <Menu />
        </div>
      </div>
    </header>);
}
 
export default Header;