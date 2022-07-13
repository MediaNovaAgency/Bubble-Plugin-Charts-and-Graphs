function(instance, properties, context) {
    	
    	let instanceID = instance.canvas[0].bubble_data.bubble_instance._visibility_demand._ar_object.id
    	var myChart;
    	var labels = properties.xValues.split(',');
    	var dataList = properties.yValues.split(',')
        
 

        const data = {
            labels: labels,
            datasets: [{
                label: properties.datasetname,
                backgroundColor: properties.areacolor,
                borderColor: properties.linecolor,
                data: dataList,
                
            }]
        };
    

        const config = {
            type: 'bar',
            data: data,
            options: {
                        onClick: (e) => {
                            let labelClicked = e.chart.tooltip.dataPoints[0].label
                            //console.log("clicked on",labelClicked )
                            instance.publishState("labelclicked", labelClicked);
                            instance.triggerEvent('clickedArea')
            			},
                        responsive: true,
                        plugins: {
                          tooltip:{
                             enabled: properties.tooltippresence,
                          },
                          legend: {
                            display: properties.displaylegend,
                            position: properties.datasetlocation,
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
        ctx.setAttribute("id","chartCanva"+instanceID);

        instance.canvas[0].appendChild(ctx)

        myChart = new Chart(
            document.getElementById('chartCanva'+instanceID),
            config
        );
    });
    
    	
}