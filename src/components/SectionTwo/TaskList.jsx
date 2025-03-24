import TaskItem from "../TaskItem";

const TaskList = ({ activeTasks, deleteTask, addCompletedTasks }) => {
  return (
    <ul className="task-list">
      {activeTasks.map((list, index) => (
        <TaskItem
          addCompletedTasks={addCompletedTasks}
          deleteTask={deleteTask}
          key={index}
          list={list}
        />
      ))}
    </ul>
  );
};

export default TaskList;
