import {Link} from 'react-router-dom';
import './ModificarDatEmp.css';
import {React, useEffect, useState} from 'react';
import axios from 'axios';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
const URI = 'http://localhost:8000/Cambiodat/Empresa/';
const URI2 = 'http://localhost:8000/Cate/gorias';



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

const [popupCategoriasAbierto, setPopupCategoriasAbierto] = useState(false);
  const [empres, setempres] = useState([]);
  const [idEmpresa, setIdEmpresa] = useState(null); // variable para guardar el id_empresa
    const [popupAbierto, setPopupAbierto] = useState(false);


    const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
    const actualizarCategoriasSeleccionadas = (event) => {
      const categoria = event.target.value;
      if (event.target.checked) {
        setCategoriasSeleccionadas([...categoriasSeleccionadas, categoria]);
      } else {
        setCategoriasSeleccionadas(categoriasSeleccionadas.filter((cat) => cat !== categoria));
      }
    }; 
  
  useEffect(() => {
    getempres();
  }, []);
  
  const getempres = async () => { 
    const res = await axios.get(`${URI}${localStorage.getItem('user')}`);
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
      const response = await axios.put(URI + idEmpresa, data);
      console.log(response.data);
      alert('Datos actualizados correctamente');
      actualizarCategorias(); // Actualiza las categorías seleccionadas
      window.location.href = '/';
    } catch (error) {
      console.error(error);
      alert('Error al actualizar los datos');
    }
  };

  const actualizarCategorias = async () => {
    try {
      const response = await axios.put(URI2, {
        categorias: categoriasSeleccionadas
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert('Error al actualizar las categorías');
    }
  };

  const [cates, setCates] = useState([]); 
    useEffect(() => { 
        getCates(); 
    },[]); 

    const getCates = async () => { 
        const res = await axios.get(URI2); 
        setCates(res.data); 
    } 



    return (
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
                    <div className="enter">
                      <button  className='botonactualizar' type="submit">Actualizar</button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
}


export default ModificarDatEmp;

