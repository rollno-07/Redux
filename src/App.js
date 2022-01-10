import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./Component/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/Store";
import HooksCakeContainer from "./Component/HooksCakeContainer";
import IceCream from "./Component/IceCream";
import NewCakeContainer from "./Component/NewCakeContainer";
import Item from "./Component/Item";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Item cake />
        <Item />
        <HooksCakeContainer />
        <NewCakeContainer />
        <CakeContainer />
        <IceCream />
      </div>
    </Provider>
  );
}

export default App;
