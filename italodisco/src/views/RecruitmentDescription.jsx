import { useEffect, useState } from "react";
import styles from "./Recruitment.module.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../context/ContextProvider";

export default function RecruitmentDescription() {
    const { id, departament } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [recruitment, setRecruitment] = useState([]);
    const { user } = useStateContext();

    useEffect(() => {
        setLoading(true);
        const dep = { departament };
        axiosClient
            .post(`/recruitments/getRecruitmentsByDepartment`, dep)
            .then(({ data }) => {
                const filteredRecruitments = data.recruitments.filter(
                    (recruitment) => recruitment.id == id
                );
                setRecruitment(filteredRecruitments);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, []);

    const onDelete = (u) => {
        if (!window.confirm("are you sure u want to delete this user?")) {
            return;
        }

        axiosClient.delete(`/recruitments/${u.id}`).then(() => {
            navigate('/admin/recruitments/' + departament)
        });
    };

    return (
        <div className={styles["bg-image"]}>
            {loading && <h1 className="text-white">loading...</h1>}
            {!loading && (
                <div className="w-75 my-form my-sizing-form ">
                    {recruitment.map((u) => (
                        <div>
                            <div className="d-flex flex-column justify-content-center ">
                                <h1 className="mt-3 text-white">
                                    {u.departament}
                                </h1>
                                <div className="mt-3">
                                    <h4 className="text-white">
                                        number of places: <u>{u.places}</u>
                                    </h4>
                                    <h4 className="text-white mt-3">
                                        Amount: <u>{u.amount}</u>
                                    </h4>
                                    <div className="d-flex justify-content-around flex-wrap">
                                        <h4 className="text-white mt-3">
                                            Start Date: <u>{u.start_date}</u>
                                        </h4>
                                        <h4 className="text-white mt-3">
                                            End Date: <u>{u.end_date}</u>
                                        </h4>
                                    </div>
                                    <h5 className="text-white mt-5">
                                        Description:
                                    </h5>
                                    <h3 className="text-white mt-1 mb-5">
                                        {u.description}
                                    </h3>
                                </div>
                            </div>
                            {user.role_id == 2 && (
                                <Link
                                    className="btn"
                                    to={`/applications/${u.id}`}
                                >
                                    apply
                                </Link>
                            )}
                            {user.role_id == 3 && (
                                <div className="d-flex flex-column mt-5">
                                    {/* <Link to={"/admin/recruitments/" + u.id}>Edit</Link> */}
                                    <Link className="btn m-1"
                                        to={
                                            "/admin/recruitments/" +
                                            u.departament +
                                            "/edit/" +
                                            u.id
                                        }
                                    >
                                        Edit
                                    </Link>
                                    {/* &nbsp; */}
                                    <button className="btn btn-danger m-1" onClick={(ev) => onDelete(u)}>
                                        Delete
                                    </button>
                                    <Link className="btn m-1" to={"/admin/students/" + u.id}>
                                        Students
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
