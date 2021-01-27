import React from 'react'
import Course from './Course'


export default function CourseList({ offline = [], online = [] }) {

    return (
        <>
            <section className="section-courseoffline">
                <div className="container">
                    <p className="top-des">
                        <strong>Chào mừng bạn đến với CFD</strong>!<br />
                        Nơi có những khóa học thực chiến Front-End Dev và UX/UI Design, kết nối và chia sẻ kinh nghiệm giúp bạn có đầy đủ kỹ năng thực tế để tạo ra những sản phẩm sáng tạo, tinh tế và phù hợp.

                    </p>
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Offline</h2>
                    </div>
                    <div className="list row">
                        {
                            offline.map((e, index) => <Course key={index} {...e} />)
                        }
                    </div>
                </div>
            </section>
            <section className="section-courseonline section-blue">
                <div className="container">
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Online</h2>
                    </div>
                    <div className="list row">
                        {
                            online.map((e, index) => <Course key={index} {...e} />)
                        }
                    </div>
                    <div className="text-deco">C</div>
                </div>
            </section>
        </>
    )
}
