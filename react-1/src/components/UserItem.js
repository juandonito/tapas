import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyle = createUseStyles({
    UserItem: {
        height: '88px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '0 40px'
    },
    UserName: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: 'grey'
    },
    UserMail: {
        fontSize: '14px',
        color: 'grey'
    }
})

const UserItem = ({ user }) => {
    const classes = useStyle()
    return (
        <div className={classes.UserItem}>
            <span className={classes.UserName}>{user.name}</span>
            <span className={classes.UserMail}>{user.email}</span>
        </div>
    )
}

export default UserItem