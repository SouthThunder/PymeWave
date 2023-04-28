import {Link} from 'react-router-dom';
import './ModificarPersona.css';
import axios from 'axios';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
const URI = 'http://localhost:8000/';


/*
export const otherComp = ()=>{
    function testing(){
        const number=5;
        return(
            number
        )
    }

    return(
        <h1>{testing}</h1>
    )
}*/

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
    // const [empresas, setempresas] = useState([]);

    // useEffect(() => {
    //     getempresas();
    // },[]);

    // const getempresas = async () => {
    //     const res = await axios.get(URI);
    //     setempresas(res.data);
    // }


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
                        </div>
                        <div className='derecha'>
                        <form id="form" method="post" action="/signUp/usuario/add">
                        <div className="inputbox">
                            <small className="erroresCorreo">Error message</small>
                            <ion-icon name="mail-outline"></ion-icon>
                            <input placeholder="pepe123@gmail.com" type="email" id="Correo" name="correo" />
                            <label for="">Correo Electronico</label>
                        </div>
                        <div className="inputbox">
                            <small className="errores">Error message</small>
                            <ion-icon name="person"></ion-icon>
                            <input  placeholder="pepe" type="text" id="nombre" name="nombre" />                   
                            <label for="">Nombre</label>
                        </div>
                        <div className="inputbox">
                            <small className="errores">Error message</small>
                            <ion-icon name="person"></ion-icon>
                            <input placeholder="Gonzales" type="text" id="apellidos" name="apellidos" />
                            <label for="">Apellidos</label>
                        </div>

                        <div className="inputbox">
                            <small className="errores">Error message</small>
                            <ion-icon name="notifications"></ion-icon>
                            <input placeholder="3187927635" type="text" id="Telefono" name="telefono"  />
                            <label for="">Telefono</label>
                        </div>
                        <div className="inputbox">
                            <small className="errores">Error message</small>
                            <ion-icon name="star"></ion-icon>
                            <input placeholder="pepe123" type="text" id="username" name="user_name" />
                            <label for="">Username</label>
                        </div>
                
                        <div className="inputbox">
                            <small className="erroresContrasenia">Error message</small>
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input placeholder="********" type="password" id="password" name="contraseña"/>
                            <label for="">Contraseña</label>
                        </div>
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


export default ModificarDatPer;
