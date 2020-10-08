window.onload = function() {
    var goals = [
        "ENEMY SPAM",
        "SOUND EFFECTS EVERYWHERE",
        "BRING YOSHI TO THE GOAL",
        "TECH LEVEL",
        "PICK A DOOR/PIPE",
        "1-1 REMAKE",
        "COLLECT ALL COINS",
        "MUSIC LEVEL",
        "SOFTLOCK WITH NO WAY OF DYING",
        "INFINITE FIRE FLOWER BOSS FIGHT",
        "NO CHECKPOINTS (NO CLEAN CONDITION)",
        "ENEMY SPAM WITH STAR",
        "GOOD LEVEL",
        "BUILDER OR SUPERBALL LEVEL",
        "THEMED AFTER ANOTHER GAME",
        "KAIZO BLOCKS",
        "LEVEL CAN BE CHEESED",
        "AUTO MARIO LEVEL",
        "'FIRST LEVEL' IN TITLE",
        "MEOWSER OR BOOM-BOOM",
        "TITLE LEVEL",
        "TERRIBLY NAMED LEVEL",
        "KILLS MARIO AT THE START",
        "ON/OFF BLOCKS",
        "#DGR",
    ];

    var indexes = [];
    while(indexes.length < 24){
        var r = Math.floor(Math.random() * goals.length);
        if(indexes.indexOf(r) === -1) indexes.push(r);
    }

    var cells = document.getElementsByClassName('cell');
    for(var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        cell.childNodes[0].textContent = goals[indexes[i]];
        cell.onclick = function(event) {
            var source = event.target || event.srcElement;
            var selected = source.hasAttribute('cellselected')
            if (selected) {
                source.removeAttribute('cellselected');
            } else {
                source.setAttribute('cellselected', '');
            }
        }
    }
}