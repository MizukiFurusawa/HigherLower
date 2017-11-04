(function(){
  'use strict';
  var higher = document.getElementById('higher');
  var lower = document.getElementById('lower');
  var dealerCard = document.getElementById('dealer_card');
  var playerCard = document.getElementById('player_card');
  var wrapper = document.getElementById('wrapper');
  var result = document.getElementById('result');
  var dealerValue;
  var playerValue;

  function getRandom() {
    return Math.floor(Math.random() * 13 + 1);
  }

  function init() {
    dealerValue = getRandom();
    dealerCard.textContent = dealerValue;
    playerValue = getRandom();
    playerCard.textContent = playerValue;
  }

  init();
})();
