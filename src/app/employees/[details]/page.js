
import React from 'react'

const Employees = ({ params }) => {
  return (
    <>
     <h2 className='text-green-600 text-2xl underline flex items-center justify-center my-9'>Employees details :</h2>
    <h3 className='text-purple-500'>Employee Name : {params.details}</h3>
    </>
  )
}

export default Employees