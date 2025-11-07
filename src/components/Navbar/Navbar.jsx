import React, { useState } from 'react';
import { FaRegCalendarAlt, FaSearch } from 'react-icons/fa';
import { IoNotificationsOutline } from 'react-icons/io5';
import { format } from 'date-fns';
import { Link } from 'react-router';
import DashboardNav from '../DashboardNav/DashboardNav';
import { TiThMenu } from 'react-icons/ti';
import { IoMdClose } from 'react-icons/io';
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="relative">
      <div className="bg-[#F9F9F9] py-3 px-4 shadow-lg">
        <div className="w-full container lg:w-10/12 mx-auto flex justify-between lg:items-center gap-3 md:gap-8 lg:gap-30 flex-col md:flex-row">
          <div className="flex justify-between flex-row-reverse md:flex-row items-center gap-3">
            <button className="lg:hidden" onClick={() => setMenu(!menu)}>
              <TiThMenu size={25} />
            </button>
            <div className="">
              <Link to="/" className="font-semibold text-3xl">
                <span className="text-primary">Dash</span>Board
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full flex items-center  bg-[#F5F8FF] shadow-xl border-neutral-200 border rounded-lg relative">
            <input
              type="search"
              placeholder="Search your task here..."
              className="w-full p-2 md:p-3  "
            />
            <button className="bg-[#FF6767] text-base-100 p-3 md:p-4 right-0  absolute rounded-md cursor-pointer">
              <FaSearch />
            </button>
          </div>
          <div className="flex justify-center items-center gap-10">
            <div className="flex items-center gap-5">
              <div className="bg-[#FF6767] text-white p-2 right-0 rounded-md">
                <IoNotificationsOutline />
              </div>
              <div className="bg-[#FF6767] text-white p-2 right-0 rounded-md">
                <FaRegCalendarAlt />
              </div>
            </div>
            <div className="font-semibold">
              <p>{format(new Date(), `eeee`)}</p>
              <p>{format(new Date(), `dd/MM/yyyy`)}</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      {menu && (
        <div
          className={`bg-neutral-950 absolute  pt-20 min-w-full min-h-screen z-50 transition-all duration-300 lg:hidden ${
            menu ? 'top-0' : '-top-100'
          }`}
        >
          <div className="bg-neutral-950">
            <DashboardNav />
          </div>
          <button
            onClick={() => setMenu(false)}
            className="text-base-100 absolute top-5 right-5"
          >
            <IoMdClose size={40} className="text-primary" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
