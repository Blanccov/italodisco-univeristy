import React, { useEffect, useState } from "react";
import styles from "./Recruitment.module.scss";
import axiosClient from "../../axios-client";

export default function Subject() {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    const [subject, setSubject] = useState({
        id: null,
        subject: "",
        balance: "",
        recruitment_id: "",
    });
    const [currentSub, setCurrentSub] = useState([]);

    useEffect(() => {
        axiosClient
            .get(`/results`, {})
            .then(({ data }) => {
                const filteredSubjects = data.data.filter(
                    (subject) => subject.recruitment_id === 1
                );
                setCurrentSub(filteredSubjects);
                console.log(currentSub);
                navigate("/admin/recruitments/");
            })
            .catch((err) => {
                const response = err.response;
                console.log(err);
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }
            });
    }, []);

    const onSubmit = (ev) => {
        ev.preventDefault();
        console.log(subject);
        if (subject.id) {
            axiosClient
                .post(`/results`, subject)
                .then(() => {
                    // setNotification("subject was succesfully updated");
                    navigate("/admin/recruitments/");
                })
                .catch((err) => {
                    const response = err.response;
                    console.log(err);
                    if (response && response.status === 422) {
                        setErrors(response.data.errors);
                    }
                });
        }
    };

    return (
        <div className={styles["bg-image"] + " d-flex flex-column"}>
            <h1 className="text-white">Add subjects</h1>
            <div>{loading && <div>loading</div>}</div>
            {errors && (
                <div>
                    {Object.keys(errors).map((key) => (
                        <p key={key} className="text-danger">
                            {errors[key][0]}
                        </p>
                    ))}
                </div>
            )}
            {!loading && (
                <form onSubmit={onSubmit} className="my-form">
                    <div>
                        <input
                            value={subject.subject}
                            onChange={(ev) =>
                                setSubject({
                                    ...subject,
                                    subject: ev.target.value,
                                })
                            }
                            placeholder="Subject Name"
                        />
                        <input
                            type="number"
                            max="1"
                            min="0"
                            step="0.25"
                            value={subject.balance}
                            onChange={(ev) =>
                                setSubject({
                                    ...subject,
                                    balance: ev.target.value,
                                })
                            }
                            placeholder="Subject Balance"
                        />
                    </div>
                    <div>
                        <button className="btn btn-outline-primary w-50 mt-3">
                            Save
                        </button>
                    </div>
                </form>
            )}
            <div>
                <table className="bg-white m-3 border">
                {currentSub.map((u) => (
                    <tr key={u.id} className="">
                        <td>{u.subject}</td>
                        <td>{u.balance}</td>
                        <button onClick={(ev) => onDelete(u)}>Delete</button>
                    </tr>
                ))}
                    </table>
            </div>
        </div>
    );
}
