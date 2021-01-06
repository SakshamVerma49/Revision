var getRandom = []
function setup(){
    for(var i = 0; i < 5; i++){
        getRandom.push(Math.round(Math.random()*50));
    }
}

function draw(){
    createCanvas(500,500);
    background("Grey");

    for(var i = 0; i < 5; i++){
        text(getRandom[i], i * 25, 250);
    }
}