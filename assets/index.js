import Calculator from "./Calculator.js"
import QuerySelector from "./QuerySelector.js"
import KeyCodes from "./KeyCodes.js"


const calculator = new Calculator();

const Numeros = QuerySelector.numbersSelector();
const NumerosAsArray = [...Numeros];
const Operators = QuerySelector.operatorsSelector();
const operator = [...Operators];
const result = QuerySelector.resultsSelector();
const reset = QuerySelector.resetSelector();

result.addEventListener("click", ()=>{calculator.resultSelect()})
reset.addEventListener("click", ()=>{calculator.reset()})


NumerosAsArray.forEach(
    (Numero)=>{
      const numberValue = Numero.textContent;
      Numero.addEventListener('click', function(){
      calculator.numberSelect(numberValue);
      });
    }
)

operator.forEach(
   (operator2)=>{
  operator2.addEventListener('click', function(){
    console.log("Esto no tiene que pasar")

     calculator.operatorSelect(operator2.textContent);
  });
   }
)


document.addEventListener('keydown', function(event){
  const keycode = event.keyCode;
  if(KeyCodes.numbers(keycode))
  {
    calculator.numberSelect(event.key);
    return
  }
  if(KeyCodes.operator(keycode))
  {
    calculator.operatorSelect(event.key);
    return
  }
  if(KeyCodes.results(keycode))
  {
    calculator.resultSelect();
    return
  }
  if(KeyCodes.reset(keycode))
  {
    calculator.reset();
    return
  }
})



