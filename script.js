// This is for index.html
if (document.getElementById("viewButton")) {
    document
        .getElementById("viewButton")
        .addEventListener("click", function () {
            window.location.href = "details.html";
        });
}

// this is for details.html
if (document.getElementById("backToMainButton")) {
    document
        .getElementById("backToMainButton")
        .addEventListener("click", function () {
            window.location.href = "index.html";
        });
}

fetch(
    "https://api.open-meteo.com/v1/gfs?latitude=52.52&longitude=13.41&current=temperature_2m,rain,showers&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,showers_sum,wind_speed_10m_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=Europe%2FBerlin&forecast_days=3"
)
    .then((res) => res.json())
    .then((data) => {
        const temperatures = data.daily;
        const currTemp = Math.round(data.current.temperature_2m);
        const currDateTime = new Date(data.current.time);
        const currShowers = data.current.showers;
        const currRain = data.current.rain;
        const maxTemps = temperatures.temperature_2m_max;
        const minTemps = temperatures.temperature_2m_min;
        const sunrises = temperatures.sunrise;
        const sunsets = temperatures.sunset;

        // Iterate over each day's temperature, sunrises, and sunsets
        for (let i = 0; i < maxTemps.length; i++) {
            const maxTemp = Math.round(maxTemps[i]);
            const minTemp = Math.round(minTemps[i]);
            const sunriseDateTime = new Date(sunrises[i]);
            const sunsetDateTime = new Date(sunsets[i]);

            // Extracting date and time separately
            const sunriseDate = sunriseDateTime.toLocaleDateString();
            const sunriseTime = sunriseDateTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            });
            const sunsetDate = sunsetDateTime.toLocaleDateString();
            const sunsetTime = sunsetDateTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            });

            const maxTempSpan = `<span class="temperature">${maxTemp} °F</span>`;
            const minTempSpan = `<span class="temperature">${minTemp} °F</span>`;
            const sunriseSpan = `<span class="sunrise">Date: ${sunriseDate} Time: ${sunriseTime}</span>`;
            const sunsetSpan = `<span class="sunset">Date: ${sunsetDate} Time: ${sunsetTime}</span>`;

            // Insert temperature and time data into respective elements
            if (document.getElementById("maxtemperature")) {
                document
                    .querySelector("#maxtemperature")
                    .insertAdjacentHTML("beforeend", maxTempSpan);
            }

            if (document.getElementById("mintemperature")) {
                document
                    .querySelector("#mintemperature")
                    .insertAdjacentHTML("beforeend", minTempSpan);
            }

            if (document.getElementById("sunrise")) {
                document
                    .querySelector("#sunrise")
                    .insertAdjacentHTML("beforeend", sunriseSpan);
            }

            if (document.getElementById("sunset")) {
                document
                    .querySelector("#sunset")
                    .insertAdjacentHTML("beforeend", sunsetSpan);
            }
        }

        // Set current temperature, date, time, showers, and rain
        const currentDate = currDateTime.toLocaleDateString();
        const currentTime = currDateTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
        if (document.getElementById("currenttemperature")) {
            document.querySelector(
                "#currenttemperature"
            ).innerText = `Temperature: ${currTemp} °F`;
        }
        if (document.getElementById("currentdate")) {
            document.querySelector(
                "#currentdate"
            ).innerText = `Date: ${currentDate}`;
        }
        if (document.getElementById("currenttime")) {
            document.querySelector(
                "#currenttime"
            ).innerText = `Time: ${currentTime}`;
        }
        if (document.getElementById("currentshowers")) {
            document.querySelector(
                "#currentshowers"
            ).innerText = `Showers: ${currShowers}`;
        }
        if (document.getElementById("currentrain")) {
            document.querySelector(
                "#currentrain"
            ).innerText = `Rain: ${currRain}`;
        }

        // console.log("fetched data: ", data);
    })
    .catch((error) => console.log(error));
