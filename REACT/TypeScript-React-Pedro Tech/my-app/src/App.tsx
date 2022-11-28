import React from 'react';
import './App.css';
import Person, { Country } from './components/Person';



function App() {

  // Function
const age=(name:string):number=>{
  return 99
}

console.log(age)
  
  return (
    <div className="App">
      <Person
        name="Pedro"
        email="pedro@gmail.com"
        age={21}
        isMarried={true}
        friends={["Jessica", "Jake", "Jerry", "Jasmine"]}
        country={Country.France} // Using ENUM. It is a way to condesate the options. In this case we specify in src/components/Person.tsx that it is only possible to choose 3 countries.
      />
    </div>
  );
}

export default App;
