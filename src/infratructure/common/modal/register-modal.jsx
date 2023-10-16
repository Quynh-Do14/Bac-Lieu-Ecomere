import { Modal } from 'antd'
import React, { useState } from 'react'
import { MessageError } from '../controls/MessageError'
import { validateFields } from '../../utils/helper';
import { validateEmail, validateInputPassword } from '../../utils/validate';
import { WarningMessage } from '../toast/toastMessage';
import api from '../../api';

const ModalRegister = ({
    visible,
    handleCancel,
    setLoading
}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [sdt, setSdt] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [validate, setValidate] = useState({})
    const [submittedTime, setSubmittedTime] = useState(null);

    const isValidData = () => {
        onBlurEmail(true);
        onBlurPassword(true);
        // onBlurUserName(true);
        onBlurSdt(true);
        onBlurFirstName(true);
        onBlurLastName(true);
        onBlurAddress(true);
        setValidate({ ...validate });
        let checkEmail = !!email;
        let checkPassword = !!password;
        // let checkUserName = !!userName;
        let checkSdt = !!sdt;
        let checkFirstName = !!firstName;
        let checkLastName = !!lastName;
        let checkAddress = !!address;

        return !(!checkEmail ||
            !checkPassword ||
            // !checkUserName ||
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

    // const onBlurUserName = (isImplicitChange = false) => {
    //     let checkUserName = !!userName;
    //     setUserName(userName.trim())
    //     validateFields(isImplicitChange, "userName", !checkUserName, setValidate, validate, !userName ? "Vui lòng nhập tên người dùng" : "");
    // };


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

    // const onChangeUserName = (e) => {
    //     setUserName(e.target.value);
    // };

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


    const onRegister = async () => {
        await setSubmittedTime(Date.now());
        if (isValidData()) {
            await api.register({
                email: email,
                password: password,
                // userName: userName,
                address: address,
                sdt: sdt,
                firstName: firstName,
                lastName: lastName
            },
                handleCancel,
                setLoading
            );
            return false;

        }
        else {
            WarningMessage("Nhập thiếu thông tin", "Vui lòng nhập đầy đủ thông tin")
        };
    }


    return (
        <div className=''>
            <Modal
                centered
                className='modal-common'
                visible={visible}
                closable={false}
                footer={false}
                onCancel={() => handleCancel()}
                width={700}
            >
                {/* <div class="modal fade" id="register" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document"> */}
                <div class="modal-content">
                    {/* <div class="modal-header bordernone p-0">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div> */}
                    <div class="modal-body p-0">
                        <div class="login-content p-4 text-center">
                            <div class="login-title section-border">
                                <h3 class="pink mb-1">ĐĂNG KÍ</h3>
                                <p>Đăng kí tài khoản</p>
                            </div>
                            <div class="login-form text-center">
                                <form>
                                    <div class="form-group">
                                        <input type="email"
                                            onBlur={() => onBlurEmail(false)}
                                            onChange={onChangeEmail} placeholder="Nhập tên email" />
                                        <MessageError isError={validate.email?.isError || false}
                                            message={validate.email?.message || ""} />
                                    </div>
                                    <div class="form-group">
                                        <input type="password"
                                            onBlur={() => onBlurPassword(false)}
                                            onChange={onChangePassword} placeholder="Nhập mật khẩu" />
                                        <MessageError isError={validate.password?.isError || false}
                                            message={validate.password?.message || ""} />
                                    </div>
                                    {/* <div class="form-group">
                                        <input type="text"
                                            onBlur={() => onBlurUserName(false)}
                                            onChange={onChangeUserName} placeholder="Nhập tên đăng nhập" />
                                        <MessageError isError={validate.userName?.isError || false}
                                            message={validate.userName?.message || ""} />
                                    </div> */}
                                    <div class="form-group">
                                        <input type="text"
                                            onBlur={() => onBlurSdt(false)}
                                            onChange={onChangeSdt} placeholder="Nhập số điện thoại" />
                                        <MessageError isError={validate.sdt?.isError || false}
                                            message={validate.sdt?.message || ""} />
                                    </div>
                                    <div class="form-group">
                                        <input type="text"
                                            onBlur={() => onBlurFirstName(false)}
                                            onChange={onChangeFirstName} placeholder="Nhập tên" />
                                        <MessageError isError={validate.firstName?.isError || false}
                                            message={validate.firstName?.message || ""} />
                                    </div>
                                    <div class="form-group">
                                        <input type="text"
                                            onBlur={() => onBlurLastName(false)}
                                            onChange={onChangeLastName} placeholder="Nhập họ" />
                                        <MessageError isError={validate.lastName?.isError || false}
                                            message={validate.lastName?.message || ""} />
                                    </div>
                                    <div class="form-group">
                                        <input type="text"
                                            onBlur={() => onBlurAddress(false)}
                                            onChange={onChangeAddress} placeholder="Nhập địa chỉ " />
                                        <MessageError isError={validate.address?.isError || false}
                                            message={validate.address?.message || ""} />
                                    </div>

                                </form>
                                <div class="form-btn">
                                    <a class="nir-btn white" onClick={onRegister}>Đăng kí</a>
                                </div>
                                {/* <div class="form-group mb-0 form-checkbox mt-3">
                                    <input type="checkbox" /> By clicking this, you are agree to to<a href="#" class=""> our terms of use</a> and <a href="#" class="">privacy policy</a> including the use of cookies
                                </div> */}
                            </div>
                            <div class="login-social border-t mt-3 pt-2 mb-3">
                                {/* <p class="mb-2">OR continue with</p>
                                <a href="#" class="btn-facebook"><i class="fab fa-facebook" aria-hidden="true"></i> Facebook</a>
                                <a href="#" class="btn-twitter"><i class="fab fa-twitter" aria-hidden="true"></i> Twitter</a>
                                <a href="#" class="btn-google"><i class="fab fa-google" aria-hidden="true"></i> Google</a> */}
                            </div>
                            <div class="sign-up">
                                <p class="m-0">Bạn đã có tài khoản? <a class="pink ml-1" onClick={handleCancel}>Đăng nhập</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div>
            </div> */}
            </Modal>
        </div>
    )
}

export default ModalRegister