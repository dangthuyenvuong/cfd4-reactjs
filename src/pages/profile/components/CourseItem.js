import React from 'react'

export default function CourseItem({ course, trang_thai }) {

    let now = new Date();

    let start = new Date(course.opening_time)

    let temp2 = start.getTime()

    start.setMonth(start.getMonth() + 2)

    temp2 = start.getTime() - temp2

    temp2 = Math.round(temp2 / 1000)

    let temp = now.getTime() - start.getTime()

    temp = Math.round(temp / 1000)

    let process = temp > 0 ? (temp / temp2) * 100 : 100;


    return (
        <div className="item">
            <div className="cover">
                <img src={course.thumbnail.link} alt="" />
            </div>
            <div className="info">
                <a href="#" className="name">
                    {course.title}
                </a>
                <div className="date">Khai giảng ngày {course.opening_time}</div>
                <div className="row">
                    <div className>
                        <img src="/img/clock.svg" alt="" className="icon" />{54} giờ
                        </div>
                    <div className>
                        <img src="/img/play.svg" alt="" className="icon" />{course.count_video} video
                        </div>
                    <div className>
                        <img src="/img/user.svg" alt="" className="icon" />{25} học viên
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
