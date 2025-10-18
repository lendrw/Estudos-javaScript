import React, { useReducer, useState } from "react";

// Reducer para número aleatório
const numberReducer = (state: number, action: "RANDOM") => {
  switch (action) {
    case "RANDOM":
      return Math.floor(Math.random() * 100);
    default:
      return state;
  }
};

// Tipagem para tarefas
interface Task {
  id: number;
  text: string;
}

type TaskAction =
  | { type: "ADD"; payload: string }
  | { type: "DELETE"; id: number };

// Reducer para tarefas
const taskReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD": {
      const newTask: Task = {
        id: Math.random(),
        text: action.payload,
      };
      return [...state, newTask];
    }
    case "DELETE": {
      return state.filter((task) => task.id !== action.id);
    }
    default:
      return state;
  }
};

const UseReducerHook: React.FC = () => {
  const [number, dispatchNumber] = useReducer(numberReducer, 0);

  const [text, setText] = useState("");
  const initialTasks: Task[] = [
    { id: 1, text: "do something" },
    { id: 2, text: "do something else" },
  ];
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatchTasks({ type: "ADD", payload: text });
    setText("");
  };

  const removeTask = (id: number) => {
    dispatchTasks({ type: "DELETE", id: id });
  };

  return (
    <main>
      <div>
        <h1>useReducer</h1>
        <ul>
          <li>gerencia valores como useState</li>
          <li>pode executar lógica mais complexa ao atualizar o state</li>
          <li>recebe um state inicial e uma função reducer</li>
        </ul>
      </div>

      <div>
        <p>Número: {number}</p>
        <button onClick={() => dispatchNumber("RANDOM")}>
          Gerar número aleatório
        </button>
      </div>

      <div>
        <h1>Tarefas</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Nova tarefa"
          />
          <button type="submit">Adicionar</button>
        </form>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} onDoubleClick={() => removeTask(task.id)}>
              {task.text}
            </li>
          ))}
        </ul>
      </div>
      <hr />
    </main>
  );
};

export default UseReducerHook;
