import React, {useRef} from 'react'
import { createUseStyles } from 'react-jss'

import { ItemTypes } from '../constants'
import { useDrag, useDrop } from 'react-dnd'

const useStyle = createUseStyles({
    UserItem: {
        position: 'relative',
        height: '88px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '0 40px',
        cursor: 'move'
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

const UserItem = ({ user, moveUser, index, id }) => {

    const classes = useStyle()

    const ref = useRef(null)
    const [, drop] = useDrop({
        accept: ItemTypes.ITEM,
        hover(item, monitor) {
            if(!ref.current) {
                return 
            }
            const dragIndex = item.index
            const hoverIndex = index

            if (dragIndex === hoverIndex) {
                return 
            }
            const hoverBoundingRect = ref.current.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            moveUser(dragIndex, hoverIndex)
            item.index = hoverIndex
        }
    })

    const [{ isDragging }, drag] = useDrag({
        item: {type: ItemTypes.ITEM, id, index },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })

    drag(drop(ref))

    return (
        <div className={classes.UserItem} ref={ref} >
            <span className={classes.UserName}>{user.name}</span>
            <span className={classes.UserMail}>{user.email}</span>
            <i className={classes.Arrow}/>
        </div>
    )
}

export default UserItem