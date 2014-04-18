var Divide = function() {
    this.operator = "/";
};

Divide.prototype = Object.create(require('./operator').prototype);

module.exports = Divide;