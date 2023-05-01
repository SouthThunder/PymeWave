import {Link} from 'react-router-dom';
import './SingInEmp.css';
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const URI='http://localhost:8000/SignIn';

const CompSignInEmp = () =>{
    const [user, setUser] = useState(); //usuarios de la DB
    const [localuser, setLocaluser] = useState();
    const [localpassword, setLocalpassword] =useState();
    const navigate= useNavigate();
    useEffect(() =>{
        getUsers()
    }, []);

    const getUsers = async () =>{
        const res = await axios.get(URI);
        setUser(res.data);
    }

    function shaAlgorithm (string ){
        const CryptoJS = require('crypto-js');
        const hash = CryptoJS.SHA256(string);
         return hash.toString(CryptoJS.enc.HEX);
    }

    const post = async(e) =>{
        //e.preventDefault();
        //await axios.get(URI, {localuser:localuser, localpassword: localpassword});
        navigate('/');
    }

    const testing = async(e) => {
        user?.map((enter) =>{
            if(enter.correo===localuser && enter.contraseña === shaAlgorithm(localpassword)){
                alert('inicio de sesión verificado, bienvenido');
                post();
            }else{
                alert('Contraseña o usuario incorrectos');
            }
        })
      };
      

    return(
        <div className="signin-component">
            <div className="holder">
                <div className="logo">
                    <picture>
                        <Link to={'/'}><img src="../images/Logos/PymeWaveSinFondo.png"/></Link>
                    </picture>
                </div>
                <form onSubmit={testing}>
                    <div className='title'>   
                        <h1>Iniciar sesion</h1>
                    </div>
                    <div className="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="text" id="login_user" onChange={(e)=> setLocaluser(e.target.value)}/>                   
                        <label>Correo</label>
                    </div>
                    <div className="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" id="login_pass" onChange={(e)=> setLocalpassword(e.target.value)}/>
                        <label>Contraseña</label>
                    </div>
                    <div className="enter">
                        <button type="submit">Ingresar</button>
                    </div>
                    <div className="not-account">
                        <p>¿No tienes una cuenta?  <Link to={'/SignUp/Empresa'}>Registrate</Link></p>
                    </div>
                    <div>
                        <p>¿Eres Persona Natural? <Link to={'/SignIn'}>Registrate</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CompSignInEmp;