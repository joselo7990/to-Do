import "./App.css";
import { Routes, Route } from "react-router-dom";

import HackList from "./components/HackList";
import Listado from "./components/Listado";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HackList />} />
        <Route path="/listas/:id" element={<Listado />} />
      </Routes>
    </div>
  );
}

export default App;
