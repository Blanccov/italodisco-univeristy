import React from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

export default function Card(props) {
    return (
        <div className={`${styles.container} ${props.className}`} key={`${props.key}`}>
            <div className={styles.card}>
                <h1>{props.children}</h1>
                <p>Check now</p>
                <div className={styles.pic} style={props.style}></div>
                <Link to={props.to}></Link>
            </div>
        </div>
    );
}
