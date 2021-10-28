
import './App.css';
import {Barchart} from './charts/Barchart.jsx';

function App() {
  fetch('http://ergast.com/api/f1/2021/constructorStandings.json')
  .then(response =>  {return response.json()})
  .then(data => console.log(data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings));
  return (
    <div className="App">
      <Barchart/>
    </div>
  );
}

export default App;
