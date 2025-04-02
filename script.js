const extruderTempEl = document.getElementById('extruder-temp');
const bedTempEl = document.getElementById('bed-temp');
const piTempEl = document.getElementById('pi-temp');
const extruderTempDisplayEl = document.getElementById('extruder-temp-display');
const bedTempDisplayEl = document.getElementById('bed-temp-display');
const progressEl = document.getElementById('print-progress');
const printerStatusEl = document.getElementById('printer-status');
const currentTimeEl = document.getElementById('current-time');

const ctx = document.getElementById('temperature-chart').getContext('2d');
const temperatureChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [
            {
                label: 'Extruder Temp (°C)',
                data: [],
                borderColor: 'orange',
                fill: false,
            },
            {
                label: 'Heater Bed Temp (°C)',
                data: [],
                borderColor: 'cyan',
                fill: false,
            },
        ],
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Temperature (°C)',
                },
                min: 0,
                max: 300,
            },
        },
    },
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateDashboard() {
    const extruderTemp = getRandomInt(20, 250);
    const bedTemp = getRandomInt(20, 80);
    const piTemp = getRandomInt(30, 60);
    const progress = getRandomInt(0, 100);
    const status = progress < 100 ? 'Printing' : 'Idle';

    extruderTempEl.textContent = `${extruderTemp}°`;
    bedTempEl.textContent = `${bedTemp}°`;
    piTempEl.textContent = `${piTemp}°`;
    extruderTempDisplayEl.textContent = `${extruderTemp}°`;
    bedTempDisplayEl.textContent = `${bedTemp}°`;
    progressEl.textContent = `${progress}%`;
    printerStatusEl.textContent = status;

    const currentTime = new Date().toLocaleTimeString();
    currentTimeEl.textContent = currentTime;

    temperatureChart.data.labels.push(currentTime);
    temperatureChart.data.datasets[0].data.push(extruderTemp);
    temperatureChart.data.datasets[1].data.push(bedTemp);

    if (temperatureChart.data.labels.length > 20) {
        temperatureChart.data.labels.shift();
        temperatureChart.data.datasets[0].data.shift();
        temperatureChart.data.datasets[1].data.shift();
    }

    temperatureChart.update();
}



setInterval(updateDashboard, 2000);