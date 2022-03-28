

let days = [];
let moonphase = [];

let lat = 48.6818466;
let long = 10.15458;

let myChart;


function getGeolocation(){
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(startCalculateChart, showError);
    }
}

function startCalculateChart(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    document.getElementById("cityName").innerHTML = lat + ',' + long;
    chart();
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("cityName").innerHTML = 'Sie haben die Ortung verboten. <br> Koordinaten der DHBW'
            chart();
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("cityName").innerHTML = 'Die Ortung steht nicht zur Verfügung. <br> Koordinaten der DHBW'
            chart();
            break;
        case error.TIMEOUT:
            document.getElementById("cityName").innerHTML = 'Timeout bei der Ortung. <br> Koordinaten der DHBW'
            chart();
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("cityName").innerHTML = 'Unbekannter Fehler bei der Ortung. <br> Koordinaten der DHBW'
            chart();
            break;
    }
}

function chart() {
    $.getJSON('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + lat + ',' + long + '?unitGroup=metric&elements=sunrise%2Csunset%2Cmoonphase&include=fcst%2Cdays&key=WCHSBS53WTNRQ3WHQ8CNM74DQ&contentType=json'
        , function (data) {
            let counter = 0;
            for (let dateNr in data.days) {
                days.push(dateNr);
                moonphase.push(data.days[dateNr].moonphase);
            }
            let ctx = document.getElementById("myChart");
            myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: days,
                    datasets: [
                        {
                            backgroundColor: 'rgb(0,0,255)',
                            label: 'Sicht auf Mond',
                            data: moonphase
                        }
                    ]
                }
            });

        });
}