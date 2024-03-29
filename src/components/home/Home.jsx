import Data from './Data';
import Scroldown from './Scroldown';
import Social from './Social';
import './home.css'

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social></Social>
                    <div className="home__img"></div>

                <Data></Data>
                </div>
                <Scroldown></Scroldown>
            </div>
        </section>
    );
};

export default Home;