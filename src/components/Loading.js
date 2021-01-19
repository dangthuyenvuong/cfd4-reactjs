import React from 'react'
import reactDOM from 'react-dom'

export default function Loading() {
    return reactDOM.createPortal(
        <div className="pageLoading">
            <div className="loading"></div>
        </div>,
        document.getElementById('root2')
    )
}
