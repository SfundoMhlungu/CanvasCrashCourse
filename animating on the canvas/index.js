//  r/place = must check



const canvas = document.querySelector("canvas");



canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



// getting the 3d context, returning a drawing(2d) context(all methods etc)
// c get all 2d functionality(2d engine)

var c = canvas.getContext("2d");

// c objects take the preciding values
// c.fillStyle = "rgba(255, 0, 0, 0.5)";
// c.fillRect(100, 100, 100, 100);



// Line, same as svg

// c.beginPath();
// // init point
// c.moveTo(50, 300);
// // from prev point to ..
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.lineTo(50, 300);
// c.strokeStyle = "#fa34a3";
// // show stroke
// c.stroke();

// uses camelCasing



// Arc / circle
// to seperate form the prev path 



// for (let i = 0; i < 100; i++) {

//     var randomColor = Math.floor(Math.random() * 16777215).toString(16);

//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     var r = Math.random() * 70;
//     const scala = Math.random() * 2;

//     c.beginPath();
//     c.arc(x, y, r, 0, Math.PI * 2, false);
//     c.strokeStyle = "#" + randomColor;
//     c.stroke();

// }



class circle_ {
    radius = 30;
    x = Math.random() * (innerWidth - radius * 2) + radius;
    y = Math.random() * (innerHeight - radius * 2) + radius;
    dx = (Math.random() - 0.5) * 8;
    dy = (Math.random() - 0.5) * 8;





    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = "blue";
        c.stroke();
    }

    move() {


        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy
        }




        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }


}




// c.beginPath()
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.stroke();

x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random() - 0.5) * 8;
var dy = (Math.random() - 0.5) * 8;
var radius = 30;


arr = [];
for (let i = 0; i < 20; i++) {

    arr[i] = new circle_();
}
// creating a loop



function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let i = 0; i < arr.length; i++) {
        arr[i].move()
    }





}

animate();
// console.log(arr[0].move())




// TODO ,: change circle to object, create multiple circles, with different vals