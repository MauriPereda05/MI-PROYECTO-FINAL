import './Acerca.css';
import imagen from '../Acerca/img/Acercadenosotros.png';

export const Acerca = () => {
    return (
        <>
        <section className="image-container">
            <img className='nosotros' src={imagen} alt="Acerca de Nosotros" />
        </section>

        <section className='text-contenido'>
            <h2 className='rojo'>¿Qué es la pizzeria borcelle?</h2>
            <p className='descript'>Borcelle es el punto de encuentro online de los amantes de la pizza. Desde el año 2010, este medio digital facilita, entretiene e informa a sus usuarios sobre las diferentes alternativas para ir a comer la mejor calidad de pizza en todo el mundo. En un sólo lugar los usuarios pueden encontrar la información sobre una pizzeria, expresar su opinión, recordar en fotos, compartir una ubicación y, también, obtener datos relevantes para decidir cuándo, dónde, cómo y con quien ir a comer…</p>
            <h2 className='rojo'>¿Quiénes visitan Borcelle?</h2>
            <p className='descript'>A los seguidores de Borcelle les encanta descubrir y coleccionar info de pizzerías ricas. También, nos visitan dueños de pizzerías, maestros pizzeros, proveedores gastronómicos, agencias de turismo, planificadores de eventos, organismos públicos y ONGs.

            <br></br>
            <br></br>

            Todos visitan nuestros canales para encontrar: recomendaciones, anécdotas, servicios, información útil, postales visuales, noticias y nuevas experiencias relacionadas con ir a comer a una pizzería de calidad.</p>
            <h2 className='rojo'>¿Para qué existe este emprendimiento?</h2>
            <p className='descript'>Creamos a Borcelle con la visión de difundir a las mejores pizzerías y reunir a toda la comunidad de amantes de la pizza.</p>
            <img src='https://st2.depositphotos.com/2931363/8355/i/950/depositphotos_83559588-stock-photo-people-holding-beer-and-eating.jpg' className='people'></img>
            <h2 className='rojo'>¿Cómo son los ingredientes de las pizzas de pizzería Borcelle?</h2>
            <p className='descript'>Creamos nuestros productos con los mejores ingredientes disponibles y bajo estrictos protocolos de seguridad. Nuestro objetivo es ofrecer a nuestros clientes una experiencia única. Amasamos con esmero, horneamos con dedicación y utilizamos únicamente ingredientes frescos de la más alta calidad. Nos encanta hacer felices a las personas con una amplia variedad de formatos, presentaciones y deliciosos piqueos.</p>
            <h2 className='rojo'>¿Cómo se establece el ranking de las mejores pizzerías?</h2>
            <p className='descript'>Las pizzerías se ordenan según los votos que le asignan nuestros seguidores.
            El ranking mostrará primero aquellos establecimientos que tengan mayor cantidad de votos realizados por los usuarios. Los administradores del sitio Web no reflejan sus opiniones ni valoraciones dentro del ranking.</p>
            <img src='https://qph.cf2.quoracdn.net/main-qimg-8178d803e3ab56340247c4ca8fb49e89-lq' className='people'></img>
            <h2 className='rojo'>¿Cómo puede aumentar la cantidad de votos?</h2>
            <p className='descript'>Ofrecer pizzas ricas en su establecimiento es la mejor alternativa. Los visitantes votan aquellas experiencias que superan sus expectativas. En segundo lugar, es importante ofrecer información actualizada de cada propuesta con fotos e información detallada.
            Estamos a su disposición para actualizar sus datos y/o para dar a conocer su establecimiento.

            <br></br>
            <br></br>
            ¡Muchas gracias por seguirnos!</p>
            <img src='https://marketplace.canva.com/EAGInayw8SQ/1/0/1600w/canva-logo-pizzer%C3%ADa-circular-blanco-negro-y-rojo-H4IlBJGfK68.jpg' className='people'></img>
        </section>
       
        </>
    );
};
