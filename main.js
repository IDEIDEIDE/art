var mouseEvent = "none"
var last_position_x, last_position_y;

var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")


var color = "black"
var linewidth = "1"
canvas.addEventListener("mousedown", mousemousedown)
function mousemousedown(e){
    mouseEvent = "mouseDown"

}

canvas.addEventListener("mousemove", mousemousemove)

function mousemousemove(e){
    var current_position_x = e.clientX - canvas.offsetLeft
    var current_position_y = e.clientY - canvas.offsetTop

    if (mouseEvent == "mouseDown"){
        ctx.beginPath()
        ctx.color = color
        ctx.lineWidth = linewidth

        ctx.moveTo(last_position_x, last_position_y)
        ctx.lineTo(current_position_x, current_position_y)
        ctx.stroke()
        
    }
    last_position_x = current_position_x
    last_position_y = current_position_y
}

canvas.addEventListener("mouseleave", mousemouseleave)
function mousemouseleave(e){
    mouseEvent = "mouseLeave"
}

canvas.addEventListener("mouseup", mousemouseup)    
function mousemouseup(e){
    mouseEvent = "mouseUp"
}