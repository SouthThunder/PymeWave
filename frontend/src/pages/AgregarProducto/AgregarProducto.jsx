import axios from "axios";
import {React, useEffect, useState} from 'react';
import './AgregarProducto.css';
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/Cambiodat/Empresa/';
const URI2 = 'http://localhost:8000/productos/';

const agregarproducto = () =>{
    return (
        <div className="agregar">
            <Header/>
                <CompAgregarProducto/>
            <Footer/>
        </div>
    )
  }
const CompAgregarProducto = () => {

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

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const navigate = useNavigate();

    //procedimiento para guardar
    const store = async (e) =>{
        e.preventDefault()
        await axios.post(URI2,{nombre:nombre, descripcion:descripcion,id_catalogo:idEmpresa});
        window.location.href = '/Empresa/SubirCatalogo';
    }
    
    console.log(idEmpresa);

  return (
    <div className="agregarproduct">
        <form className="form" onSubmit={store}>
            <div className="input-container1">
                <label className="lb" htmlFor="nombre">Nombre producto:</label>
                <input
                    value={nombre}
                    type='text'
                    id="nombre"
                    className="input-field"
                    onChange={ (e)=> setNombre(e.target.value)}
                />
               
            </div>
            <div className="input-container2">
                <label className="lb" htmlFor="confirm-password">Descripción producto:</label>
                <textarea
                    value={descripcion}
                    type='text'
                    id="descripcion"
                    className="input-field"
                    onChange={ (e)=> setDescripcion(e.target.value)}
                />
            </div>
            <button type="submit" className="submit-button">Agregar Producto</button>
        </form>
    </div>
  );
}

export default agregarproducto;