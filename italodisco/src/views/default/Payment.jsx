import { useState, useEffect } from "react";
import { useStateContext } from "../../context/ContextProvider";
import { useNavigate, Link, useParams } from "react-router-dom";
import styles from "./Application.module.scss";
import axiosClient from "../../axios-client";

export default function Payment() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    const { setNotification } = useStateContext();
    const [application, setApplication] = useState([]);

    useEffect(() => {
        setLoading(true);
        axiosClient
            .get(`/applications/showApplications`)
            .then(({ data }) => {
                setLoading(false);
                const filteredApplication = data.applications.find(
                    (app) => app.application_id == id
                );
                setApplication(filteredApplication);
            })
            .catch(() => {
                setLoading(false);
            });
    }, []);
    console.log(application.amount);

    const [amount, setAmount] = useState([]);

    const onSubmit = (ev) =>{
        ev.preventDefault();
        console.log(amount)

        axiosClient
                .post(`/applications/makePaymentForRecruitment`, amount)
                .then(() => {
                    setNotification("User was succesfully created");
                    navigate("/admin/users");
                })
                .catch((err) => {
                    const response = err.response;
                    console.log(err);
                    if (response && response.status === 422) {
                        setErrors(response.data.errors);
                    }
                });
    }

    return (
        <div className={styles["bg-image"] + " d-flex flex-column"}>
            <h1 className="text-white">
                {application.recruitment_name} application
            </h1>

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
                <div className="my-form">
                    <h2>Status: {application.status_name}</h2>
                    <h3>Your points: {application.score}</h3>
                    {(application.status_id == 1) && (
                        <form onSubmit={onSubmit}>
                            <h3>Amount to pay: {application.amount}</h3>
                            <input placeholder="amount" onChange={(ev) =>
                            setAmount({ ...amount, amount: ev.target.value, recruitment_id: application.recruitment_id })
                        }/>
                        <button className="btn btn-outline-primary ms-1">Pay</button>
                        </form>
                    )}
                </div>
            )}
        </div>
    );
}
