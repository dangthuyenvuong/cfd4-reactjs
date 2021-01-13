import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


import Banner from './components/Banner'
import CourseList from './components/CourseList'
import Special from './components/Special'
import Review from './components/Review'
import Gallery from './components/Gallery'
import Form from './components/Form'

export default function Home() {
    return (
        <div>
            <Header />
            <div className="overlay_nav" />
            <main>
                <Banner />
                <CourseList />
                <Special />
                <Review />
                <Gallery />
                <Form />
            </main>
            <Footer />


            
            <div className="popup-signin" style={{ display: 'none' }}>
                <div className="wrap">
                    <form id="login">
                        <div className="ct_login">
                            <h2 className="title">Đăng nhập</h2>
                            <input type="hidden" className="url_post" defaultValue />
                            <input name="email" type="text" placeholder="Email / Số điện thoại" />
                            <input name="password" type="password" placeholder="Mật khẩu" />
                            <p className="mess-error" id="message_login" />
                            <div className="remember">
                                <label className="btn-remember">
                                    <div>
                                        <input type="checkbox" />
                                    </div>
                                    <p>Nhớ mật khẩu</p>
                                </label>
                                <a href="#" className="forget btn-open-popup" data-id="reset-password">Quên mật khẩu?</a>
                            </div>
                            <div className="btn btn-login btn-register">đăng nhập</div>
                            <div className="text-register" style={{ fontWeight: 700 }}>
                                <strong>Hoặc đăng nhập bằng</strong>
                            </div>
                            <div>
                                <div className="btn btn-login btn-google " id="googleSignIn">
                                    <img src="/img/google.svg" alt="" />
                    Google
                  </div>
                                <p className="mess-error" id="message_login_by_g" />
                            </div>
                            <div className="close">
                                <img src="/img/close-icon.png" alt="" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
