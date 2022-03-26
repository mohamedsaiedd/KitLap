import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { Icon } from '@iconify/react';

import { useSelector } from "react-redux"
import CartIcon from '../components/cartIcon'
import CartItem from './cartItem'
import { Search } from './search'

const Header = () => {


  const closeMenu = (e) => {
    e.target.closest(".dropdown").classList.remove("show");
    e.target.closest(".dropdown .dropdown-menu").classList.remove("show");
  }

  const toggleHeaderMenu = (e) => {
    e.preventDefault();
    document.querySelector("body").classList.toggle("az-header-menu-show");
  }

  const componentDidUpdate = (prevProps) => {
    if (this.props.location !== prevProps.location) {
      document.querySelector("body").classList.remove("az-header-menu-show");
    }
  }





  const cartStore = useSelector(state => state.cartReducer)

  // console.log(cartStore.cartIconNo)

  return (
    <div>
      <div className="az-header">
        <div className="container">
          <div className="az-header-left">
            <a href="/preview/dashboard" className="az-logo">
              <span>KIT</span> LAP
            </a>
            <a
              id="azMenuShow"
              onClick={event => this.toggleHeaderMenu(event)}
              className="az-header-menu-icon d-lg-none"
              href="#/"
            >
              <span></span>
            </a>
          </div>
          <div className="az-header-menu">
            <div className="az-header-menu-header">
              <Link to="/" className="az-logo">
                <span></span> Kitlap
              </Link>
              <a
                href="#/"
                onClick={event => this.toggleHeaderMenu(event)}
                className="close"
              >
                &times;
              </a>
            </div>
            {/* <ul className="nav">
                <li
                  className={
                    isPathActive("/dashboard")
                      ? "nav-item active "
                      : "nav-item"
                  }
                >
                  <Link to="/" className="nav-link">
                    <i className="typcn typcn-starburst-outline"></i> 
                   SHOP
                  </Link>
                  
                </li>
                <li
                  className={
                    isPathActive("/pages/men")
                      ? "nav-item active"
                      : "nav-item "
                  }
                >
                  <Link to="/pages/men" className="nav-link">
                    <i className="typcn typcn-chart-area-outline"></i> 
                    MEN
                  </Link>
                  
                </li>

                <li
                  className={
                    isPathActive("/pages/women")
                      ? "nav-item active"
                      : "nav-item"
                  }
                >
                  <Link to="/pages/women" className="nav-link">
                    <i className="typcn typcn-chart-area-outline"></i> WOMEN
                  </Link>
                  
                </li>

                <li
                  className={
                    isPathActive("/pages/electronics")
                      ? "nav-item active"
                      : "nav-item"
                  }
                >
                  <Link to="/pages/electronics" className="nav-link">
                    <i className="typcn typcn-chart-area-outline"></i> ELECTRONICS
                  </Link>
                  
                </li>
                <li className="nav-item">
                  <Dropdown
                    className={
                      isPathActive("/ui-elements") ||
                      isPathActive("/form") ||
                      isPathActive("/charts") ||
                      isPathActive("/tables")
                        ? "nav-item active"
                        : "nav-item"
                    }
                  >
                    <Dropdown.Toggle as={"a"} className="nav-link with-sub">
                      <i className="typcn typcn-book"></i> Components
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="az-menu-sub az-menu-sub-mega">
                      <div className="container">
                        <div>
                          <nav className="nav">
                            <span>UI Elements</span>
                            <Link
                              to="/ui-elements/buttons"
                              className={
                                isPathActive("/ui-elements/buttons")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Buttons
                            </Link>
                            <Link
                              to="/ui-elements/dropdowns"
                              className={
                                isPathActive("/ui-elements/dropdowns")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Dropdown
                            </Link>
                            <Link
                              to="/ui-elements/icons"
                              className={
                                isPathActive("/ui-elements/icons")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Icons
                            </Link>
                          </nav>
                        </div>
                        <div>
                          <nav className="nav">
                            <span>Forms</span>
                            <Link
                              to="/form/form-elements"
                              className={
                                isPathActive("/form/form-elements")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Form Elements
                            </Link>
                          </nav>
                        </div>
                        <div>
                          <nav className="nav">
                            <span>Charts</span>
                            <Link
                              to="/charts/chartjs"
                              className={
                                isPathActive("/charts/chartjs")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              ChartJS
                            </Link>
                          </nav>
                        </div>
                        <div>
                          <nav className="nav">
                            <span>Tables</span>
                            <Link
                              to="/tables/basic-table"
                              className={
                                isPathActive("/tables/basic-table")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Basic Tables
                            </Link>
                          </nav>
                        </div>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="nav-item">
                  <Dropdown
                    className={
                      isPathActive("/general-pages")
                        ? "nav-item active"
                        : "nav-item"
                    }
                  >
                    <Dropdown.Toggle as={"a"} className="nav-link with-sub">
                      <i className="typcn typcn-document"></i> SETTINGS
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="az-menu-sub">
                      <Link
                        to="/general-pages/signin"
                        className={
                          isPathActive("/general-pages/signin")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        Sign In
                      </Link>
                      <Link
                        to="/general-pages/signup"
                        className={
                          isPathActive("/general-pages/signup")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        Sign Up
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul> */}
            <ul className="nav">
              <li
                className="nav-item"

              >
                <Link className="nav-link">
                  <Search />
                </Link>

              </li>
            </ul>
          </div >
          <div className="az-header-right">
            {/* <a href="/" className="az-header-search-link">
                <i className="fas fa-file-alt"></i>
              </a> */}
            {/* <a href="#/" className="az-header-search-link">
                <i className="fas fa-search"></i>
              </a> */}
            <div className="az-header-message">
              <Link to="#/">
                <i className="typcn typcn-messages"></i>
              </Link>
            </div>
            <Dropdown className="az-header-notification  ">
              <Dropdown.Toggle as={"a"} className="new">
                {/* <i className="typcn typcn-bell"></i> */}
                <CartIcon ItemCount={cartStore.menuAccItems.length} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <div className="az-dropdown-header mg-b-20 d-sm-none">
                  <a
                    href="#/ "
                    onClick={event => this.closeMenu(event)}
                    className="az-header-arrow"
                  >
                    <i className="icon ion-md-arrow-back"></i>
                  </a>
                </div>
                <h6 className="az-notification-title">Cart</h6>
                <p className="az-notification-text">
                  You have {cartStore.menuAccItems.length} items selected
                </p>
                <div className="az-notification-list">
                  <CartItem />
                </div>
                <div className="dropdown-footer">
                  <Link to="/pages/cart">View Cart</Link>
                </div>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="az-profile-menu userProfile">
              <Dropdown.Toggle as={"a"} className="az-img-user">
                <img
                  src={require("../../assets/images/img7.jpg")}
                  alt=""
                ></img>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <div className="az-dropdown-header d-sm-none">
                  <a
                    href="#/"
                    onClick={event => this.closeMenu(event)}
                    className="az-header-arrow"
                  >
                    <i className="icon ion-md-arrow-back"></i>
                  </a>
                </div>
                <div className="az-header-profile">
                  <div className="az-img-user">
                    <img
                      src={require("../../assets/images/img7.jpg")}
                      alt=""
                    ></img>
                  </div>
                  <h6>mohamed saied</h6>
                  <span>Premium Member</span>
                </div>

                <a href="#/" className="dropdown-item">
                  <i className="typcn typcn-user-outline"></i> My Profile
                </a>
                <a href="#/" className="dropdown-item">
                  <i className="typcn typcn-edit"></i> Edit Profile
                </a>
                <a href="#/" className="dropdown-item">
                  <i className="typcn typcn-time"></i> Activity Logs
                </a>
                <a href="#/" className="dropdown-item">
                  <i className="typcn typcn-cog-outline"></i> Account Settings
                </a>
                <Link to="/general-pages/signin" className="dropdown-item">
                  <i className="typcn typcn-power-outline"></i> Sign Out
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}


const isPathActive = (path) => {
  return

  this.props.location.pathname.startsWith(path)


}
export default withRouter(Header);
