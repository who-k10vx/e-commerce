import React from 'react'
import Header from '../Users/Header'
import LeftSidebar from './LeftSidebar'


function Customer() {
  return (
    <div>
      <Header/>
      <LeftSidebar/>
      <div className='text-black'>Customer</div>
    </div>
  )
}

export default Customer