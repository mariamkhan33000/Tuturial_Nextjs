"use client"
import React from 'react'

const MyPost = ({data}) => {
  return (
    <>
    <button onClick={() => alert(data)}>Click Me !</button>
    </>
  )
}

export default MyPost