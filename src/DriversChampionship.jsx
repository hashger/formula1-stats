import React from 'react';
import './ConstructorsChampionship.css';
import {Barchart} from './charts/Barchart.jsx';
import {constructorsColors} from './utils/constructorsColors';



function DriversChampionship() {
  const [drivers, setDrivers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);


  React.useEffect(() =>{
      fetch('http://ergast.com/api/f1/2021/driverStandings.json')
      .then(response => response.json())
      .then(data =>{
          const dataDrivers = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;

          
        const driversArrayCurated =  dataDrivers.map(driver =>{

          let dvr = driver.Driver;
          let cstr = driver.Constructors[0]
             return{
               name: dvr.familyName,
               color: constructorsColors[cstr.constructorId],
               points: driver.points,
             }
          });

        setDrivers(driversArrayCurated);
        setLoading(false);
          
      })
      .catch( err => console.log(err));
  
    }, [])

    const options = {
      aspectRatio: 2,
      indexAxis: 'x',
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
          text:'Formula 1 Drivers Championship 2021',
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
        data = {drivers.map(driver => driver.points)}
        labels ={drivers.map(driver => driver.name)}
        colors = {drivers.map(driver => driver.color)}
        options={options}
        dataAlpha= {drivers}

      /> }
    </div>
  );
}

export default DriversChampionship;
