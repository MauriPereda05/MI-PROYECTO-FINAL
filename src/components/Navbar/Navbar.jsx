import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Navbar/img/pizzeria.png';
import { useState, useEffect } from 'react';

export const Navbar = ({ cartItems, setCartItems }) => {
    const [isCartVisible, setIsCartVisible] = useState(false);
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const handleDelete = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
    };

    const handleEdit = (id) => {
        const newQuantity = prompt("Ingresa la nueva cantidad:");
        if (newQuantity) {
            const updatedCart = cartItems.map(item =>
                item.id === id ? { ...item, quantity: parseInt(newQuantity) } : item
            );
            setCartItems(updatedCart);
        }
    };

    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
    };

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <section className="navbar-container">
            <div className="navbar-logo">
                <Link to='/home'>
                    <img className='logo' src={logo} alt="Logo" />
                </Link>
            </div>
            <nav className="navbar-menu">
                <ul>
                    <li><Link to='/menu'>MENU</Link></li>
                    <li><Link to='/combos'>COMBOS</Link></li>
                    <li><Link to='/promo'>PROMOCIONES</Link></li>
                    <li><Link to='/acerca'>ACERCA DE NOSOTROS</Link></li>
                </ul>
            </nav>
            <div className="cart-icon" onClick={toggleCartVisibility}>
                <i className="compras fa-solid fa-cart-shopping"></i>
            </div>
            {isCartVisible && (
                <div className="cart-items">
                    <div className="cart-item-header">
                        <span className="cart-header">Imagen</span>
                        <span className="cart-header">ID</span>
                        <span className="cart-header">Producto</span>
                        <span className="cart-header">Costo</span>
                        <span className="cart-header">Cantidad</span>
                        <span className="cart-header">Opciones</span>
                    </div>
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.imagen} alt={item.nombre} />
                            <span className="cart-span">{item.id}</span>
                            <span className="cart-span">{item.nombre}</span>
                            <span className="cart-span">{item.costo}</span>
                            <span className="cart-span">x{item.quantity}</span>
                            <button onClick={() => handleEdit(item.id)}>Editar</button>
                            <button onClick={() => handleDelete(item.id)}>Eliminar</button>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};









