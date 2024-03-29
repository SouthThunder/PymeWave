import { Link } from "react-router-dom";
import "./ModificarDatEmp.css";
import { React, useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
const URI = "http://localhost:8000/Cambiodat/Empresa/";
const URI2 = "http://localhost:8000/Cate/gorias";

const ModificarDatEmp = () => {
  return (
    <div className="ModificarDatEmp">
      <Header />
      <CompModiEmp />
      <Footer />
    </div>
  );
};

export const OpcGenerales = () => {
  return (
    <div className="izquierda">
      <div className="image">
        <picture>
          <img title="Logo sin fondo" src="../images/Logos/UsuarioLogo.jpg" />
        </picture>
      </div>
      <div className="options">
        <h4>Cambio Imagen</h4>
        <h4>
          <Link to={"/Empresa/SubirCatalogo"}>Subir catalogo</Link>
        </h4>
        <h4>Actualizar certificados</h4>
        <h4>
          <Link to={"/Empresa/CambiaContraseña"}>Actualizar contraseña</Link>
        </h4>
      </div>
    </div>
  );
};

const CompModiEmp = () => {
  const [popupCategoriasAbierto, setPopupCategoriasAbierto] = useState(false);
  const [empres, setempres] = useState([]);
  const [idEmpresa, setIdEmpresa] = useState(null); // variable para guardar el id_empresa
  const [popupAbierto, setPopupAbierto] = useState(false);

  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
  const actualizarCategoriasSeleccionadas = (event) => {
    const categoria = event.target.value;
    if (event.target.checked) {
      setCategoriasSeleccionadas([...categoriasSeleccionadas, categoria]);
    } else {
      setCategoriasSeleccionadas(
        categoriasSeleccionadas.filter((cat) => cat !== categoria)
      );
    }
  };

  useEffect(() => {
    getempres();
  }, []);

  const getempres = async () => {
    const res = await axios.get(URI+localStorage.getItem("user"));
    setempres(res.data);
    // Extraer el id_empresa del primer objeto del array empres
    if (res.data.length > 0) {
      setIdEmpresa(res.data[0].id_empresa);
    }
  };

  const actualizarDatos = async (event) => {
    event.preventDefault(); // previene que se recargue la pagina

    // Obtiene los datos del formulario
    const formData = new FormData(event.target);

    // Construye el objeto con los datos a actualizar
    const data = {
      nombre_empresa: formData.get("nombre"),
      correo: formData.get("correo"),
      telefono: formData.get("telefono"),
      dir_fisica: formData.get("ubicacion"),
    };

    if(data.correo===''){
      data.correo=empres[0].correo;
    }
    if(data.nombre_empresa===''){
      data.nombre_empresa=empres[0].nombre_empresa;
    }
    if(data.dir_fisica===''){
      data.dir_fisica=empres[0].dir_fisica;
    }
    if(data.telefono===''){
      data.telefono=empres[0].telefono;
    }
    // Envía los datos al servidor
    try {
      const response = await axios.put(
        URI + localStorage.getItem("user"),
        data
      );
      console.log(URI + localStorage.getItem("user"));
      console.log(response.data);
      alert("Datos actualizados correctamente");
      window.location.href = "/";
    } catch (error) {
      console.error(error);
      alert("Error al actualizar los datos");
    }
  };

  return (
    <div className="modificarDatosEmp">
      <div className="container">
        <OpcGenerales />
        <div className="derecha">
            <div className="title">
              <h1>Modificar Datos</h1>
            </div>
            <form id="form" onSubmit={actualizarDatos}>
              <div className="inputbox">
                <small className="erroresNomE">Error message</small>
                <ion-icon name="person"></ion-icon>
                <input
                  placeholder={empres[0]?.nombre_empresa}
                  type="text"
                  id="nombre"
                  name="nombre"
                />
                <label>Nombre de la empresa</label>
              </div>
              <div className="inputbox">
                <small className="erroresCorreo">Error message</small>
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  placeholder={empres[0]?.correo}
                  type="email"
                  id="Correo"
                  name="correo"
                />
                <label>Correo Electronico</label>
              </div>
              <div className="inputbox">
                <small className="errores">Error message</small>
                <ion-icon name="notifications"></ion-icon>
                <input
                  placeholder={empres[0]?.telefono}
                  type="text"
                  id="Telefono"
                  name="telefono"
                />
                <label>Telefono:</label>
              </div>
              <div className="inputbox">
                <small className="errores">Error message</small>
                <ion-icon name="home"></ion-icon>
                <input
                  placeholder={empres[0]?.dir_fisica}
                  type="text"
                  id="Ubicacion"
                  name="ubicacion"
                />
                <label>Ubicación</label>
              </div>
              <div className="enter">
                <button className="botonactualizar" type="submit">
                  Actualizar
                </button>
              </div>
            </form>
          </div>
      </div>
    </div>
  );
};

export default ModificarDatEmp;

//mock -> simulación, no de pantallas, sino que una integracioón y que simule cómo funcionará esa integración
//mock up -> son las pantallas que se hacen a mano, o con herramientas que simulan cómo quedaran la aplicación
