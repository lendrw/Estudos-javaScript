import { useMemo, useState } from "react";
import "./App.css";
import { debounce } from "./shared/hooks/debounce";

function App() {
  const [query, setQuery] = useState("");

  const fetch = useMemo(
    () =>
      debounce((search: string) => {
        console.log("Chamando API com query:", search);
      }, 500),
    []
  );

  return (
    <main>
      <h1>hello</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          fetch(e.target.value);
        }}
      />
    </main>
  );
}

export default App;
