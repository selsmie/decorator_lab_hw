const assert = require('assert')
const Room = require('../room.js')

describe('Room', function(){
    let room;

    beforeEach(function(){
        room = new Room(9)
    })

    it('get area', function(){
        const actual = room.getArea();
        assert.strictEqual(actual, 9)
    })

    it('should start not painted', function () {
        assert.strictEqual(room.painted, false)
    })

    it('finished painting', function(){
        room.finishedPainting();
        const actual = room.painted;
        assert.strictEqual(actual, true)
    })

})
