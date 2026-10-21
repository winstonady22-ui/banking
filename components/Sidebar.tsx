"use client"
import  Link  from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '..'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { text } from 'stream/consumers'

const Sidebar = ({ user }: SiderbarProps) => {
const pathname = usePathname();

  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap-3'>
        <Link href="/" 
        className='mb-12
        cursor-pointer
        items-center gap-2
        flex items-center gap-2'
        >
          <Image
          src="icons/logo.svg"
          width={30}
          height={30}
          alt="Horizon Banking System Logo"
          className="size-8 shrink-0 max-xl:size-6"
          />
        <h1 className='sidebar-logo'>
        Horizon
        </h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`)

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn('sidebar-link', {
                'bg-bank-gradient': isActive,
              })}
            >
              <div className='relative size-6'>
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    'brightness-[3] invert-0': isActive,
                  })}
                />
              </div>
              <p className={cn('sidebar-label',{ 'text-white': isActive, })}>
                {item.label}
              </p>
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto flex flex-col gap-4">
        <div>USER</div>
        <div>FOOTER</div>
      </div>
    </section>
  )
}

export default Sidebar