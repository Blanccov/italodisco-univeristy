import React, { useState } from "react";

export default function Subject() {
    const [subject, setSubject] = useState({
        id: null,
        subject: "",
        balance: "",
        recruitment_id: "",
    });

    const onSubmit = (ev) => {
        ev.preventDefault();
        console.log(subject);
        if (subject.id) {
            axiosClient
                .post(`/results`, subject)
                .then(() => {
                    setNotification("subject was succesfully updated");
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
        </div>
    );
}
