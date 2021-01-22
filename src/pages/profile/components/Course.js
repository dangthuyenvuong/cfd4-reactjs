import React, { useEffect, useState } from 'react'
import userApi from '../../../api/userApi'
import LoadingApi from '../../../components/LoadingApi'
import { useAuth } from '../../../core/hook/useAuth'
import CourseItem from './CourseItem'

export default function Course() {

    let auth = useAuth()


    let [course, setCourse] = useState()

    useEffect(async () => {

        let res = await userApi.profile()
        setCourse(res.data)
    }, [])

    if (!course) return <LoadingApi />
    console.log(course)
    return (
        <div className="tab2">
            {
                course.map((e, i) => <CourseItem key={i} {...e} />)
            }
        </div>
    )
}
