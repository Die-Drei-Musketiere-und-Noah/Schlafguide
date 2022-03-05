// Our labels along the x-axis
let years = [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050];
// For drawing the lines
let africa = [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478];
let asia = [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267];
let europe = [168, 170, 178, 190, 203, 276, 408, 547, 675, 734];
let latinAmerica = [40, 20, 10, 16, 24, 38, 74, 167, 508, 784];
let northAmerica = [6, 3, 2, 2, 7, 26, 82, 172, 312, 433];
let ctx = document.getElementById("myChart");

let days = [];
let moonphase = [];


let display;

let myChart;

$.getJSON('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Heidenheim?unitGroup=metric&elements=sunrise%2Csunset%2Cmoonphase&include=fcst%2Cdays&key=WCHSBS53WTNRQ3WHQ8CNM74DQ&contentType=json'
    , function (data) {
        for (let date in data.days) {
            days.push(date);
            moonphase.push(data.days[date].moonphase)
        }
        myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: days,
                datasets: [
                    {
                        backgroundColor: 'rgba(248,255,0,0.36)',
                        label: 'Mond Phase',
                        borderColor: 'rgb(255,255,0)',
                        data: moonphase
                    }
                ]
            }
        });

    });