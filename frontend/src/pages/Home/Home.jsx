import {Header} from '../../components/Header/Header'
import { Search } from '../../components/Search/Search';
import { Feed } from '../../components/Search/Search';
import { Footer } from '../../components/Footer/Footer';
import { QueryResults } from '../../components/Querys-results/Querys-results';
import React from 'react';

const Home =() =>{
    return(
        <div className='home'>
            
            <Header/>
                <Search/>
                <Feed/>
            <Footer/>
        </div>
    )
}

export const Test = () =>{
    return(
        <div className="test">
            <Header/>
            <Search/>
            <QueryResults/>
            <Footer/>
        </div>
    )
}

export default Home;