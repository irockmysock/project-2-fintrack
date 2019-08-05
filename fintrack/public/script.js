console.log("loading cat chart");

window.onload = function() {

    let catChart = document.getElementById('myChart').getContext('2d');


    // Global Options
    // Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 14;
    Chart.defaults.global.defaultFontColor = 'white';


    let labelValues = [];
    data.categories.forEach(label=>{
        labelValues.push(label.cat_name);
    });
    console.log(labelValues);

    let catAmounts = [];
    data.categories.forEach(cat => {
        catAmounts.push(cat.sum);
    });
    console.log("CAT AMOUNT")
    console.log(catAmounts);

    let catExpenseChart = new Chart(catChart, {
      type:'pie', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels: labelValues,
        datasets:[{
          label:'amount',
          data:catAmounts,
          //backgroundColor:'green',
          // backgroundColor:[
          //   'rgba(255, 99, 132, 0.6)',
          //   'rgba(54, 162, 235, 0.6)',
          //   'rgba(255, 206, 86, 0.6)',
          //   'rgba(75, 192, 192, 0.6)',
          //   'rgba(153, 102, 255, 0.6)',
          //   'rgba(255, 159, 64, 0.6)',
          //   'rgba(255, 99, 132, 0.6)',
          //   'rgba(150, 90, 132, 0.6)'
          // ],
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
          text:'Category Spend',
          fontSize:25
        },
        legend:{
          display:true,
          position:'right',
          labels:{
            // fontColor:'rgba(255,99,132,1)'
            fontColor: 'white'
          }
        },
        layout:{
          padding:{
            left:0,
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


};