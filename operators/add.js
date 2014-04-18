// an operator module, can be completely external

var Add = function() {
    this.operator = "+";
};

// inherits the Operator Class
Add.prototype = Object.create(require('./operator').prototype);

module.exports = Add;