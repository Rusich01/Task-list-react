import CompletedTask from "./CompletedTask";
const Complete = ({ toggleSection, openSection, completedTasks ,deleteTask}) => {
  return (
    <div className="completed-task-container">
      <h1>Completed Task</h1>
      <button
        onClick={() => toggleSection("completed")}
        className={`close-button ${openSection.completed ? "open" : ""}`}
      >
        +
      </button>
      {openSection.completed && <CompletedTask completedTasks={completedTasks} deleteTask={deleteTask} />}
    </div>
  );
};

export default Complete;
