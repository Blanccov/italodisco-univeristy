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
        places: null,
        amount: null,
        startDate: null,
        endDate: null,
    });
    const [departaments, setDepartaments] = useState([]);

    useEffect(() => {
        setLoading(true);
        axiosClient
            .get(`/recruitments/getDepartments`)
            .then(({ data }) => {
                setLoading(false);
                console.log("Departments:", data);
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
                    setRecruitment(data);
                })
                .catch(() => {
                    setLoading(false);
                });
        }, []);
    }

    const onSubmit = (ev) => {
        ev.preventDefault();
        console.log(recruitment);
        if (recruitment.id) {
            axiosClient
                .patch(`/recruitments/${recruitment.id}`, recruitment)
                .then(() => {
                    setNotification("recruitment was succesfully updated");
                    navigate("/admin/recruitments/");
                })
                .catch((err) => {
                    const response = err.response;
                    console.log(err);
                    if (response && response.status === 422) {
                        setErrors(response.data.errors);
                    }
                });
                console.log(recruitment);
        } else {
            axiosClient
                .post(`/recruitments/`, recruitment)
                .then(() => {
                    setNotification("recruitment was succesfully created");
                    navigate("/admin/recruitments");
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
            {recruitment.id && (
                <h1 className="text-white">
                    Update recruitment: {recruitment.name}
                </h1>
            )}
            {!recruitment.id && <h1 className="text-white">New recruitment</h1>}
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
                            value={recruitment.description}
                            onChange={(ev) =>
                                setRecruitment({
                                    ...recruitment,
                                    description: ev.target.value,
                                })
                            }
                            placeholder="Description"
                        />
                        <input
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
                            value={recruitment.startDate}
                            onChange={(ev) =>
                                setRecruitment({
                                    ...recruitment,
                                    startDate: ev.target.value,
                                })
                            }
                            placeholder="Start Date (YYYY-MM-DD)"
                        />
                        <input
                            value={recruitment.endDate}
                            onChange={(ev) =>
                                setRecruitment({
                                    ...recruitment,
                                    endDate: ev.target.value,
                                })
                            }
                            placeholder="End Date (YYYY-MM-DD)"
                        />
                    </div>
                    <div>
                        <button className="btn btn-outline-primary w-50 mt-3">
                            Save
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}
