import React, { useContext, useRef } from 'react'
import reactDOM from 'react-dom'
import { Context } from '../App'
import { useAuth } from '../core/hook/useAuth'
import useFormValidate from '../core/hook/useFormValidate'
import userApi from '../api/userApi'

const styles = {
    errorText: {
        paddingLeft: 0,
        fontWeight: 400
    }
}

function PopupLogin(props, ref) {
    let { form, inputChange, error, submit } = useFormValidate({
        username: '',
        password: ''
    }, {
        rule: {
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
            username: {
                pattern: 'Email không đúng định dạng'
            },
            password: {
                min: 'Password phải dài hơn 6 kí tự',
                max: 'Password không được dài hơn 32 kí tự'
            }
        }
    })

    let auth = useAuth();

    async function _btnClick(e) {
        e.preventDefault();

        let error = submit();
        if (Object.keys(error).length === 0) {

            let res = await userApi.login(form)
            if (res.data) {
                auth.loginAction(res.data)
                context.closePopupLogin()
                // ........
            }



        }
    }

    let context = useContext(Context)

    return reactDOM.createPortal(
        <div className="popup-form popup-login" ref={ref} style={{ display: 'none' }}>
            <div className="wrap">
                <div className="ct_login" style={{ display: 'block' }}>
                    <h2 className="title">Đăng nhập</h2>
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
                        <a href="javascript:void(0)" className="forget" onClick={context.openPopupRegister}>Đăng ký</a>
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
                    <div className="close" onClick={context.closePopupLogin}>
                        <img src="img/close-icon.png" alt="" />
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('root2')
    )
}


export default React.forwardRef(PopupLogin)