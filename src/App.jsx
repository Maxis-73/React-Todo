import { useState } from 'react'
import TodoItem from './components/TodoItem'
import EditTodoForm from './components/EditTodoForm'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodos] = useState([])
  const [todoText, setTodoText] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [currentTodoIndex, setCurrentTodoIndex] = useState('')

  function addTodo(e) {
    e.preventDefault()
    let id = crypto.randomUUID()
    let text = todoText
    if (todoText === '') {
      alert('Añade una descripción a la tarea')
      return
    }
    setTodos([...todos, { 'id': id, 'text': text }])
    setTodoText('')
  }

  function deletoTodo(todoItem) {
    let updatedTodos = todos.filter((item) => item.id !== todoItem.id)
    setTodos(updatedTodos)
  }

  function editTodo(todoItem) {
    setIsEditing(true)
    console.log(todoItem)
    setTodoText(todoItem.text)
    setCurrentTodoIndex(todoItem.id)
  }

  function updateTodo(e){
    e.preventDefault()
    let updatedTodoText = todoText
    let updatedTodos = todos.map(item => {
      if (item.id === currentTodoIndex){
        item.text = updatedTodoText
      }
      return item
    })
    setTodos([...updatedTodos])
    setIsEditing(false)
    setTodoText('')
  }
  return (
    <main>
      <h2>React Todo App</h2>
      {!isEditing && <TodoForm addTodo={addTodo} setTodoText={setTodoText} todoText={todoText}/>}
      {isEditing && <EditTodoForm updateTodo={updateTodo} setTodoText={setTodoText} todoText={todoText} />}
      {
        todos.length > 0 ?
          todos.map(item => (
            <TodoItem
              key={item.id}
              item={item}
              deleteTodo={deletoTodo}
              editTodo={editTodo} />
          ))
          : <p>No hay tareas pendientes</p>
      }
    </main>
  )
}

export default App
