import React, { useEffect, useLayoutEffect, useState } from "react";

const UseLayoutEffectHook: React.FC = () => {
  const [name, setName] = useState("Nome inicial");
  const [boxWidth, setBoxWidth] = useState(100);

  // 🔹 useLayoutEffect é executado SINCRONAMENTE,
  // logo após o React atualizar o DOM, mas antes da tela ser "pintada" para o usuário.
  // Isso significa que qualquer alteração feita aqui é aplicada antes da página ser exibida,
  // evitando "piscar" ou layout incorreto.
  useLayoutEffect(() => {
    console.log("1️⃣ useLayoutEffect rodou");
    // Simula um ajuste de layout: antes de o usuário ver a tela,
    // aumentamos a largura da caixa.
    if (boxWidth === 100) {
      setBoxWidth(300);
      setName("Ajustando layout antes da pintura");
    }
  }, [boxWidth]);

  // 🔹 useEffect é executado ASSINCRONAMENTE,
  // ou seja, depois que a tela já foi renderizada e mostrada ao usuário.
  useEffect(() => {
    console.log("2️⃣ useEffect rodou");
    // Atualização feita após a renderização visível
    const timeout = setTimeout(() => {
      setName("Atualizado após renderizar");
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  console.log("🔍 Renderizou com nome:", name);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>useLayoutEffect</h1>
      <ul>
        <li>O <b>useLayoutEffect</b> é semelhante ao <b>useEffect</b>.</li>
        <li>A diferença é que ele executa <b>antes</b> da tela ser exibida ao usuário.</li>
        <li>Ele é <b>síncrono</b> — o React espera sua execução terminar antes de mostrar o resultado.</li>
        <li>Ideal para medir ou ajustar o layout antes da renderização final.</li>
      </ul>

      <div
        style={{
          background: "#90caf9",
          height: "80px",
          width: `${boxWidth}px`,
          transition: "width 0.5s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "1rem",
          borderRadius: "8px",
        }}
      >
        <strong>{name}</strong>
      </div>

      <hr style={{ marginTop: "2rem" }} />
    </div>
  );
};

export default UseLayoutEffectHook;
