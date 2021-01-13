import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row top">
                    <div className="footer__left col-md-6">
                        <div className="footer__left--des">
                            Sáng tạo, tinh tế và phù hợp sẽ khiến <br />
                  sản phẩm của bạn trở nên khác biệt.
                </div>
                        <div className="footer__left--address">
                            <p>Số 11, Phan Kế Bính, Quận 1, TP. Hồ Chí Minh</p>
                            <p>(+84) 98 9596 913</p>
                        </div>
                        <div className="footer__left--social">
                            <a href="#" className="icon fb" />
                            <a href="#" className="icon mail" />
                            <a href="#" className="icon skype" />
                        </div>
                    </div>
                    <div className="footer__right col-md-6">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">Trang chủ</a>
                                </li>
                                <li>
                                    <a href="#">Khoá học</a>
                                </li>
                                <li>
                                    <a href="#">Thanh toán</a>
                                </li>
                                <li>
                                    <a href="#">Điều khoản</a>
                                </li>
                            </ul>
                        </nav>
                        <a href="#" className="back-top"> <span /> Cuộn lên</a>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="container">
                    <div className="copy-right">2020 Creative Front-End Dev</div>
                    <div className="design">Được thiết kế và lập trình bởi CFD Team</div>
                </div>
            </div>
        </footer>
    )
}
