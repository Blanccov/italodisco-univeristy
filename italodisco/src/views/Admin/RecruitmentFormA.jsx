import React, { useState, useEffect } from "react";
import axiosClient from "../../axios-client";
import styles from "./Recruitment.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";

export default function RecruitmentFormA() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    const { setNotification } = useStateContext();
    const [recruitment, setRecruitment] = useState({
        id: null,
        name: "",
        departament: "",
        description: "",
        places: "",
        amount: "",
        start_date: "",
        end_date: "",
    });
    const [departaments, setDepartaments] = useState([]);

    useEffect(() => {
        setLoading(true);
        axiosClient
            .get(`/recruitments/getDepartments`)
            .then(({ data }) => {
                setLoading(false);
                setDepartaments(data);
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
                .get(`/recruitments/${id}`)
                .then(({ data }) => {
                    setLoading(false);
                    setRecruitment(data.data);
                })
                .catch(() => {
                    setLoading(false);
                });
        }, []);
    }

    const onSubmit = (ev) => {
        ev.preventDefault();
        if (recruitment.id) {
            axiosClient
                .patch(`/recruitments/${recruitment.id}`, recruitment)
                .then(() => {
                    setNotification("Recruitment was successfully updated");
                    navigate("/admin/recruitments/new/" + recruitment.id);
                })
                .catch((err) => {
                    const response = err.response;
                    console.log(err);
                    if (response && response.status === 422) {
                        setErrors(response.data.errors);
                    }
                });
        } else {
            axiosClient
                .post(`/recruitments/`, recruitment)
                .then(({ data }) => {
                    setNotification("Recruitment was successfully created");
                    navigate("/admin/recruitments/new/" + data.id);
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

    const handleStop = () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, "0");
        const day = String(currentDate.getDate()).padStart(2, "0");
        const formattedDate = `${year}-${month}-${day}`;

        const stopRecruitment = {
            end_date: formattedDate,
            places: 0,
        };

        axiosClient.patch(`/recruitments/${id}`, stopRecruitment).then(() => {
            setNotification("Recruitment was successfully stopped");
            navigate("/admin/recruitments");
        });
    };

    return (
        <div className={styles["bg-image"] + " d-flex flex-column"}>
            <div>{loading && <div>loading</div>}</div>

            {!loading && (
                <>
                    <form onSubmit={onSubmit} className="my-form my-margin">
                        {recruitment.id && (
                            <h1 className="text-white">
                                Update recruitment: {recruitment.name}
                            </h1>
                        )}
                        {!recruitment.id && (
                            <h1 className="text-white">New recruitment</h1>
                        )}
                        {errors && (
                            <div>
                                {Object.keys(errors).map((key) => (
                                    <p key={key} className="text-danger">
                                        {errors[key][0]}
                                    </p>
                                ))}
                            </div>
                        )}
                        <div>
                            <input
                                className="m-1"
                                value={recruitment.name}
                                onChange={(ev) =>
                                    setRecruitment({
                                        ...recruitment,
                                        name: ev.target.value,
                                    })
                                }
                                placeholder="Name"
                            />
                            <select
                                className="m-1"
                                value={recruitment.departament}
                                onChange={(ev) =>
                                    setRecruitment({
                                        ...recruitment,
                                        departament: ev.target.value,
                                    })
                                }
                            >
                                <option value="">Select Department</option>
                                {departaments.map((department) => (
                                    <option
                                        key={department.departament}
                                        value={department.departament}
                                    >
                                        {department.departament}
                                    </option>
                                ))}
                            </select>

                            <input
                                className="m-1"
                                value={recruitment.places}
                                onChange={(ev) =>
                                    setRecruitment({
                                        ...recruitment,
                                        places: ev.target.value,
                                    })
                                }
                                placeholder="Places"
                            />
                            <input
                                className="m-1"
                                value={recruitment.amount}
                                onChange={(ev) =>
                                    setRecruitment({
                                        ...recruitment,
                                        amount: ev.target.value,
                                    })
                                }
                                placeholder="Amount"
                            />
                            <input
                                className="m-1"
                                type="date"
                                value={recruitment.start_date}
                                onChange={(ev) =>
                                    setRecruitment({
                                        ...recruitment,
                                        start_date: ev.target.value,
                                    })
                                }
                                placeholder="Start Date (YYYY-MM-DD)"
                            />
                            <input
                                className="m-1"
                                type="date"
                                value={recruitment.end_date}
                                onChange={(ev) =>
                                    setRecruitment({
                                        ...recruitment,
                                        end_date: ev.target.value,
                                    })
                                }
                                placeholder="End Date (YYYY-MM-DD)"
                            />
                        </div>
                        <div>
                            <textarea
                                className="w-50 m-1"
                                value={recruitment.description}
                                onChange={(ev) =>
                                    setRecruitment({
                                        ...recruitment,
                                        description: ev.target.value,
                                    })
                                }
                                placeholder="Description"
                            />
                        </div>
                        <div>
                            <button className="btn btn-outline-primary w-50 mt-3">
                                Save
                            </button>
                        </div>
                    </form>
                    {id && (
                        <button
                            type="button"
                            onClick={handleStop}
                            className="btn btn-danger m-3"
                        >
                            Stop Recruiting for this Recruitment{" "}
                        </button>
                    )}
                </>
            )}
        </div>
    );
}
