import {Link} from 'react-router-dom';
import './ModificarPersona.css';
import axios from 'axios';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { React, useEffect, useState } from 'react';

const URI = 'http://localhost:8000/Cambiodat/Persona/';




const ModificarDatPer = () =>{
    return (
        <div className="ModificarDatPer">
        <Header/>
            <CompModiPer/>
        <Footer/>
         </div>
    )
}


const CompModiPer = () => {

    const [personas, setPersonas] = useState([]);
    const [idPersona, setIdPersona] = useState(null);

    // useEffect(() => {
    //     getPersonas();
    //   }, []);
    
    //   const getPersonas = async () => {
    //     const res = await axios.get(URI+'usuario2@example.com');
    //     setPersonas(res.data);
    //     // Extraer el id_persona del primer objeto del array personas
    //     if (res.data.length > 0) {
    //       setIdPersona(res.data[0].id_usuario);
    //     }
    //   }

      const handleActualizar = async () => {
        try {
          const correo = document.getElementById("Correo").value;
          const nombre = document.getElementById("nombre").value;
          const apellidos = document.getElementById("apellidos").value;
          const telefono = document.getElementById("Telefono").value;
          console.log(correo, nombre, apellidos, telefono);// <-- Agrega esto para verificar los valores\
          const persona = { correo, nombre, apellidos, telefono };
          await axios.put(`${URI}${localStorage.getItem("user")}`, persona);
          alert("Los datos se actualizaron correctamente");
          window.location.href = '/';
        } catch (error) {
          console.error(error);
          alert("Error al actualizar los datos");
        }
      };

    return(

        <div className="modificardatosper">
      
                <div className="container">
                    <h1>Modificar Datos</h1>
                    <div className='dividor'>
                        <div className='izquierda'>
                            <picture >
                            <img  title="Logo sin fondo" src="../images/Logos/UsuarioLogo.jpg"/>
                            </picture>  
                            <h4>Cambio Imagen</h4>
                            <h4><Link to={'/Persona/CambiaContraseña'} >Cambiar contraseña</Link></h4>
                        </div>
                        <div className='derecha'>
                        <form id="form" onSubmit={handleActualizar}>
                        <div className="inputbox">
                            <small className="erroresCorreo">Error message</small>
                            <ion-icon name="mail-outline"></ion-icon>
                            <input placeholder="pepe123@gmail.com" type="email" id="Correo" name="correo" />
                            <label for="">Correo Electronico</label>
                        </div>
                        <div className="inputbox">
                            <small className="errores">Error message</small>
                            <ion-icon name="person"></ion-icon>
                            <input  placeholder="pepe" type="text" id="nombre" name="nombre" />                   
                            <label for="">Nombre</label>
                        </div>
                        <div className="inputbox">
                            <small className="errores">Error message</small>
                            <ion-icon name="person"></ion-icon>
                            <input placeholder="Gonzales" type="text" id="apellidos" name="apellidos" />
                            <label for="">Apellidos</label>
                        </div>

                        <div className="inputbox">
                            <small className="errores">Error message</small>
                            <ion-icon name="notifications"></ion-icon>
                            <input placeholder="3187927635" type="text" id="Telefono" name="telefono"  />
                            <label for="">Telefono</label>
                        </div>
                        <br/>
                        <div className="enter">
                            <button type='submit'>Actualizar</button>
                        </div>
                
                    </form>
                        </div>
                    </div>
                </div>
                
        </div>
    )
}


export default ModificarDatPer;
