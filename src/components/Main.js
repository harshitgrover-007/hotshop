import { useEffect, useState } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import "./Nav.css";
import Products from "./data.json";
import Details from "./Details";

const Main = () => {
  return (
    <BrowserRouter>
      <div className="imp">
        <img
          src="https://th.bing.com/th/id/R.6dfed1bc9696a7b642799a62e9372ba2?rik=AxY8tF30Xcdspg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-hqtZd10RUHw%2fUEvM3buLwXI%2fAAAAAAAAIlM%2fgC76dSjJgfw%2fw1200-h630-p-k-no-nu%2fMiss%2bPatina%2b1.JPG&ehk=EXrhdBruyN0lWKy5fILeLQ6Qtr1eJi%2bdTVKklKiJ3xw%3d&risl=&pid=ImgRaw&r=0"
          className="img"
          alt="image"
        />
        <h1 className="h1">
          Summer <br /> Collection
        </h1>
        <h3 className="h3 ">Flat 40% </h3>
        <h3 className="h">on all types of clothes!!!</h3>
        <Link to="/products/men">
          <button type="button" className="m btn">
            Shop Mens'
          </button>
        </Link>
        <Link to="/products/women">
          <button type="button" className="mn btn">
            Shop Womens'
          </button>
        </Link>
        <Link to="/products/kids">
          <button type="button" className="mno btn">
            Shop Kids'
          </button>
        </Link>
        <div className="piv">
          <div className="gre">
            <div className="amazing">Amazing</div>

            <div className="sub">LADIES BOOTS</div>
            <div className="subt">
              <p>&nbsp;Sale up to 20%</p>
            </div>
          </div>
          <img
            src="https://i.ibb.co/9YztSwy/40b967fcffd851f55fdb8341f5a97c93-removebg-preview.png"
            className="boots"
          />
        </div>
        <div className="piv">
          <div className="gre">
            <div className="amazing">Cool</div>

            <div className="sub">MENS' JACKETS</div>
            <div className="subt">
              <p>&nbsp;Sale up to 25%</p>
            </div>
          </div>
          <img
            src="https://i.ibb.co/n1tQHGT/bb3b2973e9f03853942572183c9572cd-removebg-preview.png"
            className="boots"
          />
        </div>
        <div className="piv">
          <div className="gre">
            <div className="amazing">Trending</div>

            <div className="sub">SCHOOL BAG</div>
            <div className="subt">
              <p>&nbsp;Sale up to 18%</p>
            </div>
          </div>
          <img
            src="https://i.ibb.co/T8XfYFp/91-MIw5h-QQEL-removebg-preview.png"
            className="boots"
          />
        </div>
      </div>
      <div className="sale">
        Sale Products
        <div className="prod">
          {Products.map((product) => {
            return (
              <Link hrefLang={`/${<Details />}}`}>
                <div className="prods" key={product.id}>
                  <img src={product.image} className="proimg" alt="image" />
                  <div className="text">{product.name}</div>
                  <div className="price">{product.price}</div>
                  <div className="categpry">{product.category}</div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="background">
          <h1 className="buy"> Buy Products with HOT SHOP🔥 </h1>
          <h3 className="get">And Get 29% OFF</h3>
          <a href={`/signup`}>
            <div className="wrap">
              <a className="primarygradient cta">
                <span className="invfi">
                  Register Now
                </span></a>
            </div>
          </a>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Main;
