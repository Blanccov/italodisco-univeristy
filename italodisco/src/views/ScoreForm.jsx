import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../context/ContextProvider";
import styles from "./Application.module.scss";

export default function ScoreForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    const { setNotification } = useStateContext();
    const [scores, setScores] = useState({
        id: null,
        recruitment_id: null,
        subject: "",
        score: null,
    });
    const [recruitments, setRecruitments] = useState([]);

    useEffect(() => {
        setLoading(true);
        axiosClient
            .get(`/recruitments`)
            .then(({ data }) => {
                setLoading(false);
                setRecruitments(data.data);
                console.log(recruitments);
            })
            .catch((error) => {
                setLoading(false);
                console.log("Error fetching departments:", error);
            });
    }, []);

    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        setLoading(true);
        axiosClient
            .get(`scores/uniqueSubjects`)
            .then(({ data }) => {
                setLoading(false);
                setSubjects(data);
                console.log(recruitments.id);
            })
            .catch((error) => {
                setLoading(false);
                console.log("Error fetching departments:", error);
            });
    }, []);

    if (id) {
        useEffect(() => {
            setLoading(true);
            axiosClient
                .get(`/users/${id}`)
                .then(({ data }) => {
                    setLoading(false);
                    setScores(data);
                })
                .catch(() => {
                    setLoading(false);
                });
        }, []);
    }

    const onSubmit = (ev) => {
        ev.preventDefault();

        axiosClient
            .post(`/scores/addScore`, scores)
            .then(() => {
                setNotification("User was succesfully created");
                navigate("/users");
            })
            .catch((err) => {
                const response = err.response;
                console.log(err);
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }
            });
    };

    return (
        <div className={styles["bg-image"] + " d-flex flex-column"}>
            {scores.id && (
                <h1 className="text-white">Update scores</h1>
            )}
            {!scores.id && <h1 className="text-white">New scores</h1>}
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
                        <select
                            value={scores.recruitment_id}
                            onChange={(ev) =>
                                setScores({
                                    ...scores,
                                    recruitment_id: ev.target.value,
                                })
                            }
                        >
                            <option value="">Select Recruitment</option>
                            {recruitments.map((recruitment) => (
                                <option
                                    key={recruitment.id}
                                    value={recruitment.id}
                                >
                                    {recruitment.name}
                                </option>
                            ))}
                        </select>

                        <select
                            value={subjects.subject}
                            onChange={(ev) =>
                                setScores({
                                    ...subjects,
                                    subject: ev.target.value,
                                })
                            }
                        >
                            <option value="">Select Subject</option>
                            {subjects.map((subject) => (
                                <option
                                    key={subject.subject}
                                    value={subject.subject}
                                >
                                    {subject.subject}
                                </option>
                            ))}
                        </select>
                        <input
                            value={scores.score}
                            onChange={(ev) =>
                                setScores({
                                    ...scores,
                                    score: ev.target.value,
                                })
                            }
                            placeholder="Score"
                        />
                    </div>
                    <div>
                        <button className="btn btn-outline-primary">
                            Save
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}
