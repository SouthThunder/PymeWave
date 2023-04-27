import {Link} from 'react-router-dom';
//import './SingUpEmp.css';


const CompSingUpEmp = () => {
    return(
        <div>

            <header>
                <picture>
                    <Link to={`/`}><img  title="logo sin fondo" src="/images/Logos/PymeWaveSinFondo.png"/></Link>
                </picture>
            </header>

            <main>
                <div class="container">
                    <h1>Registro</h1>
                    <form id="form" action="/signUp/empresa/add" method="post" >
                        <div class="inputbox">
                            <small class="erroresNomE">Error message</small>
                            <ion-icon name="person" ></ion-icon>
                            <input placeholder="Pyme" type="text" id="nombre" name="nombre" />                   
                            <label for="">Nombre de la empresa</label>
                        </div>
                        <div class="inputbox">
                            <small class="erroresCorreo">Error message</small>
                            <ion-icon name="mail-outline"></ion-icon>
                            <input placeholder="pyme123@pyme.com" type="email" id="Correo" name="correo"/>
                            <label for="">Correo Electronico</label>
                    
                        </div>
                        <div class="inputbox"> 
                            <small class="errores">Error message</small>
                            <ion-icon name="notifications"></ion-icon>
                            <input placeholder="3139368297" type="text" id="Telefono" name="telefono" />
                            <label for="">Telefono:</label>
                        </div>
                        <div class="inputbox">
                            <small class="errores">Error message</small>
                            <ion-icon name="home"></ion-icon>
                            <input placeholder="Bogota" type="text" id="Ubicacion" name="ubicacion" />
                            <label for="">Ubicación</label>
                    
                        </div>
                        <div class="inputbox">
                            <small class="erroresContrasenia">Error message</small>
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input placeholder="********" type="password" id="password" name="contraseña"/>
                            <label for="">Contraseña</label>
                        </div>
                        <div class="inputbox">
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
                        <div class="enter">
                            <button onclick="dataValidation()">Registrar</button>
                        </div>   
                    </form>
            
           
                </div>
            </main>

        </div>
    )
}

export default CompSingUpEmp;