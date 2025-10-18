import React, { useRef, useState, useEffect } from "react";

const UseRefHook: React.FC = () => {
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  });

  return (
    <main>
      <div>
        <h1>useRef</h1>
        <ul>
          <li>pode ser usado para gerenciar valores</li>
          <li>é um objeto, seu valor está na propriedade current</li>
          <li>não re-renderiza o componente ao ser alterado</li>
        </ul>
        <p>o componente renderizou: {numberRef.current} vezes</p>
        <p>counter 1: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Contador A</button>
        <p>counter 2: {counterB}</p>
        <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>
      </div>
      <div>
        <h1>useRef e o DOM</h1>
        <ul>
          <li>pode ser usado para selecionar elementos do jsx</li>
          <li>com isso dá pra manipular o DOM ou aplicar funções como focus</li>
        </ul>
      </div>
      <hr />
    </main>
  );
};

export default UseRefHook;
