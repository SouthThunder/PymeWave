//se importan los componentes
import Home from "./pages/Home/Home";
import AboutUs from './pages/AboutUs/AboutUs';
import CompSingUp from './pages/SingUp/Singup';
import CompSignIn from "./pages/SignIn/SignIn";
import CompSingUpPer from './pages/SingUpPer/SingUpPer';
import CompSingUpEmp from './pages/SingUpEmp/SingUpEmp';
import CompSignInEmp from './pages/SingInEmp/SingInEmp';
import ModificarDatEmp from "./pages/ModificarDatEmp/ModificarDatEmp";
import ModificarDatPers from "./pages/ModificarDatPers/ModificarPersona";
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
            <Route path='/SignUp/Persona' element={<CompSingUpPer/>}/>
            <Route path='/SignUp/Empresa' element={<CompSingUpEmp/>}/>
            <Route path='/SignIn' element={<CompSignIn/>}/>
            <Route path='/SignIn/Empresa' element={<CompSignInEmp/>}/>
            <Route path='/Empresa/ModificarDatos' element={<ModificarDatEmp/>}/>
            <Route path='/Persona/ModificarDatos' element={<ModificarDatPers/>}/>
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
