import Nav from "./components/navigation/Nav";
import Creator from "./components/Main Components/Creator";
import Presentor from "./components/Main Components/Presentor";

// main App component
export default function App() {
	return (
		<div className="bg-white text-gray-900">
			<Nav />
			<AllComponent />
		</div>
	);
}

// chatgpt content
function AllComponent() {
	//* 	/* Main Content */

	return (
		//TODO: Create Two components Creator(create gaols etc) and Presentor (which show goals ets)
		<div className="container mx-auto p-4">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 grid-cols-2 gap-4">
				<Creator />
				<Presentor />
			</div>
		</div>
	);
}
