import React, { useState } from "react";
// import Header from './Header'

import "./global.css";
import Routes from './routes' // import Logon from "./pages/logon";

function App() {
  // const [ counter, setCounter ] = useState(0) // array[valorDaVariavel, funcaoDeAtualizacaoDoValor]

  // function increment() {
  //   setCounter(counter + 1)
  // }

  return (
    <Routes />

    // <Header>
    //   Contador: {counter}
    //   <button onClick={increment}>incrementar</button>
    // </Header>
  );
}

export default App;
