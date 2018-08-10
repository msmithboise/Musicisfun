import ItunesService from "./itunes-service.js";  //imported new Song/songList

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(results) {
  
let songs = itunesService.getMusicByArtist(artist)

let template = ''

for (let i = 0; i < songs.length; i++) {
  const song = songs[i];
  template +=

  `
  <div>
    <p><b>Artist:</b> ${song.artistName}</p>
    <p><b>Track:</b> ${song.trackName}</p>
    <p><b>Album:</b> ${song.collectionName}</p>
    <p><b>Price:</b> ${song.collectionPrice}</p>
    <p><b>Preview:</b> ${song.previewUrl}</p>
    <img class="url" src="${song.albumArt}" alt="">

</div>

  `
  
}
document.getElementById('songs').innerHTML = template
}
  
  
  
  
  
  
// console.log(results)
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