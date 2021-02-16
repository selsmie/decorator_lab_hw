const Room = function(area){
    this.area = area;
    this.painted = false;
}

Room.prototype.getArea = function(){
    return this.area;
}

Room.prototype.finishedPainting = function(){
    this.painted = true;
}

module.exports = Room