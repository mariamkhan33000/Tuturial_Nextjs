import Link from 'next/link'
import React from 'react'

const Employees = () => {
  return (
    <>
     <h2 className='text-green-600 text-2xl underline flex items-center justify-center my-9'>Employees :</h2>
     <ul className='flex flex-col items-center justify-center'>
        <li className='text-purple-600 text-xl'>
            <Link href="/employees/zafar">Zafar Khan</Link>
        </li>
        <li className='text-purple-600 text-xl'>
            <Link href="/employees/ali">Muhammad Ali Khan</Link>
        </li>
        <li className='text-purple-600 text-xl'>
            <Link href="/employees/mohsin">Mohsin Khan</Link>
        </li>
     </ul>
    </>
  )
}

export default Employees