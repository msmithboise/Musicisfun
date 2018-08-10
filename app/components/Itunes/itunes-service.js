import Song from "../../models/Song.js";


class ItunesService {

  //DO NOT MODIFY
  getMusicByArtist(artist) {
    var url = 'https://itunes.apple.com/search?term=' + artist;
    //Casts each object to 
<<<<<<< HEAD
    var songList = response.results.map(s => {
      return new Song(s)
=======
    return $.getJSON(url).then(function (response) {
      var songList = response.results.map(s => {
        return new Song(s)
      })
      return songList;
>>>>>>> b17001b942cd5506cdae684755b4645516618d3a
    })
    return songList;
  }


}



export default ItunesService