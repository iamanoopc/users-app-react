import React from 'react';
import {Card} from '../card/card'
import './cardlist.css'



export const Cardlist = (props) => {
    console.log(props)
    return <div className="cardlist">
        {
            props.users.map((obj)=>{
              return <Card key={obj.id} user={obj} />
            })
          }
    </div>
}