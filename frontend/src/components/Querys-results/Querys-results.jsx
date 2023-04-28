import {React, useEffect, useState} from 'react';
import axios from 'axios';
import './Querys-results.css';
import {useNavigate, useParams} from 'react-router-dom'; 

const URI = 'http://localhost:8000/'; 

export const Testing = (props) =>{
    const [enterprise, setEnterprise] = useState([]);
    useEffect(() =>{
        getEnterprises()
    }, []);

    const getEnterprises = async () =>{
        const res = await axios.get(URI);
        setEnterprise(res.data);
    }


   const [empres, setempres] = useState([]);

    useEffect(() => {
        getempres();
    },[]);

    const getempres = async () => {
        const res = await axios.get(`${URI}?nombre_empresa=${props.nombre_empresa}`);
        setempres(res.data);
    }

    console.log(props.selectedCategories);

    function cardHolders (){

        return(
           <div>
                {empres
                    .filter((empre) => empre.nombre_empresa === props.nombre_empresa)
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

    

    if(props.selectedCategories.length === 0 ){
        console.log("");
        return (
            cardHolders()
        );
    }else{
        console.log("llenito");
    }

    
    
}

export const QueryResults = (props, {disable}) =>{
        return(
            !disable && (
            <div className="queryResultsComp">
                <Testing 
                    nombre_empresa = {props.nombre_empresa}
                    selectedCategories = {props.selectedCategories}
                />
            </div>
            )
        );
    
}