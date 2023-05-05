import {Header} from '../../components/Header/Header'
import { Search } from '../../components/Search/Search';
import { Feed } from '../../components/Search/Search';
import { Footer } from '../../components/Footer/Footer';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Home =() =>{

    const getUser = localStorage.getItem('user');

    const location = useLocation();
    const [datavis1, setDatavis1] =useState(true);
    const [datavis2, setDatavis2] =useState(false);
    const [user, setUser] = useState();
    useEffect(()=>{
        //getUser();
    }, [])

    /*const getUser = () =>{
        if(location.state ===null){
            console.log('No user Defined');
        }else{
            const state = location.state;
            setUser(state.id_usuario);
        }
    }*/

    const getVis1= (data)=>{
        setDatavis1(data); //set Disable of QueryResults comp to true
        if(!data){
            setDatavis2(!data)
        }
    }

    return(
        <div className='home'>
            <Header/>
                <Search disable={datavis1} changeVis={getVis1} />
                <Feed disable={datavis2}/>
            <Footer/>
        </div>
    )
}

export default Home;