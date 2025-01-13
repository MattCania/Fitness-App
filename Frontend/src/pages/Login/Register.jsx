import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";

export default function Register() {
	const [selectedOption, setSelectedOption] = useState("option1");

	const handleChange = (event) => {
		setSelectedOption(event.target.value);
	};
	return (

		<section
			className="flex justify-center items-center h-screen w-full py-4 overflow-x-hidden overflow-y-auto"
		>

			<div
				className='flex flex-col justify-center items-start w-2/5 h-full rounded-md gap-2'
			>
				<h1
					className='text-teal-400 text-5xl font-medium'
				>
					Try Premium
				</h1>
				<p
					className='flex justify-start items-start flex-wrap text-wrap text-teal-400 text-lg w-11/12 h-auto font-sans font-medium'

				>
					GitFit, is a goal setter primarily for programmers alike.
					Our service includes:
				</p>

				<ul
					className='text-teal-400 text-md'
				>
					<li
						className='flex justify-start items-center gap-2'
					>
						<FontAwesomeIcon icon={faCheck} />
						Schedule Calendar
					</li>
					<li
						className='flex justify-start items-center gap-2'
					>
						<FontAwesomeIcon icon={faCheck} />
						Gym Program Setter
					</li>
					<li
						className='flex justify-start items-center gap-2'
					>
						<FontAwesomeIcon icon={faCheck} />
						Career based goal Setter
					</li>
				</ul>
			</div>
			<div
				className='flex flex-col justify-center items-start w-2/5 h-full rounded-md shadow-md shadow-teal-400 border border-teal-400'
			>
				<h1
					className='flex justify-center items-center w-full h-16 text-3xl font-medium text-teal-400'
				>
					Register
				</h1>

				<form
					className='flex flex-col justify-start items-center w-full h-full'
					action=""
				>
					<label
						className='flex justify-start items-center w-3/4 h-auto m-2 text-teal-400'
						htmlFor="name"
					>
						Name:
					</label>
					<input
						className='w-3/4 h-10 bg-transparent text-white hover:shadow-teal-600 border border-teal-400 rounded-sm outline-none shadow-md focus:shadow-teal-400 px-2 transition-all duration-500'
						type="text"
						name="name"
						id="name"
						placeholder='Matthew Cania'
					/>

					<label
						className='flex justify-start items-center w-3/4 h-auto m-2 text-teal-400'
						htmlFor="email"
					>
						Email:
					</label>
					<input
						className='w-3/4 h-10 bg-transparent text-white hover:shadow-teal-600 border border-teal-400 rounded-sm outline-none shadow-md focus:shadow-teal-400 px-2 transition-all duration-500'
						type="email"
						name="email"
						id="email"
						placeholder='Email123@gmail.com'
					/>

					<hr className="w-3/4 border-1 border-teal-900 my-4" />

					<div
						className='flex justify-center items-center w-3/4 gap-4'
					>
						<div
							className='flex flex-col justify-center items-center w-full h-full'
						>
							<label
								className='flex justify-start items-center w-full h-auto m-2 text-teal-400'
								htmlFor="age"
							>
								Age:
							</label>
							<input
								className='w-full h-10 bg-transparent text-white hover:shadow-teal-600 border border-teal-400 rounded-sm outline-none shadow-md focus:shadow-teal-400 px-2 transition-all duration-500'
								type="number"
								name="age"
								id="age"
							/>
							<label
								className='flex justify-start items-center w-full h-auto m-2 text-teal-400'
								htmlFor="weight"
							>
								Weight (kg):
							</label>
							<input
								className='w-full h-10 bg-transparent text-white hover:shadow-teal-600 border border-teal-400 rounded-sm outline-none shadow-md focus:shadow-teal-400 px-2 transition-all duration-500'
								type="number"
								name="weight"
								id="weight"
							/>
						</div>
						<div
							className='flex flex-col justify-start items-center w-full h-full'
						>
							<div
								className='flex justify-start items-start flex-col gap-2 w-3/4 h-full'
							>
								<h1
									className='text-lg text-teal-400'
								>
									Choose a Plan:
								</h1>

								<div
									className='flex justify-start items-center h-4 w-full'
								>
									<input type="radio" name="plan" id="planA"
										className='hidden peer'
									/>
										<label 
											className='flex justify-start items-center w-full text-teal-400 text-md px-6 cursor-pointer' 
											htmlFor="planA"
										>
											Free
										</label>
									<div 
										className="absolute h-3 w-3 outline-4 outline-double outline-teal-400 rounded-full bg-transparent border border-teal-400 transition-all peer-checked:bg-teal-400 peer-checked:border-double"
									> </div>
								</div>

								<div
									className='flex justify-start items-center h-4 w-full'
								>
									<input type="radio" name="plan" id="planB"
										className='hidden peer'
									/>
										<label 
											className='flex justify-start items-center w-full text-teal-400 text-md px-6 cursor-pointer' 
											htmlFor="planB"
										>
											1 Month
										</label>
									<div 
										className="absolute h-3 w-3 outline-4 outline-double outline-teal-400 rounded-full bg-transparent border border-teal-400 transition-all peer-checked:bg-teal-400 peer-checked:border-double"
									> </div>
								</div>

								<div
									className='flex justify-start items-center h-4 w-full'
								>
									<input type="radio" name="plan" id="planC"
										className='hidden peer'
									/>
										<label 
											className='flex justify-start items-center w-full text-teal-400 text-md px-6 cursor-pointer' 
											htmlFor="planC"
										>
											6 Months
										</label>
									<div 
										className="absolute h-3 w-3 outline-4 outline-double outline-teal-400 rounded-full bg-transparent border border-teal-400 transition-all peer-checked:bg-teal-400 peer-checked:border-double"
									> </div>
								</div>

								<div
									className='flex justify-start items-center h-4 w-full'
								>
									<input type="radio" name="plan" id="planD"
										className='hidden peer'
									/>
										<label 
											className='flex justify-start items-center w-full text-teal-400 text-md px-6 cursor-pointer' 
											htmlFor="planD"
										>
											1 Year
											
											</label>
									<div 
										className="absolute h-3 w-3 outline-4 outline-double outline-teal-400 rounded-full bg-transparent border border-teal-400 transition-all peer-checked:bg-teal-400 peer-checked:border-double"
									> </div>
								</div>
							</div>

						</div>
					</div>

					<hr className="w-3/4 border-1 border-teal-900 my-4" />
					<div
						className='flex flex-col justify-start items-center my-4 w-3/4 h-1/3 '
					>
						<label htmlFor="goal"
							className='flex justify-start items-center w-11/12 text-teal-400 m-1 '
						>
							What's the goal you plan to accomplish?
						</label>

						<div
							className="flex justify-start items-center w-11/12 h-3/4"
						>

							<textarea
								className="h-full w-full resize-none bg-transparent text-teal-400 outline-none border border-teal-800 p-1"
								name="" id="">

							</textarea>

						</div>

					</div>

				</form>
			</div>
		</section>
	)
}