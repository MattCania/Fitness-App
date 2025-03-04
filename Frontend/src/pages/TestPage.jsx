import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TestPage() {
	const [activeDropdown, setActiveDropdown] = useState(null);

	const headerButtons = [
		{
			label: 'Services',
			content: ['Scheduler', 'Health Manager', 'Fitness Tracker'],
		},
		{
			label: 'Products',
			content: ['Workout Equipment', 'Health Products'],
		},
		{
			label: 'About Us',
			content: ['Contacts', 'FAQ', 'Our Company'],
		},
	];

	const toggleMenu = (index) => {
		// Toggle the selected dropdown, and close if it was already open
		setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));
	};

	return (
		<section className="h-screen w-screen flex flex-col justify-start items-center bg-zinc-950 gap-1 overflow-hidden">
			<header
				className="flex flex-col justify-start items-center w-full border-b border-b-gray-600 transition-all duration-300 overflow-hidden"
				style={{ height: activeDropdown !== null ? '16rem' : '2.5rem' }}
			>
				<div className="flex justify-center items-center w-full h-10 gap-96">
					<div className="flex justify-start items-center h-10 w-auto">
						<Link className="flex justify-center items-center w-36 text-teal-400 text-2xl font-bold" to="/">
							Git Fit
						</Link>
						{headerButtons.map((item, index) => (
							<button
								key={index}
								className="flex justify-center items-center w-32 h-4/5 gap-2 font-medium text-white rounded-lg outline-none focus:outline-1 focus:outline-teal-400 hover:bg-gray-800 transition-all duration-500"
								onClick={() => toggleMenu(index)}
							>
								{item.label}
								<FontAwesomeIcon icon={activeDropdown === index ? faCaretUp : faCaretDown} />
							</button>
						))}
						<a
							href="/"
							className="flex justify-center items-center w-auto px-4 h-4/5 gap-2 font-medium text-white rounded-lg outline-none focus:outline-1 focus:outline-teal-400 hover:bg-gray-800 transition-all duration-200"
						>
							Blog
						</a>
					</div>

					<div className="flex justify-start items-center h-full w-auto gap-2">
						<Link
							to="/"
							className="flex justify-center items-center w-32 h-4/5 gap-2 font-medium text-white rounded-lg outline-none focus:outline-1 focus:outline-teal-400 hover:bg-gray-800 transition-all duration-200"
						>
							Contact Us
						</Link>
						<Link
							to="register"
							className="flex justify-center items-center w-32 h-4/5 gap-2 font-medium text-teal-400 border border-teal-400 outline-none focus:outline-1 focus:outline-teal-400 hover:bg-teal-400 hover:text-gray-800 transition-all duration-200"
						>
							Try it now
						</Link>
					</div>
				</div>

				{/* Only show the dropdown content if activeDropdown is not null */}
				{activeDropdown !== null && (
					<div 
						className="flex justify-start items-center w-3/4 h-full gap-10 text-white py-4 px-10 overflow-hidden"
					>
						{headerButtons[activeDropdown].content.map((item, index) => (
							<a key={index} href='' 
								className="flex justify-center items-center text-lg w-64 h-48 font-medium transition-all duration-200 rounded-md border-teal-400 border hover:bg-teal-400 hover:text-zinc-950"
							>
								{item}
							</a>
						))}
					</div>
				)}
			</header>
		</section>
	);
}
