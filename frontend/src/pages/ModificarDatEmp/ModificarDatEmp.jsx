import {Link} from 'react-router-dom';
import './ModificarDatEmp.css';
import {React, useEffect, useState} from 'react';
import axios from 'axios';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
const URI = 'http://localhost:8000/Cambiodat/Empresa/';



const ModificarDatEmp = () =>{
    return (
        <div className="ModificarDatEmp">
        <Header/>
            <CompModiEmp/>
        <Footer/>
         </div>
    )
}


const CompModiEmp = () => {

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

  const actualizarDatos = async (event) => {
    event.preventDefault(); // previene que se recargue la pagina
    
    // Obtiene los datos del formulario
    const formData = new FormData(event.target);
    
    // Construye el objeto con los datos a actualizar
    const data = {
      nombre: formData.get('nombre'),
      correo: formData.get('correo'),
      telefono: formData.get('telefono'),
      dir_fisica: formData.get('ubicacion')
    };
    
    // Envía los datos al servidor
    try {
      const response = await axios.put(URI+idEmpresa, data);
      console.log(response.data);
      alert('Datos actualizados correctamente');
      window.location.href = '/';
    } catch (error) {
      console.error(error);
      alert('Error al actualizar los datos');
    }
  };



    return(

        <div className="modificarDatosEmp">
      
                <div className="container">
                    <h1>Modificar Datos</h1>
                    <div className='dividor'>
                        <div className='izquierda'>
                            <picture >
                            <img  title="Logo sin fondo" src="../images/Logos/UsuarioLogo.jpg"/>
                            </picture>  
                            <h4>Cambio Imagen</h4>
                            <h4>Subir catalogo</h4>
                            <h4>Actualizar certificados</h4>
                            <h4><Link to={'/Empresa/CambiaContraseña'}>Actualizar contraseña</Link></h4>
                        </div>
                        <div className='derecha'>
                            <form id="form" onSubmit={actualizarDatos}>
                                <div className="inputbox">
                                    <small className="erroresNomE">Error message</small>
                                    <ion-icon name="person" ></ion-icon>
                                    <input placeholder="Pyme" type="text" id="nombre" name="nombre" />                   
                                    <label for="">Nombre de la empresa</label>
                                </div>
                                <div className="inputbox">
                                    <small className="erroresCorreo">Error message</small>
                                    <ion-icon name="mail-outline"></ion-icon>
                                    <input placeholder="pyme123@pyme.com" type="email" id="Correo" name="correo"/>
                                    <label for="">Correo Electronico</label>
                            
                                </div>
                                <div className="inputbox"> 
                                    <small className="errores">Error message</small>
                                    <ion-icon name="notifications"></ion-icon>
                                    <input placeholder="3139368297" type="text" id="Telefono" name="telefono" />
                                    <label for="">Telefono:</label>
                                </div>
                                <div className="inputbox">
                                    <small className="errores">Error message</small>
                                    <ion-icon name="home"></ion-icon>
                                    <input placeholder="Bogota" type="text" id="Ubicacion" name="ubicacion" />
                                    <label for="">Ubicación</label>
                            
                                </div>
                                {/* <div className="inputbox">
                                    <h5>Categorias</h5>
                                    <select name="opciones[]" id="opciones" multiple size="3">
                                        <option value="opcion1">vehículos</option>
                                        <option value="opcion2">Celulares</option>
                                        <option value="opcion3">cámaras</option>
                                        <option value="opcion4">Videojuegos</option>
                                        <option value="opcion5">Consolas</option>
                                        <option value="opcion6">computación</option>
                                        <option value="opcion7">Dispositivos de audio</option>
                                        <option value="opcion8">Dispositivos de video</option>
                                        <option value="opcion9">electrodomésticos</option>
                                        <option value="opcion10">Hogar</option>
                                        <option value="opcion11">Deportes</option>
                                        <option value="opcion12">Belleza</option>
                                        <option value="opcion13">Herramientas</option>
                                        <option value="opcion14">Ropa</option>
                                        <option value="opcion15">Juguetes</option>
                                        <option value="opcion16">Salud</option>
                                        <option value="opcion17">Mascotas</option>
                                        <option value="opcion18">Arte</option>
                                        <option value="opcion19">Instrumentos musicales</option>
                                        <option value="opcion20">Libros</option>
                                        <option value="opcion21">Comics</option>
                                        <option value="opcion22">joyería</option>
                                        <option value="opcion23">Servicios</option>
                                    </select>                    
                                </div> */}
                                <br/>
                                <div className="enter">
                                    <button onclick="dataValidation()">Actualizar</button>
                                </div>   
                            </form>
                        </div>
                    </div>
                </div>
                
        </div>
    )
}


export default ModificarDatEmp;

