import { Footer } from '../../components/Footer/Footer';
import {Header} from '../../components/Header/Header'
import { Search } from '../../components/Search/Search';

const Home =() =>{
    return(
        <div className='home'>
            <Header/>
                <Search/>
            <Footer/>
        </div>
    )
}

export default Home;