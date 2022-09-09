import React, { useState } from "react";

const TodoForm = ({addTodo}) => {
    const [input, setInput] = useState("");
    const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(input)
    setInput("")
  }
  return (
  <form onSubmit={handleSubmit} className="todoForm">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todoForm-input"
        placeholder="Add a todo"
      />
      <button type="submit" className="todoForm-button">Add Todo</button>
    </form>  )
}

export default TodoForm