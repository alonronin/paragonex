// application api

// initialize calculator
var Calculator = require('../calculator'),
    calculator = new Calculator();

// import Operators Logic
var operators = [
    require('../operators/add'),
    require('../operators/divide'),
    require('../operators/multiply'),
    require('../operators/subtract')
];

// add Operators to calculator
operators.forEach(function(operator){
    calculator.addOperator(new operator);
});

module.exports = function(app) {
    // show all operators
    app.get('/api/operators', function(req, res){
        res.json(Object.keys(calculator.operators));
    });

    // get result from calculator by operator
    app.post('/api/calc', function(req, res){
        res.json({result: calculator.calc(req.body.operator, req.body.numbers)});
    });
};

