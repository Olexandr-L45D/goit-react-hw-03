import css from "./SearchBox.module.css"
import React, { useState, useEffect } from "react";

export default function SearchBox() {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (evt) => {
        setInputValue(evt.target.value);
    };

    return (
        <div className={css.item}>
            <h5 className={css.paragraf}>Finde contacts by name</h5>
            <input type="text" value={inputValue} onChange={handleChange} />
            <p>{inputValue}</p>
        </div>
    );
};