"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Employee = () => {
  const router = useRouter()
  return (
    <>
    <h1>This is Employee page</h1>
    <button onClick={() => router.push('/home')}>Go to home Page</button>
    </>
  )
}

export default Employee