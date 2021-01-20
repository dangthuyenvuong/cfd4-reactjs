import React from 'react'
import reactDOM from 'react-dom'
import useFormValidate from '../hook/useFormValidate'


const styles = {
    errorText: {
        paddingLeft: 0,
        fontWeight: 400
    }
}

export default function PopupLogin() {
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


    function _btnClick(e) {
        e.preventDefault();

        let error = submit();
        if (Object.keys(error).length === 0) {

        }
    }

    return reactDOM.createPortal(
        <div className="popup-form popup-login" >
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
                        <a href="#" className="forget">Quên mật khẩu?</a>
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
                    <div className="close">
                        <img src="img/close-icon.png" alt="" />
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('root2')
    )
}
