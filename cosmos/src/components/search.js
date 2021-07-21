import React , { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './search.css'
import { useHistory } from 'react-router-dom';

function Search() {

    const [ search , setSearch ] = useState('');

    const history = useHistory();

    const changeHandler = (e) => {
        e.preventDefault();
        if(search) {
            history.push(`/search/${search}`);
        }
    }

    return (
        <div className="search">
            <form onSubmit={changeHandler}>
                <SearchIcon />
                <input placeholder={`Search`} value={search} onChange={(e) => setSearch(e.target.value)}></input>
            </form>
        </div>
    )
}

export default Search;