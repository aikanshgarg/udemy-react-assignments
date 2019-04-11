import React, { Component } from 'react'; 
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {

  // LIFE CYCLE HOOKS

  //STEP-1
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
       { id: 'asdf1' , name: 'Max', age: 28 },
       { id: 'asdf2' , name: 'Manu', age: 29 },
       { id: 'asdf3' , name: 'Stephenie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true 
  }

  //STEP-2
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  //STEP-4
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  // COMPONENT UPDATE LIFE CYCLE METHOD
  shouldComponentUpdate() {
    console.log('[App.js] shouldComponentMount');
    return true;
  }
  // COMPONENT UPDATE LIFE CYCLE METHOD
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  switchNameHandler = (newName) => {
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
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  deletePersonsHandler = personIndex => {
    const persons = [...this.state.persons]; 
    persons.splice(personIndex, 1); 
    this.setState({ persons: persons })
  }

  //STEP-3
  render() {
    console.log('[App.js] render');

    let persons = null;
    
    if (this.state.showPersons) {
      persons = <Persons
                  persons={this.state.persons}
                  clicked={this.deletePersonsHandler}
                  changed={this.nameChangedHandler} /> ;
    }
  
    return (
      <div className={styles.App}>
        <button onClick={() => {
                  this.setState({showCockpit: false});
                }} >
                Remove Cockpit
        </button>
        { this.state.showCockpit ? (
        <Cockpit 
                 title={this.props.appTitle} 
                 persons={this.state.persons} 
                 showPersons={this.state.showPersons} 
                 clicked={this.togglePersonsHandler}  />
                 ) : null }
        { persons }
      </div>  
    )
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