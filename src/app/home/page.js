"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter();
    const handleNavigation = (routerName) => {
        router.push(routerName)
    }
  return (
    <>
    <h1>This is home page</h1>
    {/* <Link href="/about">About page</Link>
    <br/>
    <Link href="/contact">Contact page</Link> */}
    {/* <button onClick={() => router.push('/about')}>About</button>
    <button onClick={() => router.push('/contact')}>Contact</button> */}
    <button onClick={() => handleNavigation('/about')}>About</button>
    <button onClick={() => handleNavigation('/contact')}>Contact</button>
    </>
  )
}

export default page