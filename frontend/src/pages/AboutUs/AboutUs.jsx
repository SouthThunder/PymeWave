import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import './AboutUs.css';

const URI = 'http://localhost:8000/AboutUs';


const CompAboutUs = () => {
    
    return(

        <div>
            <header>
                <picture>
                    <Link to ={`/`} ><img src="/images/Logos/PymeWaveSinFondo(white).png" alt="logo"/></Link>
                </picture>
                <nav>
                    <div className="nav_box">
                        <ul>
                            <li>Services</li>
                            <li>Products</li>
                            <li><a href="/SignIn">Sign In</a></li>
                            <li id="Sign_btns"><Link to ={`/SingUp`} >Sign Up</Link> </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main>
                <picture>
            <img src="/images/Backgrounds/home_main_img.jpg" alt="main"/>
                </picture>
                <div className="center">
                    <h1>¿Quiénes Somos?</h1>
                    <p>Somos un grupo de estudiantes de Ingeniería de Sistemas de la Pontificia Universidad Javeriana, que al ver la dificultad de encontrar un producto y/o servicio con eficiencia se emprendió en buscar una solución para facilitar dicho proceso mediante esta plataforma. </p>
                </div>

                <section className="objetivos" >
                    <div className="container">
                        <h1>Misión</h1>
                        <p> Crear una plataforma en la que puedas encontrar los productos y/o servicios que necesites ofrecidos por gran variedad de empresas, enfocandonos principalmente en las empresas pequeñas y medianas (pymes) Colombianas, y de esta forma aumentar la visibilidad de las mismas para impulsar el desarrollo del sector empresarial Colombiano.  </p>
                    </div>
                    <div className="container">
                        <h1 >Visión</h1>
                        <p> Posicionarnos como la primera opción de la población Colombiana al realizar el proceso de busqueda de empresas, productos y/o servicios, sobreponiendonos ante otros motores de búsqueda en los cuales es necesario visitar diferentes sitios hasta encontrar lo deseado.</p>
                    </div>
                </section>
       
                <section id="global-info">
                    <h1>¿Por qué luchamos?</h1>
                    <p>Antaño el mundo era demasiado hostil, el día a día era la eterna lucha por la supervivencia, la escasez de recursos, calidad de vida paupérrima, las incesantes guerras por la avaricia insaciable ante el poder, control y capital solo denotaba lo desbalanceado que estaba el mundo; paulatinamente esta realidad fue mejorando, la sociedad empezó a evolucionar de tal magnitud en que ahora para poder transmitir un mensaje al otro extremo del mundo, solo tarda un par de segundos, cuando en el pasado podría tomar hasta años. En la contemporaneidad hay un sinfín de ideas, motivaciones, negocios y herramientas, esto, de la mano de personas con las aptitudes, conocimiento y capacidades para llevar a cabo y suplir casi cualquier demanda e idea que ejerce la sociedad a día de hoy. Por lo dicho anteriormente se plantea el desarrollo de una aplicación la cual logre suplir de manera justa, equitativa y económica esa gran parte del desarrollo empresarial.</p>
                    <p>Es innegable el alcance que posee la tecnología tal y como la conocemos hoy en día, algunos, incluso consideran que esta época hace parte de la tercera revolución industrial, mejorando y llevando a las comunidades hasta el punto en el que están hoy; aquello mencionado anteriormente dio fruto gracias a la misma naturaleza del ser humano, “Todos los hombres desean, por naturaleza, saber” Aristóteles. Naturaleza la cual ha podido florecer con el pasar del tiempo, en donde las cosas dejaban de estar tan monopolizadas, dando pie a innovaciones de gente letrada que cada vez más constituían un porcentaje significativo de la población, estos “emprendimientos”, innovaciones, etc. Nos han llevado a lo que somos hoy en día. No hay que ser licenciados o expertos en este campo de estudio para darnos cuenta de que es imperativo para la sociedad seguir avanzando y por ende cada vez más personas, con todas las capacidades, intentan revolucionar al mundo con sus ideas; lastimosamente, aquello que frena a estas nuevas ascuas, irónicamente es la misma razón por la cual antaño era muy complicado avanzar, esto siendo el renombre y el monopolio.</p>
                    <p>Actualmente, según el DANE por medio la encuesta de Micro negocios estimó alrededor de 5.756.537 micro emprendimientos en 24 departamentos del país, de las cuales el 58.9 % constituyen a las empresas activas; ahora bien, por otra parte, encontramos una cifra cuanto menos alarmante que denota la brecha económica bajo la que se rige el país, en donde las micro empresas constituyen el 88.6 % de la totalidad nacional, seguido de esto aquellas pymes (pequeñas – medianas) constituyen el 7.2 %, para finalizar con las macro empresas de un campo de acción de tan solo el 4.2 %. Según este mismo informe alrededor del 9% a nivel nacional presentaron escasez en la provisión de servicios financieros obteniendo la miserable cifra de alrededor 270.000 micro empresas con complicaciones económicas.</p>
                    <picture>
                      <img src="/images/Information/Graph_doc.jpg"/>
                    </picture>
                    <p>En otras palabras, las MI pyme, con un campo de acción de más del 95%, terminan siendo las que general aproximadamente el 79% de empleo reportando al menos el 40% de aporte al PIB nacional. Por otra parte, resulta cuanto menos irrisorio observar que siendo estas las que sacan a flote el PIB nacional de la misma manera que la organización social, sean las que más sufran las consecuencias de un entorno salvaje de progreso y sustento económico. </p>
                    <p>Según In Marketing, una empresa colombiana especializada en: Inbound marketing, diseño y desarrollo web, estrategias digitales, estrategias de contenido, nutrición de leads, etc. En Colombia alrededor del 80% de las MI pyme fracasan antes de cumplir los 5 años, y el 90% de estas no llega ni a cumplirlos 10 años. Asimismo, según esta empresa, aquellos causales por las cuales el crecimiento y desarrollo de las MI pyme es impedido.</p>
                    <ol>
                        <li>Falta de planificación</li>
                        <li>Desarrollar un plan de marketing</li>
                        <li>Asignación de un presupuesto para crecer </li>
                        <li>Atracción de nuevos clientes</li>
                        <li>Retención de clientes</li>
                        <li>Trabajar con un plan de ventas</li>
                        <li>Lograr la rentabilidad deseada</li>
                        <li>Desarrollo de nuevos canales de venta</li>
                        <li>Dependencia del mejor vendedor</li>
                        <li>Entrada en la era digital</li>
                    </ol>
                    <p>Analizando estos puntos, se logra evidenciar un escenario desalentador cuando casi todos los puntos son cíclicos y codependientes, unos de los otros, en donde se logra encontrar un común denominador para lleva a cabo la mayoría de estos desafíos, el capital. 5 de estos puntos hacen referencia al renombre del emprendimiento ante el público, siendo su renombre imperativo para poder vender, sin esparcimiento al público, no tendrían ventas, por ende, no podrían hacer ninguno de los puntos subrayados en rojo.</p>
                </section>


            </main>
            <footer>
                <div className="left">
                    <p>© 2023 PymeWave, Inc</p>
                    <p><a href="">Terms</a></p>
                    <p><a href="">Privacy</a></p>
                </div>
                <div className="right">
                    <a href="https://www.facebook.com/" target="_blank"><img src="/images/Social-media/Facebook-icon.png" alt="Facebook"/></a>
                    <a href="https://twitter.com/?lang=es" target="_blank"><img src="/images/Social-media/Twitter-icon.png" alt="Twitter"/></a>
                    <a href="https://www.instagram.com/" target="_blank"><img src="/images/Social-media/Instagram-icon.png" alt="Instagram"/></a>
                    <a href="https://discord.com/" target="_blank"><img src="/images/Social-media/Discord-icon.png" alt="Discord"/></a>
                </div>
            </footer>
        </div>

    );


}


export default CompAboutUs;


