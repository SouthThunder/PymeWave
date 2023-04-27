//se importan los componentes
import Home from "./pages/Home/Home";
import AboutUs from './pages/AboutUs/AboutUs';
import CompSingUp from './pages/SingUp/Singup';
import CompSignIn from "./pages/SignIn/SignIn";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";


function App() {

  return (
    <div className="App">


      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/AboutUs' element={<AboutUs />}/>
            <Route path='/SingUp' element={<CompSingUp />}/>
            <Route path='/SignIn' element={<CompSignIn/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
