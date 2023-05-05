import {React, useEffect, useState} from 'react';
import axios from 'axios';
import './Querys-results.css';
//import {useNavigate, useParams} from 'react-router-dom'; 

const URI = 'http://localhost:8000/'; 
const URI2 = 'http://localhost:8000/Busq/cate/';



export const Testing = (props) =>{

   const [empres, setempres] = useState([]);

    useEffect(() => {
        getempres();
    }, []);

    const getempres = async () => {

        const res = await axios.get(`${URI}?nombre_empresa=${props.nombre_empresa}`);
        setempres(res.data);
    }

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        if (props.selectedCategories.length > 0) {
            getCategorias();
        }
    }, [props.selectedCategories]);

    const getCategorias = async () => {
        const URIUCAT = URI2 + props.selectedCategories[0];
        const res = await axios.get(URIUCAT);
        setCategorias(res.data); 
    }


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

    if (resultados.length === 0) {
        return (
            <div className="noresult">
                <picture className='sinresultados'>
                    <img src="/images/Logos/6134065.png" alt="" />
                </picture>
                <h1>No se han encontrado resultados</h1>
            </div>
        );
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
    }else if(props.selectedCategories.length === 1){
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