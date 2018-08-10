import ItunesService from "./itunes-service.js";  //imported new Song/songList

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(songList) {
  console.log(songList)

let template = ''

for (let i = 0; i < songList.length; i++) {
  let song = songList[i];
  template +=

  `
  <div>
    <p><b>Artist:</b> ${song.artist}</p>
    <p><b>Track:</b> ${song.title}</p>
    <p><b>Album:</b> ${song.collection}</p>
    <p><b>Price:</b> ${song.price}</p>
    <img class="url" src="${song.albumArt}" alt="">
  
    <audio controls>
    <source src="${song.preview}" type="audio/ogg">
   
  </audio>
    
    
    </div>
    
  `
  
}
document.getElementById('songs').innerHTML = template
}
// console.log(songList)
  
  
  
  
  
  
  //YOUR CODING STARTS HERE
// string template
//get element by id
//audio tags






//PUBLIC
class ItunesController {
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
    })
  }


}


export default ItunesController