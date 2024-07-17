import "./Carousel.css";

export const Carousel = () => {
  return (
    <>
    <div className="container">
     
      <section className="static-section">
        <img
          className="XP"
          src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg"
          alt="Carousel Slide"
        />
        <div className="text-content">
          <h1>Lema de cada dia</h1>
          <p className="lemas">La pizza: un bocado de felicidad en cada trozo.</p>
          <button className="boton">Mas lemas</button>
        </div>
      </section>

      <div>
        <h2 className="encabezado">CONOCE NUESTRO MENÚ Y PROMOCIONES!</h2>
        <hr></hr>
      </div>

     
      <div id="carouselExample" className="carousel mycarousel slide" style={{ borderRadius: "10px", overflow: "hidden" }}>
        <div className="carousel-inner">
          
          <div className="carousel-item active">
            <img
              src="https://ewscripps.brightspotcdn.com/dims4/default/7c825c1/2147483647/strip/true/crop/1320x743+0+70/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F73%2Ff2%2F82e190e74b78896eaea86b2309ef%2F67ae3511-916e-4962-8176-4ea0747855a9-pep-upgrd-pull-1.jpeg"
              className="d-block w-100"
              alt="Carousel Slide 1"
              style={{ maxHeight: "650px", objectFit: "cover" }} 
            />
          </div>
          
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1377372234/es/foto/pizza-con-salami-pimiento-tomates-y-queso-encurtidos-tocino-y-salchichas-sobre-un-fondo-ligero.jpg?s=612x612&w=0&k=20&c=mEKMbrhjixwgGcdrq7Jm-E5wyhBfinRbGbCc8__y4Fs="
              className="d-block w-100"
              alt="Carousel Slide 2"
              style={{ maxHeight: "510px", objectFit: "cover" }} 
            />
          </div>
         
          <div className="carousel-item">
            <img
              src="https://www.eloccidental.com.mx/incoming/2gozvc-pizza-encabezado.jpeg/ALTERNATES/LANDSCAPE_1140/Pizza%20encabezado.jpeg"
              className="d-block w-100"
              alt="Carousel Slide 3"
              style={{ maxHeight: "510px", objectFit: "cover" }} 
            />
          </div>
        </div>
        
       
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        
        
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </>
  );
};







