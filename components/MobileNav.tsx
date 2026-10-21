'use client'
import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/dist/client/link'
import { usePathname } from 'next/dist/client/components/navigation'
import { sidebarLinks } from '..'
import { cn } from '@/lib/utils'

const MobileNav = ({ user }:MobileNavProps) => {
    const pathname = usePathname();
  return (
<section className="flex w-auto justify-end">
    <Sheet>
      <SheetTrigger>
        <Image
            src='/icons/hamburger.svg'
            width={30}
            height={30}
            alt='menu'
            className='cursor-pointer'
        />
      </SheetTrigger>
      <SheetContent 
      side='left' className='border-none bg-white'>
        <nav className='flex flex-1 flex-col gap-3'>
        <Link href="/" 
        className='
        cursor-pointer
        flex items-center gap-1
         px-4'
        >
          <Image
          src="icons/logo.svg"
          width={30}
          height={30}
          alt="Horizon Banking System Logo"/>
        <h1 className='sidebar-logo text-26 font-ibm-plex-serif-bold text-black-1'>
        Horizon
        </h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`)

          return (
            <SheetClose key={item.route}>
              <Link
              href={item.route}
              className={cn('mobilenav-sheet_close w-full', {
                'bg-bank-gradient': isActive,
              })}
            >
              
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={20}
                  height={20}
                  className={cn({
                    'brightness-[3] invert-0': isActive,
                  })}
                />
              <p className={cn('text-16 font-semibold text-black-2',{ 'text-white': isActive, })}>
                {item.label}
              </p>
              </Link>
            </SheetClose>
            
          )
        })}

        </nav>
        <div className="mt-auto flex flex-col gap-4 pb-4">
          <div>USER</div>
          <div>FOOTER</div>
        </div>
        
      </SheetContent>
    </Sheet>
</section> 
  )
}

export default MobileNav