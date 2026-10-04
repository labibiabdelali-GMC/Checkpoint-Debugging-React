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

  // FIX #3: never mutate state — build a new array with a new task object
  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  // FIX #6: keep every task whose id is NOT the deleted one
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="app">
      {/* FIX #1: prop name was misspelled "tittle" */}
      <Header title="My Task Manager" />
      <AddTaskForm onAdd={addTask} />
      {/* FIX #2: prop was passed as "task" but TaskList expects "tasks" */}
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      <Stats tasks={tasks} />
    </div>
  );
}

export default App;
