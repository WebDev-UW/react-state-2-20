import React from "react"
import { Link } from "react-router-dom"

function Home() {
	return (
		<div id="container">
			<img src="./logo.png" id="top-logo" />
			<h1>2/20 React State Exercises</h1>
			<hr />
			<ol id="exercise-links">
				<li><Link to="/exercises/exercise-1-counter">Exercise 1 - Counter</Link></li>
				<li><Link to="exercises/exercise-2-controlled-input">Exercise 2 - Controlled Input</Link></li>
				<li><Link to="exercises/exercise-3-character-counter">Exercise 3 - Character Counter</Link></li>
				<li><Link to="exercises/exercise-4-toggle-visibility">Exercise 4 - Toggle Visibility</Link></li>
				<li><Link to="exercises/exercise-5-todo-list">Exercise 5 - Todo List</Link></li>
			</ol>
		</div>
	)
}

export default Home
