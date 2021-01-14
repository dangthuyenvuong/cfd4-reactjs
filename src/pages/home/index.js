import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


import Banner from './components/Banner'
import CourseList from './components/CourseList'
import Special from './components/Special'
import Review from './components/Review'
import Gallery from './components/Gallery'
import Form from './components/Form'
import PopupLogin from '../../components/PopupLogin'

export default function Home() {
    return (
        <main className="homepage" id="main">
            <PopupLogin />

            <Banner />
            <CourseList />

            <Special />
            {/* <section class="section-3">
            <div class="container">
                <div class="video">
                    <iframe id="video-intro"
                        src="https://www.youtube-nocookie.com/embed/6t-MjBazs3o?controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=ytplayer"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen allowscriptaccess="always"></iframe>

                    <div class="video-src" data-src="video/CFD-video-intro.mp4"></div>
                    <div class="play-btn btn-video-intro">
                        <img src="/img/play-video-btn.png" alt="">
                    </div>
                </div>
            </div>
        </section> */}
            <Review />
            <Gallery />
            <Form />
        </main>

    )
}
