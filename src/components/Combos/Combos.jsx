import { useEffect, useState } from 'react';
import './Combos.css';

const Cartas = ({ imagen, titulo, precio, onBuy }) => {
    return (
        <div className="card carta" style={{ width: '18rem' }}>
            <img src={imagen} className="imag card-img-top" alt={titulo} />
            <div className="carta card-body">
                <h5 className="titulo card-title">{titulo}</h5>
                <p className="precio card-price">{precio}</p>
                <button className="btn btn-secundary" onClick={onBuy}>COMPRAR!</button>
            </div>
        </div>
    );
};

const CombosList = ({ combos, onBuy }) => {
    return (
        <div className="d-flex flex-wrap justify-content-around">
            {combos.map((combo) => (
                <Cartas 
                    key={combo.id} 
                    imagen={combo.imagen} 
                    titulo={combo.nombre} 
                    precio={combo.costo} 
                    onBuy={() => onBuy(combo)} 
                />
            ))}
        </div>
    );
};

export const Combos = ({ cartItems, setCartItems }) => {
    const [productos, setProductos] = useState({ combos: [] });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/productos');
            const data = await response.json();
            setProductos(data);
        };

        fetchData();
    }, []);

    const handleBuy = (combo) => {
        const existingItem = cartItems.find(item => item.id === combo.id);
        if (existingItem) {
            const updatedCart = cartItems.map(item =>
                item.id === combo.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setCartItems(updatedCart);
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
        } else {
            const updatedCart = [...cartItems, { ...combo, quantity: 1 }];
            setCartItems(updatedCart);
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
        }
    };

    return (
        <>
            <section>
                <div id="carouselExample" className="carousel myslide slide" style={{ borderRadius: "10px", overflow: "hidden" }}>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://tupizzaexpress.wordpress.com/wp-content/uploads/2018/06/20180629_100338_0001.png?w=1180" className="d-block w-100" alt="..." style={{ maxHeight: "550px", objectFit: "cover" }} />
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.pinimg.com/originals/f2/42/43/f24243ad16f6f7b81f05d1794aad5a88.png" className="d-block w-100" alt="..." style={{ maxHeight: "460px", objectFit: "cover" }} />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <div>
                <h2 className='Combos' id='Combos'>COMBOS DISPONIBLES</h2>
            </div>

            <CombosList combos={productos.combos} onBuy={handleBuy} />
        </>
    );
};







