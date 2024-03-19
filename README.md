# Weather App

## Overview

The Weather App is a simple web application that provides users with current weather details and forecasts for a specific location (San Francisco). It retrieves weather data from the Open Meteo API and displays it in a user-friendly manner.

## Features

- **Current Temperature**: Displays the current temperature in Fahrenheit.
- **Maximum and Minimum Temperature**: Shows the maximum and minimum temperatures for the next three days.
- **Sunrise and Sunset Times**: Provides sunrise and sunset times for the next three days.
- **Navigation**: Allows users to switch between the current weather page and the forcast page.

## Usage

1. **Main Page**: Upon opening the application (`index.html`), users are presented with the current temperature, current date, current time, current showers, and current rain.
2. **Three Day Forcast**: Users can click on the "Three Day Forcast" button to navigate to the details page (`details.html`), where they can view maximum and minimum temperatures, sunrise and sunset times for the next three days.
3. **Back to Current Weather**: Users can return to the current weather page by clicking the "Back to Current Weather" button on the details page.

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your_username/weather-app-assignment.git
    ```

2. Navigate to the project directory:

    ```bash
    cd weather-app-assignment
    ```

3. Open the `index.html` file in a web browser to view the main page.

## Dependencies

- This application relies on the [Open Meteo API](https://open-meteo.com/) to fetch weather data.
- No additional dependencies are required to run the application locally.

## Credits

- This project is created by Mirage Kamran.
- Weather data is provided by the Open Meteo API.

## License

This project is licensed under the [MIT License](LICENSE).