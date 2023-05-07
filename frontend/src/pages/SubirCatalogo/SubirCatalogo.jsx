import {Link} from 'react-router-dom';
import './SubirCatalogo.css';
import {React, useEffect, useState} from 'react';
import axios from 'axios';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
const URI = 'http://localhost:8000/Cambiodat/Empresa/';
const URI2 = 'http://localhost:8000/productos/';


const SubirCatalogo = () =>{
    return (
        <div className="SubirCatalogo">
        <Header/>
            <CompSubirCata/>
        <Footer/>
         </div>
    )
}


const CompSubirCata = () => {

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

  const [producto, setProducto] = useState([]);
  useEffect(() => {
    if (idEmpresa) {
        getProducto();
    }
}, [idEmpresa]);
  useEffect(() => {
    getProducto();
  }, []);
  
  const getProducto = async () => { 
    const res = await axios.get(URI2+idEmpresa);
    setProducto(res.data);
    // Extraer el id_empresa del primer objeto del array empres
  }
  console.log(producto);
  
  
 

    return(

        <div className="subircatalogo">
      
                <div className="container">
                    <h1 className='titulo'>Catalogo</h1>
                    <div className='dividor'>
                        <div className='izquierda'>
                            <picture >
                            <img  title="Logo sin fondo" src="../images/Logos/UsuarioLogo.jpg"/>
                            </picture>  
                            <h4>Cambio Imagen</h4>
                            <h4><Link to={'/Empresa/ModificarDatos'}>Modificar Datos</Link></h4>
                            <h4>Actualizar certificados</h4>
                            <h4><Link to={'/Empresa/CambiaContraseña'}>Actualizar contraseña</Link></h4>
                        </div>
                        <div className='derecha'>
                            <form id="form" onSubmit={actualizarDatos}>
                                <div className="inputbox">
                                <label htmlFor="">Descripción de la empresa</label>
                                   
                                    <ion-icon name="archive" ></ion-icon>
                                    <textarea placeholder="Somos una empresa..." type="text"  className='descripcion' id="nombre" name="nombre" />                   
                                </div>
                                <div className="enter">
                                    { <button onclick="dataValidation()">Actualizar</button> }
                                </div> 
                                <label htmlFor="" className='titulo2'>Listado Productos</label>
                               
                                <div className="productos">
                                   <table className='table'>
                                        <thead className='table-primary'>
                                                <tr>
                                                    <th > Producto</th>
                                                    <th >Descripcion</th>
                                                    <th>Modificar</th>
                                                </tr>
                                        </thead>
                                        <tbody>
                                            {producto.map((product)=> (
                                                <tr key={ product.id_producto}>
                                                    <td>{product.nombre}</td>
                                                    <td>{product.descripcion}</td>
                                                    <td>
                                                        <Link to={''} className='editar'>Editar</Link>
                                                        <button className='btneliminar'>Eliminar</button>
                                                    </td>

                                                </tr>
                                            ) )}
                                        </tbody>

                                   </table>
                                   
                                                      
                                </div>
                                <div className='agrega'>
                                <Link to='' className='add'>Agregar Producto</Link>
                                </div>
                                  
                            </form>
                        </div>
                    </div>
                </div>
                
        </div>
    )
}


export default SubirCatalogo;

