let equa1 = prompt("resultado da primrira equação?")
let equa2 = prompt("resultado da segunda equação?")
alert ("xij  i = linha  j = coluna")
let x11 = prompt("qual o x11?")
let x12 = prompt("qual o x12?")
let x21 = prompt("qual o x21?")
let x22 = prompt("qual o x22?")

let NUme1 = x11 * x22 
let NUme2 = x12 * x21
let delta1 = NUme1 - NUme2

let NUMe1 = equa1 * x22
let NUMe2 = equa2 * x12
let deltax = NUMe1 - NUMe2

let NUME1 = x11 * equa2
let NUME2 = x21 * equa1
let deltay = NUME1 - NUME2

let X = deltax / delta1
let Y = deltay / delta1

console.log("delta = " + delta1 + " X é igual á " + X + " e Y é igual á " + Y)