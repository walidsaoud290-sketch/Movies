import React, { useState } from "react";
import './SearchBar.css'

import { BiSearch } from 'react-icons/bi'

export default function SearchBar() {
    const [query, setQuery] = useState("");

    return (
        <>
            <div className='search-bar col bg-dark'>
                <BiSearch size={30} className='search-icon' />
                <input type="text" id='InputValue' onChange={e => setQuery(e.target.value)} placeholder='Search' className='w-50' />
            </div>
        </>
    );
}