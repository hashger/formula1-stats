import React from "react";

import Chart from 'chart.js/auto';




const Barchart = ({data, labels, colors, options, dataAlpha}) =>{

    const obo = dataAlpha.map( constructor =>{
        return{
            label: constructor.name,
            backgroundColor: constructor.color,
            data: [constructor.points]
        }
    })


    const barChartOptions ={
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor:colors
            }],
        },
        options:options,
    }


    let canvasRef = React.useRef();
    React.useEffect(() =>{
        Chart.defaults.font.family='Formula1';
        const ctx = canvasRef.current.getContext('2d');
        let myChart = new Chart(ctx, barChartOptions);
        //console.log(myChart.toBase64Image());
        
        

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