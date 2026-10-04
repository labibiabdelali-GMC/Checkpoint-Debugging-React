function Stats({ tasks }) {
  const completed = tasks.filter((t) => t.done).length;
  const totalHours = tasks.reduce((sum, t) => sum + t.hours, 0);

  return (
    <footer className="stats">
      <span>
        Completed: <strong>{completed}</strong> / {tasks.length}
      </span>
      <span>
        Total estimate: <strong>{totalHours}h</strong>
      </span>
    </footer>
  );
}

export default Stats;
