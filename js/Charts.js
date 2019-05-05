let gData = {
    "labels": [
        "HTML & CSS",
        "Javascript",
        "JSP",
        "Android Studio"
    ], "datasets": [
        {
            "label": "My Skills",
            "backgroundColor": "rgb(255, 192, 192)",
            "fill": false,
            "lineTension": 0.2,
            "data": [80,60,75,88]
        }
    ]
};

new Chart(document.getElementById("myChart"),
    {
        "type": "bar",
        "data": gData,
        "options": {
            scales: {
                yAxes: [{
                    ticks: {
                        "min": 0,
                        "max": 100,
                        "stepSize": 10
                      }
                }]
            }  
        }
    });