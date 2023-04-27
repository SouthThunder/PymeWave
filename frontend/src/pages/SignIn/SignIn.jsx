import {Link} from 'react-router-dom';
import './SignIn.css';
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
const CryptoJS = require('crypto-js');


const URI='http://localhost:8000/SignIn';

const CompSignIn = () =>{
    const [user, setUser] = useState(); //usuarios de la DB
    const [localuser, setLocaluser] = useState();
    const [localpassword, setLocalpassword] =useState();
    useEffect(() =>{
        getUsers()
    }, []);

    const getUsers = async () =>{
        const res = await axios.get(URI);
        setUser(res.data);
    }

    function shaAlgorithm (string ){
        const hash = CryptoJS.SHA256(string);
         return hash.toString(CryptoJS.enc.HEX);
    }

    const testing = () => {
        user?.map((enter) =>{
            if(enter.correo===localuser && enter.contraseña === shaAlgorithm(localpassword)){
                alert('sucess');
            }else{
                alert(enter.contraseña);
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
                <form >
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
                        <button onClick={testing} type="submit">Ingresar</button>
                    </div>
                    <div className="not-account">
                        <p>¿No tienes una cuenta?  <Link to={'/SingUp'}>Registrate</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CompSignIn;