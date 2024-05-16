import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SideBar = () => {

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <div className="h-screen border-r-2 border-gray-200 py-4">
      <div className="w-[120px] px-4">
        <img src="/assets/logo.png" className="w-full object-cover" alt="" />
      </div>

      <div className="flex flex-col mt-4">
        <div className="flex justify-between px-2">
          <span className="text-[0.7rem] font-medium">Access Bar</span>
          <i className="fa fa-xmark"></i>
        </div>

        <nav className="mt-3 w-full flex flex-col gap-2">
          <Link
            to="/admin/dashboard"
            className="w-full px-4 flex gap-6 hover:bg-red-100 transition-all py-[10px] items-center text-[0.8rem]"
          >
            <i className="fa-solid fa-table-list"></i>
            <span>Dashboard</span>
          </Link>
          <Link
            to="/admin/analytics"
            className="w-full px-4 flex gap-6 hover:bg-red-100 transition-all py-[10px] items-center text-[0.8rem]"
          >
            <i className="fa-solid fa-chart-bar"></i> <span>Analytics</span>
          </Link>
          <Link
            to="/admin/assets-not-working"
            className="w-full px-4 flex gap-6 hover:bg-red-100 transition-all py-[10px] items-center text-[0.8rem]"
          >
            <i className="fa-regular fa-circle-xmark"></i>{" "}
            <span>Asset Not Workng</span>
          </Link>
          <Link
            to="/admin/user-settings"
            className="w-full px-4 flex gap-6 hover:bg-red-100 transition-all py-[10px] items-center text-[0.8rem]"
          >
            <i className="fa-regular fa-circle-user"></i>
            <span>User Settings</span>
          </Link>
          <Link
            to="/admin/master-settings"
            className="w-full px-4 flex gap-6 hover:bg-red-100 transition-all py-[10px] items-center text-[0.8rem]"
          >
            <i className="fa-solid fa-gear"></i>
            <span>Master Settings</span>
          </Link>
          <Link
          to="/login"
            onClick={handleLogout}
            className="w-full px-4 flex gap-6 hover:bg-red-100 transition-all py-[10px] items-center text-[0.8rem]"
          >
            <i className="fa-solid fa-right-from-bracket"></i>{" "}
            <span>Logout</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
