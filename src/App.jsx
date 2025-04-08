import { useEffect, useState } from "react";
import TaskForms from "./components/SectionOne/TaskForms";
import Tasks from "./components/SectionTwo/Tasks";
import Complete from "./components/SectionThree/Complete";

function App() {
  // Сортировка
  const [sortType, setSortType] = useState("date"); //priority
  const [sortOrder, setSotOrder] = useState("asc"); // desc
  const sortTask = (tasks) => {
    return tasks.slice().sort((a, b) => {
      if (sortType === "priority") {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return sortOrder == "asc"
          ? priorityOrder[a.priority] - priorityOrder[b.priority]
          : priorityOrder[b.priority] - priorityOrder[a.priority];
      } else {
        return sortOrder === "asc"
          ? new Date(a.deadline) - new Date(b.deadline)
          : new Date(b.deadline) - new Date(a.deadline);
      }
    });
  };

  // Дедлайн задачи
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleSortOrder = (type) => {
    if (sortType === type) {
      setSotOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortType(type);
      setSotOrder("asc");
    }
  };
  // Рендер секций
  const [openSection, setOpenSection] = useState({
    taskList: true,
    task: true,
    completed: true,
  });

  const toggleSection = (section) => {
    setOpenSection((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  // Создание всех тасков
  const [tasks, setTasks] = useState([]);

  const addTasks = (task) => {
    setTasks([...tasks, { ...task, completed: false, id: Date.now() }]);
  };
  // Удаление тасков по кнопке Delete
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // Перемещение в выполенно
  const addCompletedTasks = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  // Добавление тасков в карточки процесов
  const activeTasks = sortTask(tasks.filter((task) => !task.completed));
  const completedTasks = sortTask(tasks.filter((task) => task.completed));

  return (
    <div className="app">
      <TaskForms
        toggleSection={toggleSection}
        openSection={openSection}
        addTasks={addTasks}
      />
      <Tasks
        activeTasks={activeTasks}
        toggleSection={toggleSection}
        openSection={openSection}
        deleteTask={deleteTask}
        addCompletedTasks={addCompletedTasks}
        toggleSortOrder={toggleSortOrder}
        sortType={sortType}
        currentTime={currentTime}
      />
      <Complete
        toggleSection={toggleSection}
        openSection={openSection}
        completedTasks={completedTasks}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
