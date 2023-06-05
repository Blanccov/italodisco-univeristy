import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../axios-client";
import { useStateContext } from "../../context/ContextProvider";
import styles from "./Application.module.scss";

export default function ApplicationForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    const { setNotification } = useStateContext();
    const [scores, setScores] = useState({
        id: null,
        recruitment_id: id,
        subject: "",
        score: null,
    });
    const [recruitments, setRecruitments] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [addedScores, setAddedScores] = useState([]);

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

    const handleSubmit = (ev) => {
        ev.preventDefault();

        const recruId = {
            recruitment_id: id,
        };
        console.log(recruId);

        axiosClient
            .post(`applications/applyForRecruitment`, recruId)
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

    const onSubmit = (ev) => {
        ev.preventDefault();

        axiosClient
            .post(`/scores/addScore`, scores)
            .then(() => {
                setNotification("Score was succesfully added");
                setAddedScores([...addedScores, data]);
                // navigate("/users");
            })
            .catch((err) => {
                const response = err.response;
                console.log(err);
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }
            });

        console.log(scores);
    };

    return (
        <div className={styles["bg-image"] + " d-flex flex-column"}>
            {scores.id && <h1 className="text-white">Update scores</h1>}
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
                            value={scores.subject}
                            onChange={(ev) =>
                                setScores({
                                    ...scores,
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
                        <button className="btn btn-outline-primary mt-2">
                            Add scores
                        </button>
                    </div>
                </form>
            )}
            <form onSubmit={handleSubmit} className="my-form">
                <table>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {addedScores.map((score) => (
                            <tr key={score.id}>
                                <td>{score.subject}</td>
                                <td>{score.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="btn btn-outline-primary mt-2">Apply</button>
            </form>
        </div>
    );
}
