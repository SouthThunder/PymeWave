import axios from "axios";
import {React, useEffect, useState} from 'react';
import './AgregarProducto.css';
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

const URI = 'http://localhost:8000/CambioCon/empresa/';

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
 
  return (
    <div className="agregarproduct">
        <form className="form" onSubmit=''>
            <div className="input-container1">
                <label className="lb" htmlFor="nombre">Nombre producto:</label>
                <input
                    type='text'
                    id="password"
                    className="input-field"
                />
               
            </div>
            <div className="input-container2">
                <label className="lb" htmlFor="confirm-password">Descripción producto:</label>
                <textarea
                    type='text'
                    id="confirm-password"
                    className="input-field"
                />
            </div>
            <button type="submit" className="submit-button">Agregar Producto</button>
        </form>
    </div>
  );
}

export default agregarproducto;