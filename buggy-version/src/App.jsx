import { useState } from 'react';
import Header from './components/Header';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import Stats from './components/Stats';

const initialTasks = [
  { id: 1, title: 'Install React Developer Tools', hours: 1, done: true },
  { id: 2, title: 'Inspect the components tree', hours: 2, done: false },
  { id: 3, title: 'Fix the bugs', hours: 3, done: false },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (title, hours) => {
    const newTask = { id: Date.now(), title, hours, done: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    const updated = tasks;
    const task = updated.find((t) => t.id === id);
    task.done = !task.done;
    setTasks(updated);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id === id));
  };

  return (
    <div className="app">
      <Header tittle="My Task Manager" />
      <AddTaskForm onAdd={addTask} />
      <TaskList task={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      <Stats tasks={tasks} />
    </div>
  );
}

export default App;
