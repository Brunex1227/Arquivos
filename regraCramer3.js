let equa1 = prompt("resultado da primrira equação?")
let equa2 = prompt("resultado da segunda equação?")
let equa3 = prompt("resultado da terceira equação?")

alert ("xij i = linha e j = coluna")
let x11 = prompt ("qual o x11")
let x12 = prompt ("qual o x12")
let x13 = prompt ("qual o x13")
let x21 = prompt ("qual o x21")
let x22 = prompt ("qual o x22")
let x23 = prompt ("qual o x23")
let x31 = prompt ("qual o x31")
let x32 = prompt ("qual o x32")
let x33 = prompt ("qual o x33")

let num1 = x11 * x22 * x33
let num2 = x12 * x23 * x31
let num3 = x13 * x21 * x32
let Nume1 = num1 + num2 + num3

let Num1 = x12 * x21 * x33
let Num2 = x11 * x23 * x32
let Num3 = x13 * x22 * x31
let Nume2 = Num1 + Num2 + Num3

let DELTA = Nume1 - Nume2

let NUm1 = equa1 * x22 * x33
let NUm2 = x12 * x23 * equa3
let NUm3 = x13 * equa2 * x32
let NUme1 = NUm1 + NUm2 + NUm3

let NUM1 = x12 * equa2 * x33
let NUM2 = equa1 * x23 * x32
let NUM3 = x13 * x22 * equa3
let NUme2 = NUM1 + NUM2 + NUM3

let DELTAX = NUme1 - NUme2

let numer1 = x11 * equa2 * x33
let numer2 = equa1 * x23 * x31
let numer3 = x13 * x21 * equa3
let NUMe1 = numer1 + numer2 + numer3

let Numer1 = equa1 * x21 * x33
let Numer2 = x11 * x23 * equa3
let Numer3 = x13 * equa2 * x31
let NUMe2 = Numer1 + Numer2 + Numer3

let DELTAY = NUMe1 - NUMe2

let NUmer1 = x11 * x22 * equa3
let NUmer2 = x12 * equa2 * x31
let NUmer3 = equa1 * x21 * x32
let NUME1 = NUmer1 + NUmer2 + NUmer3

let NUMer1 = x12 * x21 * equa3
let NUMer2 = x11 * equa2 * x32
let NUMer3 = equa1 * x22 * x31
let NUME2 = NUMer1 + NUMer2 + NUMer3

let DELTAZ = NUME1 - NUME2

let X = DELTAX / DELTA
let Y = DELTAY / DELTA
let Z = DELTAZ / DELTA

console.log("delta é igual á " + DELTA)
console.log("delta de X é igual á " + DELTAX)
console.log("X é igual á " + X) 
console.log("delta de Y é igual á " + DELTAY)
console.log("Y é igual á " + Y)
console.log("delta de Z é igual á " + DELTAZ)
console.log("e Z é igual á " + Z)
console.log("S=(" + X + "," + Y + "," + Z + ")")