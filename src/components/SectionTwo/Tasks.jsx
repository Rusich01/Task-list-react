import TaskList from "./TaskList";
const Tasks = ({
  toggleSection,
  openSection,
  activeTasks,
  deleteTask,
  addCompletedTasks,
  toggleSortOrder,
  sortType,
  currentTime,
}) => {
  return (
    <div className="task-container">
      <h1>Task</h1>
      <button
        onClick={() => toggleSection("task")}
        className={`close-button ${openSection.task ? "open" : ""}`}
      >
        +
      </button>
      {openSection.task && (
        <>
          <div className="sort-controls">
            <button
              className={`sort-button ${sortType === "data" ? "active" : ""}`}
              onClick={() => toggleSortOrder("date")}
            >
              By Data
            </button>
            <button
              className={`sort-button  ${
                sortType === "priority" ? "active" : ""
              }`}
              onClick={() => toggleSortOrder("priority")}
            >
              By Priority
            </button>
          </div>
          <TaskList
            activeTasks={activeTasks}
            deleteTask={deleteTask}
            addCompletedTasks={addCompletedTasks}
            currentTime={currentTime}
          />
        </>
      )}
    </div>
  );
};

export default Tasks;
