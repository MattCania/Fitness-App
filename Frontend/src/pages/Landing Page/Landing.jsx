import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LandingHeader from "../partials/LandingHeader"
import Login from "../Login/Login";

export default function LandingPage() {

	return (
		<div
			className='flex justify-center items-start w-screen h-screen bg-zinc-950'
		>
			<LandingHeader />
			<section>
				<Routes>
					<Route path="/login" element={<Login />} />

				</Routes>
			</section>

		</div>
	)

}