//* nav component
// {/* <ul className="flex justify-evenly bg-black rounded">
//     <li className="text-white">Goal Tracker Company</li>
//     <li className="text-white">About us</li>
//     <li className="text-white">Locations</li>
//     <li className="text-white">Sign in</li>
//     <li className="text-white">Sign up</li>
// </ul> */}

//* <!-- Navbar -->
function Nav() {
	return (
		<nav className="bg-black text-yellow-500 p-4 mt-4 mx-4 rounded-lg shadow-lg mb-8">
			<div className="container mx-auto flex justify-between items-center flex-wrap">
				<a href="google.com" className="text-lg font-bold mb-2 md:mb-0">
					Goal Tracker
				</a>
				<ul className="flex space-x-4 mb-2 md:mb-0">
					<li>
						<a href="google.com" className="hover:underline">
							About Us
						</a>
					</li>
					<li>
						<a href="googl.com" className="hover:underline">
							Locations
						</a>
					</li>
				</ul>
				<div className="flex space-x-2">
					<button className="bg-yellow-500 text-black px-4 py-2 rounded">
						Sign In
					</button>
					<button className="bg-yellow-500 text-black px-4 py-2 rounded">
						Sign Up
					</button>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
