    const data = {
      labels: [20, 35, 40, 45, 50, 55, 60],
      datasets: [
        {
          data: [16, 24, 30, 40, 50, 56, 60],
          backgroundColor: ' rgba(0, 0, 128, 1)',
          borderColor: 'rgba(0, 0, 128, 1)', 
          borderWidth: 1,
          barPercentage: 0.5,
          stack: 'stack1'
        },
        {
          data: [24, 36, 45, 60, 75, 84, 90], 
          backgroundColor: 'rgba(0, 0, 255, 1)',
          borderColor: 'rgba(0, 0, 255, 1)', 
          borderWidth: 1,
          barPercentage: 0.5,
          stack: 'stack1'
        },
        {
          data: [40, 60, 75, 100, 125, 140, 150],
          backgroundColor: 'rgba(54, 162, 235, 0.7)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          barPercentage: 0.5,
          stack: 'stack1'
        },
      ],
    };

    // Chart configuration
    const config = {
      type: 'bar',
      data: data,
      options: {
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
            beginAtZero: true,
            ticks: {
              callback: function (value, index, values) {
                return '$' + value;
              },
              stepSize: 100, 
              max: 300, 
              min: 0,
            }
          }
        },
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: 10, // Remove the padding around the chart
        },
      },
    };

    const myBarChart = new Chart(document.getElementById('myBarChart'), config);

    const navBtn = document.querySelectorAll("#nav-button");
    let activeBtn = null;

    navBtn.forEach((btn)=>{
     btn.addEventListener("click", ()=>{
      if (activeBtn !== null) {
        activeBtn.classList.remove("active");
      }
      btn.classList.toggle("active");
      activeBtn = btn;
    });  
   })
