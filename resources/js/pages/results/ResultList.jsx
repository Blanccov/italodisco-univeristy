import React from "react";
import Result from "./Result";

const ResultList = (props) => {
    return (
        <ul>
            {props.resultes.map((result) => (
                <Result
                    key={result.id}
                    subject={result.subject}
                    score={result.score}
                    userId={result.userId}
                />
            ))}
        </ul>
    );
};

export default ResultList;
