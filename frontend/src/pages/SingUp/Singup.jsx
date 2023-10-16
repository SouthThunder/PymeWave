import {Link} from 'react-router-dom';
import './SingUp.css';


const CompSingUp = () => {
    return(
        <div className='signup-component'>
            <body>
                <header>
                    <picture>
                        <Link to={`/`}><img src="../images/Logos/PymeWaveSinFondo.png"/></Link>
                    </picture>
                </header>

                <main>
                    <div className="container">
                        <div className="title">
                            <h1>¿Cómo quieres navegar con nosotros?</h1>
                        </div>
                        <div className="options">
                            <picture className='choose-signup'>
                                <Link to={`/SignUp/Empresa`}><img src="/images/Logos/Empresa_logo.jpg"/></Link>
                            </picture>
                            <picture className='choose-signup'>
                                <Link to={`/SignUp/Persona`} ><img src="/images/Logos/Persona_natural_logo.jpg"/></Link>
                            </picture>
                        </div>
                        <div className="txt">
                            <div className="left">
                                <p>Empresa</p>
                            </div>
                            <div className="right">
                                <p>Persona Natural</p>
                            </div>
                        </div>
                    </div>
                </main>

            </body>

        </div>
    )
}

export default CompSingUp;