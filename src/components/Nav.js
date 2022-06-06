import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import "./Nav.css";

const Nav = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="nav">
          <Link to="/" className="heading">
            <h2 className="h2">Hot Shop🔥</h2>
          </Link>
          <div className="main">
            <Link className="link" to="/products">
              Products
            </Link>{" "}
            &nbsp;&nbsp;
            <Link className="link" to="/about">
              About
            </Link>{" "}
            &nbsp;&nbsp;
            <Link className="link" to="/contact">
              Contact
            </Link>{" "}
          </div>
          <div className="side">
            <Link className="linkside" to="/login">
              Login
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="linkside" to="/cart">
              Cart
              <div className="icon">
                <ShoppingBagIcon />
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </BrowserRouter>
  );
};

export default Nav;
