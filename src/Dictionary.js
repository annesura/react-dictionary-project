import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [word, getWord] = useState("");

    function search(event){
        event.preventDefault();
        alert(`Searching for ${word}`);
    }

    function handleWordChange(event) {
        getWord(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" autoFocus={true} placeholder="Enter a word..." onChange={handleWordChange} />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}