import React from 'react'
import { Prompt } from 'react-router-dom'
import useFormValidate from '../../../hook/useFormValidate'

export default function Info() {

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
                required: true,
                pattern: 'phone'
            },
            email: {
                pattern: 'email'
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
            alert('thanh cong')
        }
    }

    return (
        <div className="tab1">
            {/* <Prompt message="Are you sure you want to leave?" /> */}
            <label>
                <p>Họ và tên<span>*</span></p>
                <input type="text" placeholder="Nguyễn Văn A" name="username" onChange={inputChange} value={form.username} />
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
                <input defaultValue="vuong.dang@dna.vn" type="text" name="email" onChange={inputChange} value={form.email} />
                {
                    error.email && <p className="error-text">{error.email}</p>
                }
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
