// Calculator class
var Calculator = function(){
    this.operators = {};
};

Calculator.prototype.addOperator = function(operator){
    this.operators[operator.operator]= operator;
};

Calculator.prototype.calc = function(operator, args) {
    var _super = this.operators[operator];
    return _super.calc.apply(_super, args);
};

module.exports = Calculator;