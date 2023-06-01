import React from "react";
import Card from "../UX/Card";
import styles from "./Recruitment.module.scss"

export default function Recruitment(){

    return (
        <div className={styles["bg-image"]}>
            <div class="d-flex align-content-center flex-wrap w-100">
                <Card
                    style={{
                        backgroundImage: `url("images/bookphoto.jpg")`,
                    }}
                    href={"/result"}
                >
                    your application
                </Card>
            </div>
        </div>
    )

}
