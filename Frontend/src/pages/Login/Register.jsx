import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Register() {

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
					className='flex justify-start items-start flex-wrap text-wrap text-teal-400 text-lg w-full h-auto font-sans font-medium'

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
						className='w-3/4 h-10 bg-transparent text-white hover:shadow-teal-600 border border-teal-400 rounded-sm outline-none shadow-md focus:shadow-teal-400 px-2'
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
						className='w-3/4 h-10 bg-transparent text-white hover:shadow-teal-600 border border-teal-400 rounded-sm outline-none shadow-md focus:shadow-teal-400 px-2'
						type="email"
						name="email"
						id="email"
						placeholder='Email123@gmail.com'
					/>

					<div
						className='flex justify-center items-center w-3/4 gap-4'
					>
						<div
							className='flex flex-col justify-center items-center w-full'
						>
							<label
								className='flex justify-start items-center w-full h-auto m-2 text-teal-400'
								htmlFor="age"
							>
								Age:
							</label>
							<input
								className='w-full h-10 bg-transparent text-white hover:shadow-teal-600 border border-teal-400 rounded-sm outline-none shadow-md focus:shadow-teal-400 px-2'
								type="number"
								name="age"
								id="age"
							/>
						</div>
						<div
							className='flex flex-col justify-center items-center w-full'
						>
							<label
								className='flex justify-start items-center w-full h-auto m-2 text-teal-400'
								htmlFor="age"
							>
								Weight (kg):
							</label>
							<input
								className='w-full h-10 bg-transparent text-white hover:shadow-teal-600 border border-teal-400 rounded-sm outline-none shadow-md focus:shadow-teal-400 px-2'
								type="number"
								name="weight"
								id="weight"
							/>
						</div>
					</div>
				</form>
			</div>
		</section>
	)
}