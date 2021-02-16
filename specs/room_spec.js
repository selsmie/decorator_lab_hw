const assert = require('assert')
const Room = require('../room.js')

describe('Room', function(){
    let room;

    beforeEach(function(){
        room = new Room(9)
    })

    it('get area', function(){
        let actual = room.getArea();
        assert.strictEqual(actual, 9)
    })

    it('finished painting', function(){
        room.finishedPainting();
        let actual = room.painted;
        assert.strictEqual(actual, true)
    })

})
