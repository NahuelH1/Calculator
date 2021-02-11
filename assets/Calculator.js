import Operations from "./Operator.js"
import QuerySelector from "./QuerySelector.js"

class Calculadora{ 
    constructor()
    {
     this.numberA = null;
     this.numberB = null;
     this.operator = null;
     this.visor = "";
     this.resultado = false;
    }
    controladorDeVisor(Agregado, reset = false)
    {
      let visorHTML = QuerySelector.visor();
        if(!reset)
        {
          visorHTML.textContent = visorHTML.textContent + Agregado;
        }else
        {
          visorHTML.textContent = Agregado;
        }
    }
   
    reset()
    {
      this.controladorDeVisor( 0, true);
      this.numberA = null;
      this.numberB = null;
      this.operator = null;
    }

   
    numberSelect(newNumber)
    {

      if(this.operator)
      {
        if(this.numberB)
        {
          this.numberB = this.numberB + newNumber;
          this.controladorDeVisor(newNumber);
        }else
        {
          this.numberB = newNumber;
          this.controladorDeVisor(newNumber);
        }
      }else
      {
        if(!this.resultado)
        {
          if(this.numberA)
          {
            this.numberA = this.numberA + newNumber;
            this.controladorDeVisor(newNumber);
          }else
          {
            this.numberA = newNumber;
            this.controladorDeVisor(newNumber, true);
          } 
        }else
        {
          this.numberA = newNumber;
          this.controladorDeVisor(newNumber, true);
          this.resultado = false;

        }
      
      }
      this.mostrarDatosInternos();
    }
    operatorSelect(newOperator)
    {
      if(!this.operator)
      {
        this.operator = newOperator;
        this.controladorDeVisor(newOperator);
      }
      
    }
    resultSelect()
    {
 
      if(this.numberB)
      {
        let result;
        const numA = this.numberA;
        const numB = this.numberB;
        switch(this.operator)
        {
          case "+": result = Operations.Add(numA, numB); break;
          case "-": result = Operations.subtract(numA, numB);break;
          case "*": result = Operations.multiply(numA, numB);break;
          case "/": result = Operations.divide(numA, numB);break;
          case "^": result = Operations.power(numA, numB);break;
          default: console.log("ERROR"); break; 
        }
        this.controladorDeVisor(result, true)
  
           this.numberA = result;
           this.numberB = null;
           this.operator = null;
           this.resultado = true;
      }

      
    }
    mostrarDatosInternos()
    {
      console.log("------------")
      console.log("numberA: "+ this.numberA + "\nnumberB " + this.numberB);
    }
  }
  export default Calculadora