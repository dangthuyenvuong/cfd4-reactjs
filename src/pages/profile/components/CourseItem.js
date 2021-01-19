import React from 'react'

export default function CourseItem({ cover, name, date, hourse, video, student, process }) {
    return (
        <div className="item">
            <div className="cover">
                <img src={cover} alt="" />
            </div>
            <div className="info">
                <a href="#" className="name">
                    {name}
                </a>
                <div className="date">Khai giảng ngày {date}</div>
                <div className="row">
                    <div className>
                        <img src="/img/clock.svg" alt="" className="icon" />{hourse} giờ
                        </div>
                    <div className>
                        <img src="/img/play.svg" alt="" className="icon" />{video} video
                        </div>
                    <div className>
                        <img src="/img/user.svg" alt="" className="icon" />{student} học viên
                        </div>
                </div>
                <div className="process">
                    <div className="line">
                        <div className="rate" style={{ width: `${process}%` }} />
                    </div>
                    {process}%
                </div>

                <div className="btn overlay round btn-continue">{process < 100 ? 'Tiếp tục học' : 'Xem lại'}</div>
            </div>
        </div>
    )
}
