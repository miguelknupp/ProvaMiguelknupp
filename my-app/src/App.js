import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom" 
import Login from "./pages/Login.jsx"
import Produtos from './pages/Produtos.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/Produtos' element={<Produtos />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
