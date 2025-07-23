import React, { ReactNode } from 'react'
import Link from "next/link";
import Image from "next/image";
import { isAuthenticated, getCurrentUser } from '@/lib/actions/auth.action';
import {redirect} from 'next/navigation'
import UserProfileDropdown from '@/components/UserProfileDropdown';

const Rootlayout = async ({children}: {children: ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated();

  if(!isUserAuthenticated) redirect('/sign-in');
  
  const user = await getCurrentUser();

  return (
    <div className='root-layout'>
      <nav className="flex items-center justify-between w-full">
        <Link href="/" className='flex items-center gap-2'>
          <Image src="/logo.svg" alt="logo" width={38} height={32} />
          <h2 className='text-primary-100'>InterviewGenie</h2>
        </Link>
        
        {user && <UserProfileDropdown user={user} />}
      </nav>
      {children}
    </div>
  )
}

export default Rootlayout