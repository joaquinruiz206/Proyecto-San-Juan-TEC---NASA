const url = 'https://images-api.nasa.gov/search?q=mars&media_type=image'
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
    document.getElementById("picture").src = data.collection.items[90].links[0].href
    document.getElementById('picture1').src = data.collection.items[85].links[0].href
    document.getElementById('picture2').src = data.collection.items[92].links[0].href
    document.getElementById('picture3').src = data.collection.items[80].links[0].href
    document.getElementById('picture4').src = data.collection.items[99].links[0].href
      
}    
  }
  fetchNASAData()