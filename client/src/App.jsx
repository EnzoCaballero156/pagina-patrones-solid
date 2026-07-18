import { BrowserRouter, Routes, Route } from "react-router-dom";

import PersonalizarPiñata from "./paginas/PersonalizarPiñata";
import Login from "./paginas/Login";
import Registro from "./paginas/Registro";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/> 
        <Route path="/registro" element={<Registro />}/>
        <Route path="/personalizar" element={<PersonalizarPiñata />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;