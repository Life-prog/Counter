import React from 'react';
import styles from '../css/display.module.css'

type PropsType = {
    MIN_VALUE: number
    MAX_VALUE: number
    counter: number
}

function Display(props:PropsType) {

    const className = props.counter === props.MIN_VALUE || props.counter === props.MAX_VALUE ? styles.newBg : styles.bg

    return (
        <div className={className}>
            <div>{props.counter}</div>
        </div>
    )
}

export default Display