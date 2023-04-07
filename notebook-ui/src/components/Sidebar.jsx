import { ArrowDown } from "../assets/Icons";

function Sidebar() {
  return (
    <div className="mx-auto p-2 float-left max-w-[20rem]
     min-w-[16rem] bg-white flex-1 drop-shadow ml-0 rounded-xl select-none"
    >
      <nav className="flex flex-col space-y-1 bg-white rounded h-full">
        <div className="pl-2">
          <a
            className="block text-2xl font-bold text-blue-700 dark:text-blue-600"
            href="/"
          >
            Notebook
          </a>
        </div>

        <div className="border-solid border-b-2 border-gray-200"></div>

        <div className="flex-1 flex-col overflow-auto max-w-full">

          <button
            className="flex w-full hover:bg-gray-100 items-centers gap-2 rounded
           px-2 py-1 text-gray-500 hover:text-gray-700"
            href=""
          >
            <span className="text-sm font-medium">Dashboard</span>
          </button>
          <button
            className="flex w-full hover:bg-gray-100 items-centers gap-2 rounded
           px-2 py-1 text-gray-500 hover:text-gray-700"
            href=""
          >
            <span className="text-sm font-medium">Profile</span>
          </button>


          <button
            className="flex w-full hover:bg-gray-100 items-centers gap-2 rounded
           px-2 py-1 text-gray-500 hover:text-gray-700"
            href=""
          >
            <span className="text-sm font-medium">Organizations</span>
          </button>

          <div className="mt-2 mb-1 border-solid border-b-2 border-gray-200"></div>

          <button
            className="flex w-full hover:bg-gray-100 items-centers gap-2 rounded
           px-2 py-1 text-gray-500 hover:text-gray-700"
            href=""
          >
            <span className="text-sm font-medium">Notebooks</span>
          </button>

          <button
            className="flex w-full hover:bg-gray-100 items-centers gap-2 rounded
           px-2 py-1 text-gray-500 hover:text-gray-700"
            href=""
          >
            <span className="text-sm font-medium">Todo Lists</span>
          </button>

          <div className="mt-2 mb-1 border-solid border-b-2 border-gray-200"></div>

        </div>
        <div className="w-full">
          <div className="border-solid border-b-2 border-gray-200"></div>
          <a
            className="block w-full rounded px-2 py-1 mt-2 text-sm font-medium
             text-gray-500 hover:bg-gray-100 hover:text-gray-700 text-left"
            href="/"
          >
            Logout
          </a>
        </div>
      </nav>
    </div>
  );
}

function Account() {
  return (
    <div className="">
    </div>
  );
}

export default Sidebar;
