import './Footer.css';

export const Footer = () => {
    return(
        <>
        <section className="footer-container">
            <div className="footer-content">
                <span>Locales</span>
                <span>Zonas de Reparto</span>
                <span>Nosotros</span>
                <span>Atención al Cliente</span>
                <span>Preguntas Frecuentes</span>
                <span>Mapa de sitio</span>
                <span>Políticas de Datos Personales</span>
                <span>Términos y condiciones de Promociones</span>
                <span>Derechos ARCO</span>
            </div>

            <div className="pago">
                <h3>Forma de pago</h3>
                <i className="fa-brands fa-cc-visa visa"></i>
                <i className="fa-brands fa-cc-mastercard mastercard"></i>
                <i className="fa-brands fa-cc-paypal paypal"></i>
            </div>
        </section>
        </>
    );
};

