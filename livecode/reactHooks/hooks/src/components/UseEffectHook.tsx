import React, { useEffect, useState } from "react";

const UseEffectHook: React.FC = () => {
  useEffect(() => {
    console.log("a");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  return (
    <main>
      <div>
        <h1>useEffect</h1>
        <ul>
          <li>
            permite executar efeitos colaterais em componentes funcionais.
          </li>
          <li>
            Efeitos colaterais são ações que não fazem parte da renderização
            pura, como: Buscar dados de uma API, Assinar eventos
          </li>
        </ul>
        <p onClick={() => changeSomething()}>{number}</p>
      </div>

      <hr />
    </main>
  );
};

export default UseEffectHook;
