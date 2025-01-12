import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "../Login/Login";
import CapturePage from "./CapturePage";
import CaptureHeader from "../partials/CaptureHeader";

export default function CaptureRouter() {

	return (
		<div
			className='flex flex-col justify-start items-center w-screen h-screen bg-zinc-950 overflow-hidden'
		>
			<CaptureHeader />
			<section
				className='flex flex-col justify-center items-start w-full h-auto overflow-x-hidden'
			>
				<Routes>
					<Route path="/" element={<CapturePage />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</section>

		</div>
	)

}