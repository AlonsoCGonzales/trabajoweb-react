/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {  } from "react-router-dom";
import "./styles/Surprise.css";

const Carrito = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light" style={{height: '45px'}}>
      <div className="container-fluid">
        <a className="nav-link active" aria-current="page" href="www.google.com.pe"></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-1" style={{height: '40px'}}>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">
                <img id="home" src="./img/home.png" alt="home" width="28" height="30" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="Requets.jsx">Suport!</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active">Ranking</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Mas opciones
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/index.html">Action</a></li>
                <li>
                  <a className="dropdown-item" href="img/rickroll.gif">
                    Dale Click te daremos un turron
                  </a>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">Unete a la legion</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <li className="nav-item">
            <a className="nav-link" aria-current="page">
              <img id="Shopcar" src="./iconos/img3.png" alt="Shopcar" style={{width: '28px',height: '30px',
              marginLeft:'5px', marginRight:'5px'}}/>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page">
              <img id="user" src="./iconos/img4.png" alt="user" style={{width: '28px',height: '30px',
              marginLeft:'5px'}}/>
            </a>
          </li>
        </div>
      </div>
    </nav>
      <div
        className="h1 row-4 fst-italic"
        style={{ position: "relative", left: "2rem", color: "white" }}
      >
        Shopping Car
      </div>
      <div>
        <button
          style={{ position: "relative", left: "65%" }}
          className="check"
          type="button"
        >
          <img
            style={{ height: "2rem" }}
            src="./image/carrito-de-compras.png"
            alt=""
          />
          Checkout
        </button>
      </div>
      <br />
      <div className="row">
        <div className="col-9">
          <div
            className=" container row"
            style={{ position: "relative", left: "5%" }}
          >
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <img
                style={{
                  height: "40px",
                  marginRight: "60px",
                  position: "relative",
                  left: "2rem",
                }}
                src="./image/case.jpg"
                alt="case"
              />
            </div>
            <div
              className="col-6 navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              Case Antryx C/N rgb Azul
            </div>
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {" "}
              $39
            </div>
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <button
                style={{ position: "relative", left: "40%" }}
                type="button"
              >
                <img
                  style={{ height: "30px" }}
                  src="./image/eliminar.png"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div
            className=" container row"
            style={{ position: "relative", left: "5%" }}
          >
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <img
                style={{
                  height: "40px",
                  marginRight: "60px",
                  position: "relative",
                  left: "2rem",
                }}
                src="./image/procesador.png"
                alt=""
              />
            </div>
            <div
              className="col-6 navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              RYZEN CORE I7-12700F 12-CORE
            </div>
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {" "}
              $359
            </div>
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <button
                style={{ position: "relative", left: "40%" }}
                type="button"
              >
                <img
                  style={{ height: "30px" }}
                  src="./image/eliminar.png"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div
            className=" container row"
            style={{ position: "relative", left: "5%" }}
          >
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <img
                style={{
                  height: "40px",
                  marginRight: "60px",
                  position: "relative",
                  left: "2rem",
                }}
                src="./image/ram.jpg"
                alt=""
              />
            </div>
            <div
              className="col-6 navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              RAM de 8GB HYPER X
            </div>
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {" "}
              $679
            </div>
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <button
                style={{ position: "relative", left: "40%" }}
                type="button"
              >
                <img
                  style={{ height: "30px" }}
                  src="./image/eliminar.png"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div
            className=" container row"
            style={{ position: "relative", left: "5%" }}
          >
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <img
                style={{
                  height: "30px",
                  marginRight: "40px",
                  position: "relative",
                  left: "2rem",
                }}
                src="./image/teclado.jpg"
                alt=""
              />
            </div>
            <div
              className="col-6 navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              Teclado white c/n rgb arcoiris
            </div>
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {" "}
              $99
            </div>
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <button
                style={{ position: "relative", left: "40%" }}
                type="button"
              >
                <img
                  style={{ height: "30px" }}
                  src="./image/eliminar.png"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div
            className=" container row"
            style={{ position: "relative", left: "5%" }}
          >
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <img
                style={{
                  height: "40px",
                  marginRight: "60px",
                  position: "relative",
                  left: "2rem",
                }}
                src="./image/nvidia.png"
                alt=""
              />
            </div>
            <div
              className="col-6 navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              NVIDIA GEFORCE RTX 3070 8GB (VR READY)
            </div>
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {" "}
              $99
            </div>
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <button
                style={{ position: "relative", left: "40%" }}
                type="button"
              >
                <img
                  style={{ height: "30px" }}
                  src="./image/eliminar.png"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div
            className=" container row"
            style={{ position: "relative", left: "5%" }}
          >
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <img
                style={{
                  height: "40px",
                  marginRight: "60px",
                  position: "relative",
                  left: "2rem",
                }}
                src="./image/ram.jpg"
                alt=""
              />
            </div>
            <div
              className="col-6 navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              RAM de 8GB HYPER X
            </div>
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {" "}
              $79
            </div>
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <button
                style={{ position: "relative", left: "40%" }}
                type="button"
              >
                <img
                  style={{ height: "30px" }}
                  src="./image/eliminar.png"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div
            className=" container row"
            style={{ position: "relative", left: "5%" }}
          >
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <img
                style={{
                  height: "40px",
                  marginRight: "60px",
                  position: "relative",
                  left: "2rem",
                }}
                src="./image/hdd.png"
                alt=""
              />
            </div>
            <div
              className="col-6 navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              HDD 1TB SEAGATE
            </div>
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {" "}
              $29
            </div>
            <div
              className="col-sm navbar navbar-expand-lg navbar-light bg-light"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <button
                style={{ position: "relative", left: "40%" }}
                type="button"
              >
                <img
                  style={{ height: "30px" }}
                  src="./image/eliminar.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
