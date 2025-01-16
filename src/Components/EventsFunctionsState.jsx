import React, { useState } from 'react'

const EventsFunctionsState = () => {
    // const sayHello = (name) => {
    //     alert(`${name} Khan is great man`)
    // }
    const [firstName, setFirstName] = useState('Mohsin');

    const changeName = () => {
        setFirstName('Ali')
    }
  return (
    <>
    <h2>Events Function @ State</h2>
    {/* <button className='bg-green-500 text-white px-3 py-2 rounded-lg' onClick={() => alert('hello')}>ClickMe</button> */}
    {/* <button className='bg-green-500 text-white px-3 py-2 rounded-lg' onClick={() => sayHello('Ali')}>ClickMe</button> */}
    <h3>My Name is: {firstName}</h3>
    <button className='bg-green-500 text-white px-3 py-2 rounded-lg' onClick={changeName}>ClickMe</button>
    </>
  )
}

export default EventsFunctionsState