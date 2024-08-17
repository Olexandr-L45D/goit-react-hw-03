import css from "./SearchBar.module.css"
import React, { useState, useEffect } from "react";

export default function SearchBar() {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (evt) => {
        setInputValue(evt.target.value);
    };

    return (
        <div className={css.item}>
            <input type="text" value={inputValue} onChange={handleChange} />
            <p>{inputValue}</p>
        </div>
    );
};