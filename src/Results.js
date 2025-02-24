import React from "react";
import Meaning from "./Meaning.js";
import "./Results.css";

export default function Results(props) {
    console.log(props.results);

    if (props.results) {
        return (
            <div className="Results">
                <section>
                <h2>{props.results.word}</h2>
                <h4>{props.results.phonetic}</h4>
                </section>
                {props.results.meanings.map(function (meaning, index) {
                    return (<div key={index}>
                        <section>
                        <Meaning meaning={meaning} />
                        </section>
                    </div>)
                })}
                </div>
        )
    } else {
        return null;
    }
}