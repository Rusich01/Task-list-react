import { useState } from "react";

const TaskForm = ({ addTasks }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [deadline, setDeadline] = useState("");
  const handelSubmit = (event) => {
    event.preventDefault();
    if (title.trim()) {
      addTasks({ title, priority, deadline });
    }
    setTitle("");
    setPriority("Low");
    setDeadline("");
  };
  return (
    <form onSubmit={handelSubmit} className="task-form">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Task title"
        required
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        required
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        type="datetime-local"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
      />
      <button type="submit">Add task</button>
    </form>
  );
};

export default TaskForm;
