//se importan los componentes
import Home from "./pages/Home/Home";
import AboutUs from './pages/AboutUs/AboutUs';
import "./App.css";
import CompSingUp from './pages/SingUp/Singup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">


      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/AboutUs' element={<AboutUs />}/>
            <Route path='/SingUp' element={<CompSingUp />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
