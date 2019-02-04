import React, { Component } from 'react';
import './MyForm.css';

class MyForm extends React.Component {
  
  constructor(props) {
     super(props);
     this.state = {
       name:'',
       isGoing: true,
       age: 18
     };

     this.handleInputChange = this.handleInputChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleInputChange(event) {
     const target = event.target;
     const value = target.type === 'checkbox' ? target.checked : target.value;
     const name = target.name;

     this.setState({
       [name]: value
     });
   }

   handleSubmit(event) {

    const txtGoing = this.state.isGoing ? "Is Going" : " Is not Going";
    const txtData = this.state.name + ", " + this.state.age + " " + txtGoing;

    alert('Form data was submitted: ' + txtData);
    event.preventDefault();
   }

   render() {
     return (
       <form onSubmit={this.handleSubmit}>
        <label>
           Name:
           <input
             name="name"
             type="text"
             onChange={this.handleInputChange} />
         </label>
         <br />
         <label>
           Age:
           <input
             name="age"
             type="number"
             value={this.state.age}
             onChange={this.handleInputChange} />
         </label>
         <br />
         <label>
           Is going:
           <input
             name="isGoing"
             type="checkbox"
             checked={this.state.isGoing}
             onChange={this.handleInputChange} />
         </label>
         <br />
         <input type="submit" value="Submit" />
       </form>
     );
   }

}

export default MyForm;