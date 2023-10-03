import React from 'react'
import MainLayout from '../../infratructure/common/layout/main-layout'
import BannerCommon from '../../infratructure/common/layout/banner'

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
const DetailArticle = () => {
    return (
        <MainLayout>
            <BannerCommon />
            <section class="blog blog-left">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-12 col-sm-12">
                            <div class="blog-single">
                                <div class="blog-imagelist mb-3">
                                    <img src={data.img} alt="image" />
                                </div>
                                <div class="row">
                                    <div class="col-lg-2 col-md-2">
                                        <div class="date text-center bg-pink p-2">
                                            <h1 class="day mb-0 white">11</h1>
                                            <div class="month white">May</div>
                                        </div>
                                    </div>
                                    <div class="col-lg-10 col-md-10">
                                        <div class="blog-content mb-4 pt-0">
                                            <h3 class="blog-title"><a href="blog-single.html" class="yellow">{data.subTitle}</a></h3>
                                            <div class="para-content mb-2">
                                                <span class="mr-2"><a href="#" class="tag pink"><i class="fa fa-tag mr-1"></i> {data.type} </a></span>
                                                <span class="mr-2"><a href="#" class="pink"><i class="fa fa-user mr-1"></i> Adam Joel</a></span>
                                                <span><a href="#" class="pink"><i class="fa fa-comment"></i> 20</a></span>
                                            </div>
                                            <p>{data.description} </p>
                                        </div>

                                        <div class="blog-quote mb-4">
                                            <p class="white">“To take a trivial example, which ever undertakes laborious physical work exercise, except obtain some advantage blinded” </p>
                                            <span class="white">By Michael Delwell</span>
                                            <i class="fas fa-quote-left"></i>
                                        </div>

                                        <div class="blog-imagelist mb-4">
                                            <div class="row">
                                                <div class="col-md-6 col-sm-6 col-xs-12">
                                                    <img src="images/blog/blog1.jpg" alt="image" />
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-12">
                                                    <img src="images/blog/blog2.jpg" alt="image" />
                                                </div>
                                            </div>
                                        </div>

                                        <p class="mb-4">as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>

                                        <div class="blog-share d-flex justify-content-between align-items-center mb-4 bg-lgrey border">
                                            <div class="blog-share-tag">
                                                <ul class="inline">
                                                    <li><strong>Posted In:</strong></li>
                                                    <li><a href="#">Fashion,</a></li>
                                                    <li><a href="#">Beauty,</a></li>
                                                    <li><a href="#">Vacation,</a></li>
                                                    <li><a href="#">Travel,</a></li>
                                                    <li><a href="#">News</a></li>
                                                </ul>
                                            </div>
                                            <div class="header-social">
                                                <ul>
                                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="blog-author mb-4 bg-grey border">
                                    <div class="blog-author-item">
                                        <div class="row d-flex justify-content-between align-items-center">
                                            <div class="col-md-3 col-sm-3 col-xs-12">
                                                <div class="blog-thumb text-center">
                                                    <img src="images/reviewer/1.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div class="col-md-9 col-sm-9 col-xs-12">
                                                <h3 class="title pink"><a href="#">About Author <span>Graphic Designer</span></a></h3>
                                                <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sceler neque in euismod. Nam vitae urnasodales neque in faucibus.</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="blog-next mb-4">
                                    <a href="#" class="float-left">
                                        <div class="prev pl-4">
                                            <i class="fa fa-arrow-left white"></i>
                                            <p class="m-0 white">Previous Post</p>
                                            <p class="m-0 white">The bedding was hardly able</p>
                                        </div>
                                    </a>
                                    <a href="#" class="float-right bg-grey">
                                        <div class="next pr-4 text-right">
                                            <i class="fa fa-arrow-right"></i>
                                            <p class="m-0">Previous Post</p>
                                            <p class="m-0">The bedding was hardly able</p>
                                        </div>
                                    </a>
                                </div>

                                <div class="single-comments single-box mb-4">
                                    <h4 class="mb-4">Showing 16 verified guest comments</h4>
                                    <div class="comment-box">
                                        <div class="comment-image mt-2">
                                            <img src="images/reviewer/1.jpg" alt="image" />
                                        </div>
                                        <div class="comment-content">
                                            <h4 class="mb-1 Soldman Kell">Soldman Kell</h4>
                                            <p class="comment-date">April 25, 2019 at 10:46 am</p>
                                            <div class="comment-rate">
                                                <div class="rating mar-right-15">
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                </div>
                                                <span class="comment-title">"The worst hotel ever"</span>
                                            </div>

                                            <p class="comment">Take in the iconic skyline and visit the neighbourhood hangouts that you've only ever seen on TV. Take in the iconic skyline and visit the neighbourhood.</p>
                                            <div class="comment-like">
                                                <div class="like-title float-left">
                                                    <a href="#" class="nir-btn mr-2">Reply</a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="comment-box">
                                        <div class="comment-image mt-2">
                                            <img src="images/reviewer/2.jpg" alt="image" />
                                        </div>
                                        <div class="comment-content">
                                            <h4 class="mb-1">Burson Lesson</h4>
                                            <p class="comment-date">April 25, 2019 at 10:46 am</p>
                                            <div class="comment-rate">
                                                <div class="rating mar-right-15">
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                </div>
                                                <span class="comment-title">"Was too noisy and not suitable for business meetings"</span>
                                            </div>

                                            <p class="comment">Take in the iconic skyline and visit the neighbourhood hangouts that you've only ever seen on TV. Take in the iconic skyline and visit the neighbourhood.</p>
                                            <div class="comment-like">
                                                <div class="like-title float-left">
                                                    <a href="#" class="nir-btn">Reply</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="single-add-review">
                                    <h4 class="">Write a Review</h4>
                                    <form>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input type="text" placeholder="Name" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input type="email" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <textarea>Comment</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-btn">
                                                    <a href="#" class="nir-btn">Submit Review</a>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-12">
                            <div class="sidebar-sticky">
                                <div class="list-sidebar">
                                    <div class="author-news mb-4">
                                        <div class="author-news-content">
                                            <div class="author-thumb">
                                                <img src="images/team/img2.jpg" alt="author" />
                                            </div>
                                            <div class="author-content">
                                                <span>Author News</span>
                                                <h4 class="title mb-0"><a href="#" class="white">Relson Dulux</a></h4>
                                                <p class="m-0">Director / Suplex World</p>
                                                <div class="header-social">
                                                    <ul>
                                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="dot-overlay"></div>
                                    </div>

                                    <div class="sidebar-item mb-4">
                                        <h4 class="">All Categories</h4>
                                        <ul class="sidebar-category">
                                            <li><a href="#">All</a></li>
                                            <li><a href="#">Featured</a></li>
                                            <li><a href="#">Sliders</a></li>
                                            <li class="active"><a href="#">Manage Listings</a></li>
                                            <li><a href="#">Address and Map</a></li>
                                            <li><a href="#">Reservation Requests</a></li>
                                            <li><a href="#">Your Reservation</a></li>
                                            <li><a href="#">Search Results</a></li>
                                        </ul>
                                    </div>

                                    <div class="sidebar-item mb-4">
                                        <div class="sidebar-tabs">
                                            <div class="sidebar-navtab text-center">
                                                <ul class="nav nav-tabs">
                                                    <li class="active"><a data-toggle="tab" href="#popular"><i class="fa fa-check-circle"></i> Most Popular </a></li>
                                                    <li><a data-toggle="tab" href="#recent"><i class="fa fa-check-circle"></i> Recent Post</a></li>
                                                </ul>
                                            </div>

                                            <div class="tab-content">
                                                <div id="popular" class="tab-pane fade in active">
                                                    <div class="sidebar-image mb-2 mt-2">
                                                        <a href="blog-single.php"><img src="images/blog/blog3.jpg" alt="" /></a>
                                                    </div>
                                                    <article class="post mb-2">
                                                        <div class="s-content d-flex align-items-center justify-space-between">
                                                            <div class="blog-no">01</div>
                                                            <div class="content-list pl-3">
                                                                <div class="date">Jun 28, 2019</div>
                                                                <h5 class="m-0"><a href="blog-single.php">Takes on Baboon, and It Doesn’t Go Well for It</a></h5>
                                                            </div>
                                                        </div>

                                                    </article>

                                                    <article class="post mb-2">
                                                        <div class="s-content d-flex align-items-center justify-space-between">
                                                            <div class="blog-no">02</div>
                                                            <div class="content-list pl-3">
                                                                <div class="date">Jun 28, 2019</div>
                                                                <h5 class="m-0"><a href="blog-single.php">Zebras Hold New Record for Longest Migration</a></h5>
                                                            </div>
                                                        </div>

                                                    </article>

                                                    <article class="post">
                                                        <div class="s-content d-flex align-items-center justify-space-between">
                                                            <div class="blog-no">03</div>
                                                            <div class="content-list pl-3">
                                                                <div class="date">Jun 28, 2019</div>
                                                                <h5 class="m-0"><a href="blog-single.php">African Reserve Got Killed by Lions Instead</a></h5>
                                                            </div>
                                                        </div>

                                                    </article>
                                                </div>

                                                <div id="recent" class="tab-pane fade">
                                                    <div class="sidebar-image mb-2 mt-2">
                                                        <a href="blog-single.php"><img src="images/blog/blog1.jpg" alt="" /></a>
                                                    </div>
                                                    <article class="post mb-2">
                                                        <div class="s-content d-flex align-items-center justify-space-between">
                                                            <div class="blog-no">01</div>
                                                            <div class="content-list pl-3">
                                                                <div class="date">Jun 28, 2019</div>
                                                                <h5 class="m-0"><a href="blog-single.php">Takes on Baboon, and It Doesn’t Go Well for It</a></h5>
                                                            </div>
                                                        </div>

                                                    </article>

                                                    <article class="post mb-2">
                                                        <div class="s-content d-flex align-items-center justify-space-between">
                                                            <div class="blog-no">02</div>
                                                            <div class="content-list pl-3">
                                                                <div class="date">Jun 28, 2019</div>
                                                                <h5 class="m-0"><a href="blog-single.php">Zebras Hold New Record for Longest Migration</a></h5>
                                                            </div>
                                                        </div>

                                                    </article>

                                                    <article class="post">
                                                        <div class="s-content d-flex align-items-center justify-space-between">
                                                            <div class="blog-no">03</div>
                                                            <div class="content-list pl-3">
                                                                <div class="date">Jun 28, 2019</div>
                                                                <h5 class="m-0"><a href="blog-single.php">African Reserve Got Killed by Lions Instead</a></h5>
                                                            </div>
                                                        </div>

                                                    </article>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="sidebar-item mb-4">
                                        <h4 class="">Tags</h4>
                                        <ul class="sidebar-tags">
                                            <li><a href="#">Tour</a></li>
                                            <li><a href="#">Rental</a></li>
                                            <li><a href="#">City</a></li>
                                            <li><a href="#">Yatch</a></li>
                                            <li><a href="#">Activity</a></li>
                                            <li><a href="#">Museum</a></li>
                                            <li><a href="#">Beauty</a></li>
                                            <li><a href="#">Classic</a></li>
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

export default DetailArticle