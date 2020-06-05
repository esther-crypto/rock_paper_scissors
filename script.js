var playerWin = 0;
var compWin = 0;
var draws = 0;
var playerRoll;
var compRoll;
var gameMessage = $("#game-message");
var scoreBoard = $("#score-board");

//on click rock button
// calling html elements
$('.rock').click(function () {
    playerRoll = 1;
    compRoll = Math.floor(Math.random() * 3 + 1);

    console.log("Player: " + playerRoll);
    console.log("Computer: " + compRoll);


    // draw case
    if (playerRoll === compRoll) {
        gameMessage.fadeOut(300, function () {
            gameMessage.html('').append(
                '<p class="game-draw">Draw!</p>' + '<p class="computer-message">The Computer chose rock too!</p>'
            ).fadeIn(300);
            draws++;
            $('#draws').html('').append(draws);
        });
        // computer choose paper
    } else if (playerRoll === 1 && compRoll === 2) {

        gameMessage.fadeOut(300, function () {
            gameMessage.html('').append(
                '<p class="game-lose">You LOST</p>' + '<p class="computer-message">The Computer chose paper!</p> '
            ).fadeIn(300);
            compWin++;
            $('#losses').html('').append(compWin);
        });
        //computer chooses scissors
    } else {
        gameMessage.fadeOut(300, function () {
            gameMessage.html('').append(
                '<p class="game-win">You WON</p>' + '<p class="computer-message">The Computer chose scissors!</p> '
            ).fadeIn(300);
            playerWin++;
            $('#wins').html('').append(playerWin);
        });
    }

});
// end of rock click

// paper click
$('.paper').click(function () {
    playerRoll = 2;
    compRoll = Math.floor(Math.random() * 3 + 1);

    console.log("Player: " + playerRoll);
    console.log("Computer: " + compRoll);

    // draw case where computer chooses paper
    if (playerRoll === compRoll) {
        gameMessage.fadeOut(300, function () {
            gameMessage.html('').append(
                '<p class="game-draw">Draw!</p>' + '<p class="computer-message">The Computer chose paper too!</p>'
            ).fadeIn(300);
            draws++;
            $('#draws').html('').append(draws);
        });
        // computer choose rock
    } else if (playerRoll === 2 && compRoll === 1) {

        gameMessage.fadeOut(300, function () {
            gameMessage.html('').append(
                '<p class="game-win">You WON</p>' + '<p class="computer-message">The Computer chose rock!</p> '
            ).fadeIn(300);
            playerWin++;
            $('#losses').html('').append(playerWin);
        });
        //computer chooses scissors
    } else {
        gameMessage.fadeOut(300, function () {
            gameMessage.html('').append(
                '<p class="game-lose">You LOST</p>' + '<p class="computer-message">The Computer chose scissors!</p> '
            ).fadeIn(300);
            compWin++;
            $('#wins').html('').append(compWin);
        });
    }

});
// end of paper click

// player clicks scissors

$('.scissors').click(function () {
    playerRoll = 3;
    compRoll = Math.floor(Math.random() * 3 + 1);

    console.log("Player: " + playerRoll);
    console.log("Computer: " + compRoll);

    // draw case
    if (playerRoll === compRoll) {
        gameMessage.fadeOut(300, function () {
            gameMessage.html('').append(
                '<p class="game-draw">Draw!</p>' + '<p class="computer-message">The Computer chose scissors too!</p>'
            ).fadeIn(300);
            draws++;
            $('#draws').html('').append(draws);
        });
        // computer choose paper
    } else if (playerRoll === 3 && compRoll === 2) {

        gameMessage.fadeOut(300, function () {
            gameMessage.html('').append(
                '<p class="game-win">You WIN</p>' + '<p class="computer-message">The Computer chose paper!</p> '
            ).fadeIn(300);
            playerWin++;
            $('#wins').html('').append(playerWin);
        });
        //computer chooses rock
    } else {
        gameMessage.fadeOut(300, function () {
            gameMessage.html('').append(
                '<p class="game-lose">You LOST</p>' + '<p class="computer-message">The Computer chose rock!</p> '
            ).fadeIn(300);
            compWin++;
            $('#losses').html('').append(compWin);
        });
    }

});
// end of scissor click
$('#reset-scores').click(function () {
    playerWin = 0;
    $('#wins').html(playerWin);
    draws = 0;
    $('#draws').html(draws);
    compWin = 0;
    $('#losses').html(compWin);

});




