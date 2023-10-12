import { Modal } from 'antd'
import React from 'react'

const ModalConfirm = ({ title, visible, handleOk, handleCancel }) => {
    return (
        <div className=''>
            <Modal
                centered
                className='modal-common'
                visible={visible}
                closable={false}
                footer={false}
                onCancel={() => handleCancel()}
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
                                <h3 class="pink mb-1">Xác nhận</h3>
                                <p>{title}</p>
                            </div>
                            <div class="login-form text-center">
                                <div class="form-btn">
                                    <a class="nir-btn-red m-2 white" onClick={handleCancel}>Hủy</a>

                                    <a class="nir-btn m-2 white" onClick={handleOk}>Đăng xuất</a>
                                </div>

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

export default ModalConfirm