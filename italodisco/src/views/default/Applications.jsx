import React, { useState, useEffect } from "react";
import Card from "../../UX/Card";
import axiosClient from "../../axios-client";
import styles from "./Recruitment.module.scss";
import { Link } from "react-router-dom";

export default function Appliacations() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getRecruitment();
  }, []);

  const getRecruitment = () => {
    setLoading(true);
    axiosClient
      .get("/applications/showApplications")
      .then(({ data }) => {
        setLoading(false);
        setApplications(data.data);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div className={styles["bg-image"]}>
      {loading && (
        <div className="center">
          <div>
            <div className="text-white display-4">Loading...</div>
          </div>
        </div>
      )}

      <div className="my-sizing d-flex flex-wrap w-100 ">
        {applications && applications.map((r) => (
          <Card
            style={{
              backgroundImage: `url("images/bookphoto.jpg")`,
            }}
            to={"/applications/" + r.departament}
          >
            {r.departament}
          </Card>
        ))}
      </div>
      <Link className="btn m-2" to="/recruitments">
        Add new
      </Link>
    </div>
  );
}
