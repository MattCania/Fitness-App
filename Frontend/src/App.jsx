import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";import { useState } from 'react'
import './App.css'
import AppRouter from './Router'

function App() {	
	return (
		<Router> 
			<AppRouter/>
		</Router>
	)
}

export default App
