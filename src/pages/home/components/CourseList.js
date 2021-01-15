import React from 'react'
import Course from '../../../components/Course'


export default function CourseList() {

    return (
        <>
            <section className="section-courseoffline">
                <div className="container">
                    <p className="top-des">
                        The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                        has
                        a more-or-less normal
            </p>
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Offline</h2>
                    </div>
                    <div className="list row">
                        <Course name="Animation" description="One of the best corporate fashion brands in Sydney" thumbnail="/img/img1.png" />
                        <Course name="Reactjs" description="ABC" thumbnail="/img/img2.png" />
                        <Course name="Căn bản" description="XZY" thumbnail="/img/img3.png" />
                        <Course name="Animation" description="One of the best corporate fashion brands in Sydney" thumbnail="/img/img1.png" />
                        <Course name="Reactjs" description="ABC" thumbnail="/img/img2.png" />
                        <Course name="Căn bản" description="XZY" thumbnail="/img/img3.png" />

                    </div>
                </div>
            </section>
            <section className="section-courseonline section-blue">
                <div className="container">
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Online</h2>
                    </div>
                    <div className="list row">
                        <Course name="Animation" description="One of the best corporate fashion brands in Sydney" thumbnail="/img/img1.png" />
                        <Course name="Reactjs" description="ABC" thumbnail="/img/img2.png" />
                        <Course name="Căn bản" description="XZY" thumbnail="/img/img3.png" />
                    </div>
                    <div className="text-deco">C</div>
                </div>
            </section>
        </>
    )
}
