import axios from "axios";
import {React, useEffect, useState} from 'react';
import './CambiarContEmp.css';

const URI = 'http://localhost:8000/CambioCon/empresa/';

const CompCambiarconEmp = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const [empres, setempres] = useState([]);
  const [idEmpresa, setIdEmpresa] = useState(null); // variable para guardar el id_empresa
  
  useEffect(() => {
    getempres();
  }, []);
  
  const getempres = async () => {
    const res = await axios.get(URI+'ArtMaker');
    setempres(res.data);
    // Extraer el id_empresa del primer objeto del array empres
    if (res.data.length > 0) {
      setIdEmpresa(res.data[0].id_empresa);
    }
  }



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
    const url = idEmpresa ? URI + `${idEmpresa}` : URI;
    try {
        const res = await axios.put(url, { id: idEmpresa, contraseña: password });
        alert('La contraseña se actualizó correctamente.');
        window.location.href = '/';
        // hacer algo con la respuesta
    } catch (error) {
        console.error(error);
        // manejar el error
    }
}

  return (
    <div className="cont-cambiocon">
        <form className="form" onSubmit={handleSubmit}>
            <div className="input-container">
                <label htmlFor="password">Contraseña:</label>
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
            <div className="input-container">
                <label htmlFor="confirm-password">Confirmar contraseña:</label>
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

export default CompCambiarconEmp;