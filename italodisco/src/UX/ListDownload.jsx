import React from "react";
import axiosClient from "../axios-client";
import { useStateContext } from "../context/ContextProvider";

export default function ListDownload() {
const { setNotification } = useStateContext();

    const handleSubmit = (ev) =>{
        ev.preventDefault()
        axiosClient.get("/generate-pdf").then(()=>{
            setNotification("U are downloaded a list of studetns")
        })
    }

    return (
        <div>
            <button onClick={handleSubmit}>Download List</button>
        </div>
    );
}
