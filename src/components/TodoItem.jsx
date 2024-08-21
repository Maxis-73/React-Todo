function TodoItem({item, deleteTodo, editTodo}) {
  return (
    <div>
        <p>{item.text}</p>
        <button onClick={() => deleteTodo(item)}>Delete</button>
        <button onClick={() => editTodo(item)}>Editar</button>
    </div>
  )
}

export default TodoItem
