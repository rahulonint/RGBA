const input_result = document.querySelector(".result")
const form = document.querySelector(".main_box")

// selecting respective sliders
const red = document.querySelector(".red")
const green = document.querySelector(".green")
const blue = document.querySelector(".blue")
const alpha = document.querySelector(".alpha")

form.style.backgroundColor = "#fff"
function myColor() {

    // selecting each slider value
    const red_value = red.value
    const green_value = green.value
    const blue_value = blue.value
    const alpha_value = alpha.value

    color = `rgb(${red_value},${green_value},${blue_value},${alpha_value})`
    
    //changing value of input text box
    input_result.value = color
    // changing color of main_box
    form.style.backgroundColor = color

}

// adding "input" action for sliders
document.querySelector(".red").addEventListener("input", myColor)
document.querySelector(".green").addEventListener("input", myColor)
document.querySelector(".blue").addEventListener("input", myColor)
document.querySelector(".alpha").addEventListener("input", myColor)
