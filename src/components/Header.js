import React, { useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Context } from '../App';
import { useAppContext, useDelayLink } from '../core/AppProvider';
import { useAuth } from '../core/hook/useAuth';

let $ = window.$;

export default function Header() {

    useEffect(() => {

        $('.menu-hambeger').on('click', function () {
            $('body').toggleClass('menu-is-show');
        });

        $('#header nav ul').on('click', function (e) {
            e.stopPropagation();
        })
        $('.overlay_nav').on('click', function (e) {
            $('body').removeClass('menu-is-show');
        });

        $(document).keyup(function (e) {
            if (e.key === "Escape") {
                $('body').removeClass('menu-is-show');
            }
        });
    }, [])

    let delayLink = useDelayLink();

    let context = useAppContext();

    let auth = useAuth();


    // console.log(history)
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
                        {
                            auth.login ? (
                                <div className="have-login">
                                    <div className="account">
                                        <a href="#" className="info">
                                            <div className="name">{auth.login.name}</div>
                                            <div className="avatar">
                                                <img src={auth.login.avatar?.link || "/img/avatar-default.png"} alt="" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="hamberger">
                                    </div>
                                    <div className="sub">
                                        <Link onClick={delayLink} to="/thong-tin-ca-nhan/khoa-hoc">Khóa học của tôi</Link>
                                        <Link onClick={delayLink} to="/thong-tin-ca-nhan">Thông tin tài khoản</Link>
                                        <a href="#" onClick={auth.logout}>Đăng xuất</a>
                                    </div>
                                </div>
                            ) :
                                <div className="not-login bg-none">
                                    <a href="#" className="btn-register" onClick={context.openPopupLogin}>Đăng nhập</a>
                                    <a href="#" className="btn main btn-open-login" onClick={context.openPopupRegister}>Đăng ký</a>
                                </div>
                        }
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
                        <Link onClick={delayLink} to="/">Trang chủ</Link>
                    </li>
                    <li>
                        <Link onClick={delayLink} to="/team">CFD Team</Link>
                    </li>
                    <li>
                        <Link onClick={delayLink} to="/khoa-hoc">Khóa Học</Link>
                    </li>
                    <li>
                        <Link onClick={delayLink} to="/du-an">Dự Án</Link>
                    </li>
                    <li>
                        <Link onClick={delayLink} to="/lien-he">Liên hệ</Link>
                    </li>
                </ul>
            </nav>
            <div className="overlay_nav"></div>
        </>


    )
}


export function A() {

}