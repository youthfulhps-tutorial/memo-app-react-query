import React from "react";
import "./App.css";
import AddMemo from "./components/AddMemo";
import MemoList from "./components/MemoList";

function App() {
  return (
    <div className="App">
      <AddMemo />
      <MemoList />
    </div>
  );
}

export default App;
