import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {

  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)
  
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar setIsOpenSidebar={setIsOpenSidebar} />
      <div className="max-w-screen-2xl mx-auto flex">
        <Sidebar isOpenSidebar={isOpenSidebar} />
        <Outlet />
      </div>
    </div>
  )
}
