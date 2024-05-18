import React, { useState } from 'react'
import Header from '../b-component/AdminHeader';
import Sidebar from '../b-component/AdminSidebar';
import CreatePostComponent from '../b-component/CreatePostComponent';


  function CreatePost() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle);
    };
  
  return (
    <div>
        <div>
      <div className="grid-container">
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        <CreatePostComponent />
      </div>
    </div>
      </div>
  )
}

export default CreatePost


