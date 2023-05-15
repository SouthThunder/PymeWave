import {Link, useNavigate} from 'react-router-dom';
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

    const [user, setUser] = useState([]);

    useEffect(() =>{
        getUser();
    }, []);

    const getUser = async () =>{
        try {
            const res = await axios.get(`${URI}${localStorage.getItem('user')}`);
            setUser(res.data[0]);
            // console.log(res.data.correo);
        } catch (error) {
            console.log(error)
        }
    }

    const navigation = useNavigate();

      const handleActualizar = async () => {
        try {
          var correo = document.getElementById("Correo").value;
          var nombre = document.getElementById("nombre").value;
          var apellidos = document.getElementById("apellidos").value;
          var telefono = document.getElementById("Telefono").value;
          if(correo===''){
            correo=user.correo;
          }
          if(nombre===''){
            nombre=user.nombre;
          }
          if(apellidos===''){
            apellidos=user.apellidos;
          }
          if(telefono===''){
            telefono=user.telefono;
          }
          console.log(correo, nombre, apellidos, telefono);// <-- Agrega esto para verificar los valores\
          const persona = { correo, nombre, apellidos, telefono };
          await axios.put(`${URI}${localStorage.getItem("user")}`, persona);
          alert("Los datos se actualizaron correctamente");
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
                            <input placeholder={user.correo} type="email" id="Correo" name="correo" />
                            <label for="">Correo Electronico</label>
                        </div>
                        <div className="inputbox">
                            <small className="errores">Error message</small>
                            <ion-icon name="person"></ion-icon>
                            <input  placeholder={user.nombre} type="text" id="nombre" name="nombre" />                   
                            <label for="">Nombre</label>
                        </div>
                        <div className="inputbox">
                            <small className="errores">Error message</small>
                            <ion-icon name="person"></ion-icon>
                            <input placeholder={user.apellidos} type="text" id="apellidos" name="apellidos" />
                            <label for="">Apellidos</label>
                        </div>

                        <div className="inputbox">
                            <small className="errores">Error message</small>
                            <ion-icon name="notifications"></ion-icon>
                            <input placeholder={user.telefono} type="text" id="Telefono" name="telefono"  />
                            <label for="">Telefono</label>
                        </div>
                        <br/>
                        <div className="enter">
                            <button>Actualizar</button>
                        </div>
                
                    </form>
                        </div>
                    </div>
                </div>
                
        </div>
    )
}


export default ModificarDatPer;
