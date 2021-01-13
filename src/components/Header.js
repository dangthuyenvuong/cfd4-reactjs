import React from 'react'

export default function Header() {
    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="menu">
                        <div className="burger">
                            <span />
                            <span />
                            <span />
                        </div>
                        <div className="text">Menu</div>
                    </div>
                    <a href="#" className="logo">
                        <img src="/img/logo.svg" alt="black" />
                    </a>
                    <div className="user">
                        <a href="#" className="btn btn-signin">Login</a>
                        <a href="#" className="btn btn-register">Đăng ký</a>
                    </div>
                </div>
            </header>
            <nav className="nav">
                <ul>
                    <li>
                        <a href="#">Trang chủ</a>
                    </li>
                    <li>
                        <a href="#">Khóa học</a>
                    </li>
                    <li>
                        <a href="#">CFD Team</a>
                    </li>
                    <li>
                        <a href="#">Hỏi đáp</a>
                    </li>
                    <li>
                        <a href="#">Hợp tác</a>
                    </li>
                </ul>
            </nav>
        </>


    )
}
