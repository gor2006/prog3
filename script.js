
var side = 20;

let matrix = []; 
let rows = 25; 
let columns = 25; 

for (let y = 0; y < rows; y++) {
    matrix[y] = []; 
    for (let x = 0; x < columns; x++) {
        let a = Math.floor(Math.random() * 100);
        if (a >= 0 && a < 40) {
            matrix[y][x] = 0; 
        }
        else if (a >= 40 && a < 60) {
            matrix[y][x] = 1; 
        }
        else if (a >= 60 && a < 75) {
            matrix[y][x] = 2; 
        }
        else if (a >= 75 && a < 90) {
            matrix[y][x] = 3; 
        }
        else if (a >= 90 && a < 93) {
            matrix[y][x] = 4; 
        }
        else if (a >= 93 && a < 100) {
            matrix[y][x] = 5; 
        }
    }
}

function setup() {
    frameRate(7);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                matrix[y][x] = new Grass(x, y, 1);
            }
            else if (matrix[y][x] == 2) {
                matrix[y][x] = new GrassEater(x, y, 2);
            }
            else if (matrix[y][x] == 3) {
                matrix[y][x] = new Gishatich(x, y, 3);
            }
            else if (matrix[y][x] == 4) {
                matrix[y][x] = new Anicvacdagax(x, y, 4);
            }
            else if (matrix[y][x] == 5) {
                matrix[y][x] = new Crich(x, y, 5);
            }
        }
    }

}


function draw() {
    console.log(matrix);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var obj = matrix[y][x];
            console.log(obj)
            if (obj.index == 1) {
                obj.mul();
            }
            else if (obj.index == 2) {
                obj.eat();
            }
            else if (obj.index == 3) {
                obj.eat();
            }
            else if (obj.index == 4) {
                obj.eat();
            }

      else if (obj.index == 5) {
                obj.spred();
            }
        }
    }

    background("#acacac");

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var obj = matrix[y][x];

            if (obj.index == 1) {
                fill("green");
            }
            else if (obj.index == 2) {
                fill("yellow");
            }
            else if (obj.index == 3) {
                fill("red");
            }
            else if (obj.index == 4) {
                fill("black");
            } 
            else if (obj.index == 5) {
                fill("orange");
            }
            
            rect(x * side, y * side, side, side);
        }
    }
}
