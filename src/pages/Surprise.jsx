import React from "react";
import { Link } from "react-router-dom";
import "./styles/Surprise.css";

const Surprise = () => {
  return <div>
      <div className="row mb-4">
        <div className="col">
          <img
            style={{ height: "60px", position: "relative", left: "10px" }}
            src="./image/gamepad-console.png"
            alt=""
          />
        </div>
        <div className="col">
          <Link to={"/Principal"} style={{ color: "black" }}>
            Home
          </Link>
        </div>
        <div className="col">
          <Link to={"/Principal"} style={{ color: "black" }}>
            About
          </Link>
        </div>
        <div className="col">
          <Link to={"/Principal"} style={{ color: "black" }}>
            Support
          </Link>
        </div>
        <div className="col">
          <Link to={"/Principal"} style={{ color: "black" }}>
            Review
          </Link>
        </div>
        <div className="col">
          <Link to={"/Principal"} style={{ color: "black" }}>
            Ranking
          </Link>
        </div>
        <div className="col" style={{ marginLeft: "80px" }}>
          <Link to={"/Principal"} style={{ color: "white" }}>
            <img
              style={{ height: "50px" }}
              src="./image/busqueda-de-lupa.png"
              alt=" no hay "
            />
          </Link>
        </div>
        <div className="col">
          <Link to={"/Principal"} style={{ color: "white" }}>
            <img
              style={{ height: "50px" }}
              src="./image/usuario.png"
              alt=" no hay "
            />
          </Link>
        </div>
        <div className="col">
          <Link to={"/Principal"} style={{ color: "white" }}>
            <img
              style={{ height: "50px" }}
              src="./image/carrito-de-compras.png"
              alt=" no hay "
            />
          </Link>
        </div>
      </div>
      <div className="container h1">
        Free Games
        <div>With your Purchase</div>
      </div>
      <br />
      <div>
        <div class="container overflow-hidden ">
          <div class="row gy-5">
            <div class="col-6 ">
              <div class="p-3 border bg-light row">
                <img
                  className="col-1 "
                  style={{ height: "8rem", width: "9rem" }}
                  src="./image/gta.jpg"
                  alt=""
                />
                <div className="col fst-italic">
                  Estimado cliente, por la compra de un procesador Ryzen 7 3700X
                  se le hara efectiva la ofeta "GTA",tambien se le aplicara un
                  descuento en la tienda Steam.
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="p-3 border bg-light row">
                <img
                  className="col-1"
                  style={{ height: "8rem", width: "8rem" }}
                  src="./image/cyberpunk.jpg"
                  alt=""
                />
                <div className="col fst-italic">
                  Cliente del año "3000" por la compra de una pantalla de 24'
                  pulg. podra acceder a la oferta de "CiberGlitch",con ella
                  podras tener acceso a los ultimos DLC de "CiberGlitch". XD
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="p-3 border bg-light row">
                <img
                  className="col-1"
                  style={{ height: "8rem", width: "8rem" }}
                  src="./image/elden_ring.jpg"
                  alt=""
                />
                <div className="col fst-italic">
                  Mi buen caballero, tiene el honor de acceder a este tesoro ,
                  por la compra de un pack que consta de 1 ram de 8 gb + 1
                  Motherboard b-450m.{" "}
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="p-3 border bg-light row">
                <img
                  className="col-1"
                  style={{ height: "8rem", width: "8rem" }}
                  src="./image/halo.jpg"
                  alt=""
                />
                <div className="col fst-italic">
                  Estimado cliente, por la compra de un procesador Ryzen 7 3700X
                  se le hara efectiva la ofeta "Halo",tambien se le aplicara un
                  descuento en la tienda Steam.
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="p-3 border bg-light row">
                <img
                  className="col-1"
                  style={{ height: "8rem", width: "8rem" }}
                  src="./image/red_dead_2.jpg"
                  alt=""
                />
                <div className="col fst-italic">
                  Estimado cliente, por la compra de un procesador Ryzen 7 3700X
                  se le hara efectiva la ofeta "RD2",tambien se le aplicara un
                  descuento en la tienda Steam.
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="p-3 border bg-light row">
                <img
                  className="col-1"
                  style={{ height: "8rem", width: "8rem" }}
                  src="./image/god.jpg"
                  alt=""
                />
                <div className="col fst-italic">
                  Estimado cliente, por la compra de un procesador Ryzen 7 3700X
                  se le hara efectiva la ofeta "GOD",tambien se le aplicara un
                  descuento en la tienda Steam. !!!!ESTO ES ESPARTA¡¡¡¡¡
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container text-center h2">Más ofertas</div>
    </div>
}

export default Surprise;
