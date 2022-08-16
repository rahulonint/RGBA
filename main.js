const input_result = document.querySelector(".result")
const red = document.querySelector(".red")
const green = document.querySelector(".green")
const blue = document.querySelector(".blue")
const alpha = document.querySelector(".alpha")
const form = document.querySelector(".main_box")
function myColor() {

    const red_value = red.value
    const green_value = green.value
    const blue_value = blue.value
    const alpha_value = alpha.value

    color = `rgb(${red_value},${green_value},${blue_value},${alpha_value})`
    input_result.value = color
    form.style.backgroundColor=color

}
document.querySelector(".red").addEventListener("input",myColor)
document.querySelector(".green").addEventListener("input",myColor)
document.querySelector(".blue").addEventListener("input",myColor)
document.querySelector(".alpha").addEventListener("input",myColor)
