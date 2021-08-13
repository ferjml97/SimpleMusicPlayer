$(document).ready(function(){
    getSongs();
});

    var audio;
    var music;

    function getSongs(){
        $.getJSON("js/app.json", function(mjson){
            music = mjson;
            genList(music);
           // console.log(music);
        });
    }

    function playSong(id){
        console.log(id);
        $('#img-album').attr('src', music.songs[id].cover);
        $('#player').attr('src', music.songs[id].path);
    }

    function genList(music){
        console.log(music.songs);
        $.each(music.songs, function(i,song){
            $('#playlist').append('<li class="list-group-item" id="'+i+'"> '+song.name+' </li>')
        });
        $('#playlist li').click(function(){
            var selectedsong = $(this).attr('id');
            console.log(selectedsong);
            playSong(selectedsong);
        });
    }