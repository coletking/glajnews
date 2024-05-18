'use client'
import React, { useState } from "react";
import Header from "../b-component/AdminHeader";
import Sidebar from "../b-component/AdminSidebar";
import ViewUsercom from "../b-component/ViewUsercom";

function ViewUser() {
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
        < ViewUsercom/>
      </div>
    </div>
  );
}

export default ViewUser;