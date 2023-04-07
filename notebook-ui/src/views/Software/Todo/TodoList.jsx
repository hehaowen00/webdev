import { useState } from "react";

function TodoList({ title, items }) {
	return (
		<div className="h-full min-h-full w-[410px] mr-5 drop-shadow-xl">
			<div className="bg-white rounded px-2 py-1 h-full min-h-full">
				{/* <div className="mb-1 text-sm">
					<a href="#" className="text-blue-500">Organization</a> <span className="text-gray-400">{">"}</span> <a href="#" className="text-blue-500">Notebook</a>
				</div> */}
				<div className="mb-2">
					<div className="col-span-12">
						<input
							type="text"
							placeholder="Title"
							className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-black shadow-sm"
							defaultValue="List 1"
						/>
					</div>
				</div>
				<div className="">
					<input
						type="text"
						placeholder="Description"
						className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-black shadow-sm"
					/>
					{/* <button className="w-full mt-1 bg-blue-600 text-white rounded px-2 py-1 transform active:scale-90 transition-transform duration-500">
						Add Item
					</button> */}
				</div>
				<div className="flex flex-col mt-2 overflow-y-scroll px-1 pb-1 mb-2">
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
				</div>
			</div>
		</div>
	);
}

function Item() {
	const [checked, setChecked] = useState(false);
	return (
		<div className="border mb-1 pb-2 border-gray-300 bg-white rounded flex flex-col px-2 py-1">
			<div className="w-full flex flex-row">
				<div className="text-sm">
					<input
						type="checkbox"
						onChange={() => setChecked(!checked)}
						className="h-5 w-5 mr-2 rounded-md border-gray-400 bg-white shadow-sm"
					/>
				</div>
				<div className={`pt-[0.12rem] text-sm flex-1 break-word ${checked && 'line-through text-gray-500'}`}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam doloremque blanditiis consequatur ea cumque, numquam dolorum reiciendis laudantium mollitia sit aliquid molestiae fugit assumenda minus quia, accusamus ipsa deleniti.
				</div>
			</div>
			<div className="flex flex-row text-left pt-2 pl-7 text-sm">
				<button className="text-sm mr-1 border border-solid border-green-700 font-medium select-none text-green-700 text-center rounded px-2">
					Edit
				</button>
				<button className="text-sm mr-1 border border-solid border-red-700 font-medium select-none text-red-700 text-center rounded px-2">
					Delete
				</button>
				<button className="ml-auto text-sm mr-1 text-center border border-black font-medium rounded px-2 select-none cursor-normal">
					Apr 02 2023
				</button>
				{!checked && <button className="text-sm bg-blue-500 select-none text-white text-center font-medium rounded px-2 select-none cursor-auto">
					Todo
				</button>}
				{checked && <button className="text-sm bg-green-500 select-none text-white text-center font-medium rounded px-2 select-none cursor-auto">
					Done
				</button>}
			</div>
		</div>
	);
}

function Dropdown() {
	const [selected, setSelected] = useState('');
	return (
		<div className="">
		</div>
	);
}

function StatusLabel({ type }) {
	const { color, text } = status[type];
	console.log(color, text);
	return (
		<div className={`text-sm mr-1 px-2 bg-${color}-600 select-none text-white`}>
			{text}
		</div>
	);
}

export default TodoList;