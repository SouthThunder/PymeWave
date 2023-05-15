import {Link, useNavigate} from 'react-router-dom';
import './Seleccion.css';
import axios from 'axios';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { React, useEffect, useState } from 'react';


const URI = "http://localhost:8000/Cambiodat/Empresa/";
const URI2 = "http://localhost:8000/productos/";
const URI3 = "http://localhost:8000/Actualizar/Catalogos/";



const Seleccion = () =>{
    return (
        <div className="Seleccion">
        <Header/>
            <CompSeleccion/>
        <Footer/>
         </div>
    )
}


const CompSeleccion = () => {
    const [empres, setempres] = useState([]);
    const[catalogo,setcatalogo]=useState([]);
    const paramURL = window.location.search
    const parametrosURL= new URLSearchParams(paramURL);
    const idEmpresa =parametrosURL.get('id');
    useEffect(() => {
        getempres();
      }, []);
    
      const getempres = async () => {
        const res = await axios.get(URI + idEmpresa);
        setempres(res.data);
        
      };
      console.log(empres);
      useEffect(() => {
        getcatalogo();
      }, []);
    
      const getcatalogo = async () => {
        const res = await axios.get(URI3 + idEmpresa);
        setcatalogo(res.data);  
        console.log(res.data);
      };
      console.log(catalogo);
      
    const [producto, setProducto] = useState([]);
  
  useEffect(() => {
    getProducto();
  }, []);
  
  const getProducto = async () => {
    const res = await axios.get(URI2 + idEmpresa);
    setProducto(res.data);
  };
  console.log(producto);

    return(

        <div className="seleccionemp">
      
                    <picture className='imagenEmp'>
                      <img alt="" src="//placehold.it/300x200"/>
                    </picture>
                    <h1 className='titulo'>{empres[0]?.nombre_empresa}</h1>
                    <p className='descripcion'>{catalogo[0]?.descripcion_empresa}</p>
                    <h4>¿Qué ofrecemos?</h4>
                    <div className="productos">
                <table className="table">
                  <thead className="table-primary">
                    <tr>
                      <th> Producto</th>
                      <th>Descripcion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {producto.map((product) => (
                      <tr key={product.id_producto}>
                        <td>{product.nombre}</td>
                        <td>{product.descripcion}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Link>Contactanos</Link>

                
        </div>
    )
}


export default Seleccion;
