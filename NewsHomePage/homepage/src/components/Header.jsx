import React from 'react'
import Logo from '../assets/logo.svg'
import img1 from '../assets/image-web-3-desktop.jpg'
import "../index.css"
function Header() {
  return (
    <div>
       
       
        <div className='header'>
           <img  className='logo' src={Logo} width="100px"/>
       
        <ul className='main-nav'> 
            <li>
               <a href='#'>Home </a> 
            </li>
            <li>
                <a  href='#'>New</a>
            </li>

            <li>
                <a  href='#'  >Popular</a>
            </li>
            <li>
               <a  href='#' >Trending</a>
            </li>
            <li>
                <a  href='#'>Categories</a>
            </li>
         </ul>
      

        </div>
         
        <div className='container'>
            <span><img src={img1} width="100%"/>
            <span className='container-two'>
            <h2>The Bright Future of Web 3.0?</h2>
            <span>
                <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
               <button className='readBtn'>READ MORE</button>
            </span>
            </span>
           
            </span>
            <span>
            <h2 className='Title'>NEW</h2>
            <span>
            <h5>Hydrogen Vs Electric Cars</h5>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </span>
            <span>
            <h5>The Downsides of AI Artistry</h5>
            <p>what are the possible adverse effects of on-demand AI image generation?</p>
            </span>
            <span>
            <h5>Is VC Funding Drying Up?</h5>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means</p>
            </span>
            
               
            </span>

            <div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
            </div>
        </div>

    
     </div>
    
  )
}

export default Header