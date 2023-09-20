import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import Sidebar from './sidebar';

const SidebarTopbar = () => {
  return (
    <div className='flex md:hidden bg-inherit text-white'>
      <div className='flex w-full mx-5 h-[var(--navbar-height)] items-center px-4 text-center justify-between'>
        <Menu />
      </div>
    </div>
  );
};

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <SidebarTopbar />
      </SheetTrigger>
      <SheetContent side='left' className='p-0 w-[300px]'>
        <Sidebar className='pt-10 h-screen' />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
