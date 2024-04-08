import React from "react";
import Input from "./components/Input";
import {Toaster} from "react-hot-toast"

const App = () => {
  return (
    <>
      <Input/>
      <Toaster position="bottom-center"/>
    </>
  );
};

export default App;
