import React from 'react'
import userApi from '../../../api/userApi';
import { useAuth } from '../../../core/hook/useAuth';
import useFormValidate from '../../../core/hook/useFormValidate';

export default function Info() {
    let auth = useAuth()

    let { form, error, inputChange, submit } = useFormValidate({

        name: auth.login.name,
        phone: auth.login.phone,
        fb: auth.login.fb,
        skype: auth.login.skype,
    }, {
        rule: {
            name: {
                required: true
            },
            phone: {
                required: true,
                pattern: 'phone'
            },

            fb: {
                pattern: /https?:\/\/(www\.)?facebook.com\/[-a-zA-Z0-9@:%._\+~#=]{1,256}/
                // pattern: 'url'
            },
            skype: {
                required: true
            }
        },
        message: {
            fb: {
                pattern: 'FB không dúng dinh dạng'
            }
        }
    })


    function _btnCLick() {
        let error = submit();
        if (Object.keys(error).length === 0) {
            userApi.update(form)
                .then(res => {
                    if (res.data) {
                        alert('Cập nhật thông tin thành công')
                        auth.loginAction(res.data)
                    }
                })
        }
    }


    return (
        <div className="tab1">
            {/* <Prompt message="Are you sure you want to leave?" /> */}
            <label>
                <p>Họ và tên<span>*</span></p>
                <input type="text" placeholder="Nguyễn Văn A" name="name" onChange={inputChange} value={form.name} />
                {
                    error.username && <p className="error-text">{error.username}</p>
                }
            </label>
            <label>
                <p>Số điện thoại<span>*</span></p>
                <input type="text" placeholder="0949******" name="phone" onChange={inputChange} value={form.phone} />
                {
                    error.phone && <p className="error-text">{error.phone}</p>
                }
            </label>
            <label>
                <p>Email<span>*</span></p>
                <input type="text" name="email" onChange={inputChange} disabled value={auth.login.email} />

            </label>
            <label>
                <p>Facebook<span>*</span></p>
                <input type="text" placeholder="Facebook url" name="fb" onChange={inputChange} value={form.fb} />
                {
                    error.fb && <p className="error-text">{error.fb}</p>
                }
            </label>
            <label>
                <p>Skype<span>*</span></p>
                <input type="text" placeholder="Skype url" name="skype" onChange={inputChange} value={form.skype} />
                {
                    error.skype && <p className="error-text">{error.skype}</p>
                }
            </label>
            <div className="btn main rect" onClick={_btnCLick}>LƯU LẠI</div>
        </div>
    )
}
