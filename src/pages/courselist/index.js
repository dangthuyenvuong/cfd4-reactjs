import React, { useEffect, useState } from 'react'
import LoadingApi from '../../components/LoadingApi';
import CourseList from '../../components/CourseList';
import pageApi from '../../api/pageApi';
import { useDispatch, useSelector } from 'react-redux';
import { homeUpdateData } from '../../redux/actions/homeAction';

export default () => {

    let home = useSelector(state => state.home)
    const dispatch = useDispatch()

    useEffect(async () => {
        if (home.loading) {
            let res = await pageApi.home()
            dispatch(homeUpdateData(res))
        }

    }, [])

    if (home.loading) return <LoadingApi />


    return (
        <main className="homepage" id="main">

            <CourseList online={home.online} offline={home.offline} />

        </main>
    )
}
