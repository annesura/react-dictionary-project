import React from "react";
import "./Photos.css";

export default function Photos(props) {
    if(props.photos) {
        console.log(props.photos);
        return (
            <section className="Photos">
                <div className="row">
                {props.photos.slice(3).map(function(photo, index) {
                    return (
                    <div className="col-4 mt-2 mb-2" key={index}>
                        <a href={photo.src.original} alt={photo.alt} target="_blank" rel="noreferrer">
                            <img src={photo.src.landscape} className="img-fluid" />
                        </a>
                    </div> );
                })}
                </div>
            </section>
        );
    } else {
        return null;
    }
}