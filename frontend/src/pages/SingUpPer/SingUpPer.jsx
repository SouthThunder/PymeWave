import { Link, useNavigate } from "react-router-dom";
import "./SingUpPer.css";

import { useState, useEffect } from "react";
import axios from "axios";
const URI = "http://localhost:8000/SingUp/Persona";

const CompSingUpPer = () => {
  const [correo, setcorreo] = useState("");
  const [nombre, setnombre] = useState("");
  const [apellidos, setapellidos] = useState("");
  const [telefono, settelefono] = useState("");
  const [contraseña, setcontraseña] = useState("");
  const navigate = useNavigate();

  function dataValidation() {
    var sePudo = true;
    var telefono = document.getElementById("Telefono").value;
    var correo = document.getElementById("Correo").value;
    var password = document.getElementById("password").value;
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    // Expresión regular para verificar que el valor contenga únicamente números
    var regexNumeros = /^[0-9]+$/;

    // Verificar si contiene al menos una letra mayúscula, una letra minúscula y un número
    var regexMayuscula = /[A-Z]/;
    var regexSoloLetras = /^[a-zA-Z]+$/;
    var regexMinuscula = /[a-z]/;
    var regexNumero = /[0-9]/;
    var regexCaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/;
    // Expresión regular para verificar que el valor sea una dirección de correo electrónico válida
    var regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    //Valida que sea un email
    if (
      telefono.trim() === "" ||
      correo.trim() === "" ||
      password.trim() === "" ||
      nombre.trim() === "" ||
      apellidos.trim() === ""
    ) {
      alert("Por favor, complete todos los campos");
      sePudo = false;
      return false;
    } else {
      // setSuccesFor(document.getElementById('form'));
    }
    if (!correo.match(regexEmail)) {
      setErrorFor(
        document.getElementById("Correo"),
        "Por favor, Ingrese una dirección de correo válida"
      );
      sePudo = false;
    } else {
      setSuccesFor(document.getElementById("Correo"));
    }
    //valida que el nombre tenga unicamente letras
    if (!nombre.match(regexSoloLetras) || !apellidos.match(regexSoloLetras)) {
      setErrorFor(
        document.getElementById("nombre"),
        "Por favor, digite un nombre y/ o apellido valido"
      );
      sePudo = false;
    } else {
      setSuccesFor(document.getElementById("nombre"));
    }
    //Valida que el telefono tenga únicamente números
    if (!telefono.match(regexNumeros)) {
      setErrorFor(
        document.getElementById("Telefono"),
        "El telefono debe contener únicamente números."
      );
      sePudo = false;
    } else {
      setSuccesFor(document.getElementById("Telefono"));
    }
    //Valida que el telefono sea de 10 numeros(En colombia los numeros son de 10 números)
    if (telefono.length != 10) {
      setErrorFor(
        document.getElementById("Telefono"),
        "Por favor, Ingrese un télefono válido."
      );
      sePudo = false;
    } else {
      setSuccesFor(document.getElementById("Telefono"));
    }
    //Valida que la contraseña tenga más de 8 caracteres
    if (password.length < 8) {
      setErrorFor(
        document.getElementById("password"),
        "La contraseña debe contener mínimo 8 caracteres"
      );
      sePudo = false;
    } else {
      setSuccesFor(document.getElementById("password"));
    }
    //Valida condiciones de contraseña
    if (
      !password.match(regexMayuscula) ||
      !password.match(regexMinuscula) ||
      !password.match(regexNumero) ||
      !password.match(regexCaracterEspecial)
    ) {
      setErrorFor(
        document.getElementById("password"),
        "Contraseña requiere mayúscula, minúscula, número y caracter especial."
      );
      sePudo = false;
    } else {
      setSuccesFor(document.getElementById("password"));
    }

    if (sePudo == false) {
      return false;
    } else {
      return true;
    }
  }

  function setErrorFor(input, message) {
    const inputbox = input.parentElement;
    const small = inputbox.querySelector("small");
    inputbox.className = "inputbox error";
    small.innerText = message;

    input.focus();
  }

  function setSuccesFor(input) {
    const formControl = input.parentElement;
    formControl.className = "inputbox sucess";
  }

  function shaAlgorithm(string) {
    const CryptoJS = require("crypto-js");
    const hash = CryptoJS.SHA256(string);
    return hash.toString(CryptoJS.enc.HEX);
  }

  //procedimiento guardar
  const store = async (e) => {
    e.preventDefault();
    console.log("SI");
    await axios.post(URI, {
      correo: correo,
      nombre: nombre,
      apellidos: apellidos,
      telefono: telefono,
      contraseña: shaAlgorithm(contraseña),
    });
    navigate("/");
  };
  return (
    <div className="singUpPer-component">
      <body>
        <header>
          <picture>
            <Link to={`/`}>
              <img src="../images/Logos/PymeWaveSinFondo.png" />
            </Link>
          </picture>
        </header>
        <div className="container">
          <div className="title">
            <h1>Registro</h1>
          </div>
          <div className="data">
            <div className="image">
              <picture>
                <img src="../images/Backgrounds/SignUpLogo.png" alt="" />
              </picture>
            </div>
            <form id="form" onSubmit={store}>
              <div className="inputbox">
                <small className="erroresCorreo">Error message</small>
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  placeholder="pepe123@gmail.com"
                  type="email"
                  id="Correo"
                  name="correo"
                  value={correo}
                  onChange={(e) => setcorreo(e.target.value)}
                />
                <label for="">Correo Electronico</label>
              </div>
              <div className="inputbox">
                <small className="errores">Error message</small>
                <ion-icon name="person"></ion-icon>
                <input
                  placeholder="pepe"
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => setnombre(e.target.value)}
                />
                <label for="">Nombre</label>
              </div>
              <div className="inputbox">
                <small className="errores">Error message</small>
                <ion-icon name="person"></ion-icon>
                <input
                  placeholder="Gonzales"
                  type="text"
                  id="apellidos"
                  name="apellidos"
                  value={apellidos}
                  onChange={(e) => setapellidos(e.target.value)}
                />
                <label for="">Apellidos</label>
              </div>

              <div className="inputbox">
                <small className="errores">Error message</small>
                <ion-icon name="notifications"></ion-icon>
                <input
                  placeholder="3187927635"
                  type="text"
                  id="Telefono"
                  name="telefono"
                  value={telefono}
                  onChange={(e) => settelefono(e.target.value)}
                />
                <label for="">Telefono</label>
              </div>
              <div className="inputbox">
                <small className="errores">Error message</small>
                <ion-icon name="star"></ion-icon>
                <input
                  placeholder="pepe123"
                  type="text"
                  id="username"
                  name="user_name"
                />
                <label for="">Username</label>
              </div>

              <div className="inputbox">
                <small className="erroresContrasenia">Error message</small>
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                  placeholder="********"
                  type="password"
                  id="password"
                  name="contraseña"
                  value={contraseña}
                  onChange={(e) => setcontraseña(e.target.value)}
                />
                <label for="">Contraseña</label>
              </div>
              <br />
              <div className="enter">
                <button type="submit" onClick={dataValidation}>
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </body>
    </div>
  );
};

export default CompSingUpPer;
