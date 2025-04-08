const TaskItem = ({ list, deleteTask, addCompletedTasks, isOverdue }) => {
  const { title, priority, deadline, completed, id } = list;
  return (
    <li
      className={`task-item ${priority.toLowerCase()} ${
        isOverdue ? "overdue" : ""
      }`}
    >
      <div className="task-info">
        <div>{title}</div>
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
