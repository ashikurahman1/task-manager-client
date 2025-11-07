import React from 'react';
import { Link } from 'react-router';

const AccountInformation = () => {
  return (
    <section className="shadow-2xl rounded-2xl p-5 border-2">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl text-black font-medium">
          <span className="border-primary border-b-3">Account</span> Information
        </h2>
        <Link to="/" className="underline font-semibold text-lg">
          Go Back
        </Link>
      </div>
      <div className="">
        <div className="flex items-center gap-5 mb-8">
          <div className="h-30 w-30 border rounded-full overflow-hidden">
            <img src="" alt="Profile Image" className="w-full" />
          </div>
          <div>
            <h3 className="text-3xl font-semibold">amanuel</h3>
            <p>amanuel@gmail.com</p>
          </div>
        </div>
        <div className="border p-5 rounded-2xl">
          <form className="max-w-xl space-y-4">
            <div className=" ">
              <label className="font-semibold text-lg">First Name</label>
              <input type="text" className="input w-full mt-2 text-lg" />
            </div>
            <div className=" ">
              <label className="font-semibold text-lg">Last Name</label>
              <input type="text" className="input w-full mt-2 text-lg" />
            </div>
            <div className=" ">
              <label className="font-semibold text-lg">Email</label>
              <input type="email" className="input w-full mt-2 text-lg" />
            </div>
            <div className=" ">
              <label className="font-semibold text-lg">Contact</label>
              <input type="phone" className="input w-full mt-2 text-lg" />
            </div>

            <div className="mt-8 space-x-5">
              <button className="btn bg-primary text-base-100">
                Save Changes
              </button>

              <button className="btn bg-primary text-base-100">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AccountInformation;
