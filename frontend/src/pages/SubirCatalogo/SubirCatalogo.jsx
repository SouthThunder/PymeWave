import { Link } from "react-router-dom";
import "./SubirCatalogo.css";
import { React, useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { OpcGenerales } from "../ModificarDatEmp/ModificarDatEmp";

const URI = "http://localhost:8000/Cambiodat/Empresa/";
const URI2 = "http://localhost:8000/productos/";
const URI3 = "http://localhost:8000/Actualizar/Catalogos/";

const SubirCatalogo = () => {
  return (
    <div className="SubirCatalogo">
      <Header />
      <CompSubirCata />
      <Footer />
    </div>
  );
};

const CompSubirCata = () => {
  const [empres, setempres] = useState([]);
  const [idEmpresa, setIdEmpresa] = useState(null); // variable para guardar el id_empresa

  useEffect(() => {
    getempres();
  }, []);

  const getempres = async () => {
    const res = await axios.get(URI + localStorage.getItem("user"));
    setempres(res.data);
    console.log(empres)
    // Extraer el id_empresa del primer objeto del array empres
    if (res.data.length > 0) {
      setIdEmpresa(res.data[0].id_empresa);
    }
  };

  const actualizarDescripcion = async (event) => {
    event.preventDefault(); // previene que se recargue la pagina

    const formData = new FormData(event.target);

    const data = {
      descripcion_empresa: formData.get("descripcion"),
    };
    if(data.descripcion_empresa===''){
      data.descripcion_empresa=empres[0].descripcion_empresa;
    }
    console.log(formData.get("descripcion"));

    const idk = await axios.get(URI3 + localStorage.getItem("user"));
    if (idk.data[0]?.id_empresa_catalogo) {
      sendData(data);
    } else {
      createData();
    }
  };

  const createData = async () => {
    try {
      const response = await axios.post(URI3, {
        id_empresa_catalogo: localStorage.getItem("user"),
        descripcion_empresa: " ",
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert("Error al actualizar la descripción");
    }
  };

  const sendData = async (data) => {
    // Envía los datos al servidor
    try {
      const response = await axios.put(
        URI3 + localStorage.getItem("user"),
        data
      );
      console.log(response.data);
      alert("Descripcion actualizada");
      window.location.href = "/";
    } catch (error) {
      console.error(error);
      alert("Error al actualizar de descripcion");
    }
  };

  const [producto, setProducto] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      getProducto();
    }
  }, [localStorage.getItem("user")]);
  useEffect(() => {
    getProducto();
  }, []);

  const getProducto = async () => {
    const res = await axios.get(URI2 + localStorage.getItem("user"));
    setProducto(res.data);
  };

  const deleteProducto = async (id) => {
    const confirmacion = window.confirm(
      "¿Está seguro de que desea eliminar este producto?"
    );
    if (confirmacion) {
      await axios.delete(`${URI2}${id}`);
      getProducto();
    }
  };

  return (
    <div className="subircatalogo">
      <div className="container">
        <OpcGenerales/>
        <div className="derecha">
          <div className="title">
            <h1>Catalogo</h1>
          </div>
          <form id="form" onSubmit={actualizarDescripcion}>
            <div className="inputbox">
              <label htmlFor="">Descripción de la empresa</label>

              <ion-icon name="archive"></ion-icon>
              <textarea
                placeholder="Somos una empresa..."
                type="text"
                className="descripcion"
                id="descripcion"
                name="descripcion"
              />
            </div>
            <div className="enter">
              {<button type="submit">Actualizar</button>}
            </div>

            <label htmlFor="" className="titulo2">
              Listado Productos
            </label>

            <div className="productos">
              <table className="table">
                <thead className="table-primary">
                  <tr>
                    <th> Producto</th>
                    <th>Descripcion</th>
                    <th>Modificar</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {producto.map((product) => (
                    <tr key={product.id_producto}>
                      <td>{product.nombre}</td>
                      <td>{product.descripcion}</td>
                      <td>
                        <Link
                          to={`/Empresa/SubirCatalogo/EditarProducto?id=${product.id_producto}`}
                          className="editar"
                        >
                          Editar
                        </Link>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btneliminar"
                          onClick={() => deleteProducto(product.id_producto)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="agrega">
              <Link
                to={"/Empresa/SubirCatalogo/AgregarProducto"}
                className="add"
              >
                Agregar Producto
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubirCatalogo;
