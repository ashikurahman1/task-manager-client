import React from 'react';

const CompleteCard = () => {
  return (
    <div className="p-4 flex justify-between border-2 rounded-2xl border-[#A1A3AB] relative">
      <div className="rounded-full w-4 h-4 border-4 border-green-500 absolute top-2 left-2"></div>
      <div className=" absolute top-2 right-2">
        <span className="text-xs">ooo</span>
      </div>
      <div className="flex-1 px-3 mt-5">
        <div className="flex gap-3 mb-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">
              Attend Nischal’s Birthday Party
            </h2>
            <p>
              Buy gifts on the way and pick up cake from the bakery. (6 PM |
              Fresh Elements).....
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:justify-between md:flex-row">
          <p>
            Status: <span className="text-green-500">Completed</span>{' '}
          </p>
          <p className="text-neutral-500">Completed 2 days ago.</p>
        </div>
      </div>
    </div>
  );
};

export default CompleteCard;
