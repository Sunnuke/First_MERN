import React, { useState, useEffect } from "react";
import axios from "axios";

export default () => {
    const [ message, setMessage ] = useState("Loading...");

    useEffect(() => {
        axios.get("http://localhost:8000/api")
            .then(res => setMessage(res.data.message))
    }, []);
    return(
        <div>
            <h1>Message from Backend: {message}</h1>
        </div>
    )
}