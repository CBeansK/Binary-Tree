//canvas setup
var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillStyle = "white";
c.font = "24px Arial";


//global variables
var tree;
var numValues = 15;




//run command, everything that is executed when program runs
function run(){
    tree = new Tree();
    for(var i = 0; i < numValues; i++){
        tree.addValue(Math.floor(Math.random() * 100));
    }
    console.log(tree);
    tree.traverse();
}

run();