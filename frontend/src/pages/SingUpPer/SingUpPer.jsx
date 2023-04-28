import {Link} from 'react-router-dom';
import './SingUpPer.css';


const CompSingUpPer = () => {
    return(

        <div className="singUpPer-component">
          <body>
            <header>
                <picture>
                    <Link to={`/`}><img  title="Logo sin fondo" src="../images/Logos/PymeWaveSinFondo.png"/></Link>
                </picture>
            </header>

            <main>
                <div className="container">
                    <h1>Registro</h1>
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
                            <button onclick="dataValidation()">Registrar</button>
                        </div>
                
                    </form>
                </div>
            </main>
            </body>
        </div>
    )
}

export default CompSingUpPer;