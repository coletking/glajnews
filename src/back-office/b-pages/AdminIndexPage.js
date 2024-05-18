"use client";
import { useState } from "react";
import Header from "../b-component/AdminHeader";
import Sidebar from "../b-component/AdminSidebar";
import Home from "../b-component/AdminIndex";

function AdminIndexPage() {
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
        <Home />
      </div>
    </div>
  );
}

export default AdminIndexPage;
