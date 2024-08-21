import React from 'react'

function TodoForm({addTodo, todoText, setTodoText}) {
    return (
        <form onSubmit={addTodo}>
            <input
                type="text"
                placeholder='Escribe tus tareas'
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)} />
            <button type='submit'>Guardar</button>
        </form>
    )
}

export default TodoForm
