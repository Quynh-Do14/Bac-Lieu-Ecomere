import React from 'react'
import MainLayout from '../../infratructure/common/layout/main-layout'
import BannerCommon from '../../infratructure/common/layout/banner'
import BreadcumbCommon from '../../infratructure/common/layout/breadcumb'
import LoadingFullPage from '../../infratructure/common/controls/loading'

const data =
{
    img: "https://media.mia.vn/uploads/blog-du-lich/du-lich-bac-lieu-11-1691745370.jpeg",
    review: 38,
    title: " Văn hóa",
    subTitle: "Văn hóa Văn hóa Văn hóa Văn hóa ",
    view: 852,
    star: 5,
    description: "A wonderful little cottage right on the seashore - perfect for exploring.",
    address: "Bạc Liêu",
    date: ' 4th AUG 2020',
    type: "Ẩm thực"
}
const DetailFestival = () => {
    return (
        <MainLayout>
            <LoadingFullPage />
            <BreadcumbCommon title={"Lễ hội"} breadcumb={"Trang chủ"} />
            <section className="blog blog-left">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <div className="blog-single">
                                <div className="blog-imagelist mb-3">
                                    <img src={data.img} alt="image" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-2 col-md-2">
                                        <div className="date text-center bg-pink p-2">
                                            <h1 className="day mb-0 white">11</h1>
                                            <div className="month white">May</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-10 col-md-10">
                                        <div className="blog-content mb-4 pt-0">
                                            <h3 className="blog-title"><a href="blog-single.html" className="yellow">{data.subTitle}</a></h3>
                                            <div className="para-content mb-2">
                                                <span className="mr-2"><a href="#" className="tag pink"><i className="fa fa-tag mr-1"></i> {data.type} </a></span>
                                                <span className="mr-2"><a href="#" className="pink"><i className="fa fa-user mr-1"></i> Adam Joel</a></span>
                                                <span><a href="#" className="pink"><i className="fa fa-comment"></i> 20</a></span>
                                            </div>
                                            <p>{data.description} </p>
                                        </div>

                                        <div className="blog-quote mb-4">
                                            <p className="white">“To take a trivial example, which ever undertakes laborious physical work exercise, except obtain some advantage blinded” </p>
                                            <span className="white">By Michael Delwell</span>
                                            <i className="fas fa-quote-left"></i>
                                        </div>

                                        <div className="blog-imagelist mb-4">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <img src="images/blog/blog1.jpg" alt="image" />
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <img src="images/blog/blog2.jpg" alt="image" />
                                                </div>
                                            </div>
                                        </div>

                                        <p className="mb-4">as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>

                                        <div className="blog-share d-flex justify-content-between align-items-center mb-4 bg-lgrey border">
                                            <div className="blog-share-tag">
                                                <ul className="inline">
                                                    <li><strong>Posted In:</strong></li>
                                                    <li><a href="#">Fashion,</a></li>
                                                    <li><a href="#">Beauty,</a></li>
                                                    <li><a href="#">Vacation,</a></li>
                                                    <li><a href="#">Travel,</a></li>
                                                    <li><a href="#">News</a></li>
                                                </ul>
                                            </div>
                                            <div className="header-social">
                                                <ul>
                                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="blog-author mb-4 bg-grey border">
                                    <div className="blog-author-item">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-md-3 col-sm-3 col-xs-12">
                                                <div className="blog-thumb text-center">
                                                    <img src="images/reviewer/1.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-9 col-sm-9 col-xs-12">
                                                <h3 className="title pink"><a href="#">About Author <span>Graphic Designer</span></a></h3>
                                                <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sceler neque in euismod. Nam vitae urnasodales neque in faucibus.</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="blog-next mb-4">
                                    <a href="#" className="float-left">
                                        <div className="prev pl-4">
                                            <i className="fa fa-arrow-left white"></i>
                                            <p className="m-0 white">Previous Post</p>
                                            <p className="m-0 white">The bedding was hardly able</p>
                                        </div>
                                    </a>
                                    <a href="#" className="float-right bg-grey">
                                        <div className="next pr-4 text-right">
                                            <i className="fa fa-arrow-right"></i>
                                            <p className="m-0">Previous Post</p>
                                            <p className="m-0">The bedding was hardly able</p>
                                        </div>
                                    </a>
                                </div>

                                <div className="single-comments single-box mb-4">
                                    <h4 className="mb-4">Showing 16 verified guest comments</h4>
                                    <div className="comment-box">
                                        <div className="comment-image mt-2">
                                            <img src="images/reviewer/1.jpg" alt="image" />
                                        </div>
                                        <div className="comment-content">
                                            <h4 className="mb-1 Soldman Kell">Soldman Kell</h4>
                                            <p className="comment-date">April 25, 2019 at 10:46 am</p>
                                            <div className="comment-rate">
                                                <div className="rating mar-right-15">
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                </div>
                                                <span className="comment-title">"The worst hotel ever"</span>
                                            </div>

                                            <p className="comment">Take in the iconic skyline and visit the neighbourhood hangouts that you've only ever seen on TV. Take in the iconic skyline and visit the neighbourhood.</p>
                                            <div className="comment-like">
                                                <div className="like-title float-left">
                                                    <a href="#" className="nir-btn mr-2">Reply</a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-box">
                                        <div className="comment-image mt-2">
                                            <img src="images/reviewer/2.jpg" alt="image" />
                                        </div>
                                        <div className="comment-content">
                                            <h4 className="mb-1">Burson Lesson</h4>
                                            <p className="comment-date">April 25, 2019 at 10:46 am</p>
                                            <div className="comment-rate">
                                                <div className="rating mar-right-15">
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                </div>
                                                <span className="comment-title">"Was too noisy and not suitable for business meetings"</span>
                                            </div>

                                            <p className="comment">Take in the iconic skyline and visit the neighbourhood hangouts that you've only ever seen on TV. Take in the iconic skyline and visit the neighbourhood.</p>
                                            <div className="comment-like">
                                                <div className="like-title float-left">
                                                    <a href="#" className="nir-btn">Reply</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-add-review">
                                    <h4 className="">Write a Review</h4>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" placeholder="Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="email" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea>Comment</textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-btn">
                                                    <a href="#" className="nir-btn">Submit Review</a>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="sidebar-sticky">
                                <div className="list-sidebar">
                                    <div className="author-news mb-4">
                                        <div className="author-news-content">
                                            <div className="author-thumb">
                                                <img src="images/team/img2.jpg" alt="author" />
                                            </div>
                                            <div className="author-content">
                                                <span>Author News</span>
                                                <h4 className="title mb-0"><a href="#" className="white">Relson Dulux</a></h4>
                                                <p className="m-0">Director / Suplex World</p>
                                                <div className="header-social">
                                                    <ul>
                                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dot-overlay"></div>
                                    </div>

                                    <div className="sidebar-item mb-4">
                                        <h4 className="">All Categories</h4>
                                        <ul className="sidebar-category">
                                            <li><a href="#">All</a></li>
                                            <li><a href="#">Featured</a></li>
                                            <li><a href="#">Sliders</a></li>
                                            <li className="active"><a href="#">Manage Listings</a></li>
                                            <li><a href="#">Address and Map</a></li>
                                            <li><a href="#">Reservation Requests</a></li>
                                            <li><a href="#">Your Reservation</a></li>
                                            <li><a href="#">Search Results</a></li>
                                        </ul>
                                    </div>

                                    <div className="sidebar-item mb-4">
                                        <div className="sidebar-tabs">
                                            <div className="sidebar-navtab text-center">
                                                <ul className="nav nav-tabs">
                                                    <li className="active"><a data-toggle="tab" href="#popular"><i className="fa fa-check-circle"></i> Most Popular </a></li>
                                                    <li><a data-toggle="tab" href="#recent"><i className="fa fa-check-circle"></i> Recent Post</a></li>
                                                </ul>
                                            </div>

                                            <div className="tab-content">
                                                <div id="popular" className="tab-pane fade in active">
                                                    <div className="sidebar-image mb-2 mt-2">
                                                        <a href="blog-single.php"><img src="images/blog/blog3.jpg" alt="" /></a>
                                                    </div>
                                                    <article className="post mb-2">
                                                        <div className="s-content d-flex align-items-center justify-space-between">
                                                            <div className="blog-no">01</div>
                                                            <div className="content-list pl-3">
                                                                <div className="date">Jun 28, 2019</div>
                                                                <h5 className="m-0"><a href="blog-single.php">Takes on Baboon, and It Doesn’t Go Well for It</a></h5>
                                                            </div>
                                                        </div>

                                                    </article>

                                                    <article className="post mb-2">
                                                        <div className="s-content d-flex align-items-center justify-space-between">
                                                            <div className="blog-no">02</div>
                                                            <div className="content-list pl-3">
                                                                <div className="date">Jun 28, 2019</div>
                                                                <h5 className="m-0"><a href="blog-single.php">Zebras Hold New Record for Longest Migration</a></h5>
                                                            </div>
                                                        </div>

                                                    </article>

                                                    <article className="post">
                                                        <div className="s-content d-flex align-items-center justify-space-between">
                                                            <div className="blog-no">03</div>
                                                            <div className="content-list pl-3">
                                                                <div className="date">Jun 28, 2019</div>
                                                                <h5 className="m-0"><a href="blog-single.php">African Reserve Got Killed by Lions Instead</a></h5>
                                                            </div>
                                                        </div>

                                                    </article>
                                                </div>

                                                <div id="recent" className="tab-pane fade">
                                                    <div className="sidebar-image mb-2 mt-2">
                                                        <a href="blog-single.php"><img src="images/blog/blog1.jpg" alt="" /></a>
                                                    </div>
                                                    <article className="post mb-2">
                                                        <div className="s-content d-flex align-items-center justify-space-between">
                                                            <div className="blog-no">01</div>
                                                            <div className="content-list pl-3">
                                                                <div className="date">Jun 28, 2019</div>
                                                                <h5 className="m-0"><a href="blog-single.php">Takes on Baboon, and It Doesn’t Go Well for It</a></h5>
                                                            </div>
                                                        </div>

                                                    </article>

                                                    <article className="post mb-2">
                                                        <div className="s-content d-flex align-items-center justify-space-between">
                                                            <div className="blog-no">02</div>
                                                            <div className="content-list pl-3">
                                                                <div className="date">Jun 28, 2019</div>
                                                                <h5 className="m-0"><a href="blog-single.php">Zebras Hold New Record for Longest Migration</a></h5>
                                                            </div>
                                                        </div>

                                                    </article>

                                                    <article className="post">
                                                        <div className="s-content d-flex align-items-center justify-space-between">
                                                            <div className="blog-no">03</div>
                                                            <div className="content-list pl-3">
                                                                <div className="date">Jun 28, 2019</div>
                                                                <h5 className="m-0"><a href="blog-single.php">African Reserve Got Killed by Lions Instead</a></h5>
                                                            </div>
                                                        </div>

                                                    </article>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sidebar-item mb-4">
                                        <h4 className="">Tags</h4>
                                        <ul className="sidebar-tags">
                                            <li><a href="#">Tour</a></li>
                                            <li><a href="#">Rental</a></li>
                                            <li><a href="#">City</a></li>
                                            <li><a href="#">Yatch</a></li>
                                            <li><a href="#">Activity</a></li>
                                            <li><a href="#">Museum</a></li>
                                            <li><a href="#">Beauty</a></li>
                                            <li><a href="#">classNameic</a></li>
                                            <li><a href="#">Creative</a></li>
                                            <li><a href="#">Designs</a></li>
                                            <li><a href="#">Featured</a></li>
                                            <li><a href="#">Free Style</a></li>
                                            <li><a href="#">Programs</a></li>
                                            <li><a href="#">Travel</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default DetailFestival