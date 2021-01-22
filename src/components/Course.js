import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/img/img1.png'

export default function Course(props) {
    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <Link className="cover" to={`/chi-tiet/${props.slug}`}>
                    <img src={props.thumbnail.link} alt="" />
                    <span className="badge b1">Đã kết thúc</span>
                    <div className="hover">
                        <div className="top">
                            <div className="user">
                                <img src="/img/icon-user-white.svg" alt="" />
                          12</div>
                            <div className="heart">
                                <img src="/img/icon-heart.svg" alt="" /> 100
                        </div>
                        </div>
                        <div className="share">
                            <img src="/img/icon-viewmore.svg" alt="" />
                        </div>
                    </div>
                </Link>
                <div className="info">
                    <Link className="name" to={`/chi-tiet/${props.slug}`}>
                        {props.title}
                    </Link>
                    <p className="des">
                        {props.short_description}
                    </p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src={props.teacher.avatar?.thumbnail?.['thumbnail-1'] || props.teacher.avatar.link} alt="" />
                        </div>
                        <div className="name">{props.teacher.title}</div>
                    </div>
                    <Link to={`/dang-ky/${props.slug}`} className="register-btn">Đăng Ký</Link>
                </div>
            </div>
        </div>
    )
}
