// import React, { useState } from 'react';
import React, { Component } from 'react'; // JSX is the reason for importing React
import './App.css';
import Person from './Person/Person.js'

// App is a 'Stateful/Smart/Container Component' as it uses the setState property to change the state dynamically
class App extends Component {
  // Only available for components expending Component class
  state = {
    persons: [
       { name: 'Max', age: 28 },
       { name: 'Manu', age: 29 },
       { name: 'Stephenie', age: 26 }
    ],
    otherState: 'some other value' 
  }

  switchNameHandler = (newName) => {
    // DON't mutate like this: this.state.persons[0].name = 'Maximilian';
    this.setState({ 
      persons: [
         { name: newName, age: 28 },
         { name: 'Manu', age: 29 },
         { name: 'Stephenie', age: 26 }
      ] 
    })
  }

  nameChangedHandler = (event) => {
    this.setState({ 
      persons: [
         { name: 'Max', age: 28 },
         { name: event.target.value, age: 29 },
         { name: 'Stephenie', age: 26 }
      ] 
    })
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      borderRadius: '3px'
    };

    return (
      <div className="App">
        <h1>Hi, I'm React App!</h1>
        {/*<button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>*/}
        <button style={style} onClick={ () => this.switchNameHandler('Maximilian!!') }>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Ann')} changed ={this.nameChangedHandler}>My Hobbies: Zumba</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  //  return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m React App!'));
  }
}

export default App;





// ----------------------------------------------------------------Using useState() Hook for state manipultaion-------------------------------------------------
// const app = props => {
//     const [ personsState, setPersonsState ] = useState({
//       persons: [
//         { name: 'Max', age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Stephenie', age: 26 }
//       ]
//     });

//     const [otherState, setOtherState] = useState('some other value!'); 

//     console.log(personsState, otherState);

//     const switchNameHandler = () => {
//     // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
//     setPersonsState({
//        persons: [
//         { name: 'Maximilian', age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Stephenie', age: 27 }
//       ]
//     });
//   };


//     return (
//       <div className="App">
//         <h1>Hi, I'm create React App! </h1>
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//         <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: racing</Person>
//         <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//       </div>
//     );
// }

// export default app;