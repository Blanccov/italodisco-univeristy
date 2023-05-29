import React from "react";
import styles from "./Home.module.scss";
import Header from "./shared/Header";

export default function Home() {
    const heading = "Laravel 9 Vite  with React JS";
    return (
        <>
            <Header />
            <div className={styles["bg-image"]}> {heading}</div>;
        </>
    );
}
