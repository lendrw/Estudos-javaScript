import React, { useRef, useState, useEffect } from "react";

const UseRefHook: React.FC = () => {
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState("");

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setText("");
    
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

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
          <li>
            com isso dá pra manipular o DOM ou aplicar funções como focus, que
            foca no input quando necessário
          </li>
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="enviar" />
      </form>
      <hr />
    </main>
  );
};

export default UseRefHook;
