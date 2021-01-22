import React from 'react'

export default function LoadingApi({ children }) {
    return (
        <div style={{ height: 500, display: 'flex' }}> <div style={{ margin: 'auto' }}>{children ? children : '...Loading'}</div></div>
    )
}
