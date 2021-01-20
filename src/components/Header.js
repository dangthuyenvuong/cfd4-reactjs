import React, { useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Context } from '../App';
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
    let history = useHistory();
    function delayLink(e) {
        e.preventDefault();
        let payloading = document.querySelector('.pageLoading');
        let div = payloading.querySelector('.loading')


        let scale = Math.sqrt(Math.pow(window.outerHeight, 2) + Math.pow(window.outerWidth, 2)) / 100 * 2
        div.style.transform = `translate(-50%, -50%) scale(${scale})`
        div.style.left = `${e.clientX}px`
        div.style.top = `${e.clientY}px`
        setTimeout(() => {
            history.push(e.target.href?.replace(window.location.origin, '') || '/')
            $('.overlay_nav').trigger('click')
        }, 300)
        setTimeout(() => {
            div.style.transform = `translate(-50%, -50%) scale(${0})`
        }, 600)
    }

    let context = useContext(Context)

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
                                                <img src="/img/avt.png" alt="" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="hamberger">
                                    </div>
                                    <div className="sub">
                                        <Link onClick={delayLink} to="/thong-tin-ca-nhan/khoa-hoc">Khóa học của tôi</Link>
                                        <Link onClick={delayLink} to="/thong-tin-ca-nhan">Thông tin tài khoản</Link>
                                        <a onClick={auth.logout} href="javascript:void()">Đăng xuất</a>
                                    </div>
                                </div>
                            ) :
                                <div class="not-login bg-none">
                                    <a href="#" class="btn-register" onClick={context.openPopupLogin}>Đăng nhập</a>
                                    <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
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
            <div class="overlay_nav"></div>
        </>


    )
}


export function A() {

}