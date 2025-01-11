import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function LandingHeader() {

	return (

		<header
			className='flex justify-between w-full h-10 border-b border-b-gray-600'
		>
			<div
				className='flex justify-start items-center h-full w-auto'
			>
				<a
					className='flex justify-center items-center w-36 text-teal-400 text-2xl font-bold'
					href="/"
				>
					Git Fit
				</a>
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
					className='flex justify-center items-center w-32 h-4/5 gap-2 font-medium text-white rounded-lg outline-none focus:outline-1 focus:outline-teal-400 hover:bg-gray-800'
				>
					Blog
				</a>
			</div>

			<div
				className='flex'
			>

			</div>

		</header>

	)

}