import React, { useContext } from 'react';
import { MdDashboard, MdHelp } from 'react-icons/md';
import { FaExclamation, FaTwitter } from 'react-icons/fa';
import { RiTaskLine } from 'react-icons/ri';
import { IoMdSettings } from 'react-icons/io';
import { TbLogout } from 'react-icons/tb';
import { NavLink, useNavigate } from 'react-router';
import { FaFaceAngry, FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { AuthContext } from '../../context/AuthContext';
const DashboardNav = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogout = async () => {
    try {
      const data = await logOut();
      navigate('/auth/login');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <aside className="">
      <div className=" rounded-r-2xl text-base-100 relative flex flex-col justify-between">
        <div className="">
          <div className="rounded-full overflow-hidden w-20 h-20 absolute -top-10 left-1/2 -translate-x-1/2">
            <img
              src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
              alt="Profile Image"
              className="w-full"
            />
          </div>
          <div className="mt-15 flex flex-col items-center">
            <h2 className="text-xl font-semibold">
              {user?.displayName ? user?.displayName : 'No Name Found'}
            </h2>
            <p>{user?.email}</p>
          </div>

          {/* Tabs */}

          <div className="text-[16px] font-semibold p-2 lg:p-6 gap-2 flex flex-col lg:gap-3">
            <NavLink
              to="/"
              className="flex items-center gap-2 p-2 lg:p-4  rounded-md"
            >
              <span>
                <MdDashboard />
              </span>
              Dashboard
            </NavLink>
            <NavLink
              to="/vital-task"
              className="flex items-center gap-2 p-2 lg:p-4  rounded-md"
            >
              <span>
                <FaExclamation />{' '}
              </span>
              Vital Task
            </NavLink>
            <NavLink
              to="/my-task"
              className="flex items-center gap-2 p-2 lg:p-4  rounded-md"
            >
              <span>
                <RiTaskLine />{' '}
              </span>
              My Task
            </NavLink>
            <NavLink
              to="/task-categories"
              className="flex items-center gap-2 p-2 lg:p-4 rounded-md"
            >
              <span>
                <FaExclamation />{' '}
              </span>
              Task Categories
            </NavLink>
            <NavLink
              to="/settings"
              className="flex items-center gap-2 p-2 lg:p-4 rounded-md"
            >
              <span>
                <IoMdSettings />{' '}
              </span>
              Settings
            </NavLink>
            <NavLink
              to="/help"
              className="flex items-center gap-2 p-2 lg:p-4  rounded-md"
            >
              <span>
                <MdHelp />{' '}
              </span>
              Help
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 mt-6 sm:mt-10 md:mt-15">
          <div className="flex justify-center">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 p-2 lg:p-3 rounded-md cursor-pointer hover:bg-[#ff6767] transition border-2 border-primary text-base-200 "
            >
              <span>
                <TbLogout />{' '}
              </span>
              Logout
            </button>
          </div>
          <div className="flex gap-8 justify-center">
            <button className="btn btn-xs btn-success">
              <FaFacebookF />
            </button>
            <button className="btn btn-xs btn-info">
              <FaTwitter />
            </button>
            <button className="btn btn-xs btn-error">
              <FaInstagram />
            </button>
          </div>

          <div className="text-center text-sm">
            <p>
              &copy; Ashikur Rahman {new Date().getFullYear()} | All Right
              Reserved
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardNav;
