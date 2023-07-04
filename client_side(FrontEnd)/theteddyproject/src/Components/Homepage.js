import React from 'react'
import './Homepage.css'

function Home(){
    return(
    <div>
        <div className="Navbar">

            <div>
                 <img className="Logo" src = "Resources/friend.jpg" alt=""/> 
            </div> 

            <div className='flex'>
                <div className="Home">Toys</div>
                <div className="Toys">Age of kids</div>
                <div className="offers">Offers</div>
                <input id="input" type="text" placeholder="Search"/>
                <img className="Login" src = "Resources/signin1.png" alt=""/>
                <div className="Signin">Signin</div> 
                <img className="wishlist" src = "Resources/wishlist.jpg" alt=""/>
                <div className="wish">Whishlist</div>
                <img className="wishlist" src = "Resources/cart2.png" alt=""/>
                <div className="wish">Add to cart</div>
            </div>
            
        </div>
        
         <div className="animation">
            <h1 className="text">"Bears need people. People need bears." - Pam Brown</h1>

        </div> 
        <div className="bottom">
            <div className="bottomLeft">
                 {/* <img className="bottomTeddy" src="Resources/bottom.png" alt=""/>  */}
                 

            </div>
        </div>
        

        
    </div>        
    
        
        
            
      
    )
}
export default Home;