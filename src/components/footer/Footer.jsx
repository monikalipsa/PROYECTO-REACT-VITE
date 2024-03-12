import './Footer.css'
import facebook from '../../assets/img/facebook.png'
import instagram from '../../assets/img/instagram.png'
import twiter from '../../assets/img/twiter.png'
import whatsapp from '../../assets/img/whatsapp.png'




function Footer(){
    return(
        <footer className='footer'>
             <p>Derechos Reservados a Berlin</p>
             <img  class name ="facebook"   src= {facebook} alt=""/>
             <img  class name ="instagram"   src= {instagram} alt=""/>
             <img  class name ="twiter"   src= {twiter} alt=""/>
             <img  class name ="whatsapp"   src= {whatsapp} alt=""/>
        </footer>
    )
}
export default Footer;

