import {React, useEffect, useState} from 'react';
import axios from 'axios';
import './Querys-results.css';

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

    function cardHolders (){
        /*const copyItems=1;
        alert(enterprise?.length)
        for(let i=0;i<enterprise?.length;i++){
            alert(enterprise[i].correo);
        }*/
        return(
            enterprise?.map((enter)=>{
                return(
                    <div className="container">
                        <div className="dataHolder">
                            <picture>
                                <img src="//placehold.it/300x400"/>
                            </picture>
                            <div className="dataoutput">
                                <h1>{enter.nombre_empresa}</h1>
                                <p>{enter.catalogo?.descripcion_empresa}</p>
                                <button>Leer mas</button>
                            </div>
                        </div>   
                    </div>
                )
            })
        )
    }

    
    return (
        cardHolders()
    )
}

export const QueryResults = () =>{
        return(
            <div className="queryResultsComp">
                <Testing />
            </div>
        );
    
}