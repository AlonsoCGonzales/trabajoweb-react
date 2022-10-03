import { Link } from "react-router-dom"

const HistorialOrden = () => {
    return <div>
        <div className="row mb-4" style={{margin: '5px'}}>
            <div className="col">
                <img style={{ height: '40px', margin: '10px'}} src="./iconos/img1.png" alt=" no hay "/>
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

    <div className="row">
        <div className="col-4" >
            <div className="container row" style={{ marginLeft: '2px'}}>
                <div className="col-sm btn bg-light" style={{ marginTop: '10px', padding: "15px"}}>Order History</div>
                <div className="col- sm btn bg-light" style={{ marginTop: '15px', padding: "15px"}}>Profile info</div>
                <div className="col-sm btn bg-light"style={{ marginTop: '15px', padding: "15px"}}>Log Out</div>
            </div>
        </div>
        <div className="col-8">
            <div className=" container row">
                <div className="col-sm navbar navbar-expand-lg navbar-light bg-light"style={{marginTop: '10px', marginBottom: '10px'}}>
                    <img style={{ height: '40px', marginRight: '60px'}} src="./iconos/keyboard-mouse.png" alt="" />
                </div>
                <div className="col-6 navbar navbar-expand-lg navbar-light bg-light" style={{marginTop: '10px', marginBottom: '10px'}}>Keyboard and mouse bundle</div>
                <div className="col-sm navbar navbar-expand-lg navbar-light bg-light" style={{marginTop: '10px', marginBottom: '10px'}}> $39</div>
                <div className="col-sm navbar navbar-expand-lg navbar-light bg-light" style={{marginTop: '10px', marginBottom: '10px'}}> 10/12/2022</div>
            </div>
            <div className=" container row">
                <div className="col-sm navbar navbar-expand-lg navbar-light bg-light"style={{marginTop: '10px', marginBottom: '10px'}}>
                    <img style={{ height: '40px', marginRight: '60px'}} src="./iconos/intel.png" alt="" />
                </div>
                <div className="col-6 navbar navbar-expand-lg navbar-light bg-light" style={{marginTop: '10px', marginBottom: '10px'}}>INTEL CORE I7-12700F 12-CORE</div>
                <div className="col-sm navbar navbar-expand-lg navbar-light bg-light" style={{marginTop: '10px', marginBottom: '10px'}}> $359</div>
                <div className="col-sm navbar navbar-expand-lg navbar-light bg-light" style={{marginTop: '10px', marginBottom: '10px'}}> 10/12/2022</div>
            </div>
            <div className=" container row">
                <div className="col-sm navbar navbar-expand-lg navbar-light bg-light"style={{marginTop: '10px', marginBottom: '10px'}}>
                    <img style={{ height: '40px', marginRight: '60px'}} src="./iconos/nvidia.png" alt="" />
                </div>
                <div className="col-6 navbar navbar-expand-lg navbar-light bg-light" style={{marginTop: '10px', marginBottom: '10px'}}>NVIDIA GEFORCE RTX 3070 8GB (VR READY)</div>
                <div className="col-sm navbar navbar-expand-lg navbar-light bg-light" style={{marginTop: '10px', marginBottom: '10px'}}> $679</div>
                <div className="col-sm navbar navbar-expand-lg navbar-light bg-light" style={{marginTop: '10px', marginBottom: '10px'}}> 10/12/2022</div>
            </div>
            <div className=" container row">
                <div className="col-sm navbar navbar-expand-lg navbar-light bg-light"style={{marginTop: '10px', marginBottom: '10px'}}>
                    <img style={{ height: '40px', marginRight: '60px'}} src="./iconos/1tb.png" alt="" />
                </div>
                <div className="col-6 navbar navbar-expand-lg navbar-light bg-light" style={{marginTop: '10px', marginBottom: '10px'}}>1TB NVME M.2</div>
                <div className="col-sm navbar navbar-expand-lg navbar-light bg-light" style={{marginTop: '10px', marginBottom: '10px'}}> $99</div>
                <div className="col-sm navbar navbar-expand-lg navbar-light bg-light" style={{marginTop: '10px', marginBottom: '10px'}}> 10/12/2022</div>
            </div>
            <div className=" container row">
                <div className="col-sm navbar navbar-expand-lg navbar-light bg-light"style={{marginTop: '10px', marginBottom: '10px'}}>
                    <img style={{ height: '40px', marginRight: '60px'}} src="./iconos/coolermaster.png" alt="" />
                </div>
                <div className="col-6 navbar navbar-expand-lg navbar-light bg-light" style={{marginTop: '10px', marginBottom: '10px'}}>COOLER MASTER TD500 RGB</div>
                <div className="col-sm navbar navbar-expand-lg navbar-light bg-light" style={{marginTop: '10px', marginBottom: '10px'}}> $99</div>
                <div className="col-sm navbar navbar-expand-lg navbar-light bg-light" style={{marginTop: '10px', marginBottom: '10px'}}> 10/12/2022</div>
            </div>
            <div className=" container row ">
                <div className="col-sm navbar navbar-expand-lg navbar-light bg-light"style={{marginTop: '10px', marginBottom: '10px'}}>
                    <img style={{ height: '40px', marginRight: '60px'}} src="./iconos/img1.png" alt="no hay"/>
                </div>
                <div className="col-6 navbar navbar-expand-lg navbar-light bg-light" style={{marginTop: '10px', marginBottom: '10px'}}>BUILD + SETUP + TESTING + WARRANTY</div>
                <div className="col-sm navbar navbar-expand-lg navbar-light bg-light" style={{marginTop: '10px', marginBottom: '10px'}}> $99</div>
                <div className="col-sm navbar navbar-expand-lg navbar-light bg-light" style={{marginTop: '10px', marginBottom: '10px'}}> 10/12/2022</div>
            </div>
        </div>
    </div>
</div>
            

}
export default HistorialOrden