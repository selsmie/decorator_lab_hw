const assert = require('assert')
const Paint = require('../paint.js')

describe("Paint", function () {

    let paint;

    beforeEach(function () {
        paint = new Paint(20)
    })

    it('should have a number of litres of paint', function () {
        const actual = paint.getLitres()
        assert.strictEqual(actual, 20)
    })

    it('should be able to empty itself of paint', function () {
        const actual = paint.emptyPaint()
        const empty = paint.getLitres()
        
        assert.strictEqual(actual, empty)
    })
})