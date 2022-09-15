let input = document.getElementById("calc")
let keys = document.querySelectorAll(".keys input")
let operators = document.querySelectorAll(".operators input")
let ans = document.querySelector(".ans")
let clear = document.getElementById("clear")
let equal = document.querySelectorAll(".equal")
let cheat = document.getElementById("cheat")
let remove = document.getElementById("rmOne")
//let shift = document.getElementById("shift")



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


remove.addEventListener("click", () => {
var str = input.value
    // the character 'g' will be removed
    str = str.slice(0, -1);
    input.value = str
    
  
})

