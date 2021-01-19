import React from 'react'
import CourseItem from './CourseItem'

export default function Course() {
    let courseList = [
        {
            name: 'front-end căn bản',
            cover: '/img/img3.png',
            date: '09/09/2019',
            video: 25,
            student: 20,
            hourse: 54,
            process: 30
        },
        {
            name: 'Reactjs',
            cover: '/img/img7.png',
            date: '09/09/2019',
            video: 25,
            student: 20,
            hourse: 54,
            process: 100
        }
    ]

    return (
        <div className="tab2">
            {
                courseList.map((e, i) => <CourseItem key={i} {...e} />)
            }
        </div>
    )
}
