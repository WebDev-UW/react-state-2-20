import React from 'react';

function TodoList() {
	return (
		<div>
			<input type="text" />
			<button>Add Todo</button>
			<ul>
				{/* Render the list of todo items here */}
			</ul>
		</div>
	);
}

export default TodoList;