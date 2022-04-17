import React from 'react';
import styles from './Hover.module.css';

export default function Hover(props) {

    return (
        <div className={styles['hover-effect']}>
            {props.children}
        </div>
    )
}
