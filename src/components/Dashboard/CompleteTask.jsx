import React from 'react';
import Book from '../../assets/Book.png';
import Card from '../Card/Card';
import CompleteCard from '../Card/CompleteCard';
const CompleteTask = () => {
  return (
    <div className="shadow-2xl rounded-2xl p-2 lg:p-5 mt-10">
      <div className="flex gap-3">
        <img src={Book} alt="Complete Icon" />
        <h2 className="text-xl text-primary font-medium">Complete Task</h2>
      </div>

      <div className="p-2 lg:p-5 flex flex-col gap-8 mt-5">
        <CompleteCard />
        <CompleteCard />
      </div>
    </div>
  );
};

export default CompleteTask;
