import { faCheck, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";

export default function Login() {
	const [visible, setVisible] = useState(false);

	const toggleVisibility = () => {
		setVisible(visible => !visible)
	}
 

	return (

		<section
			className="flex justify-center items-center h-screen w-full py-4 overflow-x-hidden overflow-y-auto"
		>
			<div
				className='flex flex-col justify-center items-center w-2/5 h-1/2 rounded-md shadow-md shadow-teal-400 border border-teal-400'
			>
				<h1
					className='flex justify-center items-center w-full h-16 text-3xl font-medium text-teal-400'
				>
					Login
				</h1>

				<form
					className='flex flex-col justify-start items-center w-full h-auto'
					action=""
				>
					<label
						className='flex justify-start items-center w-3/4 h-auto m-2 text-teal-400'
						htmlFor="email"
					>
						Email:
					</label>
					<input
						className='w-3/4 h-10 bg-transparent text-white hover:shadow-teal-600 border border-teal-400 rounded-sm outline-none shadow-md focus:shadow-teal-400 px-2 transition-all duration-500'
						type="text"
						name="email"
						id="email"
						placeholder='email123@gmail.com'
					/>

					<label
						className='flex justify-start items-center w-3/4 h-auto m-2 text-teal-400'
						htmlFor="password"
					>
						Password:
					</label>
					<div
						className='flex justify-start items-center w-3/4 h-10 relative'
					>
						<input
							className='w-full h-10 bg-transparent text-white hover:shadow-teal-600 border border-teal-400 rounded-sm outline-none shadow-md focus:shadow-teal-400 px-2 transition-all duration-500'
							type={visible ? 'text' : 'password'}
							name="password"
							id="password"
							placeholder='*****'
						/>

						<button
							type="button"
							onClick={toggleVisibility}
							className="flex justify-center items-center absolute w-4 h-4 text-teal-400 right-2 outline-none hover:text-teal-600 transition-all duration-200"
						>		
							<FontAwesomeIcon icon={visible ? faEye : faEyeSlash}/>
						</button>

					</div>
					<input
						className='flex justify-center items-center cursor-pointer w-32 h-10 my-2 rounded-md gap-2 font-medium text-teal-400 border border-teal-400 outline-none focus:outline-1 focus:outline-teal-400 hover:bg-teal-400 hover:text-gray-800 transition-all duration-200 mt-6'

						type="submit" value="Login" />
				</form>
			</div>
		</section>
	)
}