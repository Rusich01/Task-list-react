const TaskItem = ({ list, deleteTask, addCompletedTasks }) => {
  const { title, priority, deadline, completed, id } = list;
  return (
    <li className={`task-item ${priority.toLowerCase()}`}>
      <div className="task-info">
        <div>
          {title} <strong>{priority}</strong>
        </div>
        <div className="task-deadline">Due: {deadline}</div>
      </div>

      <div className="task-buttons">
        {!completed && (
          <button
            className="complete-button"
            onClick={() => addCompletedTasks(id)}
          >
            Complete
          </button>
        )}

        <button className="delete-button" onClick={() => deleteTask(id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
