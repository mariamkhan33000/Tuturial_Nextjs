"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const Company = () => {
  const router = useRouter()
  return (
    <div>This is Company page
    <button onClick={() => router.push('/home')}>Go to home Page</button>
    </div>
  )
}

export default Company;