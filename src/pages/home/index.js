import React, { useEffect, useState } from 'react'


import Banner from './components/Banner'
import Special from './components/Special'
import Review from './components/Review'
import Gallery from './components/Gallery'
import Form from './components/Form'
import LoadingApi from '../../components/LoadingApi'
import CourseList from '../../components/CourseList'
import pageApi from '../../api/pageApi'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHome, homeUpdateData } from '../../redux/actions/homeAction'

export default function Home() {

    // let [state, setState] = useState();
    let home = useSelector(state => state.home)
    const dispatch = useDispatch()

    useEffect(async () => {
        if (home.loading) {
            // let res = await pageApi.home()
            // dispatch(homeUpdateData(res))
            dispatch(fetchHome())
        }



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

    if (home.loading) return <LoadingApi />

    return (
        <main className="homepage" id="main">
            <Banner />
            <CourseList offline={home.offline} online={home.online} />

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
            <Review list={home.review} />
            <Gallery list={home.gallery} />
            <Form />
        </main>

    )
}
