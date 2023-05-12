import {React, useEffect, useState} from 'react';
import axios from 'axios';
import './Querys-results.css';
//import {useNavigate, useParams} from 'react-router-dom'; 

const URI = 'http://localhost:8000/'; 
const URI2 = 'http://localhost:8000/Busq/cate/';

const sinonimos = {
    "Arte": ["bellas artes","dibujo","pintura","pintor","pinturas","lienzos","pinceles","pincel","papeleria"],
    "Belleza": ["atractivo","estetica","maquillaje","cosmeticos","peluqueria","barberia","perfumes","cuidado personal"],
    "Cámaras": ["fotografia","foto","objetivos","tripode"],
    "Cómics": ["historietas","novelas graficas","manga"],
    "Computación": ["informatica","ordenadores","torres","cpu","tarjeta de video","portátil","pc para juegos","programas","tablets","memoria ram","disco duro","usb"],
    "Consolas": ["mandos","protectores para mandos","consolas viejas","consolas portatiles"],
    "Deportes": ["actividades fisicas","ejercicio"],
    "Dispositivos de audio": ["altavoces","auriculares","parlantes"],
    "Dispositivos de video": ["pantallas","monitores","televisores"],
    "Electrodomésticos": ["aparatos electricos","electrodomesticos"],
    "Herramientas": ["utensilios","instrumentos","equipos"],
    "Hogar": ["casa","vivienda","domicilio"],
    "Instrumentos musicales": ["musica","instrumentos","guitarra","piano","bateria"],
    "Joyería": ["bisuteria","joyas","accesorios"],
    "Juguetes": ["juegos","diversiones","jugueteria"],
    "Libros": ["literatura","lectura","publicaciones","impresos"],
    "Mascotas": ["animales de compañia","perros","gatos","mascoteria"],
    "Ropa": ["vestimenta","indumentaria","prendas de vestir"],
    "Salud": ["bienestar","sanidad","medicina","saludable"],
    "Servicios": ["asistencia","atencion","servicios"],
    "Televisores": ["tv","television","pantalla"],
    "Vehículos": ["automoviles","coches","motos","transporte"],
    "Videojuegos": ["juegos de video","entretenimiento digital"],
    }



export const Testing = (props) =>{

    //metodo para asociar un sinonimo con una categoria
    const buscarCategoria = (nombre) => {

        if (nombre){
           const nombreNormalizado = nombre.toLowerCase().replace(/,/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            //console.log(nombreNormalizado);
            for (const categoria in sinonimos) {
                if (sinonimos[categoria].includes(nombreNormalizado)) {
                    return categoria;
                }
            } 
        }
        return null;
    }
    
    //constante en la cual se guarda la categoria a la cual se esta asociando
    const categoria_asociada = buscarCategoria(props.nombre_empresa);

    //console.log(categoria_asociada);

   const [empres, setempres] = useState([]);

    useEffect(() => {
        getempres();
    }, []);

    const getempres = async () => {

        if (props.nombre_empresa) {
            const res = await axios.get(`${URI}?nombre_empresa=${props.nombre_empresa}`);
            setempres(res.data);
        }
    }

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        if (props.selectedCategories.length > 0) {
            getCategorias();
        }
    }, [props.selectedCategories]);

    const getCategorias = async () => {
        const URIUCAT = URI2 + props.selectedCategories.join(",");
        const res = await axios.get(URIUCAT);
        setCategorias(res.data); 
    }

    const [categorias2, setCategorias2] = useState([]);

    useEffect(() => {
        getCategorias2();
    },[categoria_asociada]);

    const getCategorias2 = async () => {
        const URIUCAT = URI2 + categoria_asociada;
        //console.log(URIUCAT);
        const res = await axios.get(URIUCAT);
        setCategorias2(res.data); 
    }

    

    //console.log(props.selectedCategories);
    

    function cardHolders (){
        const resultados = empres
        .filter((empre) => empre.nombre_empresa === props.nombre_empresa)
        .map((empre) => {
            
            return (
                <div className='container' key={empre.id_empresa}>
                <div className="dataHolder">
                    <picture>
                        <img src="//placehold.it/300x400"/>
                    </picture>
                    <div className="dataoutput">
                        <h1>{empre.nombre_empresa}</h1>
                        <p>{empre.catalogo?.descripcion_empresa}</p>
                        <button>Leer mas</button>
                    </div>
                </div>
                </div>
            );
        });
    
        // si resultados está vacío, ejecutar la segunda parte de la función
        if (resultados.length === 0){
            const resultados2 = categorias2
            .map((cates) => {
                return (
                    <div className='container' key={cates.id_empresa}>
                      <div className="dataHolder">
                        <picture>
                          <img src="//placehold.it/300x400" alt='' />
                        </picture>
                        <div className="dataoutput">
                          <h1>{cates.nombre_empresa}</h1>
                          <p>{cates.descripcion_empresa}</p>
                          <button>Leer mas</button>
                        </div>
                      </div>
                    </div>
                );
            });
    
            // si resultados2 también está vacío, ejecutar el tercer bloque de código
            if (resultados2.length === 0){
                return (
                    <div className="noresult">
                        <picture picture="true" className='sinresultados'>
                                <img src="/images/Logos/6134065.png" alt="" />
                            </picture>
                            <h1>No se han encontrado resultados</h1>
                        </div>
                    );
            }
    
            return resultados2;
        }
    
        return resultados;
    }

    function cardHolderCalificacion (){
        const [califInicio, califFin] = props.selectedCalificacion[0].split('-').map(parseFloat);
        console.log(califInicio);
        console.log(califFin);
        
        return (
            <div>
                {empres.filter((empre) => {
                    const calif = parseFloat(empre.calificacion);
                    return calif >= califInicio && calif <= califFin;
                }).map((empre) => (
                    <div className='container' key={empre.id_empresa}>
                        <div className="dataHolder">
                            <picture>
                                <img src="//placehold.it/300x400" alt='' />
                            </picture>
                            <div className="dataoutput">
                                <h1>{empre.nombre_empresa}</h1>
                                <p>{empre.catalogo?.descripcion_empresa}</p>
                                <button>Leer mas</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    function cardHolderCate (){
        return(
          <div>
            {categorias.map((cates) => (
              <div className='container' key={cates.id_empresa}>
                <div className="dataHolder">
                  <picture>
                    <img src="//placehold.it/300x400" alt='' />
                  </picture>
                  <div className="dataoutput">
                    <h1>{cates.nombre_empresa}</h1>
                    <p>{cates.descripcion_empresa}</p>
                    <button>Leer mas</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      }

    
    if(props.selectedCalificacion.length === 1){
        console.log("llenito")
        return(
            cardHolderCalificacion ()
        );    
    }  
    else if(props.selectedCategories.length === 0 ){
        console.log("");
        return (
            cardHolders()
        );
    }else if(props.selectedCategories.length >=  1){
        //console.log("llenito");
        return (
            cardHolderCate()
        );
    }
    
}


export const QueryResults = (props) =>{
    console.log(props.calificacion);
        return(
            <div className="queryResultsComp">
                <Testing 
                    nombre_empresa = {props.nombre_empresa}
                    selectedCategories = {props.selectedCategories}
                    selectedCalificacion={props.selectedCalificacion}
                />
            </div>
        );
    
}