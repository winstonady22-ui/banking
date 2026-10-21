import MobileNav from "@/components/MobileNav"
import Sidebar from "@/components/Sidebar"
import Image from "next/image"
import Link from "next/link"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const loggedIn ={ firstName: 'Adams', lastName: 'Winston '}
  return (
      <main className ='flex h-screen w-full font-sans'>
        <Sidebar user={loggedIn} />
        <div className='flex size-full flex-col'>
          <div className='root-layout'>
            <Link href="/" aria-label="Horizon home" className="flex items-center">
              <Image
                src="/icons/logo.svg"
                width={30}
                height={30}
                alt="Horizon"
                priority
              />
            </Link>
            <MobileNav user={loggedIn} />
          </div>
          {children}        
        </div>
        
      </main>
  )
}