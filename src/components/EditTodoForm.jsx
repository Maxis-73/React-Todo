import React from 'react'

function EditTodoForm({updateTodo, todoText, setTodoText}) {
    return (
        <form onSubmit={updateTodo}>
            <input
                type="text"
                placeholder='Actualiza tu tarea'
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)} />
            <button type='submit'>Actualizar</button>
        </form>
    )
}

export default EditTodoForm
