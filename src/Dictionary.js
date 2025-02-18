import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    let [word, getWord] = useState("");

    function handleResponse(response) {
        console.log(response.data);
    }

    function search(event){
        event.preventDefault();
        alert(`Searching for the definition of ${word}...`);

        let apiKey = "0cca9cddf1f4t4bb307e8bfo1fa213f2";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`
        axios.get(apiUrl).then(handleResponse);
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