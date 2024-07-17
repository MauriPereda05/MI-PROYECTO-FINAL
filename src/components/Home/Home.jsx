import './Home.css';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <>
            <section>
                <div className="food-container">
                    <div className="food-content">
                        <div className="food-items">
                            <h1 className="comida-h1">La mejor comida de todos los tiempos</h1>
                            <p className="comida">¡Pizza deliciosa en tu puerta en poco tiempo!</p>
                            <Link to="/menu">
                                <button className="botone">Descubre nuestro menú</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
