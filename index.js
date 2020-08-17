
// For Lyrics name and artist
document.getElementById("submit").addEventListener("click", function(){
    const song = document.getElementById("input-song").value;
    fetch(`https://api.lyrics.ovh/suggest/${song}`)
    .then(res => res.json())
    .then (data => {
        function getArtist(id1,id2,index){
            const albumName = data.data[index].album.title;
            const artistName = data.data[index].artist.name;
            // document.getElementById(id).innerText = `${albumName} Album By ${artistName} `;
            document.getElementById(id1).innerText = albumName;
            document.getElementById(id2).innerText = artistName;

        }
        getArtist("lyrics-name-1","lyrics-artist-1",0);
        getArtist("lyrics-name-2","lyrics-artist-2",1);
        getArtist("lyrics-name-3","lyrics-artist-3",2);
        getArtist("lyrics-name-4","lyrics-artist-4",3);
        getArtist("lyrics-name-5","lyrics-artist-5",4);
        getArtist("lyrics-name-6","lyrics-artist-6",5);
        getArtist("lyrics-name-7","lyrics-artist-7",6);
        getArtist("lyrics-name-8","lyrics-artist-8",7);
        getArtist("lyrics-name-9","lyrics-artist-9",8);
        getArtist("lyrics-name-10","lyrics-artist-10",9);
        
        
    })
});
// For  lyrics
function lyrics(id,index){
    document.getElementById(id).addEventListener("click",function(){
    const song = document.getElementById("input-song").value;
    fetch(`https://api.lyrics.ovh/suggest/${song}`)
    .then(res => res.json())
    .then (data => {
        function getLyrics(index){
            const albumName = data.data[index].album.title;
            const artistName = data.data[index].artist.name;
            
            fetch(`https://api.lyrics.ovh/v1/${artistName} /${albumName}`)
            .then(res => res.json())
            .then (data => {
            document.getElementById("lyrics").innerText = data.lyrics;
            document.getElementById("title").innerText = albumName;
            document.getElementById("name").innerText = artistName;
        })
    }
    const show = document.getElementById("show-lyrics");
    show.style.display = "block";
    getLyrics(index)
});

});
}
lyrics("get-lyrics-1",0);
lyrics("get-lyrics-2",1);
lyrics("get-lyrics-3",2);
lyrics("get-lyrics-4",3);
lyrics("get-lyrics-5",4);
lyrics("get-lyrics-6",5);
lyrics("get-lyrics-7",6);
lyrics("get-lyrics-8",7);
lyrics("get-lyrics-9",8);
lyrics("get-lyrics-10",9);