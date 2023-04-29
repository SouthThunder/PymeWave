import {React, useEffect, useState} from 'react';
import axios from 'axios';
import './Querys-results.css';
import {useNavigate, useParams} from 'react-router-dom'; 

const URI = 'http://localhost:8000/'; 
const URI2 = 'http://localhost:8000/Busq/cate/';

export const Testing = (props) =>{

    if (props.selectedCategories.length === 1) {
        const catego = props.selectedCategories[0];
        console.log(catego); // muestra el valor de la constante en la consola
    }

   const [empres, setempres] = useState([]);

    useEffect(() => {
        getempres();
    }, []);

    const getempres = async () => {
        const res = await axios.get(`${URI}?nombre_empresa=${props.nombre_empresa}`);
        //const res = await axios.get(URI+props.nombre_empresa);
        setempres(res.data);
        //alert(empres.nombre_empresa);    
    }

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        if (props.selectedCategories.length > 0) {
            getCategorias();
        }
    }, [props.selectedCategories]);

    //  const getCategorias = async () => {
    //      //const res = await axios.get(`${URI}?nombre_empresa=${props.nombre_empresa}`);
    //          const URIUCAT = URI2+props.selectedCategories[0];
    //          const res = await axios.get(URIUCAT);
    //          setCategorias(res.data); 
    
    //  }
    const getCategorias = async () => {
        const URIUCAT = URI2 + props.selectedCategories[0];
        const res = await axios.get(URIUCAT);
        setCategorias(res.data); 
    }

    console.log(URI2+props.selectedCategories[0]);

    //if((URI2+props.selectedCategories[0]) === URI2+"Arte"){
        //console.log('hola somos iguales');
    //}



    console.log(props.selectedCategories);

    function cardHolders (){
        return(
           <div>
                {empres.filter((empre) => empre.nombre_empresa === props.nombre_empresa)
                        .map((empre) => (
                            <div className='container'>
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
                        ))
                    }
           </div>
                    
            
        )
    }


    function cardHolderCate (){

        return(
            <div>
              {categorias.map((cates) => (
                <div className='container'>
                  <div className="dataHolder">
                    <picture>
                      <img src="//placehold.it/300x400"/>
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
    

    if(props.selectedCategories.length === 0 ){
        console.log("");
        return (
            cardHolders()
        );
    }else{
        console.log("llenito");

        if (props.selectedCategories.length === 1) {
            return (
                cardHolderCate()
            );
        }  
    }
}


export const QueryResults = (props) =>{
        return(
            <div className="queryResultsComp">
                <Testing 
                    nombre_empresa = {props.nombre_empresa}
                    selectedCategories = {props.selectedCategories}
                />
            </div>
        );
    
}