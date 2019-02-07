$(document).ready(onReady);


function onReady(){
    $('#addButton').on('click', addPlayer)



}



function addPlayer(){
    console.log('button!');
    let newPlayer = $('#newPlayerInput').val();
    console.log(newPlayer);

    $('#newPlayerInput').val('');
    
}