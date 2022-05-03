const buttons = document.querySelectorAll(".button")
const input = document.querySelector(".input")
const del = document.querySelector(".del")

let preValue 
let newValue 
let operator 
let operation = false
let resultDisplayed = false

buttons.forEach(item => {
    item.addEventListener("click", display)
})

function display(e) {
     const el = e.target
     const value = el.dataset.id
     const ops = el.dataset.ops
     const currentValue = input.textContent

     if (operation === false && resultDisplayed === false || currentValue === "0") {
         input.textContent = currentValue.replace("0", "")
         input.textContent +=  value
         
     } else if ( operation === true) {
         
          input.textContent = "" 
          input.textContent = value
          operation = false
         
     } else if (resultDisplayed == true) {
          
          input.textContent = ""
          input.textContent = value
          resultDisplayed = false
     } 

     if ( ops === "+" || ops === "-" || ops === "x" || ops === "/") {
         
         input.textContent = currentValue.replace(value, "")
         preValue = parseFloat(currentValue)
         operation = true
         operator = ops
    }

    if ( ops === "equal" || el.matches("span")) {
             
        newValue = parseFloat(input.textContent.replace("value", ""))
        Evaluate(preValue, newValue, operator)
    }
    else if ( ops === "del"){
         input.textContent = currentValue.replace("del", "")
         input.textContent = currentValue.slice(0, -1)
         if( input.textContent.length <= 0) {
             input.textContent = "0"
         }
    }
    else if( ops === "reset" ) {
          input.textContent = "0"
    }
}

function Evaluate(a, b, c) {

     if( c === "+") {
         input.textContent = a + b
     }
     else if(c === "-") {
         input.textContent = a - b
     }
     else if(c === "/") {
         input.textContent = a / b
     }
     else if(c === "x") {
         input.textContent = a * b
     }
      resultDisplayed = true
}




















































