import { Link } from "react-router-dom"
import React from "react";
import './styles/Listaresena.css'


const ListaResena = () => {


    return <div>
        <div className="container row mb-4" id="top">
            <div className="col">
                <img style={{ height: '40px', marginRight: '60px'}} src="./iconos/img1.png" alt=" no hay "/>
            </div>
            <div className="col">
                <Link to={"/Principal"} style={{color: 'white'}}>Home</Link>
            </div>
            <div className="col">
                <Link to={"/Principal"} style={{color: 'white'}}>About</Link>
            </div>
            <div className="col">
                <Link to={"/Principal"} style={{color: 'white'}}>Support</Link>
            </div>
            <div className="col">
                <Link to={"/Principal"} style={{color: 'white'}}>Review</Link>
            </div>
            <div className="col">
                <Link to={"/Principal"} style={{color: 'white'}}>Ranking</Link>
            </div>
            <div className="col" style={{marginLeft: '100px'}}>
                <Link to={"/Principal"} style={{color: 'white'}}>
                <img style={{ height: '30px'}} src="./iconos/img2.png" alt=" no hay "/>
                </Link>
            </div>
            <div className="col">
                <Link to={"/Principal"} style={{color: 'white'}}>
                    <img style={{ height: '30px'}} src="./iconos/img4.png" alt=" no hay "/>
                </Link>
            </div>
            <div className="col">
                <Link to={"/Principal"} style={{color: 'white'}}>
                    <img style={{ height: '30px'}} src="./iconos/img3.png" alt=" no hay "/>
                </Link>
            </div>
        </div>    
    
    <div className="blanco" id="bottom">
        <div>
            <h1 style={{margin: '20px'}}>User Reviews</h1>
            
        </div>
        <div className="row">
            <div style={{margin: '20px'}} className="col col-lg-2">
                <h2 >Global rate</h2>
                
            
            </div>
            <div style={{marginTop: '30px'}} className="col col-lg-2 justify-content-md-center" >
                <span className="fa fa-star checked" style={{color: 'orange'}}></span>
                <span className="fa fa-star checked" style={{color: 'orange'}}></span>
                <span className="fa fa-star checked" style={{color: 'orange'}}></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span> 
            </div>
        </div>
        
        
            

        <div className="solid" style={{ borderTop: '1px solid grey', marginTop: '30px'}}>
            <h5 style={{margin: '20px', marginLeft: '40px'}}>Juan Lopez</h5>
            <p style={{marginLeft: '70px'}}>I completely recommend this site</p>
        </div>


        <div className="solid" style={{ borderTop: '1px solid grey'}}>
            <h5 style={{margin: '20px', marginLeft: '40px'}}>Jhon Doe</h5>
            <p style={{marginLeft: '70px'}}>Great service</p>
        </div>

        <div className="solid " style={{ borderTop: '1px solid grey'}}>
            <h5 style={{margin: '20px', marginLeft: '40px'}}>Carl Johnson</h5>
            <p style={{marginLeft: '70px'}}>Pc well built and nice case quality</p>
        </div>

        </div>
    </div>
}
export default ListaResena