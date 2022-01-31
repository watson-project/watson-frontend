import React from 'react';
import './SearchResults.module.css';
import { Link } from 'react-router-dom';

function SearchResults(props) {
    const { articles } = props;

    if (!articles) {
        return <div>No Articles Found ...</div>
    }

    return (
    <div>
        {articles.map((article) => {
            return (
                <Link to={`stories/search/${articles}`} > 
                </Link>
            )
        })}
    </div>
    );
}

export default SearchResults;