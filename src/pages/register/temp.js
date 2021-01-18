import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useReducer, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Reducer from './reducer';

const style = {
    inputError: { color: 'red', fontSize: 14 }
}



export default function Register() {

    let [state, dispatch] = useReducer(Reducer, {
        loading: false,
        form: {
            username: '',
            phone: '',
            email: '',
            fb: '',
            payment: 'chuyen-khoan',
            note: ''
        },
        error: {}
    })




    function inputChange(event) {

        dispatch({
            type: 'FORM_INPUT_CHANGE',
            form: {
                ...state.form,
                [event.target.getAttribute('name')]: event.target.value
            }
        })
    }

    function submitBtnClick() {

        dispatch({ type: 'LOADING', loading: true })
        setTimeout(() => {

            dispatch({ type: 'LOADING', loading: false })

        }, 1000)

    }

    return (
        <>
            <Header />
            <main className="register-course" id="main">
                <section>
                    <div className="container">
                        <div className="wrap container">
                            <div className="main-sub-title">ĐĂNG KÝ</div>
                            <h1 className="main-title">Thực chiến front-end căn bản </h1>
                            <div className="main-info">
                                <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
                                <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                                <div className="time"><strong>Học phí:</strong> 6.000.000 VND</div>
                            </div>
                            <div className="form">
                                <label>
                                    <p>Họ và tên<span>*</span></p>
                                    <input type="text" placeholder="Họ và tên bạn" onChange={inputChange} name="username" value={state.form.username} />
                                </label>
                                {
                                    state.error.username && <p className="error" style={style.inputError}>{state.error.username}</p>
                                }
                                <label>
                                    <p>Số điện thoại<span>*</span></p>
                                    <input type="text" placeholder="Số điện thoại" onChange={inputChange} name="phone" value={state.form.phone} />
                                </label>
                                {
                                    state.error.phone && <p className="error" style={style.inputError}>{state.error.phone}</p>
                                }
                                <label>
                                    <p>Email<span>*</span></p>
                                    <input type="text" placeholder="Email của bạn" onChange={inputChange} name="email" value={state.form.email} />
                                </label>
                                {
                                    state.error.email && <p className="error" style={style.inputError}>{state.error.email}</p>
                                }
                                <label>
                                    <p>URL Facebook<span>*</span></p>
                                    <input type="text" placeholder="https://facebook.com" name="fb" onChange={inputChange} value={state.form.fb} />
                                </label>
                                {
                                    state.error.fb && <p className="error" style={style.inputError}>{state.error.fb}</p>
                                }
                                <label className="disable">
                                    <p>Sử dụng COIN</p>
                                    <div className="checkcontainer">
                                        Hiện có <strong>300 COIN</strong>
                                        {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                                        {/* Cần ít nhất 200 COIN để giảm giá */}
                                        <input type="checkbox" defaultChecked="checked" />
                                        <span className="checkmark" />
                                    </div>
                                </label>
                                <label>
                                    <p>Hình thức thanh toán</p>
                                    <div className="select">
                                        <div className="head">Chuyển khoản</div>
                                        <div className="sub">
                                            <a href="#">Chuyển khoản</a>
                                            <a href="#">Thanh toán tiền mặt</a>
                                        </div>
                                    </div>
                                </label>
                                <label>
                                    <p>Ý kiến cá nhân</p>
                                    <input type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." onChange={inputChange} name="note" value={state.form.note} />
                                </label>
                                <div className="btn main rect" onClick={() => dispatch({ type: 'BTN_REGISTER_CLICK', successCallback: submitBtnClick })} >đăng ký {state.loading && <CircularProgress size={20} style={{ marginLeft: 20 }} />}</div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
            </main>
            <Footer />
        </>
    )
}
