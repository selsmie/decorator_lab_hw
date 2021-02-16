const Paint = function (litres) {
    this.litres = litres
}

Paint.prototype.getLitres = function () {
    return this.litres
}

Paint.prototype.emptyPaint = function () {
    return this.litres = 0
}

module.exports = Paint