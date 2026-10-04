import { useState } from 'react';

function AddTaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [hours, setHours] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title.trim(), hours);
    setTitle('');
    setHours(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        min="1"
        value={hours}
        // FIX #4: input values are strings — convert to a number before storing
        onChange={(e) => setHours(Number(e.target.value))}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTaskForm;
