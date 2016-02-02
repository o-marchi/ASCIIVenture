
var gameEl = document.getElementById('game');

var display = new ROT.Display({
    width: 60,
    height: 20,
    fontSize: 15,
    fontStyle: "bold",
    bg: '#333'
});

gameEl.appendChild( display.getContainer() );
