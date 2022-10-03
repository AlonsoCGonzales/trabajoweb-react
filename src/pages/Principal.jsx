import { Link } from "react-router-dom";
import "./styles/principal.css";

const Principal = () => {
  return <div>
      <div>
        <div className="row mb-4">
          <div className="col">
            <img style={{ height: "200px" }} src="./iconos/img1.png" alt="" />
          </div>
          <div className="col">
            <Link to={"/Principal"} style={{ color: "white" }}>
              Home
            </Link>
          </div>
          <div className="col">
            <Link to={"/Principal"} style={{ color: "white" }}>
              About
            </Link>
          </div>
          <div className="col">
            <Link to={"/Principal"} style={{ color: "white" }}>
              Support
            </Link>
          </div>
          <div className="col">
            <Link to={"/Principal"} style={{ color: "white" }}>
              Review
            </Link>
          </div>
          <div className="col">
            <Link to={"/Principal"} style={{ color: "white" }}>
              Ranking
            </Link>
          </div>
          <div className="col" style={{ marginLeft: "100px" }}>
            <Link to={"/Principal"} style={{ color: "white" }}>
              <img
                style={{ height: "30px" }}
                src="./iconos/img2.png"
                alt=" no hay "
              />
            </Link>
          </div>
          <div className="col">
            <Link to={"/Principal"} style={{ color: "white" }}>
              <img
                style={{ height: "30px" }}
                src="./iconos/img4.png"
                alt=" no hay "
              />
            </Link>
          </div>
          <div className="col">
            <Link to={"/Principal"} style={{ color: "white" }}>
              <img
                style={{ height: "30px" }}
                src="./iconos/img3.png"
                alt=" no hay "
              />
            </Link>
          </div>
        </div>

        <div className="container" style={{ margin: "10px" }}>
          <h2 style={{ marginBottom: "20px" }}>Build your PC!</h2>
          <h4>Just for what you need</h4>

          <div>
            <button className="btn btn-warning" style={{ marginRight: "25px" }}>
              Armado para principiantes
            </button>
            <button className="btn btn-warning">Armado avanzado</button>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "pink" }}>
        <div
          className="w3-container"
          style={{ paddingTop: "30px", paddingLeft: "30px" }}
        >
          <div className="row">
            <div className="col-6">
              <h4>Sign up to our newsletter for the lastest PC news</h4>
              <div className="row">
                <div className="col-8">
                  <input
                    className=" form-control"
                    placeholder="Email"
                    style={{ width: "80%" }}
                  />
                </div>
                <div className="col col-lg-1">
                  <Link
                    to={"/Principal"}
                    style={{ color: "white" }}
                    type="button"
                    className="btn btn-primary"
                  >
                    subscribe
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-5 text-center">
              <div className="row row-cols-3">
                <div className="col" style={{ marginBottom: "10px" }}>
                  Build your PC
                </div>
                <div className="col" style={{ marginBottom: "10px" }}>
                  Good.
                </div>
                <div className="col" style={{ marginBottom: "10px" }}>
                  Terms and conditions
                </div>
                <div className="col" style={{ marginBottom: "10px" }}>
                  {" "}
                  Why Redux
                </div>
                <div className="col" style={{ marginBottom: "10px" }}>
                  Better.
                </div>
                <div className="col" style={{ marginBottom: "10px" }}>
                  Privacy Policy
                </div>
                <div className="col">Support.</div>
                <div className="col">Best.</div>
                <div className="col">Refund Policy</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container row plomo" style={{ paddingBottom: "58px" }}>
          <div className="col col-lg-1">
            <img
              style={{ height: "30px" }}
              src="./iconos/facebook.png"
              alt=""
            />
          </div>
          <div className="col col-lg-1">
            <img style={{ height: "30px" }} src="./iconos/twitter.png" alt="" />
          </div>
          <div className="col col-lg-1">
            <img
              style={{ height: "30px" }}
              src="./iconos/instagram.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
}
export default Principal;
