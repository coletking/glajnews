'use client'
import React, { useState } from "react";
import Header from "../b-component/AdminHeader";
import Sidebar from "../b-component/AdminSidebar";
import ViewPostCompo from "../b-component/VewPostcom";

function ViewPost() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <div>
      <div className="grid-container">
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        < ViewPostCompo/>
      </div>
    </div>
  );
}

export default ViewPost;
