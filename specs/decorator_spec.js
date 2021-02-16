const assert = require('assert')
const Decorator = require('../decorator.js')
const Paint = require('../paint.js')
const Room = require('../room.js')

describe("Decorator", function () {

    let decorator;
    let paint;
    let room;

    beforeEach(function() {
        decorator = new Decorator()
        paint = new Paint(20)
        room = new Room(20)
    })

    it('should start with an empty paint stock', function () {
        const actual = decorator.paintCansStock.length
        assert.strictEqual(actual, 0)
    })

    it('should add new can to paint stock', function () {
        decorator.addPaintCan(paint)
        const actual = decorator.getPaintCans()
        assert.strictEqual(actual, 1)
    })

    it('should be able to get total paint stock', function () {
        decorator.addPaintCan(paint)
        const actual = decorator.totalLitres()
        assert.strictEqual(actual, 20)
    })

    it('should be able to get total paint stock', function () {
        decorator.addPaintCan(paint)
        let paint2 = new Paint(10)
        decorator.addPaintCan(paint2)
        const actual = decorator.totalLitres()
        assert.strictEqual(actual, 30)
    })

    it('should be able calc if we can paint the room', function () {
        decorator.addPaintCan(paint)
        const actual = decorator.canPaintRoom(room.getArea())
        assert.strictEqual(actual, true)
    })

    it('should be unable calc if we can paint the room', function () {
        decorator.addPaintCan(paint)
        let room2 = new Room(40)
        const actual = decorator.canPaintRoom(room2.getArea())
        assert.strictEqual(actual, false)
    })

    it('should paint room', function () {
        decorator.addPaintCan(paint)
        decorator.paintRoom(room)
        const painted = room.painted
        assert.strictEqual(painted, true)
    })


    it('should reduce paint to zero still left to paint', function () {
        decorator.addPaintCan(paint)
        let paint2 = new Paint(10)
        decorator.addPaintCan(paint2)
        let room2 = new Room(40)
        // console.log(decorator.paintCansStock)
        decorator.reducePaintToZero(room2)
        decorator.removeEmptyPaint()
        const actual = decorator.totalLitres()
        // console.log(decorator.paintCansStock)
        assert.strictEqual(actual, 0)
    })

    it('should reduce paint to zero', function () {
        decorator.addPaintCan(paint)
        let paint2 = new Paint(10)
        decorator.addPaintCan(paint2)
        let room3 = new Room(30)
        // console.log(decorator.paintCansStock)
        decorator.reducePaintToZero(room3)
        decorator.removeEmptyPaint()
        const actual = decorator.totalLitres()
        // console.log(decorator.paintCansStock)
        assert.strictEqual(actual, 0)
    })

    it('should reduce paint to zero room completed', function () {
        decorator.addPaintCan(paint)
        let paint2 = new Paint(10)
        decorator.addPaintCan(paint2)
        let room4 = new Room(10)
        // console.log(decorator.paintCansStock)
        decorator.reducePaintToZero(room4)
        decorator.removeEmptyPaint()
        const actual = decorator.totalLitres()
        // console.log(decorator.paintCansStock)
        // console.log(room4.painted)
        assert.strictEqual(actual, 20)
    })
})