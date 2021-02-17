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
    total = 0
    for (can of this.paintCansStock){
        total += can.litres
    }
    return total
}

Decorator.prototype.canPaintRoom = function(room) {
    return this.totalLitres() >= room.area
}

Decorator.prototype.paintRoom = function (room) {
    if (this.canPaintRoom(room)) {
        room.painted = true
    }
}

// Decorator.prototype.reducePaintToZero = function (room) {
//     let leftToPaint = room.area
//     for (let paint of this.paintCansStock){
//         for (let key in paint) {
//             let litre = paint[key]
//             if (leftToPaint >= litre) {
//                 leftToPaint -= litre
//                 console.log(leftToPaint)
//                 this.paintCansStock.splice(key, 1)
//             } 
//             else {
//                 litre -= leftToPaint
//             }
//         }
//     }
// }

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
