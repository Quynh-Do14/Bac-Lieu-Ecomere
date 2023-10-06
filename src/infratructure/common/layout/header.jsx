import React from 'react'
import Constants from '../../../core/common/constant';
import { useLocation } from 'react-router-dom';
// import logoWhite from "../../../assets/images/logo-white.png"
// import logo from "../../../assets/images/logo.png"
// import { DownOutlined } from "@ant-design/icons";

const HeaderPage = () => {
    const location = useLocation();
    let aa = location.pathname

    console.log('a', aa);
    return (
        <header className="main_header_area headerstye-1">
            {/* Navigation Bar */}
            <div className="header_menu" id="header_menu">
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-flex d-flex align-items-center justify-content-between w-100 pb-2 pt-2">
                            {/* Brand and toggle get grouped for better mobile display */}
                            <div className="navbar-header">
                                <a className="navbar-brand" href="index.html">
                                    <img src="./images/logo-white.png" alt="image" height={90} />
                                    <img src="./images/logo.png" alt="image" style={{ maxHeight: 57 }} />
                                </a>
                            </div>
                            {/* Collect the nav links, forms, and other content for toggling */}
                            <div
                                className="navbar-collapse1 d-flex align-items-center"
                                id="bs-example-navbar-collapse-1"
                            >
                                <ul className="nav navbar-nav" id="responsive-menu">
                                    {Constants.Menu.List.map((it, index) => {
                                        return (
                                            <li className={`${aa === (it.link) ? "menu-title active" : "menu-title"}`} key={index}>
                                                <a href={it.link}>{it.label} </a>
                                            </li>
                                        )

                                    })}
                                </ul>
                            </div>
                            {/* /.navbar-collapse */}
                            {/* <div className="register-login">
                                <a
                                    href="#"
                                    className="mr-2"
                                    data-toggle="modal"
                                    data-target="#register"
                                >
                                    <i className="icon-user mr-1" /> Đăng kí
                                </a>
                                <a href="#" data-toggle="modal" data-target="#login">
                                    <i className="icon-login mr-1" /> Đăng nhập
                                </a>
                            </div> */}
                            <div id="slicknav-mobile" />
                        </div>
                    </div>
                    {/* /.container-fluid */}
                </nav>
            </div>
            {/* Navigation Bar Ends */}
        </header>
    )
}

export default HeaderPage;