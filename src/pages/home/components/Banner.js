import React from 'react'

export default function Banner() {
    return (
        <div className="banner" style={{ backgroundImage: 'url(/img/img-home.jpg)' }}>
            <div className="inner__banner">
                <h2>Thực chiến</h2>
                <p>Để trở thành creative front-end developer</p>
                <a href="#" className="btn btn-round">Khoá học</a>
            </div>
        </div>
    )
}
