import { Modal } from 'antd'
import React, { useState } from 'react'
import Constants from '../../../core/common/constant';
import { MessageError } from '../controls/MessageError';
import api from '../../api';
import { validateEmail, validateInputPassword } from '../../utils/validate';
import { validateFields } from '../../utils/helper';
import { ROUTE_PATH } from '../../../core/common/appRouter';
import { WarningMessage } from '../toast/toastMessage';
import { useNavigate } from 'react-router-dom';

const ModalLogin = ({
    visible,
    handleCancel,
    // onChangeEmail,
    // onChangePassword,
    // onSubmit,
    onOpenRegister,
    setLoading,
    isCurrentPage
    // validate,
    // setValidate,
    // onBlurEmail,
    // onBlurPassword,
}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validate, setValidate] = useState({})
    const [submittedTime, setSubmittedTime] = useState(null);
    const navigate = useNavigate();
    const isValidData = () => {
        onBlurEmail(true);
        onBlurPassword(true);

        setValidate({ ...validate });
        let checkEmail = !!email;
        let checkPassword = !!password;

        return !(!checkEmail ||
            !checkPassword
        );
    };

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
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

    const onSubmit = async (e) => {
        await setSubmittedTime(Date.now());
        handleCancel();
        if (isValidData()) {
            const login = await api.login({
                email: email,
                password: password,
            },
                setLoading
            );
            if (login.success == true) {
                sessionStorage.setItem(Constants.TOKEN, login.data.token)
                if(!isCurrentPage){
                    navigate(ROUTE_PATH.HOME_PAGE);
                }
            }
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
                onCancel={handleCancel}
                width={700}
            >
                {/* <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document"> */}
                <div class="modal-content">
                    {/* <div class="modal-header bordernone p-0">
                        <button type="button" class="close" onClick={handleCancel}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div> */}
                    <div class="modal-body p-0">
                        <div class="login-content p-4 text-center">
                            <div class="login-title section-border">
                                <h3 class="pink">ĐĂNG NHẬP</h3>
                            </div>
                            <div class="login-form">
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
                                </form>
                                <div class="form-btn">
                                    <a onClick={onSubmit} class="nir-btn white">Đăng nhập</a>
                                </div>
                                {/* <div class="form-group mb-0 form-checkbox mt-3">
                                    <input type="checkbox" /> Remember Me | <a href="#" class="">Forgot password?</a>
                                </div> */}
                            </div>
                            <div class="login-social border-t mt-3 pt-2 mb-3">
                                {/* <p class="mb-2">OR continue with</p>
                                <a href="#" class="btn-facebook"><i class="fab fa-facebook" aria-hidden="true"></i> Facebook</a>
                                <a href="#" class="btn-twitter"><i class="fab fa-twitter" aria-hidden="true"></i> Twitter</a> */}
                            </div>
                            <div class="sign-up">
                                <p class="m-0">Bạn đã có tài khoản chưa?<a onClick={onOpenRegister} class="pink">Đăng kí</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
                {/* </div> */}
            </Modal>
        </div>
    )
}

export default ModalLogin