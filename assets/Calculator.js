import Operations from "./Operator.js"
import QuerySelector from "./QuerySelector.js"

class Calculadora{ 
    constructor()
    {
     this.calcArray = [];
     this.visor = "";
     this.resultado = false;
     this.calculatorMotor.call(this);
     
    }
    actualizarVisor()
    {
      let visorHTML = QuerySelector.visor();
      const textoVisor = this.calcArray.join(' ');
      visorHTML.textContent = textoVisor;
      console.log(this.calcArray);
    }
   
    reset()
    {
      this.calcArray = []
      this.actualizarVisor();
    }
    
    calculatorMotor()
    {
      function* gen() {
      while(true)
     {
        const newItem = yield;
        if(typeof(newItem) == "number")
        {
          
          this.arrayAddNumber(newItem)
           
        }else
        {
          this.arrayAddOperator(newItem)
        }
        this.actualizarVisor();
      }
     }
      this.instanciaGenerador = gen.call(this);
      this.instanciaGenerador.next();

    }

    arrayAddNumber(newItem)
    {
      const lastItem = this.calcArray.pop();
      if(typeof(lastItem) == "number")
      {
        this.calcArray.push(lastItem*10+newItem)
      }else
      {
        if(lastItem) this.calcArray.push(lastItem);
         this.calcArray.push(newItem);
      }
    }

    arrayAddOperator(newItem)
    {
      const lastItem = this.calcArray.pop();
      if(typeof(lastItem) == "number")
      {
        this.calcArray.push(lastItem);
        this.calcArray.push(newItem);
      }else
      {
        this.calcArray.push(lastItem);
        alert("No puedes agregar dos operadores seguidos");
    }
     }
     
    numberOrOperatorSelect(newNumber)
    {
      this.instanciaGenerador.next(newNumber)
    }

    
    resultSelect()
    {
       this.operation("^");
       this.operation("*");
       this.operation("/");
       this.operation("+");
       this.operation("-");
       this.resultado = true;
    }

    operation(operator)
    {
      while(this.calcArray.find(element => element == operator))
        {
          let elementIndex = this.calcArray.findIndex(element => element == operator);
          const numA = this.calcArray[elementIndex - 1];
          const numB = this.calcArray[elementIndex + 1];
          let result;
         switch(operator)
        {
          case "+": result = Operations.Add(numA, numB); break;
          case "-": result = Operations.subtract(numA, numB);break;
          case "*": result = Operations.multiply(numA, numB);break;
          case "/": result = Operations.divide(numA, numB);break;
          case "^": result = Operations.power(numA, numB);break;
          default: console.log("ERROR"); break; 
        }
          this.calcArray.splice(elementIndex-1, 3, result);
          this.actualizarVisor();

        }
    }
  }

  export default Calculadora