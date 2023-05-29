import React, { useState, useCallback, useEffect} from "react";
import styles from "./ResultPage.module.scss";
import ResultList from "./ResultList";

function ResultPage() {
    const [resultes, setResultes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchResultesHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch("http://localhost:8000/api/results");
            console.log(response)
            console.log(response.status)
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }

            const data = await response.json();
            console.log(data)

            const transformedMovies = data.data.map((resultData) => {
                return {
                    id: resultData.id,
                    subject: resultData.subject,
                    score: resultData.score,
                    userId: resultData.user_id,
                };
            });
            setResultes(transformedMovies);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchResultesHandler();
    }, [fetchResultesHandler]);

    function addResultHandler(result) {
        console.log(result);
    }

    let content = <p>Found no resultes.</p>;

    if (resultes.length > 0) {
        content = <ResultList resultes={resultes} />;
    }

    if (error) {
        content = <p>{error}</p>;
    }

    if (isLoading) {
        content = <p>Loading...</p>;
    }
    // console.log(resultes)

    return (
        <div className={styles["bg-image"]}>
            <div className="accordion w-75" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                        >
                            Accordion Item #1
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Type</th>
                                        <th scope="col">Column heading</th>
                                        <th scope="col">Column heading</th>
                                        <th scope="col">Column heading</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="table-primary">
                                        <th scope="row">Primary</th>
                                        <td>Column content</td>
                                        <td>Column content</td>
                                        <td>Column content</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Accordion Item #2
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body"></div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            Accordion Item #3
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                        <button onClick={fetchResultesHandler}>Fetch Resultes</button>
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultPage;
