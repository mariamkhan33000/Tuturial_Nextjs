'use client'

import React, { useEffect, useState } from 'react'

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        async function getUsers() {
            const usersData = await fetch('https://jsonplaceholder.typicode.com/users') 
            setUsers(await usersData.json())
        }
        getUsers()
    }, [])
  return (
    <div>
        <h2>User List | Fetch Data with API</h2>
        {
            users.map((user) => 
            <li key={user.id}>{user.username}</li>
            )
        }
    </div>
  )
}

export default Users