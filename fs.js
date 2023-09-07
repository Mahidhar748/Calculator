let input  = document.querySelector("input")
let exp = ""
function calc(num){
    exp = exp+num
    input.value = exp
}
function eql(){
    input.value = eval(exp)
    exp = ""
}
function era(){
    exp = ""
    input.value = exp
}