const url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = config.NASA_API_KEY

const fetchAPODData = async () => {
  try {
    const response = await fetch(`${url}${api_key}`)
    const data = await response.json()
    console.log('NASA APOD data', data)
    displayData(data)
  } catch (error) {
    console.log(error)
  }
}

const displayData = data => {
  document.getElementById('apod-title').textContent = data.title
  document.getElementById('apod-date').textContent = data.date
  document.getElementById('apod').src = data.hdurl
  document.getElementById('apod-bildbeschreibung').textContent = data.explanation
}
  
fetchAPODData()