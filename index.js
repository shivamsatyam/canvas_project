let canvas = document.querySelector('canvas')
let decrement = document.getElementById('decrement')
let increment = document.getElementById('increment')
let color = document.getElementById('color')
let clear = document.getElementById('clear')
let span = document.querySelector('span')
let canvas_height_changer = document.getElementById('canvas_height')
let canvas_height_default = document.getElementById('canvas_height_default')
let erase_canvas = document.getElementById('erase_canvas')
let line_maker = document.getElementById('line')
let textValue = 30
let radius = 30
let x = undefined
let y = undefined
let colorInside  = 'black'
let isPressed = false
let isErase = false
let eraser_width  = 150
let eraser_height  = 150
let isLine = false

canvas.width = window.innerWidth
canvas.height = window.innerHeight 

let ctx = canvas.getContext("2d")

window.addEventListener('mouseup',(e)=>{
	console.log('mouseup')
	isPressed = false;

    x = undefined;
    y = undefined;
});
window.addEventListener('mousedown',(e)=>{
	console.log('mousedown')
	console.log(e)
	x = e.offsetX
	y = e.offsetY

	isPressed = true
});



window.addEventListener('mousemove',(e)=>{
	console.log('mousemove')

	if(isErase){
		
			const x2 = e.offsetX;
        const y2 = e.offsetY;

			// ctx.clearRect(0,0,innerWidth,innerHeight)
			// drawEraser(x,y,eraser_width,eraser_height)
			  x = x2;
        y = y2;
		
	}
	else if(isLine){
		ctx.beginPath()
		ctx.moveTo(x,y)
		ctx.lineTo(e.offsetX,e.offsetY)
		ctx.strokeStyle = colorInside
		ctx.stroke()

		console.log(x,y,e.offsetX,e.offsetY)
	}else{
			if(isPressed){
		const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2,y2);
        drawLine(x,y,x2,y2);
        x = x2;
        y = y2;
	}
	}

});

function drawCircle (x2,y2) {
	ctx.beginPath()
	ctx.arc(x2,y2,radius,0,Math.PI*2)
	ctx.fillStyle = colorInside
	ctx.fill()

}


function decrementValue () {
		textValue-=2
		span.innerText = textValue
		radius-=2

}

function incrementValue () {
	textValue+=2
	span.innerText = textValue
	radius+=2

}


function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = colorInside;
    ctx.lineWidth = radius * 2;
    ctx.stroke();
}

decrement.addEventListener('click',decrementValue);
increment.addEventListener('click',incrementValue);



color.addEventListener('change',(e)=>{
	colorInside = e.target.value
})





clear.addEventListener('click',(e)=>{
	ctx.clearRect(0,0,canvas.width,canvas.height)
})



//canvas height changer
canvas_height_changer.addEventListener('input',(e)=>{
	const value = parseInt(e.target.value)
	console.log('input')
	console.log(value)
 	if(value=='' || value==undefined || value==null || value==NaN){
 
 	}else{
 		canvas.height = value
 	}
})





//canvas_height_default

canvas_height_default.addEventListener('click',(e)=>{
	canvas.height = window.innerHeight - 150
})


//erase_canvas
erase_canvas.addEventListener('click',(e)=>{
	if(isErase){
		isErase = false
	}else{
		isErase = true
	}
})



//drawEraser


function drawEraser (x,y,width,height) {

	ctx.beginPath()
	ctx.strokeStyle = 'red'
	ctx.lineWidth = "5"
	ctx.rect(x,y,width,height)
	ctx.stroke()
}





//line_maker

line_maker.addEventListener('click',(e)=>{
	if(isLine){
		isLine = false
	}else{
		isLine = true
	}
})