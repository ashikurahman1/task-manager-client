import React from 'react';
import Navbar from '../components/Navbar/Navbar';

import { Outlet } from 'react-router';
import DashboardNav from '../components/DashboardNav/DashboardNav';

const DashboardLayout = () => {
  return (
    <div className="bg-[#F5F8FF] min-h-screen">
      <Navbar />
      {/*Dashboard  */}
      <section className="flex flex-col lg:flex-row gap-10 xl:gap-20 min-h-screen mt-15">
        {/* Left Aside */}
        <div className=" w-full lg:max-w-3/12 hidden lg:block bg-neutral-950 rounded-r-3xl">
          <DashboardNav />
        </div>
        <div className="w-full lg:w-8/12 ">
          <Outlet></Outlet>
        </div>
      </section>
    </div>
  );
};

export default DashboardLayout;
