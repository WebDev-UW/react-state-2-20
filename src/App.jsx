import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Counter from "./exercises/Exercise1"
import InputField from "./exercises/Exercise2"
import CharacterCounter from "./exercises/Exercise3"
import ToggleVisibility from "./exercises/Exercise4"
import TodoList from "./exercises/Exercise5"
import "./style.css"

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/exercises/exercise-1-counter" element={<Counter />} />
				<Route path="/exercises/exercise-2-controlled-input" element={<InputField />} />
				<Route path="/exercises/exercise-3-character-counter" element={<CharacterCounter />} />
				<Route path="/exercises/exercise-4-toggle-visibility" element={<ToggleVisibility />} />
				<Route path="/exercises/exercise-5-todo-list" element={<TodoList />} />
			</Routes>
		</>
	)
}

export default App