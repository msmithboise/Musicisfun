import Song from "../../models/Song.js"; //imported Song


class ItunesService {

  //DO NOT MODIFY
  getMusicByArtist(artist) {
    var url = 'https://itunes.apple.com/search?term=' + artist;
    //Casts each object to 
    return $.getJSON(url).then(function (response) {
      var songList = response.results.map(s => {
        return new Song(s)  //new Song returned as songList
      })
      return songList;
    })
  }




}



export default ItunesService //exported new Song/songList