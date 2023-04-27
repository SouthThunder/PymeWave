import {Header} from '../../components/Header/Header'
import { Search } from '../../components/Search/Search';
import { Feed } from '../../components/Search/Search';
import { Footer } from '../../components/Footer/Footer';

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

export default Home;