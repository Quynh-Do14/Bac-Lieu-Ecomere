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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [sdt, setSdt] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [validate, setValidate] = useState({})
    const [submittedTime, setSubmittedTime] = useState(null);

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
        window.location.reload();
    };
    //////////////

    const isValidData = () => {
        onBlurEmail(true);
        onBlurPassword(true);

        onBlurUserName(true);
        onBlurSdt(true);
        onBlurFirstName(true);
        onBlurLastName(true);
        onBlurAddress(true);
        setValidate({ ...validate });
        let checkEmail = !!email;
        let checkPassword = !!password;
        let checkUserName = !!userName;
        let checkSdt = !!sdt;
        let checkFirstName = !!firstName;
        let checkLastName = !!lastName;
        let checkAddress = !!address;

        return !(!checkEmail ||
            !checkPassword ||
            !checkUserName ||
            !checkSdt ||
            !checkFirstName ||
            !checkAddress ||
            !checkLastName
        );

    };

    const onBlurEmail = (isImplicitChange = false) => {
        let checkEmail = validateEmail(email);
        setEmail(email.trim())
        validateFields(isImplicitChange, "email", !checkEmail, setValidate, validate, !checkEmail ? email ? `Vui lòng nhập đúng định dạng email` : `Vui lòng nhập email` : "");
    }

    const onBlurPassword = (isImplicitChange = false) => {
        let checkPassword = validateInputPassword(password);
        setPassword(password.trim())
        validateFields(isImplicitChange, "password", !checkPassword, setValidate, validate, !checkPassword ? password ? `Vui lòng nhập đúng định dạng mật khẩu` : `Vui lòng nhập mật khẩu` : "");
    };

    const onBlurUserName = (isImplicitChange = false) => {
        let checkUserName = !!userName;
        setUserName(userName.trim())
        validateFields(isImplicitChange, "userName", !checkUserName, setValidate, validate, !userName ? "Vui lòng nhập tên người dùng" : "");
    };


    const onBlurSdt = (isImplicitChange = false) => {
        let checkSdt = !!sdt;
        setSdt(sdt.trim())
        validateFields(isImplicitChange, "sdt", !checkSdt, setValidate, validate, !sdt ? "Vui lòng nhập số điện thoại" : "");
    };


    const onBlurFirstName = (isImplicitChange = false) => {
        let checkFirstName = !!firstName;
        setFirstName(firstName.trim())
        validateFields(isImplicitChange, "firstName", !checkFirstName, setValidate, validate, !firstName ? "Vui lòng nhập tên" : "");
    };


    const onBlurLastName = (isImplicitChange = false) => {
        let checkLastName = !!lastName;
        setLastName(lastName.trim())
        validateFields(isImplicitChange, "lastName", !checkLastName, setValidate, validate, !lastName ? "Vui lòng nhập họ" : "");
    };


    const onBlurAddress = (isImplicitChange = false) => {
        let checkAddress = !!address;
        setAddress(address.trim())
        validateFields(isImplicitChange, "address", !checkAddress, setValidate, validate, !address ? "Vui lòng nhập địa chỉ" : "");
    };

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onChangeUserName = (e) => {
        setUserName(e.target.value);
    };

    const onChangeSdt = (e) => {
        setSdt(e.target.value);
    };

    const onChangeFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const onChangeLastName = (e) => {
        setLastName(e.target.value);
    };
    const onChangeAddress = (e) => {
        setAddress(e.target.value);
    };


    const onSubmit = async (e) => {
        // await setSubmittedTime(Date.now());
        onCloseLogin();
        // if (isValidData()) {
        const login = await api.login({
            email: email,
            password: password,
        },
            setLoading
        );
        if (login.success == true) {
            sessionStorage.setItem(Constants.TOKEN, login.data.token)
            navigate(ROUTE_PATH.HOME_PAGE);
        }
        return false;
        // }
        // else {
        //     WarningMessage("Nhập thiếu thông tin", "Vui lòng nhập đầy đủ thông tin")
        // };
    }
    const onRegister = async () => {
        await setSubmittedTime(Date.now());
        onCloseRegister();
        if (isValidData()) {
            await api.register({
                email: email,
                password: password,
                userName: userName,
                address: address,
                sdt: sdt,
            },
                setLoading
            );
            return false;
        }
        // else {
        //     WarningMessage("Nhập thiếu thông tin", "Vui lòng nhập đầy đủ thông tin")
        // };
    }


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
                onChangeEmail={onChangeEmail}
                onChangePassword={onChangePassword}
                onSubmit={onSubmit}
                onOpenRegister={onOpenRegister}
                validate={validate}
                setValidate={setValidate}
                onBlurEmail={onBlurEmail}
                onBlurPassword={onBlurPassword}F
            />
            <ModalRegister
                visible={isOpenRegister}
                handleCancel={onCloseRegister}
                onChangeEmail={onChangeEmail}
                onChangePassword={onChangePassword}
                onChangeUserName={onChangeUserName}
                onChangeSdt={onChangeSdt}
                onChangeFirstName={onChangeFirstName}
                onChangeLastName={onChangeLastName}
                onChangeAddress={onChangeAddress}
                onSubmit={onRegister}
                validate={validate}
                setValidate={setValidate}
                onBlurEmail={onBlurEmail}
                onBlurPassword={onBlurPassword}
                onBlurUserName={onBlurUserName}
                onBlurSdt={onBlurSdt}
                onBlurFirstName={onBlurFirstName}
                onBlurLastName={onBlurLastName}
                onBlurAddress={onBlurAddress}
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