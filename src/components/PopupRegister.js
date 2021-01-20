import React, { useContext, useRef } from 'react'
import reactDOM from 'react-dom'
import { Context } from '../App'
import { useAuth } from '../core/hook/useAuth'
import useFormValidate from '../core/hook/useFormValidate'

const styles = {
    errorText: {
        paddingLeft: 0,
        fontWeight: 400
    }
}

function PopupRegister(props, ref) {
    let { form, inputChange, error, submit } = useFormValidate({
        name: '',
        username: '',
        password: ''
    }, {
        rule: {
            name: {
                required: true
            },
            username: {
                required: true,
                pattern: 'email'
            },
            password: {
                required: true,
                min: 6,
                max: 32
            }
        },
        message: {
            name: {
                required: 'Họ và tên là bắt buộc'
            },
            username: {
                pattern: 'Email không đúng định dạng'
            },
            password: {
                min: 'Password phải dài hơn 6 kí tự',
                max: 'Password không được dài hơn 32 kí tự'
            }
        }
    })
    let context = useContext(Context)
    console.log(context)

    let auth = useAuth();

    function _btnClick(e) {
        e.preventDefault();

        let error = submit();
        if (Object.keys(error).length === 0) {
            console.log(form)
            fetch('http://localhost:8888/elearning/v4/register', {
                method: 'POST',
                body: JSON.stringify(form),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .then(res => {
                    console.log(res.data)
                    if (res.data) {
                        auth.loginAction(res.data)
                        context.closePopupRegister()
                    }
                })
        }
    }


    return reactDOM.createPortal(
        <div className="popup-form popup-login" ref={ref} style={{ display: 'none' }}>
            <div className="wrap">
                <div className="ct_login" style={{ display: 'block' }}>
                    <h2 className="title">Đăng ký</h2>
                    <input type="text" placeholder="Username" name="name" onChange={inputChange} value={form.name} />
                    {error.name && <p className="error-text" style={styles.errorText}>{error.name}</p>}
                    <input type="text" placeholder="Username" name="username" onChange={inputChange} value={form.username} />
                    {error.username && <p className="error-text" style={styles.errorText}>{error.username}</p>}
                    <input type="password" placeholder="Mật khẩu" name="password" onChange={inputChange} value={form.password} />
                    {error.password && <p className="error-text" style={styles.errorText}>{error.password}</p>}

                    <div className="remember">
                        <label className="btn-remember">
                            <div>
                                <input type="checkbox" />

                            </div>

                            <p>Nhớ mật khẩu</p>
                        </label>
                        <a href="javascript:void(0)" className="forget" onClick={context.openPopupLogin}>Đăng nhập</a>
                    </div>
                    <div className="btn rect main btn-login" onClick={_btnClick}>đăng nhập</div>
                    <div className="text-register" style={{}}>
                        <strong>hoặc đăng ký bằng</strong>
                    </div>
                    <div>
                        <div className="btn btn-icon rect white btn-google">
                            <img src="img/google.svg" alt="" />
                Google
              </div>
                    </div>
                    <div className="close" onClick={context.closePopupRegister}>
                        <img src="img/close-icon.png" alt="" />
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('root2')
    )
}


export default React.forwardRef(PopupRegister)