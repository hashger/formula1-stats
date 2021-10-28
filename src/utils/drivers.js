

const [drivers, setDrivers] = React.useState([]); 

  React.useEffect(() =>{
    fetch('http://ergast.com/api/f1/2021/driverStandings.json')
    .then(response =>  {return response.json()})
    .then(data =>{
      const dataDrivers = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        console.log(dataDrivers);
        
    })
    .catch( err => console.log(err));

  }, [])