import React, { useState } from "react";

const UseStateHook: React.FC = () => {
  let userName = "joão";
  const [name, setName] = useState("Nicole");
  const changeNames = () => {
    userName = "marcia";
    setName("Pedro Alvares");

    console.log(userName);
    console.log(name);
  };

  const [age, setAge] = useState("18");

  return (
    <main>
      <div>
        <h1>useState</h1>

        <p>Variável: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>mudar</button>
        <span>apenas o state é re-renderizado</span>
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
