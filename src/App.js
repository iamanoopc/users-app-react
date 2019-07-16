import React, { Component } from 'react';
import './App.css';

import {Cardlist} from './components/cardlist/cardlist'
import {Searchcardlist} from './components/searchcardlist/searchcardlist'
// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//   "street": "Kulas Light",
//   "suite": "Apt. 556",
//   "city": "Gwenborough",
//   "zipcode": "92998-3874",
//   "geo": {
//   "lat": "-37.3159",
//   "lng": "81.1496"
//   }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//   "name": "Romaguera-Crona",
//   "catchPhrase": "Multi-layered client-server neural-net",
//   "bs": "harness real-time e-markets"
//   }
//  },


class App extends Component {
  constructor(){
    super();
    this.state = {
      users: [],
      searchField: ""
    }
  }
  handleSearch = (e) => {
    this.setState({searchField: e.target.value}, ()=>console.log(this.state)); 
  }
  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users)=>{this.setState({users : users})
    console.log("componentWillMount macha", users)

    })
  }
  componentDidMount(){
    console.log("componentDidMount macha")
  }
  componentDidUpdate(){
    console.log("componentDidUpdate macha")
  }
  render() {
    const keyword = this.state.searchField.toLowerCase()
    const filteredUsers = this.state.users.filter((user)=>{ return user.name.toLowerCase().includes(keyword)})
    return (
      <div className='App'>
        <Searchcardlist onChange={this.handleSearch}/>
        <Cardlist users={filteredUsers}/>
      </div>
      
      );
  }
}

export default App;
