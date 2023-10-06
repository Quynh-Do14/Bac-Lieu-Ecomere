import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="pt-10 bubbles footermain">
                <div className="footer-upper pb-5">
                    <div className="container">
                        <div className="footer-about bg-white p-4">
                            <img src="./images/logo.png" alt="" />
                            <ul style={{ display: "flex", flexDirection: "column", justifyContent: "start" }}>
                                <li>
                                    <strong>Hotline:</strong> +84944125693
                                </li>
                                <li>
                                    <strong>Địa chỉ:</strong> 5 D. Nguyễn Tất Thành, Phường 1, Bạc Liêu
                                </li>
                                <li>
                                    <strong>Email:</strong> vpubndt@baclieu.gov.vn
                                </li>
                                <li>
                                    <strong>Website:</strong> https://vpubnd.baclieu.gov.vn
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer