import React, { useEffect, useState } from 'react'
import LoadingApi from '../../components/LoadingApi';
import CourseList from '../../components/CourseList';
import pageApi from '../../api/pageApi';

export default () => {

    let [state, setState] = useState();

    useEffect(async () => {

        let res = await pageApi.courses()
        setState(res)

    }, [])

    if (!state) return <LoadingApi />


    return (
        <main className="homepage" id="main">

            <CourseList online={state.online} offline={state.offline} />

        </main>
    )
}
