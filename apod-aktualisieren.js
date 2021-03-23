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
      displayDefault()
    }
}

const displayData = data => {
    document.getElementById('title').textContent = data.title
    document.getElementById('date').textContent = data.date
    document.getElementById('apod').src = data.hdurl
    document.getElementById('apod-bildbeschreibung').textContent = data.explanation
}

function displayDefault() {
    document.getElementById('title').textContent = 'Central Lagoon in Infrared';
    document.getElementById('date').textContent = '19.03.2021';
    document.getElementById('apod').src = './resources/apod_default.png';
    document.getElementById('apod-bildbeschreibung').textContent = 'Das heutige Archivbild zeigt das Zentrum des Lagunennebels. Es ist besonders gut von Mitteleuropa aus sichtbar und ist ca. 4.000 Lichtjahre von der Sonne entfernt.';
}
  
fetchAPODData()