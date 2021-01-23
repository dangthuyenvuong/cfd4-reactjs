import React, { useEffect, useState } from 'react'
import LoadingApi from '../../components/LoadingApi';
import CourseList from '../../components/CourseList';

export default () => {

    let [state, setState] = useState();

    useEffect(async () => {

        let res = await fetch('http://localhost:8888/elearning/v4/home')
        res = await res.json();
        setState(res)

    }, [])

    if (!state) return <LoadingApi />


    return (
        <main className="homepage" id="main">

            <CourseList online={state.online} offline={state.offline} />

        </main>
    )
}
