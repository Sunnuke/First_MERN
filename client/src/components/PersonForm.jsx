import React, { useState } from "react";
import axios from "axios";


export default () => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");

    const submitting = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/person/new", {
            firstName,
            lastName
        })
            .then(res => console.log("Response:", res))
            .catch(err => console.log("ERROR:", err));
    }

    return(
        <form onSubmit={submitting} >
            <label>First Name</label><br/>
            <input type="text" onChange={ e => setFirstName(e.target.value) } />

            <label>Last Name</label><br/>
            <input type="text" onChange={ e => setLastName(e.target.value) } />

            <input type="submit" />
        </form>
    )
}
