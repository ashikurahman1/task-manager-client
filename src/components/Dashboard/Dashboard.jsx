import React, { useRef } from 'react';
import { HiUsers } from 'react-icons/hi';
import Pending from '../../assets/Pending.png';

import { FaPlus } from 'react-icons/fa6';
import { format } from 'date-fns';
import Card from '../Card/Card';
import TaskStatus from './TaskStatus';
import CompleteTask from './CompleteTask';
import { Link } from 'react-router';
const Dashboard = () => {
  const bidModalRef = useRef(null);

  const openModal = () => {
    bidModalRef.current.showModal();
  };
  const handleClose = () => {
    bidModalRef.current.close();
  };
  return (
    <div className="p-3">
      <section className="flex flex-col items-center lg:flex-row justify-between mb-10 gap-5 ">
        <div>
          <h1 className="font-medium text-3xl  md:text-4xl text-center md:text-left">
            Welcome back, amanuel 👋{' '}
          </h1>
        </div>
        <div>
          {/* Avater  */}

          {/* Button */}
          <button className="btn btn-primary hidden">
            <HiUsers /> Invite
          </button>
        </div>
      </section>
      <section className="p-5 flex flex-col xl:flex-row gap-10 border-3 rounded-2xl border-neutral-500">
        <div className="w-full xl:w-1/2 shadow-2xl rounded-2xl p-5 ">
          <div className="flex justify-between items-center">
            <div className="flex">
              <img src={Pending} alt="Pending Icon" />
              <h2 className="text-xl text-primary font-medium">To-Do</h2>
            </div>

            <button
              onClick={openModal}
              className="btn bg-primary text-base-100 transition "
            >
              <FaPlus className="" /> Add task
            </button>
          </div>
          <div className="text-lg flex gap-3 items-center">
            <p>{format(new Date(), `dd, MMMM`)}</p>
            <p className="text-black/60">Today</p>
          </div>
          {/*  Cards */}
          <div className=" my-3 flex flex-col gap-10">
            {/* Card Item */}

            <Card />
            <Card />
          </div>

          <hr
            style={{
              height: '2px',
              borderWidth: '0',
              backgroundColor: '#ddd',
            }}
          />

          {/*  */}
          <div className="mt-5">
            <Card />
          </div>
        </div>
        <div className="w-full xl:w-1/2">
          <div className="">
            <TaskStatus />
          </div>

          {/* Completed Task */}

          <div className="mt-7">
            <CompleteTask />
          </div>
        </div>
      </section>

      {/* Modal */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById('my_modal_5').showModal()}
      >
        open modal
      </button> */}
      <dialog
        ref={bidModalRef}
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box max-w-3xl">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">
              <span className="border-primary border-b-2">Add New</span> Task
            </h3>
            <button onClick={handleClose} className="underline  cursor-pointer">
              Go Back
            </button>
          </div>
          <form className="border border-neutral-300 p-5 mt-6 space-y-5">
            <div className="">
              <label className="text-lg font-semibold">Title</label>
              <input type="text" className="input w-full mt-2" />
            </div>
            <div className="">
              <label className="text-lg font-semibold">Date</label>
              <input type="date" className="input w-full mt-2" />
            </div>
            <div className="">
              <label className="text-lg font-semibold">Priority</label>
              <div className="flex gap-8">
                <label className="flex gap-2">
                  <input type="radio" name="priority" value="Extreme" />
                  <span className="text-red-500">Extreme</span>
                </label>
                <label className="flex gap-2">
                  <input type="radio" name="priority" value="Extreme" />
                  <span className="text-blue-500">Moderate</span>
                </label>
                <label className="flex gap-2">
                  <input type="radio" name="priority" value="Extreme" />
                  <span className="text-green-500">Low</span>
                </label>
              </div>
            </div>
            <div className="">
              <label className="text-lg font-semibold">Task Description</label>
              <textarea
                rows={10}
                placeholder="Start writing here..."
                className="textarea w-full mt-2"
              />
            </div>

            <div className="flex justify-center">
              <button className="btn bg-primary text-base-100">Add Task</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Dashboard;
