import React from 'react'
import pageApi from '../../api/pageApi'
import useFormValidate from '../../core/hook/useFormValidate'

export default function Contact() {
    let { form, error, inputChange, submit } = useFormValidate({
        name: '',
        phone: '',
        email: '',
        website: '',
        content: ''
    }, {
        rule: {
            name: {
                required: true
            },
            phone: {
                pattern: 'phone'
            },
            email: {
                pattern: 'email'
            },
            title: {
                required: true
            },
            content: {
                required: true
            }
        },
        message: {
            name: {
                required: 'Họ và tên không được để trống'
            },
            phone: {
                pattern: "Số điện thoại không đúng định dạng"
            },
            email: {
                pattern: 'Email không đúng định dạng'
            },

        }
    })

    function _btnRegisterClick() {
        let error = submit()
        if (Object.keys(error).length === 0) {
            pageApi.contact(form)
                .then(res => {
                    if (res.success) {
                        alert('Gửi liên hệ thành công, chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất')
                    }
                })
        }
    }

    return (
        <main className="register-course" id="main">
            <section className="section-1 wrap container">
                {/* <div class="main-sub-title">liên hệ</div> */}
                <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
                <p className="top-des">
                    Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
                    việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
                </p>
                <div className="form">
                    <Input title="Họ và tên" required placeholder="Họ và tên bạn" name="name" defaultValue={form.name} error={error.name} onChange={inputChange} />
                    <Input title="Số điện thoại" required placeholder="Số điện thoại" name="phone" defaultValue={form.phone} error={error.phone} onChange={inputChange} />
                    <Input title="Email" required placeholder="Email của bạn" name="email" defaultValue={form.email} error={error.email} onChange={inputChange} />
                    <Input title="Website" placeholder="Đường dẫn website http://" name="website" defaultValue={form.website} error={error.website} onChange={inputChange} />
                    <Input title="Tiêu đề" required placeholder="Tiêu đề liên hệ" name="title" defaultValue={form.title} error={error.title} onChange={inputChange} />


                    <label>
                        <p>Nội dung<span>*</span></p>
                        <textarea name="content" cols={30} rows={10} value={form.content} onChange={inputChange} />
                    </label>
                    {error.content && <p className="error-text" style={{ paddingLeft: 230 }}>{error.content}</p>}
                    <div className="btn main rect" onClick={_btnRegisterClick}>đăng ký</div>
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



function Input({ title, required, name, type = "text", error, ...ref }) {
    return <>
        <label>
            <p>{title} {required && <span>*</span>} </p>
            <input name={name} type={type}  {...ref} />

        </label>
        {error && <p className="error-text" style={{ paddingLeft: 230, marginTop: -20 }}>{error}</p>}
    </>
}