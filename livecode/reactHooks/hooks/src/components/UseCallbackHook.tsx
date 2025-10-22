import React, { useCallback, useState } from "react";
import List from "./List";

const UseCallbackHook: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const getItemsFromDatabase = useCallback(() => {
    return ["a", "b", "c"];
  }, []);

  return (
    <main>
      <div>
        <h1>useCallback</h1>
        <ul>
          <li>
            memoriza uma função e faz ela não ser reconstruída a cada
            renderização
          </li>
          <li>preza pela performance</li>
          <li>
            o react também pode indicar quando uma função deve ser contida em
            useCallback
          </li>
        </ul>
      </div>
      <div>
        <List getItems={getItemsFromDatabase} />
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Alterar</button>
      </div>
      <hr />
    </main>
  );
};

export default UseCallbackHook;
