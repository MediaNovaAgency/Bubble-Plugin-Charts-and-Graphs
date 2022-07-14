function(instance, properties, context) {
    

    	
    	
    
    	let arrValues = properties.values.replace(/\s/g, '').split(";")
    	let arrColors = properties.colors.replace(/\s/g, '').split(";")
        let arrLabels = properties.labels.replace(/\s/g, '').split(";")
        

    
        const data = {
            labels: arrLabels,
            datasets: [{
                circumference: properties.circumference,
                cutout: properties.donuthole,
                borderRadius: properties.borderradius,
                borderColor: properties.bordercolor,
                spacing: properties.spacing,
                label: 'My First Dataset',
                data: arrValues,
                backgroundColor: arrColors,
                hoverOffset: -6
            }]
        };
    

        const config = {
          type: "doughnut",
          data: data,
          options: {
            onClick: (e) => {
                let labelClicked = e.chart.tooltip.dataPoints[0].label
                instance.publishState("labelclicked", labelClicked);
                instance.triggerEvent('clickedArea')
            },
            responsive: true,
            plugins: {
              tooltip: {
                    enabled: properties.tooltippresence,
              },
              legend: {
                position: properties.labelslocation,
                display: properties.displaylegend,
                labels: {
                  generateLabels: (chart) => {
                    const datasets = chart.data.datasets;
                    return datasets[0].data.map((data, i) => ({
                      text: `${chart.data.labels[i]} ${data}`,
                      fillStyle: datasets[0].backgroundColor[i],
                    }))
                  }
                }
              },
              title: {
                display: true,
                text: properties.title
              }
            }
          },
        };
    
    $( document ).ready(function() {
        let instanceID = instance.canvas[0].bubble_data.bubble_instance._visibility_demand._ar_object.id
        try{
            instance.canvas[0].removeChild(document.getElementById("chartCanva"+instanceID))
        }catch(e){
            console.log("not able to remove chield")
        }
        
        ctx = document.createElement("CANVAS");
        ctx.setAttribute("id","chartCanva"+instanceID);

        instance.canvas[0].appendChild(ctx)

        myChart = new Chart(
            document.getElementById("chartCanva"+instanceID),
            config
        );
    });
    	
}