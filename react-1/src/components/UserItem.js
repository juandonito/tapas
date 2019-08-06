import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyle = createUseStyles({
    UserItem: {
        position: 'relative',
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
    },
    Arrow: {
        position: 'absolute',
        right: '40px',
        width: '16px',
        height: '16px',
        borderTop: '4px solid lightgrey',
        borderLeft: '4px solid lightgrey',
        transform: 'rotate(135deg)'
    }
})

const UserItem = ({ user }) => {
    const classes = useStyle()
    return (
        <div className={classes.UserItem}>
            <span className={classes.UserName}>{user.name}</span>
            <span className={classes.UserMail}>{user.email}</span>
            <i className={classes.Arrow}/>
        </div>
    )
}

export default UserItem