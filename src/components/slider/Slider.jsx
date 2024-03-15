import './Slider.css';



import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
 import 'swiper/css';
 import 'swiper/css/navigation';
import 'swiper/css/pagination';
 import 'swiper/css/scrollbar';

 let f1= 'images/foto1.jpg';
 let f2= 'images/foto2.jpg';
 let f3= 'images/foto3.jpg';
 let f4= 'images/foto4.jpg';
let f5= 'images/foto5.jpg';
let f6= 'images/foto6.jpg';
let f7= 'images/foto7.jpg';

let primera = 'images/1.jpg';
let segunda = 'images/2.jpg';
let tercera = 'images/3.jpg';
let cuarta = 'images/4.jpg';
let quinta = 'images/5.jpg';
let sexta= 'images/6.jpg';


export default function Galeria() {
    return(
        <>
     
        
   <div className='carousel'>  

        <Swiper

modules={[Navigation, Pagination, Scrollbar, A11y]}
spaceBetween={50}
slidesPerView={1}
navigation
pagination={{ clickable: true }}
scrollbar={{ draggable: true }}
onSwiper={(swiper) => console.log(swiper)}
onSlideChange={() => console.log('slide change')}
>

            <SwiperSlide>
            <div className='foto1'>
                    <img className='img-slider' src={f1} alt= 'barra'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='foto2'>
                    <img className='img-slider' src={f2}  alt= 'mesa llena'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='foto3'>
                    <img className='img-slider' src={f3}  alt= 'trago frutos rojos'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='foto4'>
                    <img className='img-slider' src={f4}  alt= 'sector_eventos'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='foto5'>
                    <img className='img-slider ' src={f5}  alt= 'bife'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='foto6'>
                    <img className='img-slider ' src={f6}  alt= 'copas_de_vino'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='foto7'>
                    <img className='img-slider ' src={f7}  alt= 'postre'/>
                </div>
            </SwiperSlide>
        </Swiper>
        </div>
        <div className='gal-fotos'>
           
        <img  class name ="imagenA"   src= {primera} alt="trago"/>
        <img  class name ="imagenB"   src= {segunda} alt="perro"/>
        <img  class name ="imagenC"   src= {tercera} alt="degustacion"/>
        <img  class name ="imagenD"   src= {cuarta} alt="patio"/>
        <img  class name ="imagenE"   src= {quinta} alt="amigos"/>
        <img  class name ="imagenF"   src= {sexta} alt="cerveza"/>

        </div>
        </>
   
       
    )
}