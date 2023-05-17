import axios from "axios";
import { React, useEffect, useState } from "react";
import "./EditarProducto.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/Cambiodat/Empresa/";
const URI2 = "http://localhost:8000/productos/";

const editarproducto = () => {
  return (
    <div className="editar">
      <Header />
      <CompEditarProducto />
      <Footer />
    </div>
  );
};
const CompEditarProducto = () => {
  const paramURL = window.location.search;
  const parametrosURL = new URLSearchParams(paramURL);
  const idProduct = parametrosURL.get("id");
  console.log(idProduct);

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const navigate = useNavigate();
  const actualizarDatosP = async (event) => {
    event.preventDefault(); // previene que se recargue la pagina

    // Obtiene los datos del formulario
    const formData = new FormData(event.target);

    // Construye el objeto con los datos a actualizar
    const data = {
      nombre: formData.get("nombre"),
      descripcion: formData.get("descripcion"),
    };

    // Envía los datos al servidor
    try {
      if (data.nombre !== "" && data.descripcion!=="") {
        const response = await axios.put(URI2 + idProduct, data);
        console.log(response.data);
        alert("Datos actualizados correctamente");
        window.location.href = "/Empresa/SubirCatalogo";
      }else{
        alert('Porfavor asegurese de rellenar todos los campos para editar este producto.')
      }
    } catch (error) {
      console.error(error);
      alert("Error al actualizar los datos");
    }
  };

  //procedimiento para guardar

  return (
    <div className="editarproduct">
      <form className="form" onSubmit={actualizarDatosP}>
        <div className="input-container1">
          <label className="lb" htmlFor="nombre">
            Nombre producto:
          </label>
          <input
            value={nombre}
            type="text"
            id="nombre"
            className="input-field"
            name="nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="input-container2">
          <label className="lb" htmlFor="confirm-password">
            Descripción producto:
          </label>
          <textarea
            value={descripcion}
            type="text"
            id="descripcion"
            name="descripcion"
            className="input-field"
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">
          Editar Producto
        </button>
      </form>
    </div>
  );
};

export default editarproducto;
