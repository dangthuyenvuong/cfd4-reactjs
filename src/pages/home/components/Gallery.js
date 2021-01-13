import React from 'react'

export default function Gallery() {
    return (
        <section className="section team">
            <div className="container">
                <div className="course">
                    <h2 className="title">Chúng ta</h2>
                    <h2 className="type">Là một team</h2>
                </div>
                <div className="slider">
                    <div className="slider--item">
                        <img src="/img/slider1.jpg" alt="" />
                    </div>
                    <div className="slider--item">
                        <img src="/img/slider2.jpg" alt="" />
                    </div>
                    <div className="slider--item">
                        <img src="/img/slider3.png" alt="" />
                    </div>
                    <div className="slider--item">
                        <img src="/img/slider4.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
