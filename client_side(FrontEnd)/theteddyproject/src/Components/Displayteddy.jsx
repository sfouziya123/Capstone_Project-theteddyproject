import {useState,useEffect} from 'react';
import './Displayteddy.css';
const Teddy = () => {
    const [data, setData] = useState([]);
    const [inputValue , setInputValue] = useState('');
    useEffect(()=>{
        fetchData();

    },[])
    const fetchData = () => {
        fetch("http://localhost:5500/data").then((res)=>{
            return res.json();
        }).then((res)=>{
            setData(res);
            console.log(res);
        })
    }

    const searchteddyData = () => {
        fetch( `http://localhost:5500/search/${inputValue}`).then((res)=>{
            return res.json();
        }).then((res)=>{
            setData(res);
            console.log(res);
        })
    }

    const handleInputChange=(event)=>{
        setInputValue(event.target.value);
    }

    return (<div>
            <div className="Navbar">

                <div>
                    <img className="Logo" src = "Resources/friend.jpg" alt=""/> 
                </div> 

                    <div className='flex'>
                        <div className="Home">Toys</div>
                        <div className="Toys">Age of kids</div>
                        <div className="offers">Offers</div>
                        <img className="Login" src = "Resources/signin1.png" alt=""/>
                        <div className="Signin">Signin</div> 
                        <img className="wishlist" src = "Resources/wishlist.jpg" alt=""/>
                        <div className="wish">Whishlist</div>
                        <img className="wishlist" src = "Resources/cart2.png" alt=""/>
                        <div className="wish">Add to cart</div>
                    </div>

            </div>
            <input id="input" type="text" placeholder="Search" value={inputValue} onChange={handleInputChange}/> 
            <button id="margin" onClick={searchteddyData}>Click</button>
            <h4 onClick={fetchData}>clearSearch</h4>
        <div id="main">
            {
                
                data?.map(({Product_Image,Product_Id,Product_Name,Product_Price,Product_Rating,Product_description,})=><div>
                        <div className="main">
                            <div><img className="color"src={Product_Image} alt=""/></div> 
                            <div>{Product_Name}</div>
                            <div><b>Price:</b> {Product_Price}</div>
                            <div><b>Rating: </b>{Product_Rating}</div>
                            {/* <div><b>Description: </b>{Product_description}</div> */}
                            {/* <div><b>Product_Id: </b>{Product_Id}</div> */}
                        </div>
                </div>)
            }
        </div>
        {/* <footer>
             <div className="About">

                <b>About Us</b>
                <p className ="google">Our aim to deliver high-quality<br/> welding products and services to<br/> meet the needs of our customers. <br/>Our experienced team of welders<br/> is dedicated to ensuring customer<br/> satisfaction and delivering<br></br> exceptional results.</p>
               
            </div> 
            <div className="contact">
               
                <b>Contact Information</b>
                <div className="mobile">
                    <img className="contactNumber" src="Resources/call1.png" alt=""/>    
                <p>Mobile no:+91-9676948462</p><br/>
                <div className="mobile">
                <img className="contactNumber" src="Resources/email2.png" alt=""/>  
                <p>E-mail: TheTeddyProject@gmail.com</p>
                </div>
            </div>

            <div className="connect">
                <b>Follow us on</b>
               
                <div className ="equal">
                    <img  className="facebookImage"src = "Resources/facebook.png" alt=""/> 
                
                    <img  className="facebookImage"src = "Resources/googleicon.webp" alt=""/> 
                
                    <img  className="facebookImage"src = "Resources/twitter.png" alt=""/> 
                
                    <img  className="facebookImage"src = "Resources/linkdin.png" alt=""/>
                </div>  
            </div>
            
        </footer> */}
    </div>)
}
export default Teddy;