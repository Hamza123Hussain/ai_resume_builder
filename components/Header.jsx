'use client'
import Image from 'next/image'
import React from 'react'
import Logo from '../public/Logo.png'
import Link from 'next/link'
import { UserButton, useUser } from '@clerk/nextjs'

import { useRouter } from 'next/navigation'
const Header = () => {
  const router = useRouter()
  const { isSignedIn, user } = useUser()
  return (
    <div
      id="no-print"
      className=" px-2 py-2 shadow-md items-center flex justify-between  cursor-pointer"
    >
      <div className=" flex ">
        <Image
          className=" w-8 sm:w-20  "
          src={Logo}
          alt="Logo"
          onClick={() => router.push('/DashBoard')}
        />
      </div>
      <div className=" ">
        <div
          className="   flex justify-center items-center gap-4 font-bold cursor-pointer"
          onClick={() => router.push('/DashBoard')}
        >
          <p className=" text-sm  sm:text-4xl">IntelliResume</p>
        </div>
      </div>

      {isSignedIn ? (
        <div className=" flex   items-center">
          <p className=" hidden sm:inline">{user.fullName}</p>
          <UserButton />
        </div>
      ) : (
        <Link
          className=" bg-green-300 rounded-lg px-2 py-1 sm:p-4"
          href={'./sign-in'}
        >
          {' '}
          Lets Get Started
        </Link>
      )}
    </div>
  )
}

export default Header
