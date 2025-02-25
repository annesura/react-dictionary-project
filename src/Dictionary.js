import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [word, getWord] = useState(props.defaultKeyword);
    let [results, getResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        getResults(response.data);
    }

    function handleImageResponse(response) {
        setPhotos(response.data.photos);
    }


    function search() {
        let apiKey = "0cca9cddf1f4t4bb307e8bfo1fa213f2";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`
        axios.get(apiUrl).then(handleDictionaryResponse);

        let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${apiKey}`
        axios.get(imageApiUrl).then(handleImageResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleWordChange(event) {
        getWord(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();

    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <h1>
                        What word do you want to look up?
                    </h1>
                <form onSubmit={handleSubmit}>
                    <input type="search" autoFocus={true} placeholder={props.defaultKeyword} onChange={handleWordChange} className="SearchBar" />
                    <input type="submit" value="Search" className="SearchButton" />
                </form>
                <div className="hint">
                    suggested words: dandelion, eclipse, tundra...
                </div>
                </section>
                <Results results={results} />
                <Photos photos={photos} />
            </div>
        )
    } else {
        load();
        return "Loading..."
    }


}