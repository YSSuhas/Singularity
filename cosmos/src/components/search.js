import React , { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './search.css'

function Search() {

    const [ search , setSearch ] = useState('');

    
    return (
        <div className="search">
            <form>
                <SearchIcon />
                <input placeholder={`Search`} value={search} onChange={(e) => setSearch(e.target.value)}></input>
            </form>
        </div>
    )
}

export default Search;