import React, { useEffect, useState } from "react";

const UseEffectHook: React.FC = () => {
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${resourceType}`
      );
      const data = await response.json();
      setItems(data);
      console.log(data);
    };
    fetchData();
  }, [resourceType]);

  const changeResourceType = (resourceType: string) => {
    setResourceType(resourceType);
  };

  type Item = {
    id: number;
    title: string;
  };

  const [items, setItems] = useState<Item[]>([]);

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
        <p>
          O useEffect é executado após a renderização do componente, permitindo
          que você realize efeitos colaterais, como buscar dados ou manipular o
          DOM.
        </p>
      </div>
      <div>
        <h1>{resourceType}</h1>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <button onClick={() => changeResourceType("posts")}>Posts</button>
          <button onClick={() => changeResourceType("users")}>Users</button>
          <button onClick={() => changeResourceType("comments")}>
            Comments
          </button>
        </div>
        <div>
          {items.map((item) => (
            <p key={item.id}>{item.title}</p>
          ))}
        </div>
      </div>
      <hr />
    </main>
  );
};

export default UseEffectHook;
