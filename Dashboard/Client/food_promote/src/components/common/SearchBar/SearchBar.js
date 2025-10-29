import React, { useState } from "react";
import classes from './SearchBar.module.css'
import iconSearch from '../../../assets/icon_search.png'

function SearchBar({ defaultValue = "", onSearch }) {
    const [query, setQuery] = useState(defaultValue);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className={classes.search_form}>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Tìm kiếm..."
                className={classes.search_input}
            />
            <button type="submit" className={classes.search_button}>
                <img src={iconSearch} alt="search" />
            </button>
        </form>
    );
}

export default SearchBar;
