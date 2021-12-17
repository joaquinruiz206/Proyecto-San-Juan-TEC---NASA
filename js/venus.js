const url = 'https://images-api.nasa.gov/search?q=venus&media_type=image'

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
        for(i=90; i<95;i++){    
            console.log(data.collection.items[i].links[0].href)}
      document.getElementById('picture').src = data.collection.items[90].links[0].href
      document.getElementById('picture1').src = data.collection.items[91].links[0].href
      document.getElementById('picture2').src = data.collection.items[92].links[0].href
      document.getElementById('picture3').src = data.collection.items[93].links[0].href
      document.getElementById('picture4').src = data.collection.items[94].links[0].href
        
  }  
  }
  fetchNASAData()