import axios from "axios";
import { React, useEffect, useState } from 'react';
import './CambiarContPer.css';
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

const URI = 'http://localhost:8000/CambioCon/persona/';

const cambiocontraper = () =>{
  return (
      <div className="cambioclavepr">
          <Header/>
              <CompCambiarconPer/>
          <Footer/>
      </div>
  )
}

const CompCambiarconPer = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // const [personas, setPersonas] = useState([]);
  // const [idPersona, setIdPersona] = useState(null); // variable para guardar el id_persona

  // useEffect(() => {
  //   getPersonas();
  // }, []);

  // const getPersonas = async () => {
  //   const res = await axios.get(URI+'usuario1@example.com');
  //   setPersonas(res.data);
  //   // Extraer el id_persona del primer objeto del array personas
  //   if (res.data.length > 0) {
  //     setIdPersona(res.data[0].id_usuario);
  //   }
  // }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!password.trim() || !confirmPassword.trim()) {
      alert('Por favor, llena todos los campos.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
      return;
    }
    const url = `${URI}${localStorage.getItem("user")}`;
    const idPersona =localStorage.getItem("user");
    try {
      const res = await axios.put(url, { id_usuario: idPersona, contraseña: password });
      alert('La contraseña se actualizó correctamente.');
      window.location.href = '/';
      // hacer algo con la respuesta
    } catch (error) {
      console.error(error);
      // manejar el error
    }
  }


  return (
    
    <div className="cont-cambiocon-per">
        
        <form className="form" onSubmit={handleSubmit}>
            <div className="input-container1">
                <label className="lb" htmlFor="password">Contraseña:</label>
                <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="input-field"
                />
                <img
                    src={showPassword ? '/images/Logos/ocultar.png' : '/images/Logos/visible.png'}
                    alt={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                    onClick={() => setShowPassword(!showPassword)}
                    className="toggle-password"
                />
            </div>
            <div className="input-container2">
                <label className="lb" htmlFor="confirm-password">Confirmar contraseña:</label>
                <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    className="input-field"
                />
                <img
                    src={showConfirmPassword ? '/images/Logos/ocultar.png' : '/images/Logos/visible.png'}
                    alt={showConfirmPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="toggle-password"
                />
            </div>
            <button type="submit" className="submit-button">Cambiar contraseña</button>
        </form>
    </div>

  );
}

export default cambiocontraper;