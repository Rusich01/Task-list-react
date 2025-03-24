import TaskItem from "../TaskItem";

const CompletedTask = ({ completedTasks, deleteTask }) => {
  return (
    <ul className="completed-task-list">
      {completedTasks.map((list) => (
        <TaskItem key={list.id} list={list} deleteTask={deleteTask} />
      ))}
    </ul>
  );
};

export default CompletedTask;
