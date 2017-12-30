  var MatchGame = {};

  /*
    Sets up a new game after HTML document has loaded.
    Renders a 4x4 board of cards.
  */

  $(document).ready(function() {
    var $game = $('#game');
    var values = MatchGame.generateCardValues();
    MatchGame.renderCards(values, $game);
  });

  /*
    Generates and returns an array of matching card values.
   */


  MatchGame.generateCardValues = function () {

    var orderedCards = [];

    for (var value = 1; value <= 8; value++) {
      orderedCards.push(value);
      orderedCards.push(value);
    };

    var randomCards = [];

    while (orderedCards.length > 0) {
      var randomIndex = Math.floor(Math.random() * orderedCards.length);
      var randomValue = orderedCards[randomIndex];
      orderedCards.splice(randomIndex, 1);
      randomCards.push(randomValue);
    };

    return randomCards;
  };

  /*
    Converts card values to jQuery card objects and adds them to the supplied game
    object.
  */


  MatchGame.renderCards = function(randomCards, $game) {

    var colours = ['hsl(25, 85%, 65%)', 'hsl(55, 85%, 65%)', 'hsl(90, 85%, 65%)', 'hsl(160, 85%, 65%)', 'hsl(220, 85%, 65%)', 'hsl(265, 85%, 65%)', 'hsl(310, 85%, 65%)', 'hsl(360, 85%, 65%)'];

    $game.empty();

    for (var i = 0; i < randomCards.length; i++) {
      var $card = $('<div class="col col-3 card"></div>');

      $card.data('numberCard', randomCards[randomCards.length]); /* $('.row').append($card); */
      $card.data('flippedCards', false);
      $card.data('colour', colours[numberCard - 1]);

      $game.append($card);
    };


  };



  /*
    Flips over a given card and checks to see if two cards are flipped over.
    Updates styles on flipped cards depending whether they are a match or not.
   */

  MatchGame.flipCard = function($card, $game) {

  };
