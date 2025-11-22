import React, { useState } from "react";

const UseStateHook: React.FC = () => {
  const [age, setAge] = useState("18");
  const [count, setCount] = useState(0);
  const [state, setState] = useState({ count: 0, theme: "light" });

  // Hooks NUNCA podem estar dentro de condições, loops ou funções comuns.
  // Isso quebra as Regras dos Hooks, pois muda a ordem de chamada.
  //
  // if (count > 5) {
  //   const [invalidState, setInvalidState] = useState("isso vai quebrar");
  // }

  const incrementCount = () => {
    setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
      theme: "dark",
    }));
  };
  // ao usar state com objetos, é importante espalhar o estado anterior
  // para não perder os outros valores do objeto

  return (
    <main>
      <div>
        <h1>useState</h1>
        <ul>
          <li>
            O useState é um Hook que permite adicionar o estado do React a
            componentes funcionais.
          </li>
        </ul>
      </div>
      <div>
        <h1>useState com número</h1>
        <p>contagem: {count}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>
          incrementar
        </button>
        <p>
          o ideal é usar sempre a função de atualização do estado para manter o
          valor do estado anterior
        </p>
      </div>
      <div>
        <h1>controlled input com useState</h1>
        <form>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </form>
        <p>voce tem {age} anos</p>
      </div>
      <hr />
    </main>
  );
};

export default UseStateHook;
