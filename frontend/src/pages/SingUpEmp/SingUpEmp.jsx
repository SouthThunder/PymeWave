import {Link, useNavigate} from 'react-router-dom';
import './SingUpEmp.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
const URI ='http://localhost:8000/SingUp/Empresa'

const CompSingUpEmp = () => {
    const[nombre,setnombre] = useState('')
    const[correo,setcorreo] = useState('')
    const[dir_fisica,setdir_fisica] = useState('')
    const[telefono,settelefono] = useState('')
    const[contraseña,setcontraseña] = useState('')
    const[rut,setrut] = useState('')
    const navigate= useNavigate()
  
    function dataValidation() {
        var sePudo=true;
        var telefono=document.getElementById('Telefono').value;
        var correo=document.getElementById('Correo').value;
        var nombre=document.getElementById('nombre').value;
        var password=document.getElementById('password').value;
        var lugar=document.getElementById('Ubicacion').value;
         // Expresión regular para verificar que el valor contenga únicamente números
        var regexNumeros = /^[0-9]+$/;
    
        // Verificar si contiene al menos una letra mayúscula, una letra minúscula y un número
        var regexMayuscula = /[A-Z]/;
        var regexMinuscula = /[a-z]/;
        var regexNumero = /[0-9]/;
        var regexCaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/;
        var regexCiudadPais = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/i;
    // Expresión regular para verificar que el valor sea una dirección de correo electrónico válida
    var regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    var regexNombreEmpresa = /^[a-zA-Z]{2,}$/
    if (
        telefono.trim() === '' ||
        correo.trim() === '' ||
        nombre.trim() === '' ||
        password.trim() === '' ||
        lugar.trim() === ''
      ) {
        // setErrorFor(document.getElementById('form'), 'Por favor, complete todos los campos');
        alert('Por favor, complete todos los campos');
        sePudo = false;
        return false;
      } else {
        // setSuccesFor(document.getElementById('form'));
      }
    //Valida que sea un email
        if(!correo.match(regexEmail)){
            setErrorFor(document.getElementById('Correo'),'Por favor, Ingrese una dirección de correo válida');
            sePudo=false;
            
        }else{
            setSuccesFor(document.getElementById('Correo'));
        }
    //Valida que es el nombre de una ciudad o pais
    if(!correo.match(regexEmail)){
        setErrorFor(document.getElementById('Ubicacion'),'Por favor, Ingrese una ubicacion válida');
        sePudo=false;
        
    }else{
        setSuccesFor(document.getElementById('Ubicacion'));
    }
    //Valida que sea un nombre de una empresa
       if(!nombre.match(regexNombreEmpresa)){
        setErrorFor(document.getElementById('nombre'),'Ingrese el nombre de la empresa solo alfabetico.');
            sePudo=false;
       }else{
        setSuccesFor(document.getElementById('nombre'));
    }
        //Valida que el telefono tenga únicamente números
        if(!telefono.match(regexNumeros)){
            setErrorFor(document.getElementById('Telefono'),'El telefono debe contener únicamente números.');
            sePudo=false;
        }else{
            setSuccesFor(document.getElementById('Telefono'));
        }
        //Valida que el telefono sea de 10 numeros(En colombia los numeros son de 10 números)
        if(telefono.length!=10){
            setErrorFor(document.getElementById('Telefono'),'Por favor, Ingrese un télefono válido.');
            sePudo=false;
        }else{
            setSuccesFor(document.getElementById('Telefono'));
        }
        //Valida que la contraseña tenga más de 8 caracteres
        if(password.length<8){
            setErrorFor(document.getElementById('password'),'La contraseña debe contener mínimo 8 caracteres');
            sePudo=false;
        }else{
            setSuccesFor(document.getElementById('password'));
        }
        //Valida condiciones de contraseña
        if(!password.match(regexMayuscula)||!password.match(regexMinuscula)||!password.match(regexNumero)||!password.match(regexCaracterEspecial) ){
            setErrorFor(document.getElementById('password'),'Contraseña requiere mayúscula, minúscula, número y caracter especial.');
            sePudo=false;
        }else{
            setSuccesFor(document.getElementById('password'));
        }
    
    if(sePudo==false){
        return false;
    }else{
        return true;
    }
    }
    function setErrorFor(input,message){
        const  inputbox=input.parentElement;
        const small= inputbox.querySelector('small');
        inputbox.className = 'inputbox error';
        small.innerText = message;
    
        input.focus();
    }
    function setSuccesFor(input){
        const formControl= input.parentElement;
        formControl.className= 'inputbox sucess';
    }

    function shaAlgorithm (string ){
        const CryptoJS = require('crypto-js');
        const hash = CryptoJS.SHA256(string);
         return hash.toString(CryptoJS.enc.HEX);
    }



    const store = async (e) => {
        e.preventDefault();
      
        const isValid = dataValidation(); // Validar los datos del formulario
      
        if (isValid) {
          await axios.post(URI, {
            nombre_empresa: nombre,
            correo: correo,
            dir_fisica: dir_fisica,
            telefono: telefono,
            contraseña: shaAlgorithm(contraseña),
            estado_suscripcion:false,
            rut:rut
          });
      
          navigate('/');
        }
      };
      


    return(
        <div className='signupempr-component'>

            <header>
                <picture>
                    <Link to={`/`}><img  title="logo sin fondo" src="/images/Logos/PymeWaveSinFondo.png"/></Link>
                </picture>
            </header>

            <main>
                <div className="container">
                    <h1>Registro</h1>
                    <form id="form" onSubmit={store} >
                        <div className="inputbox">
                            <small className="erroresNomE">Error message</small>
                            <ion-icon name="person" ></ion-icon>
                            <input placeholder="Pyme" type="text" id="nombre" name="nombre"value={nombre} onChange={(e)=>setnombre(e.target.value)} />                   
                            <label for="">Nombre de la empresa</label>
                        </div>
                        <div className="inputbox">
                            <small className="erroresCorreo">Error message</small>
                            <ion-icon name="mail-outline"></ion-icon>
                            <input placeholder="pyme123@pyme.com" type="email" id="Correo" name="correo"value={correo} onChange={(e)=>setcorreo(e.target.value)}/>
                            <label for="">Correo Electronico</label>
                    
                        </div>
                        <div className="inputbox"> 
                            <small className="errores">Error message</small>
                            <ion-icon name="notifications"></ion-icon>
                            <input placeholder="3139368297" type="text" id="Telefono" name="telefono" value={telefono} onChange={(e)=>settelefono(e.target.value)}/>
                            <label for="">Telefono:</label>
                        </div>
                        <div className="inputbox">
                            <small className="errores">Error message</small>
                            <ion-icon name="home"></ion-icon>
                            <input placeholder="Bogota" type="text" id="Ubicacion" name="ubicacion" value={dir_fisica} onChange={(e)=>setdir_fisica(e.target.value)} />
                            <label for="">Ubicación</label>
                    
                        </div>
                        <div className="inputbox">
                            <small className="erroresContrasenia">Error message</small>
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input placeholder="********" type="password" id="password" name="contraseña" value={contraseña} onChange={(e)=>setcontraseña(e.target.value)} />
                            <label for="">Contraseña</label>
                        </div>
                        <div className="inputbox">
                            <small className="errores">Error message</small>
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input placeholder="12345-1" type="text" id="rut" name="rut" value={rut} onChange={(e)=>setrut(e.target.value)} />
                            <label for="">Rut</label>
                        </div>
                        <div className="inputbox">
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
                        </div>
                        <br/>
                        <div className="enter">
                            <button type='submit' onClick={dataValidation}>Registrar</button>
                        </div>   
                    </form>
            
           
                </div>
            </main>

        </div>
    )
}

export default CompSingUpEmp;