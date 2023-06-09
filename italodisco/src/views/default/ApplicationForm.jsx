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
  const [subjectBalance, setSubjectBalance] = useState(0);

  useEffect(() => {
    setLoading(true);

    axiosClient
      .post(`scores/uniqueSubjects`, scores)
      .then(({ data }) => {
        setLoading(false);
        setSubjects(data);
        if (data.subject === "physics") {
          setSubjectBalance(data.balance);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log("Error fetching departments:", error);
      });
  }, []);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!window.confirm("Are you sure u have entered all the details?")) {
        return;
      }

    const recruId = {
      recruitment_id: id,
    };

    axiosClient
      .post(`/applications/applyForRecruitment`, recruId)
      .then(() => {
        setNotification("User was successfully created");
        navigate("/applications")
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

    axiosClient
      .post(`/scores/addScore`, scores)
      .then((response) => {
        const { data } = response.data;
        setNotification("Score was successfully added");
        let resultId = data.result_id;
        console.log(resultId);

        axiosClient
          .get(`/scores?filters[result_id][$eq]=${resultId}`)
          .then((response) => {
            const { data } = response.data;
            setNotification("Score was successfully added");

            const existingScoreIndex = addedScores.findIndex(
              (score) => score.result_id === resultId
            );

            if (existingScoreIndex !== -1) {
              const updatedScores = [...addedScores];
              updatedScores[existingScoreIndex] = {
                ...data[0],
                subject: scores.subject,
                balance: subjectBalance,
              };
              setAddedScores(updatedScores);
            } else {
              const filteredData = data
                .filter((score) => score.user_id === user.id)
                .map((score) => ({
                  ...score,
                  subject: scores.subject,
                  balance: subjectBalance,
                }));

              setAddedScores([...addedScores, ...filteredData]);
            }
          })
          .catch((err) => {
            const response = err.response;
            console.log(err);
            if (response && response.status === 400) {
              setErrors(response.data.errors);
              console.log(response.data.errors);
            }
            if (response && response.status === 400) {
              setErrors(response.data.errors);
            }
          });
      })
  };


  return (
    <div className={styles["bg-image"] + " d-flex flex-column"}>
      {scores.id && <h1 className="text-white">Update scores</h1>}
      {!scores.id && <h1 className="text-white">New scores</h1>}
      <div>{loading && <div>loading</div>}</div>
      {errors && (
                <div className="text-white">
                    {errors}
                </div>
            )}
      {!loading && (
        <form onSubmit={onSubmit} className="my-form">
          <div>
            <select
              value={scores.subject}
              onChange={(ev) => {
                const selectedSubject = ev.target.value;
                setScores({
                  ...scores,
                  subject: selectedSubject,
                });
                const selectedSubjectBalance = subjects.find(
                  (subject) => subject.subject === selectedSubject
                )?.balance;
                setSubjectBalance(selectedSubjectBalance);
              }}
            >
              <option value="">Select Subject</option>
              {subjects.map((subject) => (
                <option key={subject.subject} value={subject.subject}>
                  {subject.subject}
                </option>
              ))}
            </select>
            <input
            type="number"
            max="100"
            min="0"
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
            <p>Balance: {subjectBalance}</p>
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
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {addedScores.map((score) => (
              <tr key={score.id}>
                <td>{score.subject}</td>
                <td>{score.score}</td>
                <td>{score.score * score.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-outline-primary mt-2">Apply</button>
      </form>
    </div>
  );
}
