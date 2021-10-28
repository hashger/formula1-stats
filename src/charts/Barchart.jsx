import React from "react";

import Chart from 'chart.js/auto';




const Barchart = ({data, labels, colors, title}) =>{


    const barChartOptions ={
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: title,
                data: data,
                backgroundColor: colors,
            }]
        },
    }


    let canvasRef = React.useRef();
    React.useEffect(() =>{
        
        const ctx = canvasRef.current.getContext('2d');
        let myChart = new Chart(ctx, barChartOptions);

        return () => myChart.destroy();

    })

  
    return(
        <canvas 
            id="myChart" 
            ref={canvasRef} 
            
        />
    )
    
}

export {Barchart}