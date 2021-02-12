
class QuerySelector
{
    static numbersSelector()
    {
    return document.querySelectorAll(".calculator__numbers button");
    }
    static operatorsSelector()
    {
        return document.querySelectorAll(".calculator__operators button");
    }
    static resultsSelector()
    {
        return document.querySelector(".calculator__result");
    }
    static resetSelector()
    {
        return document.querySelector(".calculator__offon");
    }
    static visor()
    {
        return document.querySelector(".calculator__visor")
    }
}

export default QuerySelector;