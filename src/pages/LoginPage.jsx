import React, { useContext, useEffect } from 'react';
import { IoMdMail } from 'react-icons/io';
import { FaLock, FaUser, FaUserEdit, FaUserLock } from 'react-icons/fa';
import authBackground from '../assets/authBackground.png';
import LoginImg from '../assets/loginImg.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';
const LoginPage = () => {
  const { loginUserWithEmail, user, setLoading, loginWithGoogle } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  const handleLoginWithEmail = async e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const data = await loginUserWithEmail(email, password);
      console.log(data.user);

      Swal.fire({
        title: `Welcome Back ${user.displayName}`,
        text: 'Login Success ',
        icon: 'success',
      });
      setLoading(false);
      navigate(from, { replace: true });
    } catch (error) {
      if (error.code === 'auth/invalid-credential') {
        alert('Email and Password is Incorrect');
      }
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div
      className="text-neutral-800 bg-cover min-h-screen p-4 py-10 flex items-center justify-center"
      style={{ background: `url(${authBackground})` }}
    >
      <section className="w-full max-w-10/12 mx-auto gap-10 flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-1/2" data-aos="zoom-out-right">
          <h1 className="text-left text-5xl font-bold mb-10">Sign In</h1>
          <form onSubmit={handleLoginWithEmail} className="space-y-4">
            {/* User Name */}
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
                type="checkbox"
                name="checkbox"
                id=""
                className="checkbox"
              />
              <label name="checkbox">Remember Me</label>
            </div>
            <button className="bg-red-500/50 px-10 py-6 rounded cursor-pointer hover:bg-red-500/80 transition text-white">
              Login
            </button>
          </form>

          <div className="mt-6 flex items-center gap-4">
            <p>Or, Login with </p>
            <button onClick={handleLoginWithGoogle} className="btn btn-ghost">
              <FcGoogle size={30} />
            </button>
          </div>
          <p className="mt-4">
            Don’t have an account?{' '}
            <Link to="/auth/register" className="text-[#008BD9]">
              Create One
            </Link>
          </p>
        </div>
        <div
          className="w-full lg:w-1/2 flex flex-col items-center justify-center "
          data-aos="zoom-out-left"
        >
          <img
            src={LoginImg}
            alt="Register Image"
            className="max-w-80 mx-auto animate-pulse"
          />
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
