import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../axios-client";
import { useStateContext } from "../../context/ContextProvider";
import styles from "./Application.module.scss";

export default function ApplicationForm() {
    const { id } = useParams();
    const { user } = useStateContext();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    const { setNotification } = useStateContext();
    const [scores, setScores] = useState({
        id: null,
        recruitment_id: Number(id),
        subject: "",
        score: "",
    });
    const [subjects, setSubjects] = useState([]);
    const [addedScores, setAddedScores] = useState([]);

    useEffect(() => {
        setLoading(true);

        axiosClient
            .post(`scores/uniqueSubjects`, scores)
            .then(({ data }) => {
                setLoading(false);
                setSubjects(data);
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

        axiosClient
            .post(`/applications/applyForRecruitment`, recruId)
            .then(() => {
                setNotification("User was succesfully created");
            })
            .catch((err) => {
                const response = err.response;
                console.log(err);
                if (response && response.status === 400) {
                    setErrors(response.data.error);
                }
            });
    };

    const onSubmit = (ev) => {
        ev.preventDefault();

        console.log(scores);
        axiosClient
            .post(`/scores/addScore`, scores)
            .then((response) => {
                const { data } = response.data;
                setNotification("Score was succesfully added");
                let resultId = data.result_id; // Zmienna lokalna resultId
                console.log(resultId);

                axiosClient
                    .get(`/scores?filters[result_id][$eq]=${resultId}`)
                    .then((response) => {
                        const { data } = response.data;
                        console.log(data);
                        setNotification("Score was succesfully added");

                        // Sprawdź, czy już istnieje addedScore z tym samym result_id
                        const isScoreAdded = addedScores.some(
                            (score) => score.result_id === resultId
                        );

                        if (!isScoreAdded) {
                            // Filtruj dane, aby user_id wynosiło 5 i dodaj subject
                            const filteredData = data
                                .filter((score) => score.user_id === user.id)
                                .map((score) => ({
                                    ...score,
                                    subject: scores.subject,
                                }));

                            setAddedScores([...addedScores, ...filteredData]);
                        }
                    })
                    .catch((err) => {
                        const response = err.response;
                        console.log(err);
                        if (response && response.status === 422) {
                            setErrors(response.data.errors);
                        }
                    });
            })
            .catch((err) => {
                // bledy
            });
    };

    return (
        <div className={styles["bg-image"] + " d-flex flex-column"}>
            {scores.id && <h1 className="text-white">Update scores</h1>}
            {!scores.id && <h1 className="text-white">New scores</h1>}
            <div>{loading && <div>loading</div>}</div>
            {errors && (
                <div>

                        <h3 className="text-white fw-bold shadow">
                           {errors}
                        </h3>

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
