import React from 'react'
import reactDOM from 'react-dom'

export default function Loading() {
    return reactDOM.createPortal(
        <div className="pageLoading">
            <div></div>
        </div>,
        document.getElementById('root2')
    )
}
