import React from 'react'
import './searchBar.css'

const SearchBar = ({value, changeInput}) => {
  return (
    <div className='max-width header'>
    <div className='header-search-container'>
    <div className='header-searchBar'>
            <i className="fa fa-search absolute-center search-icon"></i>
            <input placeholder='Search for cuisine or a dish' className='search-input' type='text' value={value} onChange={changeInput}/>
    </div>
    </div>
    </div>
  )
}

export default SearchBar