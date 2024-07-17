import { useEffect, useState } from 'react';
import './Promo.css';

const Card = ({ imgSrc, title, price, onBuy }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={imgSrc} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-price">{price}</p>
                <button className="btn btn-secundary" onClick={onBuy}>COMPRAR!</button>
            </div>
        </div>
    );
};

const CardList = ({ pizzas, onBuy }) => {
    return (
        <div id="cardCarousel" className="carousel mycard slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="d-flex justify-content-around">
                        {pizzas.slice(0, 3).map((pizza) => (
                            <Card 
                                key={pizza.id} 
                                imgSrc={pizza.imagen} 
                                title={pizza.nombre} 
                                price={pizza.costo} 
                                onBuy={() => onBuy(pizza)} 
                            />
                        ))}
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-flex justify-content-around">
                        {pizzas.slice(3).map((pizza) => (
                            <Card 
                                key={pizza.id} 
                                imgSrc={pizza.imagen} 
                                title={pizza.nombre} 
                                price={pizza.costo} 
                                onBuy={() => onBuy(pizza)} 
                            />
                        ))}
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#cardCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#cardCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

const BurgerCardList = ({ burgers, onBuy }) => {
    return (
        <div className="d-flex justify-content-around">
            {burgers.map((burger) => (
                <Card 
                    key={burger.id} 
                    imgSrc={burger.imagen} 
                    title={burger.nombre} 
                    price={burger.costo} 
                    onBuy={() => onBuy(burger)} 
                />
            ))}
        </div>
    );
};

const DrinkCardList = ({ drinks, onBuy }) => {
    return (
        <div className="d-flex justify-content-around">
            {drinks.map((drink) => (
                <Card 
                    key={drink.id} 
                    imgSrc={drink.imagen} 
                    title={drink.nombre} 
                    price={drink.costo} 
                    onBuy={() => onBuy(drink)} 
                />
            ))}
        </div>
    );
};

const IceCreamCardList = ({ iceCreams, onBuy }) => {
    return (
        <div className="d-flex justify-content-around">
            {iceCreams.map((iceCream) => (
                <Card 
                    key={iceCream.id} 
                    imgSrc={iceCream.imagen} 
                    title={iceCream.nombre} 
                    price={iceCream.costo} 
                    onBuy={() => onBuy(iceCream)} 
                />
            ))}
        </div>
    );
};

export const Promociones = ({ cartItems, setCartItems }) => {
    const [productos, setProductos] = useState({ pizzas: [], hamburguesas: [], bebidas: [], helados: [] });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/productos');
            const data = await response.json();
            setProductos(data);
        };

        fetchData();
    }, []);

    const handleBuy = (producto) => {
        const existingItem = cartItems.find(item => item.id === producto.id);
        if (existingItem) {
            const updatedCart = cartItems.map(item =>
                item.id === producto.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setCartItems(updatedCart);
        } else {
            setCartItems([...cartItems, { ...producto, quantity: 1 }]);
        }
    };

    return (
        <>
            <section>
                <div id="homeCarousel" className="carousel myslider slide" style={{ borderRadius: "10px", overflow: "hidden" }}>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://images.pizzahut.es/Coupons/Original/50__en_todas_tus_pizzas-I(DT)500-57.jpg" className="carousel-image d-block w-100" alt="..." style={{ maxHeight: "550px", objectFit: "cover" }} />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.squarespace-cdn.com/content/v1/5b96a7ff5b409bf6ab86b0c1/1708116228960-AONGKUHWHKFG58P9630M/LA+PIZZA+%2B+RICA+DE+PR+%281%29.jpg" className="carousel-image d-block w-100" alt="..." style={{ maxHeight: "550px", objectFit: "cover" }} />
                        </div>
                        <div className="carousel-item">
                            <img src="https://visitbrookingssd.com/wp-content/uploads/2021/01/Little_Caesars.jpg" className="carousel-image d-block w-100" alt="..." style={{ maxHeight: "550px", objectFit: "cover" }} />
                        </div>
                        <div className="carousel-item">
                            <img src="https://eldiariony.com/wp-content/uploads/sites/2/2024/02/shutterstock_1048511935.jpg?resize=480,270&quality=80" className="carousel-image d-block w-100" alt="..." style={{ maxHeight: "550px", objectFit: "cover" }} />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.rappi.com.mx/restaurants_background/pizza03-1663624709700.jpg?e=webp&d=700x100&q=10" className="carousel-image d-block w-100" alt="..." style={{ maxHeight: "550px", objectFit: "cover" }} />
                        </div>
                        <div className="carousel-item">
                            <img src="https://ewscripps.brightspotcdn.com/dims4/default/7c825c1/2147483647/strip/true/crop/1320x743+0+70/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F73%2Ff2%2F82e190e74b78896eaea86b2309ef%2F67ae3511-916e-4962-8176-4ea0747855a9-pep-upgrd-pull-1.jpeg" className="carousel-image d-block w-100" alt="..." style={{ maxHeight: "550px", objectFit: "cover" }} />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <h2 className='Promociones' id='promocionespizza'>PROMOCIONES DE PIZZAS ONLINE</h2>
            <CardList pizzas={productos.pizzas} onBuy={handleBuy} />

            <h2 className='Promociones' id='hamburguesas'>PROMOCIONES DE HAMBURGUESAS ONLINE</h2>
            <BurgerCardList burgers={productos.hamburguesas} onBuy={handleBuy} />

            <h2 className='Promociones' id='Gaseosas'>BEBIDAS PARA DISFRUTAR CON TUS PLATOS</h2>
            <DrinkCardList drinks={productos.bebidas} onBuy={handleBuy} />

            <h2 className='Promociones' id='Heladeria'>PROMOCIONES DE HELADOS</h2>
            <IceCreamCardList iceCreams={productos.helados} onBuy={handleBuy} />
        </>
    );
};


