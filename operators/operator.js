// Operator class

var Operator = function(operator){
    this.operator = operator;
};

Operator.prototype.calc = function(){
    var arr = [];

    [].slice.call(arguments).forEach(function(i){
        if(Number(i) || Number(i) === 0) arr.push(Number(i));
    });

    return eval(arr.join(this.operator));
};

module.exports = Operator;