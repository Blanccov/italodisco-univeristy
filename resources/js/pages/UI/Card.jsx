import React from "react";
import styles from "./Card.module.scss";

export default function Card(props) {
    return (
        <div className={`${styles.container} ${props.className}`}>
            <div className={styles.card}>
                <h1>{props.children}</h1>
                <p>Check now</p>
                <div className={styles.pic} style={props.style}></div>
                <a href={props.href}></a>
            </div>
        </div>
    );
}
