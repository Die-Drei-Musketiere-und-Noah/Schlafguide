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