import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function CapturePage() {
	return (
		<section
			className="flex flex-col justify-start items-center h-screen w-full py-4 gap-4 overflow-x-hidden overflow-y-auto"
		>
			<div
				className="flex flex-col justify-center items-center w-4/5 gap-4"
				style={{ minHeight: "75%", height: 'auto' }}
			>
				<div
					className="flex flex-col justify-center items-center w-2/3 rounded-xl border border-teal-400 shadow-md shadow-teal-400"
					style={{ minHeight: '16rem' }}
				>
					<h1 className="text-white font-medium text-5xl">
						Welcome to GitFit!
					</h1>
					<p className="text-2xl text-white">
						Manage your career, goals, and health!
					</p>
				</div>
				<Link
					className="flex flex-col justify-center items-center w-48 h-12 rounded-sm border rounded-sm border-teal-500 text-teal-500 font-medium text-2xl transition-all hover:bg-teal-500 hover:text-zinc-950 "
					to='register'
				>
					Get Started
				</Link>
			</div>

			<div
				className="flex flex-col justify-center items-center w-4/5 border-x-2 border-teal-400"
				style={{ minHeight: "100%", height: 'auto' }}
			>

				<div
					className='relative'
				>

				</div>

			</div>
		</section>
	);
}
