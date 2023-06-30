import React from 'react';
import './Productpage.css';

function Product (){
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
            <div>
                <p>By Age:</p>
            </div>
            <div className="heading">
                <div className="leftBox">
                    <img className="firstTeddy" src="Resources/bottom.png" alt=""/> 
                </div>
                <p className='months'>0-12 months</p>  
                <div className="rightBox">
                    <img className="firstTeddy" src="Resources/fouz.webp" alt=""/>

                </div>
                <p className='months'>1-2 years</p>  
                <div className="topBox">
                <img className="firstTeddy" src="Resources/second.jpg" alt=""/>


                </div>
                <p className='months'>3-4 years</p>  
                <div className="bottomBox">
                <img className="firstTeddy" src="Resources/Teddy-Bear.jpg" alt=""/>

                </div>
                <p className='months'>5-6 years</p>
            </div>
            <div className="Box">
                <div className="improve">

                </div>
            </div>

        </div>
    )
}
export default Product 