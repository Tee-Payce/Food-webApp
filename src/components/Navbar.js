import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="#">
          CANTEEN E-TICKETING SYSTEM
          <hr style={{ size: 120, width: 270, color: "rgb(240, 128, 1)" }}></hr>
          <hr style={{ size: 120, width: 200, color: "navy" }}></hr>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Cart {cartstate?.cartItems?.length}
              </a>
            </li>
          </ul>
        </div>
        <a>
          <img src="https://th.bing.com/th/id/OIP.of8gs_14hsG9edD_VOSOWwAAAA?w=193&h=123&c=7&r=0&o=5&pid=1.7"></img>
        </a>
      </nav>
    </div>
  );
}
