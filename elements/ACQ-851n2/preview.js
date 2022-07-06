 
function(instance, properties) {
    
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.8.0/chart.min.js";
        $("body").append(s);
		
    
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
    
    $(window).on( "load", function() { 
        ctx = document.createElement("CANVAS");
        ctx.setAttribute("id","chartCanva");

        instance.canvas[0].appendChild(ctx)



        myChart = new Chart(
            document.getElementById('chartCanva'),
            config
        );
    })
    
    	
}
