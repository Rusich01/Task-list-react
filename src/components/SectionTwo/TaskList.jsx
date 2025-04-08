import TaskItem from "../TaskItem";

const TaskList = ({
  activeTasks,
  deleteTask,
  addCompletedTasks,
  currentTime,
}) => {
  return (
    <ul className="task-list">
      {activeTasks.map((list, index) => (
        <TaskItem
          addCompletedTasks={addCompletedTasks}
          deleteTask={deleteTask}
          key={index}
          list={list}
          isOverdue={new Date(list.deadline) < currentTime}
        />
      ))}
    </ul>
  );
};

export default TaskList;
