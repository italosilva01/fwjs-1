import React from "react";
import "./App.css";
import { AbasFather } from "./components/AbasFather";

function App() {
  const abas = [
    { tab: "Tab1", content: "1111111111111111111111111111111111111" },
    { tab: "Tab2", content: "2222222222222222222222222222222222222" },
    { tab: "Tab3", content: "3333333333333333333333333333333333333" },
    { tab: "Tab4", content: "4444444444444444444444444444444444444" },
  ];
  return (
    <div>
      <AbasFather abas={abas} />
    </div>
  );
}

export default App;
