import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'

import UserItem from './UserItem'

import users from '../api/users'

const useStyle = createUseStyles({
    UserList: {
        width: '90%',
        borderRadius: '8px',
        background: 'white',
        boxShadow: '0px 0px 16px 0px rgba(168,168,168,0.3)',
        margin: 'auto'
    }
})

const UserList = () => {
    const classes = useStyle()

    const [userList, setUserList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading(true)

        users.get('/')
            .then(res => {
                setUserList(res.data)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
            })

    }, [])

    const list = userList.map(user => <UserItem key={user.username} user={user} />)

    return (
        <div className={classes.UserList}>
            { loading ? <span>Loading Users</span> : list}
        </div>
    )
}

export default UserList