import { useState } from "react";

export default function TasksCompleted() {
  const [tasks, setTasks] = useState([
    "Created React Router setup",
    "Added temporary menu link",
    "Designed Tasks Completed component"
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tasks Completed</h1>

      {tasks.length === 0 ? (
        <p>No tasks completed yet.</p>
      ) : (
        <ul className="list-disc pl-6">
          {tasks.map((task, index) => (
            <li key={index} className="mb-2">
              {task}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
