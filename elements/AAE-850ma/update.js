function(instance, properties, context) {
    
    	var myChart;
    	var borderStyle;
    	let interpolationVariable;
    	let pointVariable;
		let interpolationOption = properties.interpolation
        let tension = parseFloat(properties.smoothness)
        let pointstyle = properties.pointstyle
        
        if (pointstyle === "⬥"){
            pointVariable = "rectRot"
        }else{
            pointVariable = "circle"
        }
        
    	if (properties.line_style === "– –"){
            borderStyle = {
                borderDash: [10, 4]
            }
        }
    
    	if (properties.line_style === "--"){
            borderStyle = {
                borderDash: [5, 4]
            }
        }

        if (interpolationOption === "Cubic Interpolation - monotone" ){
            interpolationVariable = {
                cubicInterpolationMode: 'monotone',
                tension: tension
            }
        }
    	
        if (interpolationOption === "Cubic Interpolation" ){
            interpolationVariable = {
                cubicInterpolationMode: 'default',
                tension: tension
            }
        }
    
    
    	var labels = properties.xValues.split(',');
    	var dataList = properties.yValues.split(',')
 

        const data = {
            labels: labels,
            datasets: [{
                label: properties.datasetname,
                backgroundColor: properties.areacolor,
                borderColor: properties.linecolor,
                data: dataList,
                fill: true,
                pointStyle: pointVariable,
				...interpolationVariable,
                ...borderStyle
                
            }]
        };
    

        const config = {
            type: 'line',
            data: data,
            options: {
                        responsive: true,
                        plugins: {
                          tooltip:{
                             enabled: properties.tooltippresence,
                          },
                          legend: {
                            display: properties.displaylegend,
                            position: properties.datasetlocation,
                            labels: {
                              usePointStyle: true,
                            },
                          },
                          title: {
                            display: true,
                            text: properties.title,
                            align: properties.titlealignment
                          },
                        },
                        interaction: {
                          mode: 'index',
                          intersect: false
                        },
                        scales: {
                          x: {
                            ticks: {
                                color: properties.values_color
                            },
                           	grid: {
                                color: properties.grid_x_color,
                                display: true
                            },
                            display: true,
                            title: {
                              color: properties.values_color,
                              display: true,
                              text: properties.labelx
                            }
                          },
                          y: {
                            ticks: {
                                color: properties.values_color
                              },
                            grid: {
                                color: properties.grid_y_color,
                                display: true
                            },
                            display: true,
                            title: {
                              display: true,
                              color: properties.values_color,
                              text: properties.labely
                            }
                          }
                        }
                      } 
        };
    
    $( document ).ready(function() {
        ctx = document.createElement("CANVAS");
        ctx.setAttribute("id","chartCanva");

        instance.canvas[0].appendChild(ctx)

        myChart = new Chart(
            document.getElementById('chartCanva'),
            config
        );
    });
    
    	
}