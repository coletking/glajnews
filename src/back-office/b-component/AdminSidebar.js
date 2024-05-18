'use client'
import React from 'react'
import 
{BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck}
 from 'react-icons/bs'
 import "../Styles/Entry.css"
import { Link } from 'react-router-dom'


function Sidebar({openSidebarToggle, OpenSidebar}) {

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
            Glajnews Admin
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href={`/auth/dashboard/admin/`}>
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item' >
                <a href="/auth/dashboard/create/post">
                    <BsFillArchiveFill className='icon'/> Create Post
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href={`/auth/dashboard/viewpost`}>
                    <BsFillGrid3X3GapFill className='icon'/>  View Post
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href={`/auth/dashboard/viewuser`}>
                    <BsPeopleFill className='icon'/> Users
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href={`/auth/dashboard/support`}>
                    <BsPeopleFill className='icon'/> Support
                </a>
            </li>
{/* 
            <li className='sidebar-list-item'>
                <a href=''>
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li> */}

            <li className='sidebar-list-item'>
                <a href='/auth/logout'>
                    <BsListCheck className='icon'/> Logout
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar