import React from 'react';
import './card.css'
export const Card = (props) => {
    console.log(props)
    return (<div className="card">
              <img alt="user" src={`https://robohash.org/${props.user.id}/set=set2`}/>
              <h3 key={props.user.id}>{props.user.name}</h3>
              <p key={props.user.id}>{props.user.email}</p>
          </div>)
}