console.log("loading month chart");

window.onload = function() {

    let monthlyChart = document.getElementById('myMonthChart').getContext('2d');

    // Global Options
    // Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = 'white';


    let monthLabel = [];
    monthData.monthSum.forEach(label=>{
        monthLabel.push(label.month);
    });
    console.log(monthLabel);

    let monthAmounts = [];
    monthData.monthSum.forEach(month => {
        monthAmounts.push(month.sum);
    });
    console.log("MONTH AMOUNT")
    console.log(monthAmounts);

    let monthExpenseChart = new Chart(monthlyChart, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels: monthLabel,
        datasets:[{
          label:'amount',
          data: monthAmounts,
          //backgroundColor:'green',
          backgroundColor:[
            "rgba(228,29,33,1)",
            "rgba(55,126,182,1)",
            "rgba(78,174,81,1)",
            "rgba(151,79,161,1)",
            "rgba(255,128,30,1)",
            "rgba(255,255,77,1)"
          ],
          borderWidth:1,
          borderColor: "white",
          hoverBorderWidth:3,
          hoverBackgroundColor:"rgba(255,99,132,0.4)",
          hoverBorderColor:"rgba(255,99,132,1)"
        }]
      },
      options:{
        maintainAspectRatio: false,
        plugins: {
            colorschemes: {
                scheme: 'brewer.SetOne9'
            }
        },
        title:{
          display:false,
          text:'Monthly Spend',
          fontSize:25,
          // fontColor:"rgba(255,99,132,1)"
        },

        // scales: {
        //     yAxes: [{
        //       stacked: true,
        //       gridLines: {
        //         display: true,
        //         color: "rgba(255,99,132,0.2)"
        //       },
        //     }],
        // },

        legend:{
          display:false,
          position:'right',
          labels:{
            // fontColor:"rgba(255,99,132,1)"
            fontColor:"white"
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });

}