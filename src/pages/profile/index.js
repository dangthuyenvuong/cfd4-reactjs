import React from 'react'

export default function Profile() {
    return (
        <main>
            <section className="section top-info">
                <div className="information">
                    <div className="avatar">
                        <img src="/img/avt1.jpg" alt="" />
                    </div>
                    <div className="name">Trần Nghĩa</div>
                    <p className="member">Thành viên của team CFD1-OFFLINE</p>
                </div>
                <div className="container">
                    <div className="tab">
                        <div className="tab__title">
                            <a href="#" className="js-tab-active">Thông tin tài khoản</a>
                            <a href="#">Khoá học của tôi</a>
                            <a href="#">Dự án đã làm</a>
                            <a href="#">Lịch sử thanh toán</a>
                        </div>
                        <div className="tab__content">
                            <div className="tab__content-1 tabct active">
                                <form action="/" method="POST">
                                    <div className="field">
                                        <label>Họ và Tên</label>
                                        <input type="text" name="title" defaultValue="Tran Nghia" />
                                    </div>
                                    <div className="field">
                                        <label>Số điện thoại*</label>
                                        <input type="text" name="phone" defaultValue={'0989596813'} />
                                    </div>
                                    <div className="field">
                                        <label>Email</label>
                                        <input type="text" name="email" disabled defaultValue="trannghia2018@gmail.com" />
                                    </div>
                                    <div className="field">
                                        <label>Facebook</label>
                                        <input type="text" name="facebook" defaultValue="https://facebook.com" />
                                    </div>
                                    <div className="field">
                                        <label>Skype</label>
                                        <input type="text" name="skype" defaultValue="trannghia2018" />
                                    </div>
                                    <div className="btn-register btn-save">
                                        LƯU LẠI
                                    </div>
                                </form>
                            </div>
                            <div className="tab__content-2 tabct" >
                                <div className="course">
                                    <a href="#" className="course__image">
                                        <img src="/img/img-course-1.jpg" alt="" />
                                    </a>
                                    <div className="course__info">
                                        <a href="#" className="course__info--name">front-end căn bản</a>
                                        <p className="course__info--date">Khai giảng ngày 09/09/2019</p>
                                        <div className="course__info--details">
                                            <div className="item">
                                                <img src="/img/clock.svg" alt="" />
                                                <span>54 giờ</span>
                                            </div>
                                            <div className="item">
                                                <span>25 video</span>
                                            </div>
                                            <div className="item">
                                                <img src="/img/member.svg" alt="" />
                                                <span>20 học viên</span>
                                            </div>
                                        </div>
                                        <div className="progress">
                                            <div className="line" />
                                            <span>30%</span>
                                        </div>
                                        <div className="btn btn-round btn-continue">Tiếp tục học</div>
                                    </div>
                                </div>
                                <div className="course">
                                    <a href="#" className="course__image">
                                        <img src="/img/img-course-2.jpg" alt="" />
                                    </a>
                                    <div className="course__info">
                                        <a href="#" className="course__info--name">front-end nâng cao</a>
                                        <p className="course__info--date">Khai giảng ngày 09/09/2019</p>
                                        <div className="course__info--details">
                                            <div className="item">
                                                <img src="/img/clock.svg" alt="" />
                                                <span>54 giờ</span>
                                            </div>
                                            <div className="item">
                                                <span>25 video</span>
                                            </div>
                                            <div className="item">
                                                <img src="/img/member.svg" alt="" />
                                                <span>20 học viên</span>
                                            </div>
                                        </div>
                                        <div className="progress">
                                            <div className="line" />
                                            <span>30%</span>
                                        </div>
                                        <div className="btn btn-round btn-continue">Tiếp tục học</div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab__content-3 tabct" >
                                <div className="list__project">
                                    <div className="project">
                                        <div className="project__image">
                                            <img src="/img/img-project.jpg" alt="" />
                                        </div>
                                        <div className="project__info">
                                            <div className="project__info--top">
                                                <div className="project__info--title">
                                                    Furnitown
                          </div>
                                                <p className="project__info--des">
                                                    Dự án hoàn thành trong khóa CFD1 Offline của CFD Team.
                          </p>
                                            </div>
                                            <div className="project__info--details">
                                                <div className="teacher">
                                                    <div className="avatar">
                                                        <img src="/img/avt.png" alt="" />
                                                    </div>
                                                    <div className="name">
                                                        Trần Nghĩa
                            </div>
                                                </div>
                                                <a href="#" className="btn btn-register">Website</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project">
                                        <div className="project__image">
                                            <img src="/img/img-project.jpg" alt="" />
                                        </div>
                                        <div className="project__info">
                                            <div className="project__info--top">
                                                <div className="project__info--title">Gbox</div>
                                                <p className="project__info--des">
                                                    Dự án hoàn thành trong khóa CFD1 Offline của CFD Team.
                                                </p>
                                            </div>
                                            <div className="project__info--details">
                                                <div className="teacher">
                                                    <div className="avatar">
                                                        <img src="/img/avt.png" alt="" />
                                                    </div>
                                                    <div className="name">
                                                        Trần Nghĩa
                                                    </div>
                                                </div>
                                                <a href="#" className="btn btn-register">Website</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="upload">
                                    <button type="button" className="btn btn-upload">
                                        <img src="/img/upload.svg" alt="" />
                                        TẢI LÊN
                                    </button>
                                </div>
                            </div>
                            <div className="tab__content-4 tabct" >
                                <div className="payment__table">
                                    <div className="payment__row">
                                        <p className="name">
                                            Khóa học CFD1-offline
                                        </p>
                                        <p className="date">
                                            09/09/2020
                                        </p>
                                        <p className="price">
                                            3.500.000 VND
                                        </p>
                                    </div>
                                    <div className="payment__row">
                                        <p className="name">
                                            Khóa học CFD1-offline
                                        </p>
                                        <p className="date">
                                            09/09/2020
                                        </p>
                                        <p className="price">
                                            3.500.000 VND
                                        </p>
                                    </div>
                                    <div className="payment__row">
                                        <p className="name">
                                            Khóa học CFD1-offline
                                         </p>
                                        <p className="date">
                                            09/09/2020
                                         </p>
                                        <p className="price">
                                            3.500.000 VND
                                         </p>
                                    </div>
                                    <div className="payment__row">
                                        <p className="name">
                                            Khóa học CFD1-offline
                                        </p>
                                        <p className="date">
                                            09/09/2020
                      </p>
                                        <p className="price">
                                            3.500.000 VND
                      </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
