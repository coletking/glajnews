'use client'
import React, { useState } from "react";
import Header from "../b-component/AdminHeader";
import Sidebar from "../b-component/AdminSidebar";
import CreatePostComponent from "../b-component/CreatePostComponent";
import Supportom from "../b-component/Supportom";

function Support() {
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
        <Supportom />
      </div>
    </div>
  );
}

export default Support;
