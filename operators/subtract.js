var Subtract = function() {
    this.operator = "-";
};

Subtract.prototype = Object.create(require('./operator').prototype);

module.exports = Subtract;