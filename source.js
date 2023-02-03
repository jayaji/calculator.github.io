let equal_btn=document.getElementById('equalTo')
const buttons=document.querySelectorAll('button[data-type=Normal_btn]')
let deleteSingleNumber=document.getElementById('del')
let clearAll=document.getElementById('clear')
let previousOperands=document.getElementById("history")
let currentOperands=document.getElementById("result")
let darkModeButton=document.getElementById('dark_mode')
//get numbers and operand to evaluate
let currentNum=""
buttons.forEach(button => {
button.addEventListener("click",getOperands =>{ 
        currentNum+=button.textContent;
        currentOperands.textContent=currentNum;
})
})
//Evaluate the function
equal_btn.addEventListener('click',evaluate=>{
  previousOperands.textContent=currentNum
  let calculatedNum=eval(currentNum)
  currentOperands.textContent=eval(currentNum)
  currentNum=calculatedNum
})
//clear function
function showBtn() {
  previousOperands.textContent="History"
  currentOperands.textContent=0
  currentNum=""
}
//delete number
deleteSingleNumber.addEventListener('click',deleteFunction=>{
      currentNum=currentNum.slice(0,-1)
      currentOperands.textContent=currentNum
})
//dark mode enable
darkModeButton.addEventListener('click',myFunction=>{
 let currentValue=darkModeButton.value
 if(currentValue=="on")
{
  document.getElementById('main').style.background="rgba(0,0,0,0.8)"
  darkModeButton.style.background = 'initial';
  currentOperands.style.color='whitesmoke'
  previousOperands.style.color='whitesmoke'
  darkModeButton.value="off"
}
else{
   document.getElementById('main').style.background="whitesmoke"
  darkModeButton.style.background = 'initial';
  currentOperands.style.color='black'
  previousOperands.style.color='black'
   darkModeButton.value="on"
}
})

















  
  
