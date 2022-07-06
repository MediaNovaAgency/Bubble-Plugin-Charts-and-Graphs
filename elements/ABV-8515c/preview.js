 
function(instance, properties) {
    
    	let arrValues = properties.values.replace(/\s/g, '').split(";")
    	let arrColors = properties.colors.replace(/\s/g, '').split(";")
        let arrLabels = properties.labels.replace(/\s/g, '').split(";")
    
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.8.0/chart.min.js";
        $("body").append(s);
		
		

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
