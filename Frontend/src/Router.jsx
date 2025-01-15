import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import CaptureRouter from "./pages/Landing Page/CaptureRouter";
import TestPage from "./pages/TestPage";

export default function AppRouter (){
	return (
		<Routes>
			<Route path='/' element={<Navigate to='blog' replace />}/>
			<Route path="/blog/*" element={<CaptureRouter/>} />
			<Route path="/test" element={<TestPage/>} />
		</Routes>
	)

}