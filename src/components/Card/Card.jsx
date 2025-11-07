const Card = () => {
  return (
    <div className="border-2 rounded-2xl border-[#A1A3AB] relative">
      <div className="rounded-full w-4 h-4 border-4 border-red-500 absolute top-2 left-2"></div>
      <div className=" absolute top-2 right-2">
        <span className="text-xs">ooo</span>
      </div>
      <div className="p-8">
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
          <p className="">
            Priority: <span className="text-blue-500">Moderate</span>
          </p>
          <p>
            Status: <span className="text-red-500">Not Started</span>{' '}
          </p>
          <p className="text-neutral-500">
            Created on:{' '}
            <span className="">{new Date().toLocaleDateString()}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
