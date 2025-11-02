import React from 'react';
import { IoMdMail } from 'react-icons/io';
import { FaLock, FaUser, FaUserEdit, FaUserLock } from 'react-icons/fa';
import authBackground from '../assets/authBackground.png';
import RegisterImg from '../assets/RegisterImg.png';

const RegisterPage = () => {
  return (
    <div
      className="text-neutral-800 bg-cover min-h-screen flex items-center justify-center"
      style={{ background: `url(${authBackground})` }}
    >
      <section className="w-full max-w-10/12 mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 border">jjsjkjk</div>
        <div className="w-full lg:w-1/2 border">
          <h1 className="text-left text-5xl font-bold mb-10">Sign Up</h1>
          <form className="space-y-4">
            {/* First Name */}
            <div className="flex items-center px-4 border-2 rounded-lg">
              <span className="mr-4">
                <FaUserEdit size={25} />
              </span>
              <input
                className="border-0 py-4 focus:outline-0 w-full"
                name="firstName"
                type="text"
                placeholder="Enter First Name"
              />
            </div>
            {/* Last Name */}
            <div className="flex items-center p-4 border-2 rounded-lg">
              <span className="mr-4">
                <FaUserEdit size={25} />
              </span>
              <input
                className="border-0 focus:outline-0"
                name="lastName"
                type="text"
                placeholder="Enter Last Name"
              />
            </div>
            {/* User Name */}
            <div className="flex items-center p-4 border-2 rounded-lg">
              <span className="mr-4">
                <FaUser size={25} />
              </span>
              <input
                className="border-0 focus:outline-0"
                name="userName"
                type="text"
                placeholder="Enter Username"
              />
            </div>
            {/* Email */}
            <div className="flex items-center p-4 border-2 rounded-lg">
              <span className="mr-4">
                <IoMdMail size={25} />
              </span>
              <input
                className="border-0 focus:outline-0"
                name="email"
                type="email"
                placeholder="Enter Email"
              />
            </div>
            {/* Password */}
            <div className="flex items-center p-4 border-2 rounded-lg">
              <span className="mr-4">
                <FaLock size={25} />
              </span>
              <input
                className="border-0 focus:outline-0"
                name="password"
                type="password"
                placeholder="Enter Password"
              />
            </div>
            {/* Confirm Password */}
            <div className="flex items-center p-4 border-2 rounded-lg">
              <span className="mr-4">
                <FaUserLock size={26} />
              </span>
              <input
                className="border-0 focus:outline-0"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
