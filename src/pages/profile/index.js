import React, { useRef } from 'react'
import Menu from './components/Menu'
import Course from './components/Course'
import Project from './components/Project'
import Payment from './components/Payment'
import Coin from './components/Coin'
import Info from './components/Info'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import { useAuth } from '../../core/hook/useAuth'
import userApi from '../../api/userApi'

const styles = {
    inputFile: {
        display: 'block',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0,
        zIndex: 100,
    }
}


// FunctionComponent
export default function Profile() {

    let avatarRef = useRef()
    let login = true;

    let { path } = useRouteMatch()
    let auth = useAuth()


    if (!login) return <Redirect to="/" />

    function _fileChange(e) {
        if (e.currentTarget.files[0]) {
            let formData = new FormData();
            formData.append('avatar', e.currentTarget.files[0])

            userApi.updateAvatar(formData)
                .then(res => {
                    if (res.data) {
                        auth.loginAction(res.data)
                    }
                })
        }
    }


    return (
        <main className="profile" id="main">
            <section>
                <div className="top-info">
                    <div className="avatar">
                        {/* <span class="text">H</span> */}
                        <img src={auth.login.avatar?.link || "/img/avatar-default.png"} alt="" />
                        <input type="file" style={{ display: 'none' }} style={styles.inputFile} ref={avatarRef} onChange={_fileChange} />
                        <div className="camera" />
                    </div>
                    <div className="name">{auth.login.name}</div>
                    <p className="des">Thành viên của team CFD1-OFFLINE</p>
                </div>
                <div className="container">
                    <div className="tab">
                        <Menu />
                        <div className="tab-content">
                            <Switch>
                                <Route path={`${path}/khoa-hoc`}><Course /></Route>
                                <Route path={`${path}/du-an`}><Project /></Route>
                                <Route path={`${path}/lich-su-thanh-toan`}><Payment /></Route>
                                <Route path={`${path}/coin`}><Coin /></Route>
                                <Route><Info /></Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}


// ClassComponent
class Profile2 extends React.Component {

}