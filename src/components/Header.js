import React from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function Header() {
    let history = useHistory();
    function delayLink(e) {
        e.preventDefault();
        document.querySelector('.pageLoading').classList.add('active')
        setTimeout(() => {
            history.push(e.target.href?.replace(window.location.origin, '') || '/')
        }, 200)
        setTimeout(() => {
            document.querySelector('.pageLoading').classList.remove('active')
        }, 800)
    }

    console.log(history)
    return (
        <>
            <header id="header">
                <div className="wrap">
                    <div className="menu-hambeger">
                        <div className="button">
                            <span />
                            <span />
                            <span />
                        </div>
                        <span className="text">menu</span>
                    </div>
                    <Link onClick={delayLink} to="/" className="logo">
                        <img src="/img/logo.svg" alt="" />
                        <h1>CFD</h1>
                    </Link>
                    <div className="right">
                        <div className="have-login">
                            <div className="account">
                                <a href="#" className="info">
                                    <div className="name">Trần Lê Trọng Nghĩa</div>
                                    <div className="avatar">
                                        <img src="/img/avt.png" alt="" />
                                    </div>
                                </a>
                            </div>
                            <div className="hamberger">
                            </div>
                            <div className="sub">
                                <Link onClick={delayLink} to="/thong-tin-ca-nhan/khoa-hoc">Khóa học của tôi</Link>
                                <Link onClick={delayLink} to="/thong-tin-ca-nhan">Thông tin tài khoản</Link>
                                <Link onClick={delayLink} to="/">Đăng xuất</Link>
                            </div>
                        </div>
                        {/* <div class="not-login bg-none">
                    <a href="#" class="btn-register">Đăng nhập</a>
                    <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
                </div> */}
                    </div>
                </div>
            </header>
            <nav className="nav">
                <ul>
                    <li className="li_login">
                        <a href="#">Đăng nhập</a>
                        <a href="#">Đăng ký</a>
                    </li>
                    <li className="active">
                        <Link to="/">Trang chủ</Link>
                    </li>
                    <li>
                        <Link to="/team">CFD Team</Link>
                    </li>
                    <li>
                        <Link to="/khoa-hoc">Khóa Học</Link>
                    </li>
                    <li>
                        <Link to="/du-an">Dự Án</Link>
                    </li>
                    <li>
                        <Link to="/lien-he">Liên hệ</Link>
                    </li>
                </ul>
            </nav>
        </>


    )
}


export function A() {

}