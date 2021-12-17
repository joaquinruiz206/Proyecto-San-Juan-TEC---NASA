const url = 'https://images-api.nasa.gov/search?q=mercury&media_type=image'

const fetchNASAData = async () => {
    try {
      //const response = await fetch(`${url}${api_key}`)
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      displayData(data)
    } catch (error) {
      console.log(error)
    }
         function displayData(data) {
      document.getElementById('picture').src = data.collection.items[50].links[0].href
      document.getElementById('picture1').src = data.collection.items[55].links[0].href
      document.getElementById('picture2').src = data.collection.items[60].links[0].href
      document.getElementById('picture3').src = data.collection.items[65].links[0].href
      document.getElementById('picture4').src = data.collection.items[70].links[0].href
        
        }}
  fetchNASAData()