"use client"
import {  usePathname } from "next/navigation"

export default function contactLayout( { children }) {
    const currentPathName = usePathname()
    console.log(currentPathName)
    return (
        <>
        
        {
            currentPathName !== '/contact/Company' ?
            <h2 className="text-red-500 underline text-2xl">Comman layout for Contact Page</h2> : null
        }
        {
            children
        }
        </>
    )
}