import "./App.css";
import { AppRoutes } from "./routes/routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <h1>React Hooks</h1>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
