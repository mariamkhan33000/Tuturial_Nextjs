"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Contact = () => {
  const router = useRouter()
  return (
    <>
    <h1>This is my contact page</h1>
    <Link href='/contact/Employee'>Contact Employee</Link>
    <br/>
    <br/>
    <button onClick={() => router.push('/contact/Company')}>Contact Company</button>
    <button onClick={() => router.push('/home')}>Go to home Page</button>
    </>
  )
}

export default Contact