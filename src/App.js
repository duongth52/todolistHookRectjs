import React, {useState} from 'react';
import FormToDo from './ToDoForm';
import TodoList from './TodoList';

function App() {

  const [todos, setTodos] = useState([]);

  var saveTodo = (text) => {
      setTodos([...todos, text])
  } 
  var deleteTodo = (index) => {
    const newTodos = todos.filter((_, indexFilter) => indexFilter !== index);
    setTodos(newTodos)
  }

  return (
    <div>
      <h1>To DO</h1>
      <FormToDo saveTodo={saveTodo}/>

      <h2>danh sách todo </h2>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>

    </div>
  );
}

export default App;
