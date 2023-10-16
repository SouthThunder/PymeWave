import { Link } from "react-router-dom";
import "./SignIn.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/SignIn/persona/";

const CompSignIn = () => {
  const [user, setUser] = useState([]); //usuarios de la DB
  const [localuser, setLocaluser] = useState();
  const [localpassword, setLocalpassword] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    getUser();
  }, [localuser]);

  const getUser = async () => {
    const res = await axios.get(URI + localuser);
    if(res.data[0]!==undefined){
        setUser(res.data[0]);
    }
  };

  function shaAlgorithm(string) {
    const CryptoJS = require("crypto-js");
    const hash = CryptoJS.SHA256(string);
    return hash.toString(CryptoJS.enc.HEX);
  }

  function post(data) {
    localStorage.setItem("user", data.id_usuario);
    localStorage.setItem("user_type", 0);
    navigate("/");
  }

  const testing = () => {
    getUser();
    if (user !== undefined) {
      if (shaAlgorithm(localpassword) === user.contraseña) {
        alert("Inicio de sesion verificado");
        post(user);
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    }
  };

  return (
    <div className="signin-component">
      <div className="holder">
        <div className="logo">
          <picture>
            <Link to={"/"}>
              <img src="../images/Logos/PymeWaveSinFondo.png" />
            </Link>
          </picture>
        </div>
        <form>
          <div className="title">
            <h1>Iniciar sesion</h1>
          </div>
          <div className="inputbox">
            <ion-icon name="mail-outline"></ion-icon>
            <input
              type="text"
              id="login_user"
              onChange={(e) => setLocaluser(e.target.value)}
            />
            <label>Correo</label>
          </div>
          <div className="inputbox">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input
              type="password"
              id="login_pass"
              onChange={(e) => setLocalpassword(e.target.value)}
            />
            <label>Contraseña</label>
          </div>
          <div className="enter">
            <button onClick={testing}>Ingresar</button>
          </div>
          <div className="not-account">
            <p>
              ¿No tienes una cuenta?{" "}
              <Link to={"/SignUp/Persona"}>Registrate</Link>
            </p>
            <p>
              ¿Eres Empresa? <Link to={"/SignIn/Empresa"}>Inicia sesión</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompSignIn;
