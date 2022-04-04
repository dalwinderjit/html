$(document).ready(function(){
const ctx = document.getElementById('myChart').getContext('2d');
// gradiant for first bar
const gradiantbg1=ctx.createLinearGradient(10,100,50,600);
const gradiantborder1=ctx.createLinearGradient(0,0,0,1200);
gradiantborder1.addColorStop(1,'#4c9efc');
gradiantborder1.addColorStop(1,'white');
gradiantbg1.addColorStop(0.3,'#4c9efc');
gradiantbg1.addColorStop(1,'white');
// gradiant for first bar end

// gradiant for second bar
const gradiantbg2=ctx.createLinearGradient(10,100,50,600);
const gradiantborder2=ctx.createLinearGradient(0,0,0,1200);
gradiantborder2.addColorStop(1,'#fc8a33');
gradiantborder2.addColorStop(1,'white');
gradiantbg2.addColorStop(0.3,'#fc8a33');
gradiantbg2.addColorStop(1,'white');
// gradiant for first bar end

// gradiant for third bar
const gradiantbg3=ctx.createLinearGradient(10,100,50,600);
const gradiantborder3=ctx.createLinearGradient(0,0,0,1200);
gradiantborder3.addColorStop(1,'#48b134');
gradiantborder3.addColorStop(1,'white');
gradiantbg3.addColorStop(0.3,'#48b134');
gradiantbg3.addColorStop(1,'white');
// gradiant for third bar end



const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [ "Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"],
        datasets: [{
            label: 'Cow no 1',
            data: [1200, 1100, 1500, 1700, 1800, 1500, 1000, 850, 900, 1300, 1100,750],
            backgroundColor: 
            gradiantbg1 ,
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            // ],
            borderColor: 
            gradiantborder1,
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            // ],
            borderWidth: 1,
        },
        {
            label: 'Cow no.2',
            data: [1100, 1400, 1100, 900, 800, 900, 1000, 1150, 700, 1100, 850,850],
            backgroundColor: 
            gradiantbg2,                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            // ],
            borderColor: 
            gradiantborder2,
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            // ],
            borderWidth: 1
            
        },
        {
            label: 'Cow no.3',
            data: [1000, 1200, 1100, 1600, 1100, 1200, 900, 950, 800, 1250, 1000,850],
            backgroundColor: 
            gradiantbg3,
            //     'rgba(54, 162, 235, 0.2)',
            //     'rgba(255, 206, 86, 0.2)',
            //     'rgba(75, 192, 192, 0.2)',
            //     'rgba(153, 102, 255, 0.2)',
            //     'rgba(255, 159, 64, 0.2)'
            // ],
            borderColor: 
            gradiantborder3,

            // 'rgba(55, 199, 32, 2)',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)',
            //     'rgba(75, 192, 192, 1)',
            //     'rgba(153, 102, 255, 1)',
            //     'rgba(255, 159, 64, 1)'
            // ],
            borderWidth: 1
        }
    ]
    },
    options: {
        // create space between bars start
        categoryPercentage:0.6,
        barPercentage:0.7, 
                // create space between bars end

       // for circle cow name start
        plugins:{
            legend:{
                labels:{
                    usePointStyle: true,
                    pointStyle:'circle'
                }
            }
        } ,
               // for circle cow name end

        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
});


});