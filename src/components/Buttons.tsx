import React from 'react';
import styles from '../css/buttons.module.css'

type PropsType = {
    increment: () => void
    decrement: () => void
    reset: () => void
    MIN_VALUE: number
    MAX_VALUE: number
    counter: number
}

function Buttons(props:PropsType) {

    const classNameForInc = props.counter === props.MAX_VALUE  ? `${styles.opac} ${styles.inc}`  : styles.inc
    const classNameForDec = props.counter === props.MIN_VALUE  ? `${styles.opac} ${styles.dec}`  : styles.dec
    const classNameForRes = props.counter === 0 ? `${styles.opac} ${styles.res}` : styles.res

    return (
        <div>
            <button className ={classNameForInc} onClick={props.increment}>Inc</button>
            <button className ={classNameForDec} onClick={props.decrement}>Dec</button>
            <button className ={classNameForRes} onClick={props.reset}>Reset</button>
        </div>
    )
}

export default Buttons