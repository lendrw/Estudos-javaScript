import UseCallbackHook from "./UseCallbackHook";
import UseEffectHook from "./UseEffectHook";
import UseLayoutEffectHook from "./UseLayoutEffectHook";
import UseMemoHook from "./UseMemoHook";
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
      <UseCallbackHook/>
      <UseMemoHook/>
      <UseLayoutEffectHook/>
    </div>
  );
};

export default Home;
