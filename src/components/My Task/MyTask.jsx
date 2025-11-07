import { MdDelete } from 'react-icons/md';
import Card from '../Card/Card';
import { SlNote } from 'react-icons/sl';

const MyTask = () => {
  return (
    <section className="p-5 flex flex-col xl:flex-row gap-10 rounded-2xl ">
      <div className="w-full xl:w-1/2 shadow-2xl rounded-2xl p-5 border-2">
        <h2 className="text-xl text-black font-medium">
          <span className="border-primary border-b-3">My</span> Tasks
        </h2>

        <div className=" my-3 flex flex-col gap-10">
          {/* Card Item */}

          <Card />
          <Card />
        </div>
      </div>
      <div className="w-full xl:w-1/2">
        <div className="border-2 rounded-2xl p-6">
          {/* Task Details */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Submit Documents</h2>
            {/* Details */}
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Sapiente, quos quis exercitationem quasi, beatae numquam earum
              aliquid vitae ipsam perspiciatis commodi. Et, labore? Ipsum earum,
              soluta voluptas asperiores dolorum perspiciatis tenetur expedita
              vitae, illo dicta repudiandae, et praesentium fugiat a eveniet
              voluptatem ducimus quos saepe voluptatibus. Nulla est eum numquam
              facilis id obcaecati ad! Ea neque at omnis, quam odit atque culpa,
              natus quis suscipit soluta, facilis quidem doloribus debitis
              officia? Enim illum impedit facilis similique voluptatum
              distinctio expedita iure pariatur fuga? Sit hic deleniti porro
              libero iusto nostrum recusandae vel vero suscipit nemo neque nisi
              reiciendis veritatis ipsa eos tempora, quis ad nobis voluptates
              repudiandae? Fugiat, nostrum ex animi eligendi corrupti officia
              ducimus ipsa. Fugit minus, ad aperiam harum dolores quidem dicta
              quia rem repudiandae ab voluptatibus accusantium doloremque
              eligendi quisquam blanditiis corrupti vero facilis odit eum
              tempora quasi qui. Porro nisi veniam omnis facilis autem minus quo
              eligendi, reprehenderit ut, sapiente enim vel alias at corporis
              tempore nemo. Rem non necessitatibus voluptatibus praesentium
              laboriosam reprehenderit ex aut magnam. Asperiores iusto tenetur
              error quas consequuntur cupiditate omnis at, perspiciatis
              nesciunt, quisquam exercitationem dolorem eligendi veniam rerum
              sit nobis? Dolores dicta quia hic necessitatibus, consectetur
              architecto maiores inventore enim eligendi?
            </p>
            <p>
              Priority: <span className="text-red-500">Extreme </span>
            </p>
            <p>
              Status: <span className="text-red-500">Not Started</span>
            </p>
            <p className="text-sm text-neutral-400">Created on: 20/06/2023</p>
          </div>
          <div className="mt-8 ">
            <button className="p-3 rounded-md bg-primary text-base-100 cursor-pointer">
              <MdDelete size={25} />
            </button>
            <button className="p-3 rounded-md bg-primary text-base-100 cursor-pointer ml-5">
              <SlNote size={25} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyTask;
