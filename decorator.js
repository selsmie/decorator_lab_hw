const Decorator = function () {
    this.paintCansStock = []
}

Decorator.prototype.addPaintCan = function (newCan) {
    this.paintCansStock.push(newCan)
}

Decorator.prototype.getPaintCans = function () {
    return this.paintCansStock.length
}

Decorator.prototype.totalLitres = function () {
    let total = 0
    for (let can of this.paintCansStock){
        total += can.litres
    }
    return total
}

Decorator.prototype.canPaintRoom = function(room) {
    return this.totalLitres() >= room.area
}

Decorator.prototype.paintRoom = function (room) {
    if (this.canPaintRoom(room)) {
        room.finishedPainting()
    }
}

Decorator.prototype.reducePaintToZeroNotes = function (room) {
    let leftToPaint = room.area
    for (let paint of this.paintCansStock){
        if (paint.litre >= leftToPaint) {
            paint.decreasePaint(leftToPaint)
        } else {
            leftToPaint -= paint.leftToPaint
            paint.emptyPaint()
        }
    }
}


Decorator.prototype.reducePaintToZero = function (room) {
    let leftToPaint = room.area
    this.paintRoom(room)
    for (let i = 0; i < this.paintCansStock.length; i++){
        if (leftToPaint >= this.paintCansStock[i]['litres']) {
            leftToPaint -= this.paintCansStock[i]['litres']
            this.paintCansStock[i]['litres'] = 0
        } else {
            this.paintCansStock[i]['litres'] -= leftToPaint
            leftToPaint = 0
            
        }
    }
    // console.log('left to paint: ', leftToPaint)
}

Decorator.prototype.removeEmptyPaint = function () {
    // for (let i = this.paintCansStock.length - 1; i >= 0; i--) {
    //     if (this.paintCansStock[i]['litres'] === 0) {
    //         this.paintCansStock.splice(i, 1)
    //     }
    // }
    this.paintCansStock = this.paintCansStock.filter(Paint => Paint['litres'] !== 0)
}

module.exports = Decorator
