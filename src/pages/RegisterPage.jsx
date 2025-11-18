import React, { useContext, useEffect } from 'react';
import { IoMdMail } from 'react-icons/io';
import { FaLock, FaUser, FaUserEdit, FaUserLock } from 'react-icons/fa';
import authBackground from '../assets/authBackground.png';
import RegisterImg from '../assets/RegisterImg.png';
import { Link, useLocation, useNavigate } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const RegisterPage = () => {
  const { createUser, user } = useContext(AuthContext);
  const location = useLocation();

  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  const handleRegister = async e => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const userName = form.userName.value;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const data = await createUser(email, password);
      console.log(data);
      if (data.user) {
        Swal.fire({
          title: `Welcome ${user.displayName}`,
          text: 'Your account is successfully register',
          icon: 'success',
        });
        navigate(from, { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div
      className="text-neutral-800 bg-cover min-h-screen p-4 py-10 flex items-center justify-center"
      style={{ background: `url(${authBackground})` }}
    >
      <section className="w-full max-w-10/12 mx-auto gap-10 flex flex-col lg:flex-row">
        <div
          className="w-full lg:w-1/2 flex flex-col items-center justify-center "
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img
            src={RegisterImg}
            alt="Register Image"
            className="max-w-80 mx-auto "
          />
        </div>
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-duration="ease-in-sine"
        >
          <h1 className="text-left text-5xl font-bold mb-10">Sign Up</h1>
          <form onSubmit={handleRegister} className="space-y-4">
            {/* First Name */}
            <div className="flex items-center px-4 border-2 rounded-lg">
              <span className="mr-4">
                <FaUserEdit size={25} />
              </span>
              <input
                required
                className="border-0 py-4 focus:outline-0 w-full"
                name="firstName"
                type="text"
                placeholder="Enter First Name"
              />
            </div>
            {/* Last Name */}
            <div className="flex items-center px-4 border-2 rounded-lg">
              <span className="mr-4">
                <FaUserEdit size={25} />
              </span>
              <input
                required
                className="border-0 py-4 w-full focus:outline-0"
                name="lastName"
                type="text"
                placeholder="Enter Last Name"
              />
            </div>
            {/* User Name */}
            <div className="flex items-center px-4 border-2 rounded-lg">
              <span className="mr-4">
                <FaUser size={25} />
              </span>
              <input
                required
                className="border-0 py-4 w-full focus:outline-0"
                name="userName"
                type="text"
                placeholder="Enter Username"
              />
            </div>
            {/* Email */}
            <div className="flex items-center px-4 border-2 rounded-lg">
              <span className="mr-4">
                <IoMdMail size={25} />
              </span>
              <input
                required
                className="border-0 py-4 w-full focus:outline-0"
                name="email"
                type="email"
                placeholder="Enter Email"
              />
            </div>
            {/* Password */}
            <div className="flex items-center px-4 border-2 rounded-lg">
              <span className="mr-4">
                <FaLock size={25} />
              </span>
              <input
                required
                className="border-0 py-4 w-full focus:outline-0"
                name="password"
                type="password"
                placeholder="Enter Password"
              />
            </div>

            <div className="space-x-3">
              <input
                required
                type="checkbox"
                name="checkbox"
                id=""
                className="checkbox"
              />
              <label name="checkbox">I agree to all terms</label>
            </div>
            <button className="bg-red-500/50 px-10 py-6 rounded cursor-pointer hover:bg-red-500/80 transition">
              Register
            </button>
          </form>

          <p className="mt-4">
            Already have an account?{' '}
            <Link to="/auth/login" className="text-[#008BD9]">
              Sign In
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
