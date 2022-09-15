// const input1 = parseInt( prompt("calculate"))
// const operator = prompt("add operator btw +,-,% and x")
// const input2 =parseInt( prompt("calculate"))

// if (operator === "+") {
//     alert(input1  + input2)
// }else if (operator === "-") {
//     alert(input1  - input2)

// }else if (operator === "/") {
//     alert(input1  / input2)

// }else if (operator === "x") {
//     alert(input1  * input2)

// }
// let text1 = document.getElementById("text1").value
// let operator = document.getElementById("operator")
// let text2 = document.getElementById("text2").value
// let equal = document.getElementById("equal")
// let ans = document.getElementById("ans")


// var display1 = document.querySelector(".first");
// var display2 = document.querySelector(".second");
// var display3 = document.querySelector(".third"); 
// //var display4 = document.querySelector(".forth");
// //var answer = document.querySelector('.answer');

// const button = document.querySelectorAll(".keys button");
// button.forEach(btn => {
//   btn.addEventListener('click', () => {
//     const text =parseInt(btn.innerText)
//     return text

//   });
// });

// const operator = document.querySelectorAll(".operator");
// operator.forEach(oper => {
//   oper.addEventListener('click', () => {
//     const arith = oper.innerText

//     if (arith === '+') {
//                 display1.innerHTML = (text + text)
//             } else if (operator.value === "-") {
//                 ans.innerHTML = (dig1 - dig2)

//             } else if (operator.value === "/") {
//                 ans.innerHTML = (dig1 / dig2)

//             } else if (operator.value === "x") {
//                 ans.innerHTML = (dig1 * dig2)

//             }


//   });
// });



// equal.addEventListener("click", () => {
//     if (operator.value === '+') {
//         ans.innerHTML = (dig1 + dig2)
//     } else if (operator.value === "-") {
//         ans.innerHTML = (dig1 - dig2)

//     } else if (operator.value === "/") {
//         ans.innerHTML = (dig1 / dig2)

//     } else if (operator.value === "x") {
//         ans.innerHTML = (dig1 * dig2)

//     }

// })

// const op = document.querySelectorAll(".operator");
// op.forEach(ope => {
//   ope.addEventListener('click', () => {
//     ans.innerHTML = ope.innerHTML
//     let sum = ope.innerHTML
//     console.log("4" + sum + "5")
//     let con = 7 + sum + 8
//     function  (params) {

//     }


//   });
// });

// const element = document.querySelectorAll(".keys span");
// element.forEach(btn => {
//   btn.addEventListener('click', () => {
//     const val = btn.innerHTML
//     text.value = btn.innerHTML
// console.log()
//   });
// });


// Get all the keys from document
// var keys = document.querySelectorAll('.keys span');
// var arith = document.querySelectorAll('.operators span');

// var operators = ['+', '-', 'x', '÷'];
// //var decimalAdded = false;

// // Add onclick event to all the keys and perform operations
// for(var i = 0; i < keys.length; i++) {
// 	keys[i].onclick = function(e) {
// 		// Get the input and button values
// 		var input = document.querySelector('.screen');
// 		var inputVal = input.innerHTML;
// 		var btnVal = parseInt(this.innerHTML);

// 		// Now, just append the key values (btnValue) to the input string and finally use javascript's eval function to get the result
// 		// If clear key is pressed, erase everything
// 		if(btnVal) {
// 			input.innerHTML = btnVal * 4;
// 			//decimalAdded = false;
// 		}

//        console.log(btnVal)

//     }}

// function getVal() {
// 	let val = document.querySelector('input').value;
// 	let input = document.getElementById("calc")
// 	input.value = Math.sin(parseInt(val))
// 	console.log(parseInt(val));

//   }

let input = document.getElementById("calc")
let keys = document.querySelectorAll(".keys input")
let operators = document.querySelectorAll(".operators input")
let ans = document.querySelector(".ans")
let clear = document.getElementById("clear")
let equal = document.querySelectorAll(".equal")
let cheat = document.getElementById("cheat")

keys.forEach(btn => {
    btn.addEventListener('click', () => {
        input.value += btn.value
        cheat.innerHTML += btn.value
    });
});

operators.forEach(btn => {
    btn.addEventListener('click', () => {
        //tan
        if (btn.value === "tan") {
            // function tan(degrees) {
            //     return Math.tan(degrees * Math.PI / 180);
            // }
            // let t = tan(parseInt(input.value))
            // ans.innerHTML = "ans = " + t

            input.value = "tan("
           
            equal.forEach(eq => {
                eq.addEventListener('click', () => {
                    //let answer = eval(input.value)
                    let add = "(" + cheat.innerHTML
                    let num = eval(add)
                    let p = eval(num * Math.PI / 180)
                    let an = Math.tan(p)

                    //let answer = eval("Math." + input.value)
            
                    ans.innerHTML = "ans =" + an
            
                });
            });

        }

        else if (btn.value === "sin") {
            // function sine(degree) {
            //     return Math.sin(degree * Math.PI / 180);
            // }
            // let s = sine(parseInt(input.value))
            // ans.innerHTML = "ans = " + s

            input.value = "sin("
           
            equal.forEach(eq => {
                eq.addEventListener('click', () => {
                    //let answer = eval(input.value)
                    let add = "(" + cheat.innerHTML
                    let num = eval(add)
                    let p = eval(num * Math.PI / 180)
                    let an = Math.sin(p)

                    //let answer = eval("Math." + input.value)
            
                    ans.innerHTML = "ans =" + an
            
                });
            });

        }

        else if (btn.value === "cos") {
            // function cosine(degree) {
            //     return Math.cos(degree * Math.PI / 180);
            // }
            // let c = cosine(parseInt(input.value))
            // ans.innerHTML = "ans = " + c
            input.value = "cos("
           
            equal.forEach(eq => {
                eq.addEventListener('click', () => {
                    //let answer = eval(input.value)
                    let add = "(" + cheat.innerHTML
                    let num = eval(add)
                    let p = eval(num * Math.PI / 180)
                    let an = Math.cos(p)

                    //let answer = eval("Math." + input.value)
            
                    ans.innerHTML = "ans =" + an
            
                });
            });

        }

        else if (btn.value === "cosh") {
            //let ch = Math.cosh(parseInt(input.value))
            //ans.innerHTML = "ans = " + ch
            input.value = "cosh("
            equal.forEach(eq => {
                eq.addEventListener('click', () => {
                    //let answer = eval(input.value)
                    let answer = eval("Math." + input.value)
            
                    ans.innerHTML = "ans =" + answer
            
                });
            });

        }
        else if (btn.value === "tanh") {
            //let th = Math.tanh(parseInt(input.value))
            //ans.innerHTML = "ans = " + th
            input.value = "tanh("
            equal.forEach(eq => {
                eq.addEventListener('click', () => {
                    //let answer = eval(input.value)
                    let answer = eval("Math." + input.value)
            
                    ans.innerHTML = "ans =" + answer
            
                });
            });

        }else if (btn.value === "sinh") {
            //let sh = Math.sinh(parseInt(input.value))
            input.value = "sinh("
            //ans.innerHTML = "ans = " + sh
            equal.forEach(eq => {
                eq.addEventListener('click', () => {
                    //let answer = eval(input.value)
                    let answer = eval("Math." + input.value)
            
                    ans.innerHTML = "ans =" + answer
            
                });
            });

        }

    });
});

clear.addEventListener("click", () => {
    input.value = ' ';
    cheat.innerHTML = ' ';
    ans.innerHTML = 0;
})

equal.forEach(eq => {
    eq.addEventListener('click', () => {
        let answer = eval(input.value)
        //let answer = eval("Math." + input.value)

        ans.innerHTML = "ans =" + answer

    });
});
