import React from 'react';
import Complete from '../../assets/Task-Complete.png';
const TaskStatus = () => {
  return (
    <div className="p-6 shadow-2xl rounded-2xl ">
      <div className="flex gap-2">
        <img src={Complete} alt="Complete Icon" />
        <h2 className="text-xl text-primary font-medium">Task Status</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-5 justify-between p-3 ">
        <div className="flex flex-col items-center ">
          {' '}
          <div className="w-25 h-25 rounded-full border-10 border-green-500 overflow-hidden flex items-center justify-center">
            <span className="text-xl font-semibold">84%</span>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <div className="h-3 w-3 rounded-full bg-green-500 "></div>
            <p className="font-semibold">Completed</p>
          </div>
        </div>
        <div className="flex flex-col items-center ">
          {' '}
          <div className="w-25 h-25 rounded-full border-10 border-blue-500 overflow-hidden flex items-center justify-center">
            <span className="text-xl font-semibold">46%</span>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <div className="h-3 w-3 rounded-full bg-blue-500 "></div>
            <p className="font-semibold">In Progress</p>
          </div>
        </div>
        <div className="flex flex-col items-center ">
          {' '}
          <div className="w-25 h-25 rounded-full border-10 border-red-500 overflow-hidden flex items-center justify-center">
            <span className="text-xl font-semibold">13%</span>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <div className="h-3 w-3 rounded-full bg-red-500 "></div>
            <p className="font-semibold">Not Started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskStatus;
