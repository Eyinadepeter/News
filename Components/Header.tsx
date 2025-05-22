import Link from 'next/link'
import React from 'react'


function header() {
  return (
    <div>
      <Link href="#">Channel 21</Link>
      <div className='flex item-center w-1/3 text-lg'>
      <input type="text" className='bg-transparent border-b w-full border-white outline-none ' /></div>
    </div>
  );
}

export default header