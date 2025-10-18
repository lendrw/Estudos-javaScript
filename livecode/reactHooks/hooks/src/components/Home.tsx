import UseEffectHook from "./UseEffectHook";
import UseReducerHook from "./UseReducerHook";
import UseRefHook from "./UseRefHook";
import UseStateHook from "./UseStateHook";

const Home: React.FC = () => {
  return (
    <div>
      <UseStateHook />
      <UseReducerHook />
      <UseEffectHook/>
      <UseRefHook/>
    </div>
  );
};

export default Home;
