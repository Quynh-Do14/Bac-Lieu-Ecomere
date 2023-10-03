import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="pt-10 bubbles footermain">
                <div className="footer-upper pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4">
                                <div className="footer-about bg-white p-4">
                                    <img src="./images/logo.png" alt="" />
                                    <p className="mt-3">
                                        In ut odio libero, at vulputate urna. Nulla tristique mi a
                                        massa convallis cursus. Nulla eu mi magna
                                    </p>
                                    <ul>
                                        <li>
                                            <strong>PO Box:</strong> +47-252-254-2542
                                        </li>
                                        <li>
                                            <strong>Location:</strong> Collins Street, sydney,
                                            Australia
                                        </li>
                                        <li>
                                            <strong>Email:</strong> info@Yatriiworld.com
                                        </li>
                                        <li>
                                            <strong>Website:</strong> www.Yatriiworld.com
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12 col-xs-12 mb-4">
                                <div className="footer-links">
                                    <h4 className="white">Company</h4>
                                    <ul>
                                        <li>
                                            <a href="about-us.html">About Us</a>
                                        </li>
                                        <li>
                                            <a href="#">Delivery Information</a>
                                        </li>
                                        <li>
                                            <a href="#">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="#">Terms &amp; Conditions</a>
                                        </li>
                                        <li>
                                            <a href="#">Customer Service</a>
                                        </li>
                                        <li>
                                            <a href="#">Return Policy</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12 col-xs-12 mb-4">
                                <div className="footer-links">
                                    <h4 className="white">Services</h4>
                                    <ul>
                                        <li>
                                            <a href="#">Payment</a>
                                        </li>
                                        <li>
                                            <a href="#">Feedback</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact us</a>
                                        </li>
                                        <li>
                                            <a href="#">Our Service</a>
                                        </li>
                                        <li>
                                            <a href="#">FAQ</a>
                                        </li>
                                        <li>
                                            <a href="#">Site map</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4">
                                <div className="footer-links">
                                    <h4 className="white">Newsletter</h4>
                                    <p>
                                        Want to be notified when we launch a new template or an
                                        udpate. Just sign up and we'll send you a notification by
                                        email.
                                    </p>
                                    <div className="newsletter-form">
                                        <form>
                                            <input type="email" placeholder="Enter your email" />
                                            <input
                                                type="submit"
                                                className="nir-btn mt-2 w-100"
                                                defaultValue="Subscribe"
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-payment">
                    <div className="container">
                        <div className="footer-pay d-md-flex align-items-center justify-content-between pt-2 pb-2">
                            <div className="footer-payment-nav">
                                <ul className="d-md-flex align-items-center">
                                    <li className="mr-2">We Support:</li>
                                    <li className="mr-2">
                                        <i className="fab fa-cc-mastercard" />
                                    </li>
                                    <li className="mr-2">
                                        <i className="fab fa-cc-paypal" />
                                    </li>
                                    <li className="mr-2">
                                        <i className="fab fa-cc-stripe" />
                                    </li>
                                    <li className="mr-2">
                                        <i className="fab fa-cc-visa" />
                                    </li>
                                    <li className="mr-2">
                                        <i className="fab fa-cc-discover" />
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-payment-nav mb-0">
                                <ul>
                                    <li>
                                        <select>
                                            <option>English (United States)</option>
                                            <option>English (United States)</option>
                                            <option>English (United States)</option>
                                            <option>English (United States)</option>
                                            <option>English (United States)</option>
                                        </select>
                                    </li>
                                    <li>
                                        <select>
                                            <option>$ USD</option>
                                            <option>$ USD</option>
                                            <option>$ USD</option>
                                            <option>$ USD</option>
                                            <option>$ USD</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright pt-2 pb-2">
                    <div className="container">
                        <div className="copyright-inner d-md-flex align-items-center justify-content-between">
                            <div className="copyright-text">
                                <p className="m-0 white">
                                    2020 Yatriiworld. All rights reserved.
                                </p>
                            </div>
                            <div className="social-links">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-facebook" aria-hidden="true" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-twitter" aria-hidden="true" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-instagram" aria-hidden="true" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-linkedin" aria-hidden="true" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer