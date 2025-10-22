import React, { useEffect, useMemo, useState } from "react";

const UseMemoHook: React.FC = () => {
  const [number, setNumber] = useState("0");
  const premiumNumbers = useMemo(() => {
    return ["0", "100", "200"];
    {
      /**sem o useMemo, o array seria remontado a cada renderização, causando estouro de memória */
    }
  }, []);
  useEffect(() => {
    console.log("premium nubers foi alterado");
  }, [premiumNumbers]);

  return (
    <div>
      <div>
        <h1>useMemo</h1>
        <ul>
          <li>garante a referencia de um objeto</li>
          <li>
            fazendo com que algo seja atrelado a uma referencia, não valor
          </li>
          <li>
            assim podemos condicionar useEffects a uma variável de forma mais
            inteligente
          </li>
        </ul>
        <div>
          <input type="text" onChange={(e) => setNumber(e.target.value)} />
          {premiumNumbers.includes(number) ? <p>acertou</p> : ""}
        </div>
      </div>
    </div>
  );
};

export default UseMemoHook;
