async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'bfcd342023152f7dc23f4fe5cd45a3d5'; // Get your API key from OpenWeatherMap or another service
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      if (data.cod === '404') {
        document.getElementById('error').classList.remove('hidden');
        document.getElementById('weather-details').classList.add('hidden');
      } else {
        document.getElementById('error').classList.add('hidden');
        document.getElementById('weather-details').classList.remove('hidden');
        
        document.getElementById('city-name').innerText = `Weather in ${data.name}`;
        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').innerText = `Condition: ${data.weather[0].description}`;
        document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
      }
    } catch (error) {
      console.error(error);
      document.getElementById('error').classList.remove('hidden');
      document.getElementById('weather-details').classList.add('hidden');
    }
  }
  