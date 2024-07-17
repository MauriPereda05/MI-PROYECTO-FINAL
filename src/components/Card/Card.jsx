import './Card.css';
import { useNavigate } from 'react-router-dom';

export const Card = () => {
    const navigate = useNavigate();

    const handleVerTodos = () => {
        navigate('/promo');
        setTimeout(() => {
            document.getElementById('promocionespizza').scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const handleVerTodosHamburguesa = () => {
        navigate('/promo');
        setTimeout(() => {
            document.getElementById('hamburguesas').scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const handleVerTodosBebidas = () => {
        navigate('/promo');
        setTimeout(() => {
            document.getElementById('Gaseosas').scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const handleVerTodosHelados = () => {
        navigate('/promo');
        setTimeout(() => {
            document.getElementById('Heladeria').scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const handleVerTodosCombos = () => {
        navigate('/combos');
        setTimeout(() => {
            document.getElementById('Combos').scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return( 
        <div className="container-card">
            <section className="Card">
                <div className="card-item">
                    <img className='pizzeria' src="https://www.pizzadelchef.com/wp-content/uploads/2022/09/especialidades-2x1-1-300x300.jpg" alt="Pizza" />
                    <button className='botones' onClick={handleVerTodos}>Ver todos</button>
                </div>
                <div className="card-item">
                    <img className='pizzeria' src="https://promoburger.com/images/secciones/Promos-Burger-Seccion-Hamburguesas.jpg" alt="Pizza" />
                    <button className='botones' onClick={handleVerTodosHamburguesa}>Ver todos</button>
                </div>
                <div className="card-item">
                    <img className='pizzeria' src="https://gestoriapastor.org/wp-content/uploads/2021/01/the-refrescos.jpg" alt="Pizza" />
                    <button className='botones' onClick={handleVerTodosBebidas}>Ver todos</button>
                </div>
                <div className="card-item">
                    <img className='pizzeria' src="https://www.cclaveronica.com/wp-content/uploads/2022/11/BURGER-KING.png" alt="Pizza" />
                    <button className='botones' onClick={handleVerTodosHelados}>Ver todos</button>
                </div>
                <div className="card-item">
                    <img className='pizzeria' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/combo-pizza-offer-design-template-2d9e4dab09d67b538e4bc7a0621997d7_screen.jpg?ts=1682038677" alt="Pizza" />
                    <button className='botones'  onClick={handleVerTodosCombos}>Ver todos</button>
                </div>
            </section>
        </div>
    );
};



