import React from 'react'

export default function Profile() {
    return (
        <main className="profile" id="main">
            <section>
                <div className="top-info">
                    <div className="avatar">
                        {/* <span class="text">H</span> */}
                        <img src="/img/avatar-lg.png" alt="" />
                        <div className="camera" />
                    </div>
                    <div className="name">trần nghĩa</div>
                    <p className="des">Thành viên của team CFD1-OFFLINE</p>
                </div>
                <div className="container">
                    <div className="tab">
                        <div className="tab-title">
                            <a href="#" className="active">Thông tin tài khoản</a>
                            <a href="#">Khóa học của bạn</a>
                            <a href="#">Dự án đã làm</a>
                            <a href="#">Lịch sử thanh toán</a>
                            <a href="#">Quản lý COIN của tôi</a>
                        </div>
                        <div className="tab-content">
                            <div className="tab1">
                                <label>
                                    <p>Họ và tên<span>*</span></p>
                                    <input type="text" placeholder="Nguyễn Văn A" />
                                </label>
                                <label>
                                    <p>Số điện thoại<span>*</span></p>
                                    <input type="text" placeholder="0949******" />
                                </label>
                                <label>
                                    <p>Email<span>*</span></p>
                                    <input defaultValue="vuong.dang@dna.vn" disabled type="text" />
                                </label>
                                <label>
                                    <p>Facebook<span>*</span></p>
                                    <input type="text" placeholder="Facebook url" />
                                </label>
                                <label>
                                    <p>Skype<span>*</span></p>
                                    <input type="text" placeholder="Skype url" />
                                </label>
                                <div className="btn main rect">LƯU LẠI</div>
                            </div>
                            <div className="tab2">
                                <div className="item">
                                    <div className="cover">
                                        <img src="/img/img3.png" alt="" />
                                    </div>
                                    <div className="info">
                                        <a href="#" className="name">
                                            front-end căn bản
                      </a>
                                        <div className="date">Khai giảng ngày 09/09/2019</div>
                                        <div className="row">
                                            <div className>
                                                <img src="/img/clock.svg" alt="" className="icon" />54 giờ
                        </div>
                                            <div className>
                                                <img src="/img/play.svg" alt="" className="icon" />25 video
                        </div>
                                            <div className>
                                                <img src="/img/user.svg" alt="" className="icon" />20 học viên
                        </div>
                                        </div>
                                        <div className="process">
                                            <div className="line">
                                                <div className="rate" style={{ width: '30%' }} />
                                            </div>
                        30%
                      </div>
                                        <div className="btn overlay round btn-continue">
                                            Tiếp tục học
                      </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="cover">
                                        <img src="/img/img7.png" alt="" />
                                    </div>
                                    <div className="info">
                                        <a href="#" className="name">
                                            front-end nâng cao
                      </a>
                                        <div className="date">Khai giảng ngày 09/09/2019</div>
                                        <div className="row">
                                            <div className>
                                                <img src="/img/clock.svg" alt="" className="icon" />54 giờ
                        </div>
                                            <div className>
                                                <img src="/img/play.svg" alt="" className="icon" />25 video
                        </div>
                                            <div className>
                                                <img src="/img/user.svg" alt="" className="icon" />20 học viên
                        </div>
                                        </div>
                                        <div className="process">
                                            <div className="line">
                                                <div className="rate" style={{ width: '30%' }} />
                                            </div>
                        30%
                      </div>
                                        <div className="btn overlay round btn-continue">
                                            Tiếp tục học
                      </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab3">
                                <div className="row">
                                    <div className="col-md-6 course">
                                        <div className="wrap">
                                            <a href="#" className="cover">
                                                <img src="/img/img8.png" alt="" />
                                            </a>
                                            <div className="info">
                                                <a href="#" className="name">
                                                    Furnitown
                          </a>
                                                <p className="des">
                                                    Dự án hoàn thành trong khóa CFD1 Offline của CFD Team.
                          </p>
                                            </div>
                                            <div className="bottom">
                                                <div className="teacher">
                                                    <div className="avatar">
                                                        <img src="/img/avt.png" alt="" />
                                                    </div>
                                                    <div className="name">Trần Nghĩa</div>
                                                </div>
                                                <div className="register-btn">Website</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 course">
                                        <div className="wrap">
                                            <a href="#" className="cover">
                                                <img src="/img/img8.png" alt="" />
                                            </a>
                                            <div className="info">
                                                <a href="#" className="name">
                                                    GboxMB
                          </a>
                                                <p className="des">
                                                    Dự án hoàn thành trong khóa CFD1 Offline của CFD Team.
                          </p>
                                            </div>
                                            <div className="bottom">
                                                <div className="teacher">
                                                    <div className="avatar">
                                                        <img src="/img/avt.png" alt="" />
                                                    </div>
                                                    <div className="name">Trần Nghĩa</div>
                                                </div>
                                                <div className="register-btn">Website</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-wrap">
                                    <div className="btn overlay btn-icon round">
                                        <img src="/img/icon-upload.svg" alt="" /> Tải lên
                    </div>
                                </div>
                            </div>
                            <div className="tab4" >
                                <div className="item itemhistory">
                                    <div className="name">Khóa học CFD1-offline</div>
                                    <div className="date">09/09/2020</div>
                                    <div className="money">1.500.000 VND</div>
                                </div>
                                <div className="item itemhistory">
                                    <div className="name">Khóa học CFD1-offline</div>
                                    <div className="date">18/10/2020</div>
                                    <div className="money">1.500.000 VND</div>
                                </div>
                                <div className="item itemhistory">
                                    <div className="name">Khóa học CFD1-offline</div>
                                    <div className="date">18/10/2020</div>
                                    <div className="money">1.500.000 VND</div>
                                </div>
                                <div className="item itemhistory">
                                    <div className="name">Khóa học CFD1-offline</div>
                                    <div className="date">18/10/2020</div>
                                    <div className="money">1.500.000 VND</div>
                                </div>
                            </div>
                            <div className="tab5 cointab" >
                                <div className="coininfo">
                                    <div className="coininfo__box">
                                        <h3><strong>Thông tin COIN</strong></h3>
                                        <div className="coininfo__box-ct">
                                            <div>
                                                <img src="/img/cfd-coin.png" alt="" />
                                                <p>Bạn có <strong>300</strong> COIN</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="coininfo__box">
                                        <h3><strong>Đổi COIN</strong></h3>
                                        <div className="coininfo__box-ct">
                                            <label className="checkcontainer">
                                                Voucher Tiki 100k
                          <input type="radio" name="radio" />
                                                <span className="checkmarkradio" />
                                            </label>
                                            <label className="checkcontainer">
                                                Voucher Tiki 200k
                          <input type="radio" name="radio" />
                                                <span className="checkmarkradio" />
                                            </label>
                                            <label className="checkcontainer">
                                                Voucher Tiki 500k
                          <input type="radio" name="radio" />
                                                <span className="checkmarkradio" />
                                            </label>
                                            <label className="checkcontainer">
                                                Thẻ nạp điện thoại 100k
                          <input type="radio" name="radio" />
                                                <span className="checkmarkradio" />
                                            </label>
                                            <label className="checkcontainer">
                                                Thẻ nạp điện thoại 200k
                          <input type="radio" name="radio" />
                                                <span className="checkmarkradio" />
                                            </label>
                                            <label className="checkcontainer">
                                                Thẻ nạp điện thoại 500k
                          <input type="radio" name="radio" />
                                                <span className="checkmarkradio" />
                                            </label>
                                            <small><i>*Bạn có thể đổi COIN 1 lần</i></small>
                                        </div>
                                        <a href="javascript:void(0)" className="btn main">Đổi COIN</a>
                                    </div>
                                </div>
                                <div className="coinhistory">
                                    <h3><strong>Lịch sử COIN</strong></h3>
                                    {/* <p>Chưa sử dụng COIN</p> */}
                                    <div className="itemhistory">
                                        <div className="td"><strong>COIN</strong></div>
                                        <div className="td"><strong>Thời gian</strong></div>
                                        <div className="td"><strong>Nội dung</strong></div>
                                        <div className="td"><strong>Trạng thái</strong></div>
                                    </div>
                                    <div className="itemhistory">
                                        <div className="td"><span className="coin red">-300</span></div>
                                        <div className="td">09/09/2020</div>
                                        <div className="td">Giới thiệu khóa học cho học viên mới</div>
                                        <div className="td">Đã chấp nhận</div>
                                    </div>
                                    <div className="itemhistory">
                                        <div className="td"><span className="coin">+300</span></div>
                                        <div className="td">18/10/2020</div>
                                        <div className="td">Dùng COIN để quy đổi sang Voucher Tiki</div>
                                        <div className="td">Đã chấp nhận</div>
                                    </div>
                                    <div className="itemhistory">
                                        <div className="td"><span className="coin red">-300</span></div>
                                        <div className="td">18/10/2020</div>
                                        <div className="td">Dùng COIN để đổi sang Thẻ nạp điện thoại</div>
                                        <div className="td">Chờ duyệt</div>
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
