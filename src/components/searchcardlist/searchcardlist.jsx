import React from 'react';
import './searchcardlist.css'
export const Searchcardlist = (props) => {
    console.log(props)
    return (<div className="searchcardlist">
              <input type="search" placeholder="Search users" onChange={props.onChange} />
          </div>)
}