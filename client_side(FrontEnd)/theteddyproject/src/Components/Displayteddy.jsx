import {useState,useEffect} from 'react';
import './Displayteddy.css';
const Teddy = () => {
    const [data, setData] = useState([]);
    const [inputValue , setInputValue] = useState('');
    // const [sortInputValue,setInputValue] = useState('');
    useEffect(()=>{
        fetchData();

    },[])
    const fetchData = () => {
        fetch("http://localhost:5050/data").then((res)=>{
            return res.json();
        }).then((res)=>{
            setData(res);
            console.log(res);
        })
    }

    const searchteddyData = () => {
        fetch( `http://localhost:5050/search/${inputValue}`).then((res)=>{
            return res.json();
        }).then((res)=>{
            setData(res);
            console.log(res);
        })
    }
    const sortData = (data) => {
        fetch( `http://localhost:5050/sort/${data}`).then((res)=>{
            return res.json();
        }).then((res)=>{
            setData(res);
            console.log(res);
        })
    }
    
    const handleInputChange=(event)=>{
        setInputValue(event.target.value);
        
    }
    function clearData(){
        setInputValue("");
    }

    return (<div>
            <div className="Navbar">

                <div>
                    <img className="logo" src = "Resources/friend.jpg" alt=""/> 
                </div> 

                    <div className='flex'>
                        <div className="home">Toys</div>
                        <div className="Toys">Age of kids</div>
                        <div className="offers">Offers</div>
                        <img className="Login" src = "Resources/signin1.png" alt=""/>
                        <div className="Signin">Signin</div> 
                        <img className="wishlist" src = "Resources/wishlist.jpg" alt=""/>
                        <div className="wish">Whishlist</div>
                        <img className="wishlist" src = "Resources/cart2.png" alt=""/>
                        <div className="wish">Add to cart</div>
                        <input id="input" type="text" placeholder="Search" value={inputValue} onChange={handleInputChange}/> 
                        <img className="search" onClick={clearData
                        } src="Resources/search.png" alt=""/>
                        
                        {/* <button id="margin" onClick={searchteddyData}>Click</button> */}
                    </div>

            </div>
            <div>
                 <select onChange={(e)=>sortData(e.target.value)}> 
                    <option value="asc">LowToHigh</option>
                    <option value="desc">HighToLow</option>

                </select>
            </div>
        <div id="main">
            {
                
                (data?.filter(function(e){
                    if(e.Product_Name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())){
                        return data;
                    }
                })?.map(({Product_Image,Product_Name,Product_Price,Product_Rating})=><div>
                        <div className="main">
                            <div><img className="color"src={Product_Image} alt=""/></div> 
                            <div className="change">{Product_Name}</div>
                            <div className="chang"><b>Price:</b> {Product_Price}</div>
                            <div className="chance"><b>Rating:</b>{Product_Rating}</div>
                            {/* <div><b>Description: </b>{Product_description}</div> */}
                            {/* <div><b>Product_Id: </b>{Product_Id}</div> */}
                        </div>
                </div>))
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