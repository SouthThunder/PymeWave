import {Header} from '../../components/Header/Header'
import { Search } from '../../components/Search/Search';
import { Feed } from '../../components/Search/Search';
import { Footer } from '../../components/Footer/Footer';
import { QueryResults } from '../../components/Querys-results/Querys-results';
import React, { useEffect, useState } from 'react';

const Home =() =>{
    const [datavis1, setDatavis1] =useState(true);
    const [datavis2, setDatavis2] =useState(false);

    const getVis1= (data)=>{
        setDatavis1(data); //set Disable of QueryResults comp to true
        if(!data){
            setDatavis2(!data)
        }
    }

    return(
        <div className='home'>
            <Header/>
                <Search disable={datavis1} changeVis={getVis1}/>
                <Feed disable={datavis2}/>
            <Footer/>
        </div>
    )
}

export const Test = () =>{
    return(
        <div className="test">
            <Header/>
            <Search/>
            <QueryResults />
            <Footer/>
        </div>
    )
}

export default Home;