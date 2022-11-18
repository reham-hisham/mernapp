
import '../App.css';
import React, { useState } from 'react';
import axios from 'axios';

class App extends React.Component {
    state = { users:{} };
componentDidMount() {

this.getData();
} 
 getData= ()=> {
    const token = localStorage.getItem('token')
     
   axios.get('http://localhost:4000/user/info',{
       headers: {'Authorization': 'Bearer '+token}
   }).then((result) => {
     if(result){

this.setState({users :result.data})

     }
   }).catch((err) => {
       console.log(err)
   });

  }
      
    render() {
  return (
    <div>
name :{this.state.users.name}
<br>
</br>
email :{this.state.users.email}
  </div>
  
  )
}

}
export default App;
