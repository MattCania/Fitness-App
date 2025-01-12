export default function CapturePage() {
	return (
		<section
			className="flex flex-col justify-start items-center h-screen w-full py-4 gap-4 overflow-x-hidden overflow-y-auto"
		>
			<div
				className="flex flex-col justify-center items-center h-64 w-1/2 rounded-xl border border-teal-400 shadow-md shadow-teal-400"
			>
				<h1 className="text-white font-medium text-4xl">
					Welcome to GitFit!
				</h1>
				<p className="text-xl text-white">
					Manage your career, goals, and health!
				</p>
			</div>

			<div
				className="flex flex-col justify-center items-center w-4/5 border-x-2 border-teal-400"
				style={{ minHeight: "100%", height: 'auto' }}
			>
			</div>
		</section>
	);
}
