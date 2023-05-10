import './Search.css'
import axios from 'axios';
import {useState, useEffect} from 'react';
import './Search.css';
//import { useNavigate } from 'react-router-dom';
import {QueryResults} from '../Querys-results/Querys-results';



const URI = 'http://localhost:8000/';
const URI2 = 'http://localhost:8000/Cate/gorias';

export const CompShowEnterprises = () =>{
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
            enterprise.map((enter)=>{
              return(
                <div className="container" key={enter.id_empresa}>
                  <div className="holder">
                    <picture>
                      <img alt="" src="//placehold.it/300x200"/>
                    </picture>
                    <div className="data">
                      <div className="title">
                        <h1>{enter.nombre_empresa}</h1>
                      </div>
                      <div className="text">
                        <p>{enter.catalogo?.descripcion_empresa}</p>
                      </div>
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

export const Feed = (props) =>{
    return(
        <div>
            {
                !props.disable && (
                    <div className="feed-component">
                            <div className="arrow_left">
                            <button><img src="https://cdn-icons-png.flaticon.com/512/4028/4028550.png" alt=""/></button>
                        </div>
                        <div className="arrow_right">
                            <button><img src="https://cdn-icons-png.flaticon.com/512/1549/1549612.png" alt=""/></button>
                        </div>
                        <div className="scrollport">
                            <div className="indicators">
                                <h1>¿No estás seguro de lo que buscas?</h1>
                                <h2>Surfea en nuestro mar de opciones</h2>
                            </div>
                            {!props.disable &&(
                                <CompShowEnterprises/>
                            )}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export const Search = (props) => { 

    const [cates, setCates] = useState([]); 

    const [searchValue, setSearchValue] = useState(); 

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedCalificacion, setSelectedCalificacion] = useState([]); 


    useEffect(() => { 

        getCates(); 

    },[]); 

 
 

    const getCates = async () => { 

        const res = await axios.get(URI2); 

        setCates(res.data); 

    } 

 
 

    const [showPopup, setShowPopup] = useState(false); // state para controlar el popup 
    const [filterBy, setFilterBy] = useState('category');
   

    const togglePopup = () => { 

      setShowPopup(!showPopup); // función para alternar el estado del popup
      
    } 


    const handleSearch = (event) => { 
        event.preventDefault(); 
        props.changeVis(false);
      }; 


      const handleCategoryClick = () => {
        setFilterBy('category');
       //setSelectedRating(null);
      }
      
      const handleRatingClick = () => {
        setFilterBy('rating');
        //setSelectedCategory(null);
      }


    return ( 

      <div className='search-component'> 

        <picture> 

          <img src="https://static.timesofisrael.com/blogs/uploads/2019/09/silas-baisch-ceITO2rlDgc-unsplash.jpg" alt="main"/> 

        </picture> 

        <div className="center"> 

          <h1 id="promt">Join The Magic</h1> 

          <form className="search"> 

            <div className="input-container"  data-error="Please do not leave this blank"> 

              <input type="search" placeholder="Search here..." id="input-search" onChange={(e)=> setSearchValue(e.target.value)}/> 

            </div> 

            <div className="button-containerpop"> 

            <button type="button" onClick={togglePopup}><img className="button-imagepop" src="/images/Logos/Filtro2.png" alt=""/></button> {/* Agregar el botón para abrir el popup */} 

            </div> 

            <div className="button-container"> 

              <button type="button" onClick={handleSearch}>Search</button> 

            </div> 

          </form> 

  

          {showPopup && (
            <div className='popup-cont-cont'>
              <div className="popup animate__animated animate__fadeInDown"> 
                <p>Selecciona cómo filtrar:</p>
                <div>
                  <button
                    className={filterBy === 'category' ? 'active' : 'inactive'}
                    onClick={handleCategoryClick}
                  >
                    Por categorías
                  </button>
                  <button
                    className={filterBy === 'rating' ? 'active' : 'inactive'}
                    onClick={handleRatingClick}
                  >
                    Por calificaciones
                  </button>
                </div>
                {filterBy === 'category' && (
                  <div>
                    <p>Selecciona tus categorías:</p>
                    <label className='checkbox'> 
                      {cates.map((cate) => ( 
                        <label className='checkbox-container' key={cate.id_categoria}> 
                        <input
                          type="checkbox"
                          value={cate.nombre}
                          onChange={(e) => { 
                            if (e.target.checked) { 
                              setSelectedCategories([...selectedCategories, e.target.value]); 
                            } else { 
                              setSelectedCategories(selectedCategories.filter(category => category !== e.target.value)); 
                            } 
                          }}
                        /> 
                        {cate.nombre} 
                        </label> 
                    ))}
                    </label>
                  </div>
                )}
                {filterBy === 'rating' && (
                  <div>
                    <p>Selecciona tus calificaciones:</p>
                    <label className='checkbox'> 
                    <label className='checkbox-container'> 
                      <input
                        type="checkbox"
                        value="0-1"
                        onChange={(e) => { 
                          if (e.target.checked) { 
                            setSelectedCalificacion([...selectedCalificacion, e.target.value]); 
                          } else { 
                            setSelectedCalificacion(selectedCalificacion.filter(category => category !== e.target.value));
                          } 
                        }}
                      /> 
                        0-1 estrellas
                    </label> 
                    <label className='checkbox-container'> 
                      <input
                        type="checkbox"
                        value="1-2"
                        onChange={(e) => { 
                          if (e.target.checked) { 
                            setSelectedCalificacion([...selectedCalificacion, e.target.value]); 
                          } else { 
                            setSelectedCalificacion(selectedCalificacion.filter(category => category !== e.target.value));
                          } 
                        }}
                      /> 
                        1-2 estrellas
                    </label>
                    <label className='checkbox-container'> 
                      <input
                        type="checkbox"
                        value="2-3"
                        onChange={(e) => { 
                          if (e.target.checked) { 
                            setSelectedCalificacion([...selectedCalificacion, e.target.value]); 
                          } else { 
                            setSelectedCalificacion(selectedCalificacion.filter(category => category !== e.target.value));
                          }  
                        }}
                      /> 
                        2-3 estrellas
                    </label>
                    <label className='checkbox-container'> 
                      <input
                        type="checkbox"
                        value="3-4"
                        onChange={(e) => { 
                          if (e.target.checked) { 
                            setSelectedCalificacion([...selectedCalificacion, e.target.value]); 
                          } else { 
                            setSelectedCalificacion(selectedCalificacion.filter(category => category !== e.target.value));
                          }  
                        }}
                      /> 
                        3-4 estrellas
                    </label>
                    <label className='checkbox-container'> 
                      <input
                        type="checkbox"
                        value="4-5"
                        onChange={(e) => { 
                          if (e.target.checked) { 
                            setSelectedCalificacion([...selectedCalificacion, e.target.value]); 
                          } else { 
                            setSelectedCalificacion(selectedCalificacion.filter(category => category !== e.target.value));
                          } 
                        }}
                      /> 
                        4-5 estrellas
                    </label>
                  </label>
                </div>
              )}
            <button type="button" className='boton-salir' onClick={togglePopup}>Cerrar</button> 
          </div> 
        </div> 
      )}

            {!props.disable && (
                <div> 
                    <QueryResults 

                        nombre_empresa = {searchValue} 

                        selectedCategories={selectedCategories}

                        selectedCalificacion={selectedCalificacion}

                    /> 
                </div>
            )}
        </div> 
      </div> 
    ) 
} 