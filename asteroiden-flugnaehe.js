const url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key='
const api_key = config.NASA_API_KEY

const fetchAsteroidData = async () => {
    try {
      const response = await fetch(`${url}${api_key}`)
      const data = await response.json()
      console.log('Asteroid data', data)
      displayData(data)
    } catch (error) {
      console.log(error)
    }
}

/*
const displayData = data => {
  document.getElementById('bezeichnung').textContent = data.near_earth_objects.[0].name
  document.getElementById('vorbeiflug_am').textContent = data.near_earth_objects.[0].close_approach_data.close_approach_date
  document.getElementById('groesse').textContent = data.near_earth_objects.[0].estimated_diameter.kilometers.estimated_diameter_max
  document.getElementById('abstand').textContent = data.near_earth_objects.[0].close_approach_data.close_approach_date.miss_distance.kilometers
  document.getElementById('geschwindigkeit').textContent = data.near_earth_objects.[0].close_approach_data.close_approach_date.relative_velocity.kilometers_per_hour
}
*/
  
fetchAsteroidData()