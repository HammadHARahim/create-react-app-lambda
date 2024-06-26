//* Presentor Component for presentation
function Presentor() {
	return (
		<div className="bg-black text-yellow-500 p-4 rounded-lg">
			<div className="flex space-x-2 mb-4 flex-wrap">
				<button className="bg-yellow-500 text-black px-4 py-2 rounded mb-2 md:mb-0">
					Goals
				</button>
				<button className="bg-yellow-500 text-black px-4 py-2 rounded mb-2 md:mb-0">
					Tab 2
				</button>
				<button className="bg-yellow-500 text-black px-4 py-2 rounded mb-2 md:mb-0">
					Tab 3
				</button>
			</div>
			{/* Add your content here */}
		</div>
	);
}

export default Presentor;
