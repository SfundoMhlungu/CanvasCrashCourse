//  r/place = must check



const canvas = document.querySelector("canvas");



canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



// getting the 3d context, returning a drawing(2d) context(all methods etc)
// c get all 2d functionality(2d engine)

var c = canvas.getContext("2d");

c.fillRect(100, 100, 100, 100);