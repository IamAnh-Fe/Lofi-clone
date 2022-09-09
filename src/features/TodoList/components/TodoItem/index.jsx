import React from 'react'
import { RiCloseCircleLine } from "react-icons/ri"
import { BiCheckCircle } from "react-icons/bi"
const TodoItem = ({todo, removeTodo, completeTodo, importantTodo}) => {
  return (
  <div className={todo.completed ? "todoItem-row complete" : "todoItem-row"} style={todo.important ? { background: "orange" } : {}}>
            {todo.text}
            <div className="todoItem-content">
                <button onClick={() => importantTodo(todo.id)} className="important-btn">!</button>
                <BiCheckCircle onClick={() => completeTodo(todo.id)}/>
                <RiCloseCircleLine onClick={() => removeTodo(todo.id)}/>
            </div>
    </div>  )
}

export default TodoItem