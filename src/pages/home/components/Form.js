import React, { useContext } from 'react'
import { Context } from '../../../App'

export default function Form() {

    let context = useContext(Context)

    return (
        <section className="section-action">
            <button className="btn" onClick={context.openPopupLogin}>Dang nhap</button>

            <div className="container">
                <h3>Bạn đã sẵn sàng trở thành chiến binh tiếp theo của Team CFD chưa?</h3>
                <div className="btn main round bg-white">Đăng ký</div>
            </div>
        </section>
    )
}
