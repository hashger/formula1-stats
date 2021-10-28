import React from 'react';
import './App.css';
import {Barchart} from './charts/Barchart.jsx';



function App() {
  const [constructors, setConstructors] = React.useState([]); 

  React.useEffect(() =>{
    fetch('http://ergast.com/api/f1/2021/constructorStandings.json')
    .then(response =>  {return response.json()})
    .then(data =>{
        const dataConstructors = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        setConstructors(dataConstructors);
        console.log(constructors);
        
    })
    .catch( err => console.log(err));

  }, [])
  
  return (
    <div className="App">
      <Barchart />
    </div>
  );
}

export default App;
