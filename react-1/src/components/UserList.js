import React, { useState, useEffect, useCallback } from 'react'
import { createUseStyles } from 'react-jss'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import UserItem from './UserItem'
import Loader from './Loader'

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

    const moveUser = useCallback(
        (dragIndex, hoverIndex) => {
            const dragUser = userList[dragIndex]

            //immutable userList
            let newUsers = [...userList];
            newUsers.splice(dragIndex, 1);
            newUsers.splice(hoverIndex, 0, dragUser)

            setUserList(
                newUsers
            )
        },
        [userList]
    )

    const list = userList.map((user, index) => <UserItem 
                                            key={user.id}
                                            user={user}
                                            index={index}
                                            moveUser={moveUser}
                                            id={user.id}
                                        />)

    return (
        <div className={classes.UserList}>
            <DndProvider backend={HTML5Backend}>
                { loading ? <Loader/> : list}
            </DndProvider>
        </div>
    )
}

export default UserList