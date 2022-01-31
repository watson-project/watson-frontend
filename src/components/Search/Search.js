import React from 'react';
import SearchResults from '../SearchResults/SearchResults';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import styles from './Search.module.css';
import { useNavigate } from 'react-router-dom';

function Search(props) {
	const [articles, setArticles] = useState([]);
	const [searchString, setSearchString] = useState('');
	const [lastSearch, setLastSearch] = useState('');

    const navigate = useNavigate();

	function getArticles() {
		const url = `https://watson-project.herokuapp.com/api/articles/search/${searchString}`;

        fetch( url, {
            method: 'GET',
            // body: JSON.stringify(articles),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
           return res.json();
        })
        .then((res) => {
            navigate(`/search/${searchString}`);
        }) 
	}

	function handleChange(event) {
		setSearchString(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		getArticles();
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				placeholder='Search for any Article'
				type='text'
				required
                name='searchString'
				onChange={handleChange}
				value={searchString}
			/>
			<button type='submit'>Search</button>
			<SearchResults articles={articles} />
		</form>
	);
}

export default Search;
