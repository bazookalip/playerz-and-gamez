$(document).ready(onReady);


function onReady(){
    $('#addButton').on('click', addPlayer)

}


function addPlayer(){
    let newPlayer = $('#newPlayerName').val();
    console.log(newPlayer);
    
        $.ajax({
            method: 'POST',
            url: '/player',
            data: { playerName: $('#newPlayerName').val() }
        }).then(function () {
            getAllPlayers();
        });
    

    $('#newPlayerInput').val('');  
}

function getAllPlayers() {
    $.ajax({
        method: 'GET',
        url: '/player',
    }).then(function (response) {
        updatePlayerList(response);
    });
}

function updatePlayerList(players) {
    $('.playerDropdown').empty();
    $('.playerList').empty();
    players.forEach(player => {
        $('.playerDropdown').append(`<option value="${player}">${player}</option>`);
        $('.playerList').append(`<li>${player}</li>`);
    });
}