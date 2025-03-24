import TaskForm from "./TaskForm";

const TaskForms = ({ toggleSection, openSection ,addTasks}) => {
  return (
    <div className="task-container">
      <h1>Task List with Priority</h1>
      <button
        onClick={() => toggleSection("taskList")}
        className={`close-button ${openSection.taskList ? "open" : ""}`}
      >
        +
      </button>
      {openSection.taskList && <TaskForm addTasks={addTasks} />}
    </div>
  );
};

export default TaskForms;
