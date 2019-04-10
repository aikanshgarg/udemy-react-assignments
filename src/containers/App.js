// import React, { useState } from 'react';
import React, { Component } from 'react'; // JSX is the reason for importing React

import styles from './App.module.css';// Import css modules stylesheet as styles

//import Radium, { StyleRoot } from 'radium';

import Persons from '../components/Persons/Persons';

import Cockpit from '../components/Cockpit/Cockpit';


// App is a 'Stateful/Smart/Container Component' as it uses the setState property to change the state dynamically
class App extends Component {
  // Only available for components expending Component class
  state = {
    persons: [
       { id: 'asdf1' , name: 'Max', age: 28 },
       { id: 'asdf2' , name: 'Manu', age: 29 },
       { id: 'asdf3' , name: 'Stephenie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false 
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

  nameChangedHandler = (event, id) => {
    // find the person whose name is changed with the help of id
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    // ES6 spread operator to have a copy of the object because objects are reference type in JS(we ony get a pointer to access them), so we can't mutate them.
    const person = {
      ...this.state.persons[personIndex]
    };
    // set name of person to current value in input field
    person.name = event.target.value;
    // make a new copy of persons array and use it to modify original array in setState
    const persons = [...this.state.persons];
    // assign the new person object(with name changed) in our copied array
    persons[personIndex] = person;

     // set original persons array to our copied and modified one(line 42)
    this.setState({ persons: persons })
      // persons: [
      //    { name: 'Max', age: 28 },
      //    { name: event.target.value, age: 29 },
      //    { name: 'Stephenie', age: 26 }
      // ]    
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  deletePersonsHandler = personIndex => {
    //const persons = this.state.persons.slice(); // slice: copying an array => to stop mutation of original array
    const persons = [...this.state.persons]; // spread operator: ES6 way of copying an array
    persons.splice(personIndex, 1); // deletes an element
    this.setState({ persons: persons })
  }


  render() {

    let persons = null;
    //let cssModuleClass = ''; 
    
    if (this.state.showPersons) {
      persons = (
        <div>
        {/*---------------------------------------------------------1st iteration: Hard coding the persons list--------------------------------------------------------*/}
          {/*<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Ann')} changed ={this.nameChangedHandler}>My Hobbies: Zumba </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />*/}
        
       {/*----------------------------------------------------------2nd iteration: List & Conditionals ---------------------------------------------------------------*/}
          {/*WRAPPING IN {} TO WRITE JS: use the map method on each object of persons array in current state and return a JSX object*/} 
          {/*
              this.state.persons.map((person, index) => { 
                return <Person 
                 click={() => this.deletePersonsHandler(index)}
                 name={person.name}
                 age={person.age} 
                 key={person.id} 
                 changed={event => this.nameChangedHandler(event, person.id)}  />
             })
          */}
        {/*-----------------------------------------------------------3rd iteration: Better folder structure ---------------------------------------------------------*/}
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonsHandler}
            changed={this.nameChangedHandler} />
        </div>
      );

      // ------------------------------ -----------------------------Removing inline styles and using css modules instead-----------------------------------
      //cssModuleClass = styles.Red;
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }

    

    // return (
    //   //<StyleRoot>
    //     <div className={styles.App}>
    //       <p className={classes.join(' ')}>Hi, I'm React App!</p>
    //       {/*<button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>*/} {/*either use arrow fn or bind for 'this'*/}
    //       {/*<button style={style} onClick={ () => this.switchNameHandler('Maximilian!!') }>Switch Name</button>*/}
    //       <button className={cssModuleClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
    //       { persons } {/*render persons element from line 77*/}
    //     </div>
    //   //</StyleRoot>
    // );
  //  return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m React App!')); -----------JSX => behind the scenes-----------------
  
        return (
          <div className={styles.App}>
            <Cockpit persons={this.state.persons} showPersons={this.state.showPersons} clicked={this.togglePersonsHandler}/>
            { persons }
          </div>  
        )
  }
}

// export default Radium(App);
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