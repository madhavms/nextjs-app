'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

const page = () => {
    const pathname = usePathname();
    console.log(pathname); // /todo/[id]/page
  return (
    <div>page</div>
  )
}

export default page