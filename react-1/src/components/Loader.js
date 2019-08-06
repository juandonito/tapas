import React from 'react'
import { createUseStyles } from 'react-jss'

const Loader = () => {
    const useStyle = createUseStyles({
        '@keyframes loader': {
            '0%': {
                transform: 'rotate(0deg)'
            },
            '100%': {
                transform: 'rotate(360deg)'
            }
        },
        Loader: {
            display: 'inline-block',
            width: '64px',
            height: '64px',
            padding: '24px',
            '&:after': {
                content: '""',
                display: 'block',
                width: '64px',
                height: '64px',
                margin: '1px',
                borderRadius: '50%',
                border: '5px solid #cef',
                borderColor: '#cef transparent #cef transparent',
                animation: '$loader 1.2s linear infinite'
            }
        }
    })

    const classes = useStyle()
    return (
        <div className={classes.Loader}/>
    )
}

export default Loader