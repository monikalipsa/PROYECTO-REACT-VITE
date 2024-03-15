// import React, { useEffect, useRef } from 'react';
// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';
// import './Slider.css'; // Asegúrate de importar los estilos CSS del slider

// import work from '../../assets/img/work.png';
// import agendas from '../../assets/img/agendas.png';
// import mochilas from '../../assets/img/mochilas.png';

// function Slider() {
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     const slider = sliderRef.current;

//     const images = [work, agendas, mochilas]; // Lista de imágenes

//     let imagesLoaded = 0;
//     images.forEach((image) => {
//       const img = new Image();
//       img.onload = () => {
//         imagesLoaded++;
//         if (imagesLoaded === images.length) {
//           initializeSwiper(slider); // Inicializar Swiper cuando todas las imágenes estén cargadas
//         }
//       };
//       img.src = image;
//     });

//     // Limpia Swiper cuando el componente se desmonta
//     return () => {
//       if (slider.swiper) {
//         slider.swiper.destroy();
//       }
//     };
//   }, []);

//   const initializeSwiper = (slider) => {
//     slider.swiper = new Swiper('.swiper-container', {
//       slidesPerView: 1,
//       spaceBetween: 30,
//       loop: true,
//       autoplay: {
//         delay: 5000,
//       },
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//     });
//   };

//   return (
//     <div ref={sliderRef} className="swiper-container">
//       <div className="swiper-wrapper">
//         <div className="swiper-slide">
//           <img className='img-slider' src={work} alt='work'/>
//         </div>
//         <div className="swiper-slide">
//           <img className='img-slider' src={agendas} alt='agendas'/>
//         </div>
//         <div className="swiper-slide">
//           <img className='img-slider' src={mochilas} alt='mochilas'/>
//         </div>
//         {/* Agrega más slides según sea necesario */}
//       </div>
//       <div className="swiper-pagination"></div>
//     </div>
//   );
// }

// export default Slider;




import React, { useState } from 'react';




 function Slider(){
   

     return (
        
        <h2>SLIDER</h2>
          
      

    
     )
    }
    export default Slider;




