import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Menu() {
    let url = useLocation();
    console.log(url)

    return (
        <div className="tab-title">
            <NavLink to={`/thong-tin-ca-nhan`} exact>Thông tin tài khoản</NavLink>
            <NavLink to={`/thong-tin-ca-nhan/khoa-hoc`}>Khóa học của bạn</NavLink>
            <NavLink to={`/thong-tin-ca-nhan/du-an`}>Dự án đã làm</NavLink>
            <NavLink to={`/thong-tin-ca-nhan/lich-su-thanh-toan`}>Lịch sử thanh toán</NavLink>
            <NavLink to={`/thong-tin-ca-nhan/coin`}>Quản lý COIN của tôi</NavLink>
        </div>
    )
}
