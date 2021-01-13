import React from 'react'

export default function Course(props) {
    return (
        <div className="col-md-4 course__item">
            <a className="course__item-img">
                <img src={props.thumbnail} alt="alter" />
            </a>
            <div className="course__item-info">
                <div className="course__item-wrap">
                    <h2 className="course__item-title">{props.name}</h2>
                    <p className="course__item-des">{props.description}</p>
                </div>
                <div className="course__item-details">
                    <div className="teacher">
                        <div className="avatar">
                            <img src="/img/avt.png" alt="" />
                        </div>
                        <div className="name">Trần Nghĩa</div>
                    </div>
                    <a href="#" className="btn btn-register">Đăng ký</a>
                </div>
            </div>
        </div>
    )
}
