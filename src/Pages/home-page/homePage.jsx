import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../home-page/homePage.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

function HomePage() {
    return (
        <div className="iq-navbar-custom">
            <nav className="navbar navbar-expand-lg navbar-light p-0">
                <div className="iq-search-bar device-search">
                    <form action="#" className="searchbox">
                        <a className="search-link" href="#">
                            <SearchOutlinedIcon/>
                        </a>
                        <input type="text" className="text search-input" placeholder="Search here..."/>
                    </form>
                </div>
                <div className="d-flex align-items-center">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-label="Toggle navigation">
                        <i className="ri-menu-3-line"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto navbar-list align-items-center">
                            <li className="nav-item nav-icon">
                                <a href="#" className="btn border add-btn shadow-none mx-2 d-none d-md-block"
                                   data-toggle="modal" data-target="#new-order">
                                   <AddOutlinedIcon/>
                                    New Order</a>
                            </li>
                            <li className="nav-item nav-icon dropdown">
                                <a href="#" className="search-toggle" id="dropdownMenuButton2"
                                   aria-haspopup="true" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="feather feather-mail">
                                        <path
                                            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                        </path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                    <span className="bg-primary"></span>
                                </a>
                            </li>
                            <li className="nav-item nav-icon">
                                <a href="#" className="search-toggle" id="dropdownMenuButton"
                                   aria-haspopup="true" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" className="feather feather-bell">
                                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                    </svg>
                                    <span className="bg-primary "></span>
                                </a>
                            </li>
                            <li className="nav-item nav-icon dropdown caption-content">
                                <a href="#" className="search-toggle" id="dropdownMenuButton4"
                                   aria-haspopup="true" aria-expanded="false">
                                    <img src='https://templates.iqonic.design/posdash/html/assets/images/user/1.png'
                                         className="img-fluid rounded" alt="user"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default HomePage;
