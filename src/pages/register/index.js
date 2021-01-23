import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom';
import pageApi from '../../api/pageApi';
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import LoadingApi from '../../components/LoadingApi';
import useFormValidate from '../../core/hook/useFormValidate';

const style = {
    inputError: { color: 'red', fontSize: 14, paddingLeft: 230, marginTop: -20 }
}

export default function Register() {

    let [loading, setLoading] = useState(false);
    let [course, setCourse] = useState()

    let routerMath = useRouteMatch();

    useEffect(async () => {
        let course = await pageApi.course_detail(routerMath.params.slug)
        if (course.data) {
            setCourse(course.data)
        } else {
            setCourse('notfound')
        }
    }, [])


    let { form, error, inputChange, submit } = useFormValidate({
        username: '',
        phone: '',
        email: '',
        fb: '',
        payment: 'chuyen-khoan',
        note: ''
    }, {
        rule: {
            username: {
                required: true
            },
            phone: {
                pattern: 'phone'
            },
            email: {
                pattern: 'email'
            },
            fb: {
                pattern: 'url'
            }
        },
        message: {
            username: {
                required: 'Họ và tên không được để trống'
            },
            phone: {
                pattern: "Số điện thoại không đúng định dạng"
            },
            email: {
                pattern: 'Email không đúng định dạng'
            },
            fb: {
                pattern: 'FB URL không đúng định dạng'
            }
        }
    })




    // useEffect(() => {
    //     console.log('window click add')

    //     function windowClick() {
    //         console.log('window click', form)
    //     }

    //     // let timeInterl = setInterval(() => {
    //     //     console.log(form)
    //     // }, 1000)

    //     window.addEventListener('click', windowClick)

    //     return () => {
    //         console.log('window click destroy')
    //         window.removeEventListener('click', windowClick)
    //     }
    // }, [form])

    // let [error, setError] = useState({})

    // function inputChange(event) {
    //     // let target = event.target;

    //     // let val = target.value
    //     // let name = target.getAttribute('name')


    //     // form[event.target.getAttribute('name')] = event.target.value;

    //     setForm({
    //         ...form,
    //         [event.target.getAttribute('name')]: event.target.value
    //     })
    // }


    function submitBtnClick() {


        // if (loading) {
        //     alert('Ban khong the gui lien tuc')
        //     return;
        // }
        // let error = {}
        // if (!form.username) {
        //     error['username'] = 'Username khong duoc de trong'
        // }


        // if (!form.email) {
        //     error['email'] = 'Email khong duoc de trong'
        // } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(form.email)) {
        //     error['email'] = 'Email khong dung dinh dang'
        // }

        // if (!form.fb) {
        //     error['fb'] = 'FB khong duoc de trong'
        // } else if (!/https?:\/\/(www\.)?facebook.com\/[-a-zA-Z0-9@:%._\+~#=]{1,256}/.test(form.fb)) {
        //     error['fb'] = 'fb khong dung dinh dang'
        // }

        // if (!form.phone) {
        //     error['phone'] = 'Phone khong duoc de trong'
        // } else if (!/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(form.phone)) {
        //     error['phone'] = 'Phone khong dung dinh dang'

        // }

        // setError(error)

        let error = submit();
        console.log(error)
        if (Object.keys(error).length === 0) {
            setLoading(true)
            setTimeout(() => {
                // alert('dang ky thanh cong')
                setLoading(false)
            }, 1000)
        }

    }


    if (!course) return <LoadingApi />

    if (course === 'notfound') return <LoadingApi>Khoa học không tồn tại</LoadingApi>

    let money = new Intl.NumberFormat('vn').format(course.money)

    return (
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">ĐĂNG KÝ</div>
                        <h1 className="main-title">{course.title}</h1>
                        <div className="main-info">
                            <div className="date"><strong>Khai giảng:</strong> {course.opening_time}</div>
                            <div className="time"><strong>Thời lượng:</strong> {course.video_count} buổi</div>
                            <div className="time"><strong>Học phí:</strong> {money} VND</div>
                        </div>
                        <div className="form">
                            <label>
                                <p>Họ và tên<span>*</span></p>
                                <input type="text" placeholder="Họ và tên bạn" onChange={inputChange} name="username" value={form.username} />
                            </label>
                            {
                                error.username && <p className="error" style={style.inputError}>{error.username}</p>
                            }
                            <label>
                                <p>Số điện thoại<span>*</span></p>
                                <input type="text" placeholder="Số điện thoại" onChange={inputChange} name="phone" value={form.phone} />
                            </label>
                            {
                                error.phone && <p className="error" style={style.inputError}>{error.phone}</p>
                            }
                            <label>
                                <p>Email<span>*</span></p>
                                <input type="text" placeholder="Email của bạn" onChange={inputChange} name="email" value={form.email} />
                            </label>
                            {
                                error.email && <p className="error" style={style.inputError}>{error.email}</p>
                            }
                            <label>
                                <p>URL Facebook<span>*</span></p>
                                <input type="text" placeholder="https://facebook.com" name="fb" onChange={inputChange} value={form.fb} />
                            </label>
                            {
                                error.fb && <p className="error" style={style.inputError}>{error.fb}</p>
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
                                <input type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." onChange={inputChange} name="note" value={form.note} />
                            </label>
                            <div className="btn main rect" onClick={submitBtnClick} >đăng ký {loading && <CircularProgress size={20} style={{ marginLeft: 20 }} />}</div>
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
    )
}
