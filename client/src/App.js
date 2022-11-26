import React, {Fragment} from "react";
import './App.css';

//components
import InputUserAccount from "./components/InputUserAccount";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputUserAccount />
      </div>
    </Fragment>
  );
}

export default App;
