//* Creator component

function Creator() {
	return (
		<div>
			<div className="flex space-x-2 mb-4 flex-wrap">
				<button className="bg-black text-yellow-500 px-4 py-2 rounded mb-2 md:mb-0">
					Create Goal
				</button>
				<button className="bg-black text-yellow-500 px-4 py-2 rounded mb-2 md:mb-0">
					Tab 2
				</button>
				<button className="bg-black text-yellow-500 px-4 py-2 rounded mb-2 md:mb-0">
					Tab 3
				</button>
			</div>
			<div className="mb-4">
				<label className="block text-gray-700 mb-2" htmlFor="goalTitle">
					Goal Title
				</label>
				<input
					className="w-full px-4 py-2 border rounded"
					type="text"
					id="goalTitle"
					placeholder="Placeholder"
				/>
			</div>
			<div className="mb-4">
				<label className="block text-gray-700 mb-2" htmlFor="goalDescription">
					Goal Description
				</label>
				<textarea
					className="w-full px-4 py-2 border rounded"
					id="goalDescription"
					placeholder="Placeholder"
				></textarea>
			</div>
			<div className="mb-4">
				<label className="block text-gray-700 mb-2" htmlFor="goalDate">
					Choose Date
				</label>
				<input
					className="w-full px-4 py-2 border rounded"
					type="date"
					id="goalDate"
				/>
			</div>
			<button className="bg-yellow-500 text-black px-4 py-2 rounded">
				Create Goal
			</button>
		</div>
	);
}

export default Creator;
