const Paint = function (litres) {
    this.litres = litres
}

Paint.prototype.getLitres = function () {
    return this.litres
}

Paint.prototype.checkEmpty = function () {
    return !this.litres
}

Paint.prototype.emptyPaint = function () {
    this.litres = 0
}

Paint.prototype.decreasePaint = function (litres) {
    this.litres -= litres
}

module.exports = Paint