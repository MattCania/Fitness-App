import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import CaptureRouter from "./pages/Landing Page/CaptureRouter";

export default function AppRouter (){
	return (
		<Routes>
			<Route path='/' element={<Navigate to='blog' replace />}/>
			<Route path="/blog/*" element={<CaptureRouter/>} />
		</Routes>
	)

}