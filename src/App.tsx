import "./App.css";
import CakeView from "./features/cake/CakeView";
import IceCreamView from "./features/icecream/IceCreamView";
import UserView from "./features/user/UserView";

function App() {
  return (
    <>
      <h1>React Redux Toolkit</h1>
      <CakeView />
      <IceCreamView />
      <UserView />
    </>
  );
}

export default App;
