import React from 'react'
import reactDOM from 'react-dom'

export default function Loading() {
    return reactDOM.createPortal(
        <div className="pageLoading">
            <div className="loading" style={{ left: 0, top: 0, transform: 'translate(-50%, -50%) scale(0)' }}>
            </div>
        </div>,
        document.getElementById('root2')
    )
}
