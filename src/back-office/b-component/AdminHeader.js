
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
 import "../Styles/Entry.css"
import React from 'react'


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Header({OpenSidebar}) {

  return (
    <header className='header'>
        <div className='menu-icon-admin'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
     
        <div className='header-right'>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
        </div>
    </header>
  )
}

export default Header