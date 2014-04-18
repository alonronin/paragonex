var Multiply = function() {
    this.operator = "*";
};

Multiply.prototype = Object.create(require('./operator').prototype);

module.exports = Multiply;