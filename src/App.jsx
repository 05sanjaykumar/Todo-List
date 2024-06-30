import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleEdit = (id) => {
    const todoToEdit = todos.find(item => item.id === id);
    if (todoToEdit) {
      setTodo(todoToEdit.todo);
      setTodos(prevTodos => prevTodos.filter(item => item.id !== id));
    }
  }

  const handleDelete = (id) => {
    setTodos(prevTodos => prevTodos.filter(item => item.id !== id));
  }

  const handleAdd = () => {
    if (todo.trim() !== "") {
      setTodos(prevTodos => [...prevTodos, { id: uuidv4(), todo, isCompleted: false }]);
      setTodo("");
    }
  }

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleCheckBox = (id) => {
    setTodos(prevTodos => prevTodos.map(item =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    ));
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-200 min-h-[80vh]">
        <div className="addTodo">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className='w-1/2' />
          <button onClick={handleAdd} className='bg-green-500 text-white rounded-lg p-1 py-1 mx-2 hover:bg-green-700'>Submit</button>
        </div>
        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div>No todos to display</div>}
          {todos.map(item => (
            <div key={item.id} className="todo flex justify-between p-2">
              <input
                type="checkbox"
                checked={item.isCompleted}
                onChange={() => handleCheckBox(item.id)}
              />
              <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              <div className="buttons">
                <button onClick={() => handleEdit(item.id)} className='bg-yellow-500 text-white rounded-lg p-2 py-1 mx-2 hover:bg-yellow-700'>Edit</button>
                <button onClick={() => handleDelete(item.id)} className='bg-red-500 text-white rounded-lg p-2 py-1 mx-2 hover:bg-red-700'>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default App