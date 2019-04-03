import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput.js'
import UserOutput from './UserOutput/UserOutput.js'

class App extends Component {

  state = {
    pets: [
       { name: 'Meowsalot', type: 'cat', food: 'tuna' },
       { name: 'Woofie', type: 'dog', food: 'cookies' }
    ]
  }

  switchFoodHandler = (newFood) => {
    this.setState({
      pets: [
         { name: 'Meowsalot', type: 'cat', food: newFood },
         { name: 'Woofie', type: 'dog', food: 'cookies' }
      ]
    })
  }

  foodChangedHandler = (event) => {
    this.setState({
      pets: [
         { name: 'Meowsalot', type: 'cat', food: event.target.value },
         { name: 'Woofie', type: 'dog', food: 'cookies' }
      ]
    })
  }



  render() {

    const style = {
      background: 'ivory',
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '1rem'
    };


    return (
      <div className="App">
        <UserInput food={this.state.pets[0].food} changed={this.foodChangedHandler} style={style}/>
        <UserOutput name={this.state.pets[0].name} type={this.state.pets[0].type} food={this.state.pets[0].food} click={this.switchFoodHandler.bind(this, 'Fish')}/>
        <UserOutput name={this.state.pets[1].name} type={this.state.pets[1].type} food={this.state.pets[1].food}/>        
      </div>
    );
  }
}

export default App;
