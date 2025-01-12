import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';

export default function CaptureHeader() {

	return (

		<header
			className='flex justify-center w-full h-10 border-b gap-96 border-b-gray-600'
		>
			<div
				className='flex justify-start items-center h-full w-auto'
			>
				<Link
					className='flex justify-center items-center w-36 text-teal-400 text-2xl font-bold'
					to="/"
				>
					Git Fit
				</Link>
				<button
					className='flex justify-center items-center w-32 h-4/5 gap-2 font-medium text-white rounded-lg outline-none focus:outline-1 focus:outline-teal-400 hover:bg-gray-800'
				>
					Services
					<FontAwesomeIcon icon={faCaretDown} />
				</button>
				<button
					className='flex justify-center items-center w-32 h-4/5 gap-2 font-medium text-white rounded-lg outline-none focus:outline-1 focus:outline-teal-400 hover:bg-gray-800'
				>
					Products
					<FontAwesomeIcon icon={faCaretDown} />
				</button>
				<button
					className='flex justify-center items-center w-32 h-4/5 gap-2 font-medium text-white rounded-lg outline-none focus:outline-1 focus:outline-teal-400 hover:bg-gray-800'
				>
					About Us
					<FontAwesomeIcon icon={faCaretDown} />
				</button>
				<a href='/'
					className='flex justify-center items-center w-auto px-4 h-4/5 gap-2 font-medium text-white rounded-lg outline-none focus:outline-1 focus:outline-teal-400 hover:bg-gray-800'
				>
					Blog
				</a>
			</div>

			<div
				className='flex justify-start items-center h-full w-auto gap-2'
			>
				<Link to='/'
					className='flex justify-center items-center w-32 h-4/5 gap-2 font-medium text-white rounded-lg outline-none focus:outline-1 focus:outline-teal-400 hover:bg-gray-800'
				>
					Contact Us
				</Link>
				<Link to='login'
					className='flex justify-center items-center w-32 h-4/5 gap-2 font-medium text-teal-400 border border-teal-400 outline-none focus:outline-1 focus:outline-teal-400 hover:bg-gray-800'
				>
					Try it now
				</Link>
			</div>

		</header>

	)

}