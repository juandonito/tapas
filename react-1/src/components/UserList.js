import React from 'react'
import { createUseStyles } from 'react-jss'

import UserItem from './UserItem'

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
    return (
        <div className={classes.UserList}>
            <UserItem />
            <hr/>
            <UserItem />
        </div>
    )
}

export default UserList