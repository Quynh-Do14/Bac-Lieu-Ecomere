import { Modal } from 'antd'
import React from 'react'
import { MessageError } from '../controls/MessageError'

const ModalRegister = ({
    visible,
    handleCancel,
    onChangeEmail,
    onChangePassword,
    onChangeUserName,
    onChangeSdt,
    onChangeFirstName,
    onChangeLastName,
    onChangeAddress,
    onSubmit,
    validate,
    setValidate,
    onBlurEmail,
    onBlurPassword,
    onBlurUserName,
    onBlurSdt,
    onBlurFirstName,
    onBlurLastName,
    onBlurAddress,
}) => {
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
                                    <div class="form-group">
                                        <input type="text"
                                            onBlur={() => onBlurUserName(false)}
                                            onChange={onChangeUserName} placeholder="Nhập tên đăng nhập" />
                                        <MessageError isError={validate.userName?.isError || false}
                                            message={validate.userName?.message || ""} />
                                    </div>
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
                                    <a class="nir-btn white" onClick={onSubmit}>Đăng kí</a>
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
                                <p class="m-0">Bạn đã có tài khoản? <a class="pink" onClick={handleCancel}>Đăng nhập</a></p>
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