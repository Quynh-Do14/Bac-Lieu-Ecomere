import React, { useState } from 'react'
import Constants from '../../../core/common/constant';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '../../../core/common/appRouter';
import ModalLogin from '../modal/login-modal';
import ModalRegister from '../modal/register-modal';
import api from '../../api';
import { Dropdown, Space } from 'antd';
import ModalConfirm from '../modal/confirm-modal';
import LoadingFullPage from '../controls/loading';
import { validateFields } from '../../utils/helper';
import { validateEmail, validateInputPassword } from '../../utils/validate';
// import logoWhite from "../../../assets/images/logo-white.png"
// import logo from "../../../assets/images/logo.png"
// import { DownOutlined } from "@ant-design/icons";

const HeaderPage = () => {
    const [isOpenLogin, setIsOpenLogin] = useState(false);
    const [isOpenRegister, setIsOpenRegister] = useState(false);

    const [loading, setLoading] = useState(false);
    const [isOpenModalLogout, setIsOpenModalLogout] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    let aa = location.pathname;
    let storage = sessionStorage.getItem(Constants.TOKEN);

    const onOpenLogin = () => {
        setIsOpenLogin(true);
    };

    const onCloseLogin = () => {
        setIsOpenLogin(false);
    };

    const onOpenRegister = () => {
        setIsOpenRegister(true);
    };

    const onCloseRegister = () => {
        setIsOpenRegister(false);
    };
    /////////////////
    const openModalLogout = () => {
        setIsOpenModalLogout(true);
    };

    const closeModalLogout = () => {
        setIsOpenModalLogout(false);
    };

    const onLogout = () => {
        sessionStorage.clear();
        closeModalLogout();
        navigate(ROUTE_PATH.HOME_PAGE);
        window.location.reload();
    };
    //////////////

    const ItemMenu = () => {
        return (
            <div class="header_sidemenu register-login pointer bg-white p-2" style={{ borderRadius: 5 }}>
                <span className='auth-title' onClick={openModalLogout} ><i className="icon-login mr-1" /> Đăng xuất</span>
            </div>
        )
    }

    return (
        <header className="main_header_area headerstye-1">
            {/* Navigation Bar */}
            <div className="header_menu" id="header_menu">
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-flex d-flex align-items-center justify-content-between w-100 pb-2 pt-2">
                            {/* Brand and toggle get grouped for better mobile display */}
                            <div className="navbar-header">
                                <a className="navbar-brand" href={ROUTE_PATH.HOME_PAGE}>
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
                                            <li className={`${aa == (it.link) ? "menu-title active" : "menu-title"}`} key={index}>
                                                <a href={it.link}>{it.label} </a>
                                            </li>
                                        )

                                    })}
                                    {/* {
                                        storage ?
                                            <li className="menu-title mobile-screen" >
                                                <div onClick={openModalLogout}>Đăng xuất </div>
                                            </li>
                                            :
                                            <li onClick={onOpenLogin} className="menu-title mobile-screen" >
                                                <a >Đăng nhập </a>
                                            </li>
                                    } */}
                                </ul>
                            </div>
                            {/* /.navbar-collapse */}

                            {
                                storage ?
                                    // <div class="header_sidemenu">
                                    //     <div class="mhead">
                                    //         <span class="menu-ham">
                                    //             <a class="cart-icon d-flex align-items-center ml-1"><span className='auth-title'>Đăng xuất</span> <i className="icon-user ml-2 mr-1" /></a>
                                    //         </span>
                                    //     </div>
                                    // </div>
                                    <div class="header_sidemenu">
                                        <Space
                                            size="small"
                                        >
                                            <Dropdown
                                                overlay={ItemMenu}
                                                placement="bottomLeft"
                                                arrow
                                            >
                                                <span class="menu-ham">
                                                    <a class="cart-icon d-flex align-items-center ml-1"><i className="icon-user ml-2 mr-1" /></a>
                                                </span>
                                            </Dropdown>
                                        </Space>
                                    </div>
                                    :
                                    <div className="register-login">
                                        {/* <a onClick={onOpenRegister} className='auth-title'>
                                            <i className="icon-user mr-1" /> Đăng kí
                                        </a> */}
                                        <a onClick={onOpenLogin} className='auth-title ml-1'>
                                            <i className="icon-user mr-1" />  Đăng nhập
                                        </a>
                                    </div>
                            }

                            {
                                storage
                                    ?
                                    <div className='mobile-screen '>
                                        <a onClick={openModalLogout} className='ml-1 d-flex align-items-center white'>
                                            <div className='logout-icon'>
                                                <i className="icon-user mr-1 " />
                                            </div>
                                            <div className='mobile-screen-text'>
                                                Đăng xuất
                                            </div>
                                        </a>
                                    </div>
                                    :
                                    <div className='mobile-screen'>
                                        <a onClick={onOpenLogin} className='ml-1 d-flex align-items-center white'>
                                            <div className='logout-icon'>
                                                <i className="icon-user mr-1 " />
                                            </div>
                                            <div className='mobile-screen-text'>
                                                Đăng nhập
                                            </div>
                                        </a>
                                    </div>
                            }
                            <div id="slicknav-mobile" />
                        </div>
                    </div>
                    {/* /.container-fluid */}
                </nav>
                <LoadingFullPage loading={loading} />
            </div>

            <ModalLogin
                visible={isOpenLogin}
                handleCancel={onCloseLogin}
                setLoading={setLoading}
                onOpenRegister={onOpenRegister}
            />
            <ModalRegister
                visible={isOpenRegister}
                handleCancel={onCloseRegister}
                setLoading={setLoading}
            />
            <ModalConfirm
                visible={isOpenModalLogout}
                title={"Bạn có muốn đăng xuất ra khỏi hệ thống?"}
                handleCancel={closeModalLogout}
                handleOk={onLogout}
            />
        </header>
    )
}

export default HeaderPage;