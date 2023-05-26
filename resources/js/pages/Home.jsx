import React from "react";
import styles from './Home.module.scss'

export default function Home() {
    const heading = "Laravel 9 Vite  with React JS";
    return <div className={styles['bg-image']}> {heading}</div>;
}
