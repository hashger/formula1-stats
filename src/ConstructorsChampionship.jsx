import React from 'react';
import './ConstructorsChampionship.css';
import {Barchart} from './charts/Barchart.jsx';
import {constructorsColors} from './utils/constructorsColors';



function ConstructorsChampionship() {
  const [constructors, setConstructors] = React.useState([]);


  React.useEffect(() =>{
      fetch('http://ergast.com/api/f1/2021/constructorStandings.json')
      .then(response => response.json())
      .then(data =>{
          const dataConstructors = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;

        const constructorsArrayCurated =  dataConstructors.map(constructor =>{

          let constr = constructor.Constructor;
            return{
              name: constr.name,
              color: constructorsColors[constr.constructorId],
              points: constructor.points,
            }
          })

        setConstructors(constructorsArrayCurated);
          
      })
      .catch( err => console.log(err));
  
    }, [])
  
  return (
    <div className="App">
      <Barchart 
        data = {constructors.map(constructor => constructor.points)}
        labels ={constructors.map(constructor => constructor.name)}
        colors = {constructors.map(constructor => constructor.color)}
        title={'Constructors Championship'}

      />
    </div>
  );
}

export default ConstructorsChampionship;
