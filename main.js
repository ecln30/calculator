const buttons = document.querySelectorAll(".button")
const input = document.querySelector(".input")
const del = document.querySelector(".del")
const container = document.querySelector(".container")
const button = document.querySelector("button")
const ball = document.querySelector(".ball")


let firstValue 
let newValue 
let operator 
let operation = false
let calculate = false
let resultDisplayed = false
buttons.forEach(item => {
    item.addEventListener("click", display)
})

function display(e) {
     e.stopPropagation
     const el = e.currentTarget
     const value = el.dataset.id
     const ops = el.dataset.ops
     const currentValue = input.textContent

     if (operation === false && resultDisplayed === false || currentValue === "0") {
               
         if(value == ops) value = ""
         if( currentValue.length <= 14 ) {
             
            input.textContent = currentValue.replace("0", "")
            + value
            console.log(currentValue)
         } 
         
     } else if ( operation === true) {
              input.textContent = ""
              input.textContent =  value
              operation = false

     } else if (resultDisplayed == true) {
              input.textContent = ""
              input.textContent = value
              resultDisplayed = false
     } 

     if ( ops === "+" || ops === "-" || ops === "x" || ops === "/") {
         
         input.textContent = currentValue.replace(value, "")
         firstValue = parseFloat(currentValue)
         operation = true
         operator = ops
    }

    if ( ops === "equal" || el.matches("span") && operator !== "") {
        console.log(ops)
       
        newValue = parseFloat(input.textContent.replace("value", ""))
        Evaluate(firstValue, newValue, operator)
    
    }
    else if ( ops === "del"){
         
         input.textContent = currentValue.slice(0, -1)
         if( input.textContent.length <= 0) {
             input.textContent = "0"
         }
    }
    else if( ops === "reset" ) {
          input.textContent = "0"
          preValue = ""
          newValue = ""
    }
}

function Evaluate(a, b, c) {
      
     if(isNaN(a) || isNaN(b))return
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
      firstValue = ""
      newValue = ""
      operation = flase
}

// change Theme









































