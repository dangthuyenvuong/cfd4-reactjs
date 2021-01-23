import React, { useEffect, useState } from 'react'
import userApi from '../../../api/userApi'
import LoadingApi from '../../../components/LoadingApi'
import { useAuth } from '../../../core/hook/useAuth'
import CourseItem from './CourseItem'

export default function Course() {

    let auth = useAuth()


    let [course, setCourse] = useState()

    useEffect(async () => {

        let res = await userApi.course()
        setCourse(res.data)
    }, [])

    if (!course) return <LoadingApi />
    return (
        <div className="tab2">
            {
                course.length === 0 ?
                    <div> Bạn chưa đăng ký khóa học nào</div>
                    :
                    course.map((e, i) => <CourseItem key={i} {...e} />)
            }
        </div>
    )
}
