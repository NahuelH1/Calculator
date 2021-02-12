class Operaciones {
   static Add(numA, numB)
   {
    return parseInt(numA) + parseInt(numB);
   }
   static subtract (numA, numB)
   {
    return numA - numB;
   }
   static multiply(numA, numB)
   {
    return numA * numB;
   }
   static divide(numA, numB)
   {
    return numA / numB;
   }
   static power(numA, numB)
   {
      return numA**numB
   }

}
export default Operaciones;