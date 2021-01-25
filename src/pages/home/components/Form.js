import react from 'react'
import { Link } from 'react-router-dom'

export default function Form() {


    return (
        <section className="section-action">

            <div className="container">
                <h3>Bạn đã sẵn sàng trở thành chiến binh tiếp theo của Team CFD chưa?</h3>
                <Link to="/lien-he" className="btn main round bg-white">Liên hệ</Link>
            </div>
        </section>
    )
}
