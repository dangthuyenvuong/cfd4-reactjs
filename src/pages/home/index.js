import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


import Banner from './components/Banner'
import CourseList from './components/CourseList'
import Special from './components/Special'
import Review from './components/Review'
import Gallery from './components/Gallery'
import Form from './components/Form'
import LoadingApi from '../../components/LoadingApi'

// let string = 'asdfasdf'

// try {
//     string = JSON.parse(string)
// } catch (err) {
//     string = {}
// }


// console.log(string)

export default function Home() {

    let [state, setState] = useState();
    useEffect(async () => {

        let res = await fetch('http://localhost:8888/elearning/v4/home')
        res = await res.json();
        console.log(res)
        setState(res)


        // fetch('http://cfd-reactjs.herokuapp.com/elearning/v4/home')
        //     .then(res => res.json())
        //     .then(res => {
        //         setState(res)
        //     })

        // fetch('http://cfd-reactjs.herokuapp.com/elearning/v4/home')
        //     .then(res => res.json())
        //     .then(res => {
        //         setReview(res)
        //     })

        // fetch('http://cfd-reactjs.herokuapp.com/elearning/v4/home')
        //     .then(res => res.json())
        //     .then(res => {
        //         setGallery(res)
        //     })
    }, [])
    console.log('render.....')

    if (!state) return <LoadingApi />

    return (
        <main className="homepage" id="main">
            <Banner />
            <CourseList offline={state.offline} online={state.online} />

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
            <Review list={state.review} />
            <Gallery list={state.gallery} />
            <Form />
        </main>

    )
}
