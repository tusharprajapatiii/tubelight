import { Routes, Route } from "react-router-dom";
import React from "react";
import AddForm from "./components/AddForm";
import Counter from "./components/Counter";
import Main from "./components/Main";
import AddData from "./components/AddData";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/addForm" element={<AddData />} />
    </Routes>
  );
}

export default App;
