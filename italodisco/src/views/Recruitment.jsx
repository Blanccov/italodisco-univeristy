import React, { useState, useEffect } from "react";
import Card from "../UX/Card";
import axiosClient from "../axios-client";
import styles from "./Recruitment.module.scss";

export default function Recruitment() {
    const [recruitments, setRecruitments] = useState([]);
    const [loading, setLoding] = useState(false);

    useEffect(() => {
        getRecruitment();
    }, []);

    const getRecruitment = () => {
        setLoding(true);
        axiosClient
            .get("/recruitments/getDepartments")
            .then(({ data }) => {
                setLoding(false);
                setRecruitments(data);
            })
            .catch(() => {
                setLoding(false);
            });
    };

    return (
        <div className={styles["bg-image"]}>

                {loading && (
                    <div className="center">
                        <tr>
                            <td className="text-white display-4">Loading...</td>
                        </tr>
                    </div>
                )}

            <div class="my-sizing d-flex  flex-wrap w-100 ">

                {recruitments.map((r) => (
                    <Card
                        style={{
                            backgroundImage: `url("images/bookphoto.jpg")`,
                        }}
                        to={"/recruitments/"+r.name}
                    >
                        {r.departament}
                    </Card>
                ))}
            </div>
        </div>
    );

}
