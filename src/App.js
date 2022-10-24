import React from "react";
import {Carousel} from '3d-react-carousal';   

class App extends React.Component {
  render() {
    let slides = [
      <img src="assets/images/slider/1.png" alt="1" />,
      <img  src="assets/images/slider/2.png" alt="2" />  ,
      <img  src="assets/images/slider/3.png" alt="3" />  ,
      <img  src="assets/images/slider/4.png" alt="4" />  ,
      <img  src="assets/images/slider/5.png" alt="5" />  ,
      <img  src="assets/images/slider/6.png" alt="6" />  ,
      <img  src="assets/images/slider/7.png" alt="7" />  ,
      <img  src="assets/images/slider/8.png" alt="8" />  ,
      <img  src="assets/images/slider/9.png" alt="9" />  ,
      <img  src="assets/images/slider/10.png" alt="10" />  ,
      <img  src="assets/images/slider/11.png" alt="11" />  ,
      <img  src="assets/images/slider/12.png" alt="12" />  ,
      <img  src="assets/images/slider/13.png" alt="13" />   ];
      const callback = function(index){
        console.log("callback",index);
    }
    return (
      <div className="App">
        <div id="mobile-menu">
          <ul>
            <li>
              <a href="#" className="home1">
                Home
              </a>
              <ul>
                <li>
                  <a href="../#">Home Version 1</a>
                </li>
                <li>
                  <a href="#">Home Version 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Pages</a>
              <ul>
                <li>
                  <a href="#" className="">
                    Shop Pages{" "}
                  </a>
                  <ul>
                    <li>
                      {" "}
                      <a href="#"> Shop grid </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> Shop grid right sidebar</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> Shop list </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> Shop list right sidebar</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> Shop Full width </a>{" "}
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Ecommerce Pages </a>
                  <ul>
                    <li>
                      {" "}
                      <a href="#"> Wishlists </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> Checkout </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> Compare </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> Shopping cart </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> Quick View </a>{" "}
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a href="#">Static Pages </a>
                  <ul>
                    <li>
                      {" "}
                      <a href="#"> Create Account Page </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> About Us </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> Contact us </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> Error 404 </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> FAQ </a>{" "}
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a href="#">Product Categories </a>
                  <ul>
                    <li>
                      {" "}
                      <a href="#"> 3 Column Sidebar </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> 4 Column Sidebar</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> 4 Column Full width </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> 6 Columns Full width</a>{" "}
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a href="#">Single Product Pages </a>
                  <ul>
                    <li>
                      <a href="#l"> single product </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> single product left sidebar</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> single product right sidebar</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> single product magnify zoom</a>{" "}
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a href="#"> Blog Pages </a>
                  <ul>
                    <li>
                      <a href="#">Blog – Right sidebar </a>
                    </li>
                    <li>
                      <a href="#">Blog – Left sidebar </a>
                    </li>
                    <li>
                      <a href="#">Blog_ - Full width</a>
                    </li>
                    <li>
                      <a href="#">Single post </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Blog</a>
              <ul>
                <li>
                  <a href="#">Blog – Right sidebar </a>
                </li>
                <li>
                  <a href="#">Blog – Left sidebar </a>
                </li>
                <li>
                  <a href="#">Blog_ - Full width</a>
                </li>
                <li>
                  <a href="#">Single post </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Vegetables</a>
              <ul>
                <li>
                  <a href="#" className="">
                    Accessories
                  </a>
                  <ul>
                    <li>
                      <a href="#">Cocktail</a>
                    </li>
                    <li>
                      <a href="#">Day</a>
                    </li>
                    <li>
                      <a href="#">Evening</a>
                    </li>
                    <li>
                      <a href="#">Sundresses</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Dresses</a>
                  <ul>
                    <li>
                      <a href="#">Accessories</a>
                    </li>
                    <li>
                      <a href="#">Hats and Gloves</a>
                    </li>
                    <li>
                      <a href="#">Lifestyle</a>
                    </li>
                    <li>
                      <a href="#">Bras</a>
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a href="#">Shoes</a>
                  <ul>
                    <li>
                      {" "}
                      <a href="#">Flat Shoes</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Flat Sandals</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Boots</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Heels</a>{" "}
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a href="#">Jwellery</a>
                  <ul>
                    <li>
                      {" "}
                      <a href="#">Bracelets</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Necklaces &amp; Pendent</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Pendants</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Pins &amp; Brooches</a>{" "}
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a href="#">Dresses</a>
                  <ul>
                    <li>
                      {" "}
                      <a href="#">Casual Dresses</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Evening</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Designer</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Party</a>{" "}
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a href="#">Swimwear</a>
                  <ul>
                    <li>
                      {" "}
                      <a href="#">Swimsuits</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Beach Clothing</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Clothing</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Bikinis</a>{" "}
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Fruits</a>
              <ul>
                <li>
                  {" "}
                  <a href="#" className="">
                    Clothing
                  </a>
                  <ul className="level1">
                    <li className="level2 nav-6-1-1">
                      {" "}
                      <a href="#">Coats &amp; Jackets</a>{" "}
                    </li>
                    <li className="level2 nav-6-1-1">
                      {" "}
                      <a href="#">Raincoats</a>{" "}
                    </li>
                    <li className="level2 nav-6-1-1">
                      {" "}
                      <a href="#">Blazers</a>{" "}
                    </li>
                    <li className="level2 nav-6-1-1">
                      {" "}
                      <a href="#">Jackets</a>{" "}
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a href="#">Dresses</a>
                  <ul className="level1">
                    <li className="level2 nav-6-1-1">
                      {" "}
                      <a href="#">Casual Dresses</a>{" "}
                    </li>
                    <li className="level2 nav-6-1-1">
                      {" "}
                      <a href="#">Evening</a>{" "}
                    </li>
                    <li className="level2 nav-6-1-1">
                      {" "}
                      <a href="#">Designer</a>{" "}
                    </li>
                    <li className="level2 nav-6-1-1">
                      {" "}
                      <a href="#">Party</a>{" "}
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a href="#" className="">
                    Shoes
                  </a>
                  <ul className="level1">
                    <li className="level2 nav-6-1-1">
                      {" "}
                      <a href="#">Sport Shoes</a>{" "}
                    </li>
                    <li className="level2 nav-6-1-1">
                      {" "}
                      <a href="#">Casual Shoes</a>{" "}
                    </li>
                    <li className="level2 nav-6-1-1">
                      {" "}
                      <a href="#">Leather Shoes</a>{" "}
                    </li>
                    <li className="level2 nav-6-1-1">
                      {" "}
                      <a href="#">canvas shoes</a>{" "}
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a href="#">Jackets</a>
                  <ul className="level1">
                    <li className="level2 nav-6-1-1">
                      {" "}
                      <a href="#">Coats</a>{" "}
                    </li>
                    <li className="level2 nav-6-1-1">
                      {" "}
                      <a href="#">Formal Jackets</a>{" "}
                    </li>
                    <li className="level2 nav-6-1-1">
                      {" "}
                      <a href="#">Leather Jackets</a>{" "}
                    </li>
                    <li className="level2 nav-6-1-1">
                      {" "}
                      <a href="#">Blazers</a>{" "}
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a href="#">Accesories</a>
                  <ul className="level1">
                    <li className="level2 nav-6-1-1">
                      {" "}
                      <a href="#">Backpacks</a>{" "}
                    </li>
                    <li className="level2 nav-6-1-1">
                      {" "}
                      <a href="#">Wallets</a>{" "}
                    </li>
                    <li className="level2 nav-6-1-1">
                      {" "}
                      <a href="#">Laptops Bags</a>{" "}
                    </li>
                    <li className="level2 nav-6-1-1">
                      {" "}
                      <a href="#">Belts</a>{" "}
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Special Gift</a>
              <ul>
                <li>
                  {" "}
                  <a href="#">Mobiles</a>
                  <ul>
                    <li>
                      {" "}
                      <a href="#">iPhone</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Samsung</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Nokia</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Sony</a>{" "}
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a href="#" className="">
                    Music &amp; Audio
                  </a>
                  <ul>
                    <li>
                      {" "}
                      <a href="#">Audio</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Cameras</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Appling</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Car Music</a>{" "}
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a href="#">Accessories</a>
                  <ul>
                    <li>
                      {" "}
                      <a href="#">Home &amp; Office</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">TV &amp; Home Theater</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Phones &amp; Radio</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">All Electronics</a>{" "}
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div id="page">
          <header>
            <div className="header-container">
              <div className="header-top">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4 col-sm-4 col-md-5 hidden-xs">
                      <div className="welcome-msg ">Bienvenidos a GrandMart </div>
                    </div>
                    <div className="headerlinkmenu col-lg-8 col-md-7 col-sm-8 col-xs-12">
                      <div className="links">
                        <div className="myaccount">
                          <a title="My Account" href="#">
                            <i className="fa fa-user"></i>
                            <span className="hidden-xs">Cuenta</span>
                          </a>
                        </div>
                        <div className="login">
                          <a href="#">
                            <i className="fa fa-unlock-alt"></i>
                            <span className="hidden-xs">Iniciar sesión</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-sm-3 col-md-3 col-xs-12">
                    <div className="logo">
                      <a title="e-commerce" href="#">
                        <img alt="e-commerce" src="assets/images/logo.png" />
                      </a>{" "}
                    </div>
                  </div>
                  <div className="col-xs-9 col-sm-6 col-md-7">
                    <div className="top-search">
                      <div id="search">
                        <form>
                          <div className="input-group">
                            <select
                              className="cate-dropdown hidden-xs"
                              name="category_id"
                            >
                              <option>Categorias</option>
                              <option>ola</option>
                            </select>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search"
                              name="search"
                            />
                            <button className="btn-search" type="button">
                              <i className="fa fa-search"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-2 col-xs-3 top-cart">
                    <div className="top-cart-contain">
                      <div className="mini-cart">
                        <div
                          data-toggle="dropdown"
                          data-hover="dropdown"
                          className="basket dropdown-toggle"
                        >
                          {" "}
                          <a href="#">
                            <div className="cart-icon">
                              <i className="fa fa-shopping-cart"></i>
                            </div>
                            <div className="shoppingcart-inner hidden-xs">
                              <span className="cart-title">Carrito</span>{" "}
                              <span className="cart-total"></span>
                            </div>
                          </a>
                        </div>
                        <div>
                          <div className="top-cart-content">
                            <div className="block-subtitle hidden-xs">
                              Productos añadidos recientemente
                            </div>
                            <ul id="cart-sidebar" className="mini-products-list">
                              <li className="item odd">
                                {" "}
                                <a
                                  href="#"
                                  title="Ipsums Dolors Untra"
                                  className="product-image"
                                >
                                  <img
                                    src="assets/images/products/img07.png"
                                    alt="Lorem ipsum dolor"
                                    width="65"
                                  />
                                </a>
                                <div className="product-details">
                                  {" "}
                                  <a
                                    href="#"
                                    title="Remove This Item"
                                    className="remove-cart"
                                  >
                                    <i className="icon-close"></i>
                                  </a>
                                  <p className="product-name">
                                    <a href="#">
                                      Lorem ipsum dolor sit amet Consectetur
                                    </a>{" "}
                                  </p>
                                  <strong>1</strong> x{" "}
                                  <span className="price">$20.00</span>{" "}
                                </div>
                              </li>
                              <li className="item even">
                                {" "}
                                <a
                                  href="#"
                                  title="Ipsums Dolors Untra"
                                  className="product-image"
                                >
                                  <img
                                    src="assets/images/products/img11.png"
                                    alt="Lorem ipsum dolor"
                                    width="65"
                                  />
                                </a>
                                <div className="product-details">
                                  {" "}
                                  <a
                                    href="#"
                                    title="Remove This Item"
                                    className="remove-cart"
                                  >
                                    <i className="icon-close"></i>
                                  </a>
                                  <p className="product-name">
                                    <a href="#">
                                      Consectetur utes anet adipisicing elit
                                    </a>{" "}
                                  </p>
                                  <strong>1</strong> x{" "}
                                  <span className="price">$230.00</span>{" "}
                                </div>
                              </li>
                              <li className="item last odd">
                                {" "}
                                <a
                                  href="#"
                                  title="Ipsums Dolors Untra"
                                  className="product-image"
                                >
                                  <img
                                    src="assets/images/products/img10.png"
                                    alt="Lorem ipsum dolor"
                                    width="65"
                                  />
                                </a>
                                <div className="product-details">
                                  {" "}
                                  <a
                                    href="#"
                                    title="Remove This Item"
                                    className="remove-cart"
                                  >
                                    <i className="icon-close"></i>
                                  </a>
                                  <p className="product-name">
                                    <a href="#">
                                      Sed do eiusmod tempor incidist
                                    </a>{" "}
                                  </p>
                                  <strong>2</strong> x{" "}
                                  <span className="price">$420.00</span>{" "}
                                </div>
                              </li>
                            </ul>
                            <div className="top-subtotal">
                              Subtotal: <span className="price">$520.00</span>
                            </div>
                            <div className="actions">
                              <button className="btn-checkout" type="button">
                                <i className="fa fa-check"></i>
                                <span>Pagar!</span>
                              </button>
                              <button className="view-cart" type="button">
                                <i className="fa fa-shopping-cart"></i>{" "}
                                <span>Ver carrito</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <nav>
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-4">
                  <div className="mm-toggle-wrap">
                    <div className="mm-toggle">
                      {" "}
                      <i className="fa fa-align-justify"></i>{" "}
                    </div>
                    <span className="mm-label">Categorias</span>{" "}
                  </div>
                  <div className="mega-container visible-lg visible-md visible-sm">
                    <div className="navleft-container">
                      <div className="mega-menu-title">
                        <h3>Comprar por categoria</h3>
                      </div>
                      <div className="mega-menu-category">
                        <ul className="nav">
                          <li>
                            {" "}
                            <a href="#">Vegetables</a>
                            <div className="wrap-popup">
                              <div className="popup">
                                <div className="row">
                                  <div className="col-md-4 col-sm-6">
                                    <ul className="nav">
                                      <li>
                                        <a href="#">
                                          <span>Canon</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span>Nikon</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span>Olympus</span>{" "}
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span>ALPA</span>{" "}
                                        </a>
                                      </li>
                                      <li>
                                        {" "}
                                        <a href="#">
                                          <span>Bolex</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span>Samsung </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span>Panasonic</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span>Thomson </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span>Bell & Howell</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-4 col-sm-6 has-sep">
                                    <ul className="nav">
                                      <li>
                                        <a href="#">
                                          <span>Digital camera</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span>High-speed</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span>Camera phone</span>{" "}
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span>Multiplane</span>{" "}
                                        </a>
                                      </li>
                                      <li>
                                        {" "}
                                        <a href="#">
                                          <span>Pocket camera</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span>Video camera</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span>Zenith camera</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span>Single-lens reflex</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span>Light-field</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-4 has-sep hidden-sm">
                                    <div className="custom-menu-right">
                                      <div className="box-banner menu-banner">
                                        <div className="add-right">
                                          <a href="#">
                                            <img
                                              src="assets/images/menu-img4.jpg"
                                              alt=""
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            {" "}
                            <a href="#">Fruits</a>
                            <div className="wrap-popup">
                              <div className="popup">
                                <div className="row">
                                  <div className="col-md-4 col-sm-6">
                                    <h3>Dell</h3>
                                    <ul className="nav">
                                      <li>
                                        <a href="#">Dell Inspiron 3558</a>
                                      </li>
                                      <li>
                                        <a href="#">Dell Adapter </a>
                                      </li>
                                      <li>
                                        <a href="#">Optical USB Mouse</a>
                                      </li>
                                      <li>
                                        <a href="#">Laptop Battery</a>
                                      </li>
                                    </ul>
                                    <br />
                                    <h3>Microsoft</h3>
                                    <ul className="nav">
                                      <li>
                                        {" "}
                                        <a href="#">Lumia 550 4G</a>{" "}
                                      </li>
                                      <li>
                                        {" "}
                                        <a href="#">Surface Pro 4</a>{" "}
                                      </li>
                                      <li>
                                        {" "}
                                        <a href="#">HTC Desire 620G</a>{" "}
                                      </li>
                                      <li>
                                        {" "}
                                        <a href="#">DMG Flip Cover</a>{" "}
                                      </li>
                                      <li>
                                        {" "}
                                        <a href="#">Silicone Keyboard</a>{" "}
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-4 col-sm-6 has-sep">
                                    <h3>Apple</h3>
                                    <ul className="nav">
                                      <li>
                                        {" "}
                                        <a href="#">Apple Macbook Pro</a>{" "}
                                      </li>
                                      <li>
                                        {" "}
                                        <a href="#">
                                          Newest Apple Macbook Pro
                                        </a>{" "}
                                      </li>
                                      <li>
                                        {" "}
                                        <a href="#">
                                          Retina Display Laptop
                                        </a>{" "}
                                      </li>
                                      <li>
                                        {" "}
                                        <a href="#">Silicone Keyboard</a>{" "}
                                      </li>
                                    </ul>
                                    <br />
                                    <h3>Lenovo</h3>
                                    <ul className="nav">
                                      <li>
                                        {" "}
                                        <a href="#">Lenovo Yoga 300</a>{" "}
                                      </li>
                                      <li>
                                        {" "}
                                        <a href="#">Lenovo IdeaPad</a>{" "}
                                      </li>
                                      <li>
                                        {" "}
                                        <a href="#">Tab 3 A710F Tablet</a>{" "}
                                      </li>
                                      <li>
                                        {" "}
                                        <a href="#">Channel Speakers</a>{" "}
                                      </li>
                                      <li>
                                        {" "}
                                        <a href="#">Accessories</a>{" "}
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-4 has-sep hidden-sm">
                                    <div className="custom-menu-right">
                                      <div className="box-banner media">
                                        <div className="add-desc">
                                          <h3>
                                            Computer <br />
                                            Services{" "}
                                          </h3>
                                          <div className="price-sale">2017</div>
                                          <a href="#">Shop Now</a>{" "}
                                        </div>
                                        <div className="add-right">
                                          <a href="#">
                                            <img
                                              src="assets/images/menu-img1.png"
                                              alt=""
                                            />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="box-banner media">
                                        <div className="add-desc">
                                          <h3>Save up to</h3>
                                          <div className="price-sale">
                                            75 <sup>%</sup>
                                            <sub>off</sub>
                                          </div>
                                          <a href="#">Shopping Now</a>{" "}
                                        </div>
                                        <div className="add-right">
                                          <a href="#">
                                            <img
                                              src="assets/images/menu-img2.jpg"
                                              alt=""
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            {" "}
                            <a href="#">Apple Store</a>
                            <div className="wrap-popup column2">
                              <div className="popup">
                                <div className="row">
                                  <div className="col-sm-6">
                                    <h3>iPhone</h3>
                                    <ul className="nav">
                                      <li>
                                        {" "}
                                        <a href="#"> iPhone SE </a>{" "}
                                      </li>
                                      <li>
                                        {" "}
                                        <a href="#s"> iPhone 6s Plus </a>{" "}
                                      </li>
                                      <li>
                                        {" "}
                                        <a href="#"> iPhone 3G </a>{" "}
                                      </li>
                                      <li>
                                        {" "}
                                        <a href="#"> iPad Pro </a>{" "}
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-sm-6 has-sep">
                                    <h3> Watch </h3>
                                    <ul className="nav">
                                      <li>
                                        {" "}
                                        <a href="#"> Quartz Watches </a>{" "}
                                      </li>
                                      <li>
                                        {" "}
                                        <a href="#"> Lover's Watches</a>{" "}
                                      </li>
                                      <li>
                                        {" "}
                                        <a href="#"> Digital Watches </a>{" "}
                                      </li>
                                      <li>
                                        {" "}
                                        <a href="#"> Sport Watch </a>{" "}
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-sm-12">
                                    {" "}
                                    <a className="ads1" href="#">
                                      <img
                                        className="img-responsive"
                                        src="assets/images/menu-img3.jpg"
                                        alt=""
                                      />
                                    </a>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            {" "}
                            <a href="#">New Arrivals</a>
                            <div className="wrap-popup column1">
                              <div className="popup">
                                <ul className="nav">
                                  <li>
                                    <a href="#">
                                      <span>Envent Stereo</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <span>Sennheiser</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <span>Philips</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <span>Sony</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <span>Avantree</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <span>Bajaao</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <span>FiiO</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <span>Audio-Technica</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <span>LUXA2</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <span>Geekria</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li>
                            <a href="#">Most Popular</a>
                            <div className="wrap-popup column1">
                              <div className="popup">
                                <ul className="nav">
                                  <li>
                                    {" "}
                                    <a href="#"> Vacuum Cleaner </a>{" "}
                                  </li>
                                  <li>
                                    {" "}
                                    <a href="#"> Memore Bluetooth</a>{" "}
                                  </li>
                                  <li>
                                    {" "}
                                    <a href="#"> On-Ear Headphones </a>{" "}
                                  </li>
                                  <li>
                                    {" "}
                                    <a href="#"> Digital MP3 Player </a>{" "}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li className="nosub">
                            <a href="#">Meat</a>
                          </li>
                          <li className="nosub">
                            <a href="#">Special Gift</a>
                          </li>
                          <li className="nosub">
                            <a href="#">Deal of the Day</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-9 col-sm-8">
                  <div className="mtmegamenu">
                    <ul>
                      <li className="mt-root demo_custom_link_cms">
                        <div className="mt-root-item">
                          <a href="#">
                            <div className="title title_font">
                              <span className="title-text">Inicio</span>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li className="mt-root">
                        <div className="mt-root-item">
                          <a href="#">
                            <div className="title title_font">
                              <span className="title-text">Prueba</span>
                            </div>
                          </a>
                        </div>
                        <ul className="menu-items col-xs-12">
                          <li className="menu-item depth-1 menucol-1-3 ">
                            <div className="title title_font">
                              {" "}
                              <a href="#">Pagina de prueba </a>
                            </div>
                            <ul className="submenu">
                              <li className="menu-item">
                                <div className="title">
                                  {" "}
                                  <a href="#"> Shop grid </a>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item depth-1 menucol-1-3 ">
                            <div className="title title_font">
                              {" "}
                              <a href="#"> Ecommerce</a>
                            </div>
                            <ul className="submenu">
                              <li className="menu-item">
                                <div className="title">
                                  {" "}
                                  <a href="#"> Wishlists </a>
                                </div>
                              </li>
                              <li className="menu-item">
                                <div className="title">
                                  {" "}
                                  <a href="#"> Quick View </a>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item depth-1 menucol-1-3 ">
                            <div className="title title_font">
                              {" "}
                              <a href="#"> ola </a>
                            </div>
                            <ul className="submenu">
                              <li className="menu-item depth-2 category ">
                                <div className="title">
                                  {" "}
                                  <a href="#"> Create Account Page </a>
                                </div>
                              </li>   
                            </ul>
                          </li>
                          <li className="menu-item depth-1 menucol-1-3 ">
                            <div className="title title_font">
                              {" "}
                              <a href="#">Categories</a>
                            </div>
                            <ul className="submenu">
                              <li className="menu-item">
                                <div className="title">
                                  {" "}
                                  <a href="#"> 4 Column Sidebar</a>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item depth-1 menucol-1-3 ">
                            <div className="title title_font">
                              {" "}
                              <a href="#"> Single Product Pages </a>
                            </div>
                            <ul className="submenu"> 
                              <li className="menu-item">
                                <div className="title">
                                  {" "}
                                  <a href="#"> single product magnify zoom</a>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item depth-1 menucol-1-3 ">
                            <div className="title title_font">
                              {" "}
                              <a href="#"> Blog Pages </a>
                            </div>
                            <ul className="submenu">
                              <li className="menu-item">
                                <div className="title">
                                  {" "}
                                  <a href="#"> Blog – Right Sidebar </a>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="mt-root">
                        <div className="mt-root-item">
                          <a href="#">
                            <div className="title title_font">
                              <span className="title-text">Contactanos</span>{" "}
                            </div>
                          </a>
                        </div>
                      </li>
                      <li className="mt-root">
                        <div className="mt-root-item">
                          <a href="#">
                            <div className="title title_font">
                              <span className="title-text">Acerca de nosotros</span>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li className="mt-root demo_custom_link_cms">
                        <div className="mt-root-item">
                          <a href="#">
                            <div className="title title_font">
                              <span className="title-text">Blog</span>
                            </div>
                          </a>
                        </div>
                        <ul className="menu-items col-md-3 col-sm-4 col-xs-12">
                          <li className="menu-item depth-1">
                            <div className="title">
                              {" "}
                              <a href="#"> Single post </a>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="mt-root">
                        <div className="mt-root-item">
                          <div className="title title_font">
                            <span className="title-text">Mejores vendidos</span>
                          </div>
                        </div>
                        <ul className="menu-items col-xs-12">
                          <li className="menu-item depth-1 product menucol-1-3 withimage">
                            <div className="product-item">
                              <div className="item-inner">
                                <div className="product-thumbnail">
                                  <div className="icon-sale-label sale-left">
                                    oferta
                                  </div>
                                  <div className="pr-img-area">
                                    {" "}
                                    <a title="Ipsums Dolors Untra" href="#l">
                                      <figure>
                                        {" "}
                                        <img
                                          className="first-img"
                                          src="assets/images/products/img06.png"
                                          alt=""
                                        />{" "}
                                        <img
                                          className="hover-img"
                                          src="assets/images/products/img06.png"
                                          alt=""
                                        />
                                      </figure>
                                    </a>
                                    <button
                                      type="button"
                                      className="add-to-cart-mt"
                                    >
                                      {" "}
                                      <i className="fa fa-shopping-cart"></i>
                                      <span>Añadir al carrito</span>{" "}
                                    </button>
                                  </div>
                                  <div className="pr-info-area">
                                    <div className="pr-button">
                                      <div className="mt-button add_to_wishlist">
                                        {" "}
                                        <a href="#">
                                          {" "}
                                          <i className="fa fa-heart"></i>{" "}
                                        </a>{" "}
                                      </div>
                                      <div className="mt-button add_to_compare">
                                        {" "}
                                        <a href="#">
                                          {" "}
                                          <i className="fa fa-signal"></i>{" "}
                                        </a>{" "}
                                      </div>
                                      <div className="mt-button quick-view">
                                        {" "}
                                        <a href="#">
                                          {" "}
                                          <i className="fa fa-search"></i>{" "}
                                        </a>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-info">
                                  <div className="info-inner">
                                    <div className="item-title">
                                      {" "}
                                      <a title="Ipsums Dolors Untra" href="#l">
                                        ola{" "}
                                      </a>{" "}
                                    </div>
                                    <div className="item-content">
                                      <div className="rating">
                                        {" "}
                                        <i className="fa fa-star-o"></i>{" "}
                                        <i className="fa fa-star-o"></i>{" "}
                                        <i className="fa fa-star-o"></i>{" "}
                                        <i className="fa fa-star-o"></i>{" "}
                                        <i className="fa fa-star-o"></i>{" "}
                                      </div>
                                      <div className="item-price">
                                        <div className="price-box">
                                          {" "}
                                          <span className="regular-price">
                                            {" "}
                                            <span className="price">
                                              $125.00
                                            </span>{" "}
                                          </span>{" "}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="menu-item depth-1 product menucol-1-3 withimage">
                            <div className="product-item">
                              <div className="item-inner">
                                <div className="product-thumbnail">
                                  <div className="icon-sale-label sale-left">
                                    Oferta
                                  </div>
                                  <div className="pr-img-area">
                                    {" "}
                                    <a title="Ipsums Dolors Untra" href="#l">
                                      <figure>
                                        {" "}
                                        <img
                                          className="first-img"
                                          src="assets/images/products/img02.png"
                                          alt=""
                                        />{" "}
                                        <img
                                          className="hover-img"
                                          src="assets/images/products/img02.png"
                                          alt=""
                                        />
                                      </figure>
                                    </a>
                                    <button
                                      type="button"
                                      className="add-to-cart-mt"
                                    >
                                      {" "}
                                      <i className="fa fa-shopping-cart"></i>
                                      <span> Add to Cart</span>{" "}
                                    </button>
                                  </div>
                                  <div className="pr-info-area">
                                    <div className="pr-button">
                                      <div className="mt-button add_to_wishlist">
                                        {" "}
                                        <a href="#">
                                          {" "}
                                          <i className="fa fa-heart"></i>{" "}
                                        </a>{" "}
                                      </div>
                                      <div className="mt-button add_to_compare">
                                        {" "}
                                        <a href="#">
                                          {" "}
                                          <i className="fa fa-signal"></i>{" "}
                                        </a>{" "}
                                      </div>
                                      <div className="mt-button quick-view">
                                        {" "}
                                        <a href="#">
                                          {" "}
                                          <i className="fa fa-search"></i>{" "}
                                        </a>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-info">
                                  <div className="info-inner">
                                    <div className="item-title">
                                      {" "}
                                      <a title="Ipsums Dolors Untra" href="#l">
                                        Ipsums Dolors Untra{" "}
                                      </a>{" "}
                                    </div>
                                    <div className="item-content">
                                      <div className="rating">
                                        {" "}
                                        <i className="fa fa-star-o"></i>{" "}
                                        <i className="fa fa-star-o"></i>{" "}
                                        <i className="fa fa-star-o"></i>{" "}
                                        <i className="fa fa-star-o"></i>{" "}
                                        <i className="fa fa-star-o"></i>{" "}
                                      </div>
                                      <div className="item-price">
                                        <div className="price-box">
                                          {" "}
                                          <span className="regular-price">
                                            {" "}
                                            <span className="price">
                                              $125.00
                                            </span>{" "}
                                          </span>{" "}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="menu-item depth-1 product menucol-1-3 withimage">
                            <div className="product-item">
                              <div className="item-inner">
                                <div className="icon-sale-label sale-left">
                                  Oferta
                                </div>
                                <div className="icon-new-label new-right">Nuevo</div>
                                <div className="product-thumbnail">
                                  <div className="icon-sale-label sale-left">
                                    Oferta
                                  </div>
                                  <div className="pr-img-area">
                                    {" "}
                                    <a title="Ipsums Dolors Untra" href="#l">
                                      <figure>
                                        {" "}
                                        <img
                                          className="first-img"
                                          src="assets/images/products/img03.png"
                                          alt=""
                                        />{" "}
                                        <img
                                          className="hover-img"
                                          src="assets/images/products/img03.png"
                                          alt=""
                                        />
                                      </figure>
                                    </a>
                                    <button
                                      type="button"
                                      className="add-to-cart-mt"
                                    >
                                      {" "}
                                      <i className="fa fa-shopping-cart"></i>
                                      <span> Add to Cart</span>{" "}
                                    </button>
                                  </div>
                                  <div className="pr-info-area">
                                    <div className="pr-button">
                                      <div className="mt-button add_to_wishlist">
                                        {" "}
                                        <a href="#">
                                          {" "}
                                          <i className="fa fa-heart"></i>{" "}
                                        </a>{" "}
                                      </div>
                                      <div className="mt-button add_to_compare">
                                        {" "}
                                        <a href="#">
                                          {" "}
                                          <i className="fa fa-signal"></i>{" "}
                                        </a>{" "}
                                      </div>
                                      <div className="mt-button quick-view">
                                        {" "}
                                        <a href="#">
                                          {" "}
                                          <i className="fa fa-search"></i>{" "}
                                        </a>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-info">
                                  <div className="info-inner">
                                    <div className="item-title">
                                      {" "}
                                      <a title="Ipsums Dolors Untra" href="#l">
                                        Ipsums Dolors Untra{" "}
                                      </a>{" "}
                                    </div>
                                    <div className="item-content">
                                      <div className="rating">
                                        {" "}
                                        <i className="fa fa-star-o"></i>{" "}
                                        <i className="fa fa-star-o"></i>{" "}
                                        <i className="fa fa-star-o"></i>{" "}
                                        <i className="fa fa-star-o"></i>{" "}
                                        <i className="fa fa-star-o"></i>{" "}
                                      </div>
                                      <div className="item-price">
                                        <div className="price-box">
                                          {" "}
                                          <span className="regular-price">
                                            {" "}
                                            <span className="price">
                                              $125.00
                                            </span>{" "}
                                          </span>{" "}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <br></br>
          <div>
          <Carousel slides={slides} autoplay={true} interval={15000} arrows={false}/>
          </div>
          
          <br></br>
          <br></br>
          <div className="jtv-service-area">
            <div className="container">
              <div className="row">
                <div className="col col-md-3 col-sm-6 col-xs-12">
                  <div className="block-wrapper ship">
                    <div className="text-des">
                      <div className="icon-wrapper">
                        <i className="fa fa-truck"></i>
                      </div>
                      <div className="service-wrapper">
                        <h3>Envio gratis</h3>
                        <p>Desde 1,099$</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-md-3 col-sm-6 col-xs-12 ">
                  <div className="block-wrapper return">
                    <div className="text-des">
                      <div className="icon-wrapper">
                        <i className="fa fa-refresh"></i>
                      </div>
                      <div className="service-wrapper">
                        <h3>Garantia de 30 dias</h3>
                        <p>Dinero </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-md-3 col-sm-6 col-xs-12">
                  <div className="block-wrapper support">
                    <div className="text-des">
                      <div className="icon-wrapper">
                        <i className="fa fa-umbrella"></i>
                      </div>
                      <div className="service-wrapper">
                        <h3>AYUDA  24/7</h3>
                        <p>Llamanos: ( +123 ) 456 789</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-md-3 col-sm-6 col-xs-12">
                  <div className="block-wrapper user">
                    <div className="text-des">
                      <div className="icon-wrapper">
                        <i className="fa fa-user"></i>
                      </div>
                      <div className="service-wrapper">
                        <h3>DESCUENTO A MIEMBROS</h3>
                        <p>25% en la compra de $199</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="main-container col1-layout">
            <div className="container">
              <div className="row">
                  <div className="home-tab">
                    <ul className="nav home-nav-tabs home-product-tabs">
                      <li className="active">
                        <a
                          href="#featured"
                          data-toggle="tab"
                          aria-expanded="false"
                        >
                          Productos
                        </a>
                      </li>
                      <li className="divider"></li>
                      <li>
                        {" "}
                        <a
                          href="#top-sellers"
                          data-toggle="tab"
                          aria-expanded="false"
                        >
                          Mejores vendidos
                        </a>{" "}
                      </li>
                    </ul>
                    <div id="productTabContent" className="tab-content">
                      <div className="tab-pane active in" id="featured">
                        <div className="featured-pro">
                          <div className="slider-items-products">
                            <div
                              id="featured-slider"
                              className="product-flexslider hidden-buttons"
                            >
                              <div className="slider-items slider-width-col8">
                                {/* la animacion */}
                               
                                <div className="col-sm-6">
                                <div className="product-item">
                                  <div className="item-inner">
                                    <div className="product-thumbnail">
                                      <div className="icon-sale-label sale-left">
                                        Oferta
                                      </div>
                                      <div className="icon-new-label new-right">
                                        Nuevo
                                      </div>
                                      <div className="pr-img-area">
                                        {" "}
                                        <a
                                          title="Ipsums Dolors Untra"
                                          href="#l"
                                        >
                                          <figure>
                                            {" "}
                                            <img
                                              className="first-img"
                                              src="assets/images/products/img01.png"
                                              alt=""
                                            />{" "}
                                            <img
                                              className="hover-img"
                                              src="assets/images/products/img01.png"
                                              alt=""
                                            />
                                          </figure>
                                        </a>
                                        <button
                                          type="button"
                                          className="add-to-cart-mt"
                                        >
                                          {" "}
                                          <i className="fa fa-shopping-cart"></i>
                                          <span>Añadir al carrito</span>{" "}
                                        </button>
                                      </div>
                                      <div className="pr-info-area">
                                        <div className="pr-button">
                                          <div className="mt-button add_to_wishlist">
                                            {" "}
                                            <a href="#">
                                              {" "}
                                              <i className="fa fa-heart"></i>{" "}
                                            </a>{" "}
                                          </div>
                                          <div className="mt-button add_to_compare">
                                            {" "}
                                            <a href="#">
                                              {" "}
                                              <i className="fa fa-signal"></i>{" "}
                                            </a>{" "}
                                          </div>
                                          <div className="mt-button quick-view">
                                            {" "}
                                            <a href="#">
                                              {" "}
                                              <i className="fa fa-search"></i>{" "}
                                            </a>{" "}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="item-info">
                                      <div className="info-inner">
                                        <div className="item-title">
                                          {" "}
                                          <a
                                            title="Ipsums Dolors Untra"
                                            href="#l"
                                          >
                                            ola {" "}
                                          </a>{" "}
                                        </div>
                                        <div className="item-content">
                                          <div className="rating">
                                            {" "}
                                            <i className="fa fa-star"></i>{" "}
                                            <i className="fa fa-star"></i>{" "}
                                            <i className="fa fa-star-o"></i>{" "}
                                            <i className="fa fa-star-o"></i>{" "}
                                            <i className="fa fa-star-o"></i>{" "}
                                          </div>
                                          <div className="item-price">
                                            <div className="price-box">
                                              {" "}
                                              <span className="regular-price">
                                                {" "}
                                                <span className="price">
                                                  $125.00
                                                </span>{" "}
                                              </span>{" "}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                </div>
                                <div className="col-sm-6">
                                <div className="product-item">
                                  <div className="item-inner">
                                    <div className="product-thumbnail">
                                      <div className="icon-new-label new-left">
                                        New
                                      </div>
                                      <div className="pr-img-area">
                                        {" "}
                                        <a
                                          title="Ipsums Dolors Untra"
                                          href="#l"
                                        >
                                          <figure>
                                            {" "}
                                            <img
                                              className="first-img"
                                              src="assets/images/products/img05.png"
                                              alt=""
                                            />{" "}
                                            <img
                                              className="hover-img"
                                              src="assets/images/products/img05.png"
                                              alt=""
                                            />
                                          </figure>
                                        </a>
                                        <button
                                          type="button"
                                          className="add-to-cart-mt"
                                        >
                                          {" "}
                                          <i className="fa fa-shopping-cart"></i>
                                          <span> Add to Cart</span>{" "}
                                        </button>
                                      </div>
                                      <div className="pr-info-area">
                                        <div className="pr-button">
                                          <div className="mt-button add_to_wishlist">
                                            {" "}
                                            <a href="#">
                                              {" "}
                                              <i className="fa fa-heart"></i>{" "}
                                            </a>{" "}
                                          </div>
                                          <div className="mt-button add_to_compare">
                                            {" "}
                                            <a href="#">
                                              {" "}
                                              <i className="fa fa-signal"></i>{" "}
                                            </a>{" "}
                                          </div>
                                          <div className="mt-button quick-view">
                                            {" "}
                                            <a href="#">
                                              {" "}
                                              <i className="fa fa-search"></i>{" "}
                                            </a>{" "}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="item-info">
                                      <div className="info-inner">
                                        <div className="item-title">
                                          {" "}
                                          <a
                                            title="Ipsums Dolors Untra"
                                            href="#l"
                                          >
                                            Ipsums Dolors Untra{" "}
                                          </a>{" "}
                                        </div>
                                        <div className="item-content">
                                          <div className="rating">
                                            {" "}
                                            <i className="fa fa-star-o"></i>{" "}
                                            <i className="fa fa-star-o"></i>{" "}
                                            <i className="fa fa-star-o"></i>{" "}
                                            <i className="fa fa-star-o"></i>{" "}
                                            <i className="fa fa-star-o"></i>{" "}
                                          </div>
                                          <div className="item-price">
                                            <div className="price-box">
                                              <p className="special-price">
                                                {" "}
                                                <span className="price-label">
                                                  Special Price
                                                </span>{" "}
                                                <span className="price">
                                                  {" "}
                                                  $456.00{" "}
                                                </span>{" "}
                                              </p>
                                              <p className="old-price">
                                                {" "}
                                                <span className="price-label">
                                                  Regular Price:
                                                </span>{" "}
                                                <span className="price">
                                                  {" "}
                                                  $567.00{" "}
                                                </span>{" "}
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                </div>
                                <div className="col-sm-6">
                                <div className="product-item">
                                  <div className="item-inner">
                                    <div className="product-thumbnail">
                                      <div className="pr-img-area">
                                        {" "}
                                        <a
                                          title="Ipsums Dolors Untra"
                                          href="#l"
                                        >
                                          <figure>
                                            {" "}
                                            <img
                                              className="first-img"
                                              src="assets/images/products/img06.png"
                                              alt=""
                                            />{" "}
                                            <img
                                              className="hover-img"
                                              src="assets/images/products/img06.png"
                                              alt=""
                                            />
                                          </figure>
                                        </a>
                                        <button
                                          type="button"
                                          className="add-to-cart-mt"
                                        >
                                          {" "}
                                          <i className="fa fa-shopping-cart"></i>
                                          <span> Add to Cart</span>{" "}
                                        </button>
                                      </div>
                                      <div className="pr-info-area">
                                        <div className="pr-button">
                                          <div className="mt-button add_to_wishlist">
                                            {" "}
                                            <a href="#">
                                              {" "}
                                              <i className="fa fa-heart"></i>{" "}
                                            </a>{" "}
                                          </div>
                                          <div className="mt-button add_to_compare">
                                            {" "}
                                            <a href="#">
                                              {" "}
                                              <i className="fa fa-signal"></i>{" "}
                                            </a>{" "}
                                          </div>
                                          <div className="mt-button quick-view">
                                            {" "}
                                            <a href="#">
                                              {" "}
                                              <i className="fa fa-search"></i>{" "}
                                            </a>{" "}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="item-info">
                                      <div className="info-inner">
                                        <div className="item-title">
                                          {" "}
                                          <a
                                            title="Ipsums Dolors Untra"
                                            href="#l"
                                          >
                                            Ipsums Dolors Untra{" "}
                                          </a>{" "}
                                        </div>
                                        <div className="item-content">
                                          <div className="rating">
                                            {" "}
                                            <i className="fa fa-star-o"></i>{" "}
                                            <i className="fa fa-star-o"></i>{" "}
                                            <i className="fa fa-star-o"></i>{" "}
                                            <i className="fa fa-star-o"></i>{" "}
                                            <i className="fa fa-star-o"></i>{" "}
                                          </div>
                                          <div className="item-price">
                                            <div className="price-box">
                                              {" "}
                                              <span className="regular-price">
                                                {" "}
                                                <span className="price">
                                                  $125.00
                                                </span>{" "}
                                              </span>{" "}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>
                      <div className="tab-pane fade" id="top-sellers">
                        <div className="top-sellers-pro">
                          <div className="slider-items-products">
                            <div
                              id="top-sellers-slider"
                              className="product-flexslider hidden-buttons"
                            >
                              <div className="slider-items slider-width-col3 ">
                              <div className="col-sm-6">
                                <div className="product-item">
                                  <div className="item-inner">
                                    <div className="product-thumbnail">
                                      <div className="icon-sale-label sale-left">
                                        Sale
                                      </div>
                                      <div className="icon-new-label new-right">
                                        New
                                      </div>
                                      <div className="pr-img-area">
                                        {" "}
                                        <a
                                          title="Ipsums Dolors Untra"
                                          href="#l"
                                        >
                                          <figure>
                                            {" "}
                                            <img
                                              className="first-img"
                                              src="assets/images/products/img03.png"
                                              alt=""
                                            />{" "}
                                            <img
                                              className="hover-img"
                                              src="assets/images/products/img03.png"
                                              alt=""
                                            />
                                          </figure>
                                        </a>
                                        <button
                                          type="button"
                                          className="add-to-cart-mt"
                                        >
                                          {" "}
                                          <i className="fa fa-shopping-cart"></i>
                                          <span> Add to Cart</span>{" "}
                                        </button>
                                      </div>
                                      <div className="pr-info-area">
                                        <div className="pr-button">
                                          <div className="mt-button add_to_wishlist">
                                            {" "}
                                            <a href="#">
                                              {" "}
                                              <i className="fa fa-heart"></i>{" "}
                                            </a>{" "}
                                          </div>
                                          <div className="mt-button add_to_compare">
                                            {" "}
                                            <a href="#">
                                              {" "}
                                              <i className="fa fa-signal"></i>{" "}
                                            </a>{" "}
                                          </div>
                                          <div className="mt-button quick-view">
                                            {" "}
                                            <a href="#">
                                              {" "}
                                              <i className="fa fa-search"></i>{" "}
                                            </a>{" "}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="item-info">
                                      <div className="info-inner">
                                        <div className="item-title">
                                          {" "}
                                          <a
                                            title="Ipsums Dolors Untra"
                                            href="#l"
                                          >
                                            Ipsums Dolors Untra{" "}
                                          </a>{" "}
                                        </div>
                                        <div className="item-content">
                                          <div className="rating">
                                            {" "}
                                            <i className="fa fa-star"></i>{" "}
                                            <i className="fa fa-star"></i>{" "}
                                            <i className="fa fa-star"></i>{" "}
                                            <i className="fa fa-star-o"></i>{" "}
                                            <i className="fa fa-star-o"></i>{" "}
                                          </div>
                                          <div className="item-price">
                                            <div className="price-box">
                                              {" "}
                                              <span className="regular-price">
                                                {" "}
                                                <span className="price">
                                                  $125.00
                                                </span>{" "}
                                              </span>{" "}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                </div>
                                <div className="col-sm-6">
                                <div className="product-item">
                                  <div className="item-inner">
                                    <div className="product-thumbnail">
                                      <div className="pr-img-area">
                                        {" "}
                                        <a
                                          title="Ipsums Dolors Untra"
                                          href="#l"
                                        >
                                          <figure>
                                            {" "}
                                            <img
                                              className="first-img"
                                              src="assets/images/products/img05.png"
                                              alt=""
                                            />{" "}
                                            <img
                                              className="hover-img"
                                              src="assets/images/products/img05.png"
                                              alt=""
                                            />
                                          </figure>
                                        </a>
                                        <button
                                          type="button"
                                          className="add-to-cart-mt"
                                        >
                                          {" "}
                                          <i className="fa fa-shopping-cart"></i>
                                          <span> Add to Cart</span>{" "}
                                        </button>
                                      </div>
                                      <div className="pr-info-area">
                                        <div className="pr-button">
                                          <div className="mt-button add_to_wishlist">
                                            {" "}
                                            <a href="#">
                                              {" "}
                                              <i className="fa fa-heart"></i>{" "}
                                            </a>{" "}
                                          </div>
                                          <div className="mt-button add_to_compare">
                                            {" "}
                                            <a href="#">
                                              {" "}
                                              <i className="fa fa-signal"></i>{" "}
                                            </a>{" "}
                                          </div>
                                          <div className="mt-button quick-view">
                                            {" "}
                                            <a href="#">
                                              {" "}
                                              <i className="fa fa-search"></i>{" "}
                                            </a>{" "}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="item-info">
                                      <div className="info-inner">
                                        <div className="item-title">
                                          {" "}
                                          <a
                                            title="Ipsums Dolors Untra"
                                            href="#l"
                                          >
                                            Ipsums Dolors Untra{" "}
                                          </a>{" "}
                                        </div>
                                        <div className="item-content">
                                          <div className="rating">
                                            {" "}
                                            <i className="fa fa-star-o"></i>{" "}
                                            <i className="fa fa-star-o"></i>{" "}
                                            <i className="fa fa-star-o"></i>{" "}
                                            <i className="fa fa-star-o"></i>{" "}
                                            <i className="fa fa-star-o"></i>{" "}
                                          </div>
                                          <div className="item-price">
                                            <div className="price-box">
                                              <p className="special-price">
                                                {" "}
                                                <span className="price-label">
                                                  Special Price
                                                </span>{" "}
                                                <span className="price">
                                                  {" "}
                                                  $456.00{" "}
                                                </span>{" "}
                                              </p>
                                              <p className="old-price">
                                                {" "}
                                                <span className="price-label">
                                                  Regular Price:
                                                </span>{" "}
                                                <span className="price">
                                                  {" "}
                                                  $567.00{" "}
                                                </span>{" "}
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                </div>
                                <div className="col-sm-6">
                                <div className="product-item">
                                  <div className="item-inner">
                                    <div className="product-thumbnail">
                                      <div className="pr-img-area">
                                        {" "}
                                        <a
                                          title="Ipsums Dolors Untra"
                                          href="#l"
                                        >
                                          <figure>
                                            {" "}
                                            <img
                                              className="first-img"
                                              src="assets/images/products/img06.png"
                                              alt=""
                                            />{" "}
                                            <img
                                              className="hover-img"
                                              src="assets/images/products/img06.png"
                                              alt=""
                                            />
                                          </figure>
                                        </a>
                                        <button
                                          type="button"
                                          className="add-to-cart-mt"
                                        >
                                          {" "}
                                          <i className="fa fa-shopping-cart"></i>
                                          <span> Add to Cart</span>{" "}
                                        </button>
                                      </div>
                                      <div className="pr-info-area">
                                        <div className="pr-button">
                                          <div className="mt-button add_to_wishlist">
                                            {" "}
                                            <a href="#">
                                              {" "}
                                              <i className="fa fa-heart"></i>{" "}
                                            </a>{" "}
                                          </div>
                                          <div className="mt-button add_to_compare">
                                            {" "}
                                            <a href="#">
                                              {" "}
                                              <i className="fa fa-signal"></i>{" "}
                                            </a>{" "}
                                          </div>
                                          <div className="mt-button quick-view">
                                            {" "}
                                            <a href="#">
                                              {" "}
                                              <i className="fa fa-search"></i>{" "}
                                            </a>{" "}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="item-info">
                                      <div className="info-inner">
                                        <div className="item-title">
                                          {" "}
                                          <a
                                            title="Ipsums Dolors Untra"
                                            href="#l"
                                          >
                                            Ipsums Dolors Untra{" "}
                                          </a>{" "}
                                        </div>
                                        <div className="item-content">
                                          <div className="rating">
                                            {" "}
                                            <i className="fa fa-star-o"></i>{" "}
                                            <i className="fa fa-star-o"></i>{" "}
                                            <i className="fa fa-star-o"></i>{" "}
                                            <i className="fa fa-star-o"></i>{" "}
                                            <i className="fa fa-star-o"></i>{" "}
                                          </div>
                                          <div className="item-price">
                                            <div className="price-box">
                                              {" "}
                                              <span className="regular-price">
                                                {" "}
                                                <span className="price">
                                                  $125.00
                                                </span>{" "}
                                              </span>{" "}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div className="banner-static">
            <div className="container">
              <div className="row">
                <div className="col-sm-4 col-sms-12">
                  <div className="banner-box banner-box2">
                    {" "}
                    <a href="">
                      <img src="assets/images/banner_staic2.png" alt="" />
                    </a>
                    <div className="box-hover">
                      <div className="banner-title">descarga la app</div>
                      <span>GrandMart desde tu celular</span>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-sms-12">
                  <div className="banner-box banner-box1">
                    {" "}
                    <a href="">
                      <img src="assets/images/banner_staic1.png" alt="" />
                    </a>
                    <div className="box-hover">
                      <div className="banner-title">Oferta de otoño</div>
                      <span>Hatsa un --% de descuento</span>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-sms-12">
                  <div className="banner-box banner-box3">
                    {" "}
                    <a href="">
                      <img src="assets/images/banner_staic3.png" alt="" />
                    </a>
                    <div className="box-hover">
                      <div className="banner-title">Emprendimiento</div>
                      <span>Se tu propio jefe</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        <div className="container">
          <div id="latest-news" className="news">
            <div className="page-header">
              <h2>Latest news</h2>
            </div>
            <div className="slider-items-products">
              <div
                id="latest-news-slider"
                className="product-flexslider hidden-buttons"
              >
                <div className="slider-items slider-width-col6">
                  <div className="item">
                    <div className="jtv-blog">
                      <div className="blog-img">
                        {" "}
                        <a href="#">
                          {" "}
                          <img
                            className="primary-img"
                            src="assets/images/blog-img1.jpg"
                            alt=""
                          />
                        </a>{" "}
                        <span className="moretag"></span>{" "}
                      </div>
                      <div className="blog-content-jtv">
                        <h2>
                          <a href="#">Sed do eiusmod sit amet</a>
                        </h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod
                        </p>
                        <span className="blog-likes">
                          <i className="fa fa-heart"></i> 149 likes
                        </span>{" "}
                        <span className="blog-comments">
                          <i className="fa fa-comment"></i> 80 comments
                        </span>
                        <div className="blog-action">
                          {" "}
                          <span>Jan, 20, 2017</span>{" "}
                          <a className="read-more" href="#">
                            read more
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="jtv-blog">
                      <div className="blog-img">
                        {" "}
                        <a href="#">
                          <img
                            className="primary-img"
                            src="assets/images/blog-img2.jpg"
                            alt=""
                          />
                        </a>{" "}
                      </div>
                      <div className="blog-content-jtv">
                        <h2>
                          <a href="#">Lorem ipsum dolor sit amet</a>
                        </h2>
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis
                        </p>
                        <span className="blog-likes">
                          <i className="fa fa-heart"></i> 89 likes
                        </span>{" "}
                        <span className="blog-comments">
                          <i className="fa fa-comment"></i> 10 comments
                        </span>
                        <div className="blog-action">
                          <span>May, 25, 2017</span>{" "}
                          <a className="read-more" href="#">
                            read more
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="jtv-blog">
                      <div className="blog-img">
                        {" "}
                        <a href="#">
                          <img
                            className="primary-img"
                            src="assets/images/blog-img3.jpg"
                            alt=""
                          />
                        </a>{" "}
                      </div>
                      <div className="blog-content-jtv">
                        <h2>
                          <a href="#">Integer scelerisque diam vitae</a>
                        </h2>
                        <p>
                          Ut sit amet turpis. In est arcu, sollicitudin eu,
                          vehicula venenatis. Maecenas eu enim in lorem
                        </p>
                        <span className="blog-likes">
                          <i className="fa fa-heart"></i> 125 likes
                        </span>{" "}
                        <span className="blog-comments">
                          <i className="fa fa-comment"></i> 30 comments
                        </span>
                        <div className="blog-action">
                          <span>April, 12, 2017</span>{" "}
                          <a className="read-more" href="#">
                            read more
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="jtv-blog">
                      <div className="blog-img">
                        {" "}
                        <a href="#">
                          {" "}
                          <img
                            className="primary-img"
                            src="assets/images/blog-img1.png"
                            alt=""
                          />
                        </a>{" "}
                        <span className="moretag"></span>{" "}
                      </div>
                      <div className="blog-content-jtv">
                        <h2>
                          <a href="#">Sed do eiusmod sit amet</a>
                        </h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod
                        </p>
                        <span className="blog-likes">
                          <i className="fa fa-heart"></i> 149 likes
                        </span>{" "}
                        <span className="blog-comments">
                          <i className="fa fa-comment"></i> 80 comments
                        </span>
                        <div className="blog-action">
                          {" "}
                          <span>Jan, 20, 2017</span>{" "}
                          <a className="read-more" href="#">
                            read more
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="jtv-blog">
                      <div className="blog-img">
                        {" "}
                        <a href="#">
                          {" "}
                          <img
                            className="primary-img"
                            src="assets/images/blog-img3.jpg"
                            alt=""
                          />
                        </a>{" "}
                        <span className="moretag"></span>{" "}
                      </div>
                      <div className="blog-content-jtv">
                        <h2>
                          <a href="#">Sed do eiusmod sit amet</a>
                        </h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod
                        </p>
                        <span className="blog-likes">
                          <i className="fa fa-heart"></i> 149 likes
                        </span>{" "}
                        <span className="blog-comments">
                          <i className="fa fa-comment"></i> 80 comments
                        </span>
                        <div className="blog-action">
                          {" "}
                          <span>Jan, 20, 2017</span>{" "}
                          <a className="read-more" href="#">
                            read more
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="top-banner">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="jtv-banner1">
                  <a href="#">
                    <img src="assets/images/sub2.png" alt="" />
                  </a>
                  <div className="hover_content">
                    <div className="hover_data">
                      <div className="title"> buen fin </div>
                      <div className="desc-text"> 2022 </div>
                      <div className="shop-now">
                        <a href="#">Ofertas</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="jtv-banner2">
                  <a href="#">
                    <img src="assets/images/sub3.png" alt="" />
                  </a>
                  <div className="hover_content">
                    <div className="hover_data">
                      <div className="title"> Tecnología</div>
                      <div className="desc-text"> Descuentos increibles </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="jtv-banner3">
                  <div className="jtv-banner3-inner">
                    <a href="#">
                      <img src="assets/images/sub1.png" alt="" />
                    </a>
                    <div className="hover_content">
                      <div className="hover_data">
                        <div className="title"> oferta 30% </div>
                        <div className="desc-text"> Departamento de salud </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="jtv-category-area">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="jtv-single-cat">
                  <h2 className="cat-title">Top Rated</h2>
                  <div className="jtv-product">
                    <div className="product-img">
                      {" "}
                      <a href="#l">
                        {" "}
                        <img
                          src="assets/images/products/img10.png"
                          alt=""
                        />{" "}
                        <img
                          className="secondary-img"
                          src="assets/images/products/img10.png"
                          alt=""
                        />{" "}
                      </a>{" "}
                    </div>
                    <div className="jtv-product-content">
                      <h3>
                        <a href="#l">Lorem ipsum dolor sit amet</a>
                      </h3>
                      <div className="price-box">
                        {" "}
                        <span className="regular-price">
                          {" "}
                          <span className="price">$125.00</span>{" "}
                        </span>{" "}
                      </div>
                      <div className="jtv-product-action">
                        <div className="jtv-extra-link">
                          <div className="button-cart">
                            <button>
                              <i className="fa fa-shopping-cart"></i>
                            </button>
                          </div>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#productModal"
                          >
                            <i className="fa fa-search"></i>
                          </a>{" "}
                          <a href="#">
                            <i className="fa fa-heart"></i>
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="jtv-product jtv-cat-margin">
                    <div className="product-img">
                      {" "}
                      <a href="#l">
                        {" "}
                        <img
                          src="assets/images/products/img07.png"
                          alt=""
                        />{" "}
                        <img
                          className="secondary-img"
                          src="assets/images/products/img08.png"
                          alt=""
                        />{" "}
                      </a>{" "}
                    </div>
                    <div className="jtv-product-content">
                      <h3>
                        <a href="#l">Lorem ipsum dolor sit amet</a>
                      </h3>
                      <div className="price-box">
                        <p className="special-price">
                          {" "}
                          <span className="price-label">Special Price</span>{" "}
                          <span className="price"> $456.00 </span>{" "}
                        </p>
                        <p className="old-price">
                          {" "}
                          <span className="price-label">Regular Price:</span>{" "}
                          <span className="price"> $567.00 </span>{" "}
                        </p>
                      </div>
                      <div className="jtv-product-action">
                        <div className="jtv-extra-link">
                          <div className="button-cart">
                            <button>
                              <i className="fa fa-shopping-cart"></i>
                            </button>
                          </div>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#productModal"
                          >
                            <i className="fa fa-search"></i>
                          </a>{" "}
                          <a href="#">
                            <i className="fa fa-heart"></i>
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="jtv-product jtv-cat-margin">
                    <div className="product-img">
                      {" "}
                      <a href="#l">
                        {" "}
                        <img
                          src="assets/images/products/img08.png"
                          alt=""
                        />{" "}
                        <img
                          className="secondary-img"
                          src="assets/images/products/img09.png"
                          alt=""
                        />{" "}
                      </a>{" "}
                    </div>
                    <div className="jtv-product-content">
                      <h3>
                        <a href="#l">Lorem ipsum dolor sit amet</a>
                      </h3>
                      <div className="price-box">
                        {" "}
                        <span className="regular-price">
                          {" "}
                          <span className="price">$225.00</span>{" "}
                        </span>{" "}
                      </div>
                      <div className="jtv-product-action">
                        <div className="jtv-extra-link">
                          <div className="button-cart">
                            <button>
                              <i className="fa fa-shopping-cart"></i>
                            </button>
                          </div>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#productModal"
                          >
                            <i className="fa fa-search"></i>
                          </a>{" "}
                          <a href="#">
                            <i className="fa fa-heart"></i>
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="jtv-single-cat">
                  <h2 className="cat-title">ON SALE</h2>
                  <div className="jtv-product">
                    <div className="product-img">
                      {" "}
                      <a href="#l">
                        {" "}
                        <img
                          src="assets/images/products/img12.png"
                          alt=""
                        />{" "}
                        <img
                          className="secondary-img"
                          src="assets/images/products/img11.png"
                          alt=""
                        />{" "}
                      </a>{" "}
                    </div>
                    <div className="jtv-product-content">
                      <h3>
                        <a href="#l">Lorem ipsum dolor sit amet</a>
                      </h3>
                      <div className="price-box">
                        <p className="special-price">
                          {" "}
                          <span className="price-label">Special Price</span>{" "}
                          <span className="price"> $99.00 </span>{" "}
                        </p>
                        <p className="old-price">
                          {" "}
                          <span className="price-label">Regular Price:</span>{" "}
                          <span className="price"> $119.00 </span>{" "}
                        </p>
                      </div>
                      <div className="jtv-product-action">
                        <div className="jtv-extra-link">
                          <div className="button-cart">
                            <button>
                              <i className="fa fa-shopping-cart"></i>
                            </button>
                          </div>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#productModal"
                          >
                            <i className="fa fa-search"></i>
                          </a>{" "}
                          <a href="#">
                            <i className="fa fa-heart"></i>
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="jtv-product jtv-cat-margin">
                    <div className="product-img">
                      {" "}
                      <a href="#l">
                        {" "}
                        <img
                          src="assets/images/products/img05.png"
                          alt=""
                        />{" "}
                        <img
                          className="secondary-img"
                          src="assets/images/products/img10.png"
                          alt=""
                        />{" "}
                      </a>{" "}
                    </div>
                    <div className="jtv-product-content">
                      <h3>
                        <a href="#l">Lorem ipsum dolor sit amet</a>
                      </h3>
                      <div className="price-box">
                        {" "}
                        <span className="regular-price">
                          {" "}
                          <span className="price">$189.00</span>{" "}
                        </span>{" "}
                      </div>
                      <div className="jtv-product-action">
                        <div className="jtv-extra-link">
                          <div className="button-cart">
                            <button>
                              <i className="fa fa-shopping-cart"></i>
                            </button>
                          </div>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#productModal"
                          >
                            <i className="fa fa-search"></i>
                          </a>{" "}
                          <a href="#">
                            <i className="fa fa-heart"></i>
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="jtv-product jtv-cat-margin">
                    <div className="product-img">
                      {" "}
                      <a href="#l">
                        {" "}
                        <img
                          src="assets/images/products/img01.png"
                          alt=""
                        />{" "}
                        <img
                          className="secondary-img"
                          src="assets/images/products/img03.png"
                          alt=""
                        />{" "}
                      </a>{" "}
                    </div>
                    <div className="jtv-product-content">
                      <h3>
                        <a href="#l">Lorem ipsum dolor sit amet</a>
                      </h3>
                      <div className="price-box">
                        {" "}
                        <span className="regular-price">
                          {" "}
                          <span className="price">$88.99</span>{" "}
                        </span>{" "}
                      </div>
                      <div className="jtv-product-action">
                        <div className="jtv-extra-link">
                          <div className="button-cart">
                            <button>
                              <i className="fa fa-shopping-cart"></i>
                            </button>
                          </div>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#productModal"
                          >
                            <i className="fa fa-search"></i>
                          </a>{" "}
                          <a href="#">
                            <i className="fa fa-heart"></i>
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="jtv-single-cat">
                  <h2 className="cat-title">Fruit Market</h2>
                  <div className="jtv-product">
                    <div className="product-img">
                      {" "}
                      <a href="#l">
                        {" "}
                        <img
                          src="assets/images/products/img15.png"
                          alt=""
                        />{" "}
                        <img
                          className="secondary-img"
                          src="assets/images/products/img10.png"
                          alt=""
                        />{" "}
                      </a>{" "}
                    </div>
                    <div className="jtv-product-content">
                      <h3>
                        <a href="#l">Lorem ipsum dolor sit amet</a>
                      </h3>
                      <div className="price-box">
                        {" "}
                        <span className="regular-price">
                          {" "}
                          <span className="price">$125.00</span>{" "}
                        </span>{" "}
                      </div>
                      <div className="jtv-product-action">
                        <div className="jtv-extra-link">
                          <div className="button-cart">
                            <button>
                              <i className="fa fa-shopping-cart"></i>
                            </button>
                          </div>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#productModal"
                          >
                            <i className="fa fa-search"></i>
                          </a>{" "}
                          <a href="#">
                            <i className="fa fa-heart"></i>
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="jtv-product jtv-cat-margin">
                    <div className="product-img">
                      {" "}
                      <a href="#l">
                        {" "}
                        <img
                          src="assets/images/products/img03.png"
                          alt=""
                        />{" "}
                        <img
                          className="secondary-img"
                          src="assets/images/products/img08.png"
                          alt=""
                        />{" "}
                      </a>{" "}
                    </div>
                    <div className="jtv-product-content">
                      <h3>
                        <a href="#l">Lorem ipsum dolor sit amet</a>
                      </h3>
                      <div className="price-box">
                        <p className="special-price">
                          {" "}
                          <span className="price-label">Special Price</span>{" "}
                          <span className="price"> $456.00 </span>{" "}
                        </p>
                        <p className="old-price">
                          {" "}
                          <span className="price-label">Regular Price:</span>{" "}
                          <span className="price"> $567.00 </span>{" "}
                        </p>
                      </div>
                      <div className="jtv-product-action">
                        <div className="jtv-extra-link">
                          <div className="button-cart">
                            <button>
                              <i className="fa fa-shopping-cart"></i>
                            </button>
                          </div>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#productModal"
                          >
                            <i className="fa fa-search"></i>
                          </a>{" "}
                          <a href="#">
                            <i className="fa fa-heart"></i>
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="jtv-product jtv-cat-margin">
                    <div className="product-img">
                      {" "}
                      <a href="#l">
                        {" "}
                        <img
                          src="assets/images/products/img09.png"
                          alt=""
                        />{" "}
                        <img
                          className="secondary-img"
                          src="assets/images/products/img12.png"
                          alt=""
                        />{" "}
                      </a>{" "}
                    </div>
                    <div className="jtv-product-content">
                      <h3>
                        <a href="#l">Lorem ipsum dolor sit amet</a>
                      </h3>
                      <div className="price-box">
                        {" "}
                        <span className="regular-price">
                          {" "}
                          <span className="price">$225.00</span>{" "}
                        </span>{" "}
                      </div>
                      <div className="jtv-product-action">
                        <div className="jtv-extra-link">
                          <div className="button-cart">
                            <button>
                              <i className="fa fa-shopping-cart"></i>
                            </button>
                          </div>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#productModal"
                          >
                            <i className="fa fa-search"></i>
                          </a>{" "}
                          <a href="#">
                            <i className="fa fa-heart"></i>
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="footer-newsletter">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-sm-7">
                  <form
                    id="newsletter-validate-detail"
                    method="post"
                    action="#"
                  >
                    <h3 className="hidden-sm">Sign up for newsletter</h3>
                    <div className="newsletter-inner">
                      <input
                        className="newsletter-email"
                        name="Email"
                        placeholder="Enter Your Email"
                      />
                      <button
                        className="button subscribe"
                        type="submit"
                        title="Subscribe"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
                <div className="social col-md-4 col-sm-5">
                  <ul className="inline-mode">
                    <li className="social-network fb">
                      <a title="Connect us on Facebook" href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li className="social-network googleplus">
                      <a title="Connect us on Google+" href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li className="social-network tw">
                      <a title="Connect us on Twitter" href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-network linkedin">
                      <a title="Connect us on Linkedin" href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li className="social-network rss">
                      <a title="Connect us on Instagram" href="#">
                        <i className="fa fa-rss"></i>
                      </a>
                    </li>
                    <li className="social-network instagram">
                      <a title="Connect us on Instagram" href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-4 col-xs-12 col-lg-3">
                <div className="footer-logo">
                  <a href="#">
                    <img
                      src="assets/images/footer-logo.png"
                      alt="fotter logo"
                    />
                  </a>{" "}
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the print and typesetting
                  industry.
                </p>
                <div className="footer-content">
                  <div className="email">
                    {" "}
                    <i className="fa fa-envelope"></i>
                    <p>Support@jassa.com</p>
                  </div>
                  <div className="phone">
                    {" "}
                    <i className="fa fa-phone"></i>
                    <p>(800) 0123 456 789</p>
                  </div>
                  <div className="address">
                    {" "}
                    <i className="fa fa-map-marker"></i>
                    <p>
                      {" "}
                      My Company, 12/34 - West 21st Street, Ludhiana, Punjab
                      India
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-xs-12 col-lg-3 collapsed-block">
                <div className="footer-links">
                  <h3 className="links-title">
                    Information
                    <a className="expander visible-xs" href="#TabBlock-1">
                      +
                    </a>
                  </h3>
                  <div className="tabBlock" id="TabBlock-1">
                    <ul className="list-links list-unstyled">
                      <li>
                        <a href="#s">Delivery Information</a>
                      </li>
                      <li>
                        <a href="#">Discount</a>
                      </li>
                      <li>
                        <a href="#">Sitemap</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">FAQs</a>
                      </li>
                      <li>
                        <a href="#">Terms &amp; Condition</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-xs-12 col-lg-3 collapsed-block">
                <div className="footer-links">
                  <h3 className="links-title">
                    Insider
                    <a className="expander visible-xs" href="#TabBlock-3">
                      +
                    </a>
                  </h3>
                  <div className="tabBlock" id="TabBlock-3">
                    <ul className="list-links list-unstyled">
                      <li>
                        {" "}
                        <a href="#"> Sites Map </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">News</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">Trends</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">About Us</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">Contact Us</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">My Orders</a>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-2 col-xs-12 col-lg-3 collapsed-block">
                <div className="footer-links">
                  <h3 className="links-title">
                    Service
                    <a className="expander visible-xs" href="#TabBlock-4">
                      +
                    </a>
                  </h3>
                  <div className="tabBlock" id="TabBlock-4">
                    <ul className="list-links list-unstyled">
                      <li>
                        {" "}
                        <a href="#">Account</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">Wishlist</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">Shopping Cart</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">Return Policy</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">Special</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">Lookbook</a>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-coppyright">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-xs-12 coppyright">
                  {" "}
                  Copyright © 2021 <a href="#"> Organic </a>. All Rights
                  Reserved.{" "}
                </div>
                <div className="col-sm-6 col-xs-12">
                  <div className="payment">
                    <ul>
                      <li>
                        <a href="#">
                          <img
                            title="Visa"
                            alt="Visa"
                            src="assets/images/visa.png"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            title="Paypal"
                            alt="Paypal"
                            src="assets/images/paypal.png"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            title="Discover"
                            alt="Discover"
                            src="assets/images/discover.png"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            title="Master Card"
                            alt="Master Card"
                            src="assets/images/master-card.png"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <a href="#" className="totop">
          {" "}
        </a>

        <div id="myModal" className="modal fade">
          <div className="modal-dialog newsletter-popup">
            <div className="modal-content">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
              <div className="modal-body">
                <h4 className="modal-title">NEWSLETTER SIGNUP</h4>
                <form id="newsletter-form" method="post" action="#">
                  <div className="content-subscribe">
                    <div className="form-subscribe-header">
                      <label>
                        Subscribe to be the first to know about Sales, Events,
                        and Exclusive Offers!
                      </label>
                    </div>
                    <div className="input-box">
                      <input
                        type="text"
                        className="input-text newsletter-subscribe"
                        title="Sign up for our newsletter"
                        name="email"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="actions">
                      <button
                        className="button-subscribe"
                        title="Subscribe"
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
                <div className="subscribe-bottom">
                  <input
                    name="notshowpopup"
                    id="notshowpopup"
                    type="checkbox"
                  />
                  Don’t show this popup again{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default App;
