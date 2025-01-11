import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./pages/Landing Page/Landing";

export default function AppRouter (){
	return (
		<Routes>
			<Route path='/' element={<Navigate to='blog' replace />}/>
			<Route path="/blog/*" element={<LandingPage/>} />
		</Routes>
	)

}