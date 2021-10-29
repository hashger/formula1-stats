import React from 'react';
import './ConstructorsChampionship.css';
import {Barchart} from './charts/Barchart.jsx';
import {constructorsColors} from './utils/constructorsColors';



function ConstructorsChampionship() {
  const [constructors, setConstructors] = React.useState([]);
  const [loading, setLoading] = React.useState(true);


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
        setLoading(false)
          
      })
      .catch( err => console.log(err));
  
    }, [])

    const options = {
      aspectRatio: 2,
      indexAxis: 'y',
      plugins:{
        legend:{
          display: false,
          position: 'bottom',
          labels:{
            font:{
              size: 10,
            }
          }
          
        },
        title:{
          display: true,
          text:'Formula 1 Constructors Championship 2021',
          color: 'red',
          font:{
            size: 20,
          }
        }
      },
      elements:{
        bar:{
          inflateAmount: 0,
        }
      },
      datasets:{
        bar:{
          barPercentage: 1,}
      },
       scales:{
         
          x:{
            display: true,
            font:{
             size: 5,
           },
           ticks:{
             color:'red',
             font:{
               size: 10
             }
           },
           grid:{
             
            tickColor: 'red',
            borderColor: 'red',
           }
           
          },
          y:{
            ticks:{
              
              font:{
                size: 10
              }
            },
          }
        
       },
    }
  
  return (
    <div className="App">
      {!loading && <Barchart 
        data = {constructors.map(constructor => constructor.points)}
        labels ={constructors.map(constructor => constructor.name)}
        colors = {constructors.map(constructor => constructor.color)}
        title={'Constructors Championship'}
        options={options}
        dataAlpha= {constructors}

      /> }
    </div>
  );
}

export default ConstructorsChampionship;
