'use strict';

var chai = require('chai');
var mocha = require('mocha');
var assert = chai.assert;
var eprime = require('../e-prime');

describe('e-prime', function () {
    it('Should detect non-e\' word', function (done) {
        assert.deepEqual(eprime('NodeJs is awesome ;)'), [{
            index: 7,
            offset: 2
        }]);

        done();
    });

    it('Should detect \'was\'', function (done) {
        assert.deepEqual(eprime('So the cat was stolen'), [{
            index: 11,
            offset: 3
        }]);

        done();
    });

    it('Should detect \'I\'m\'', function (done) {
        assert.deepEqual(eprime('I\'m not sure where to delivery the pizza'), [{
            index: 0,
            offset: 3
        }]);

        done();
    });

    it('Shouldn\'t detect anything', function (done) {
        assert.deepEqual(eprime('Welcome to the jungle.'), []);
        done();
    });

    it('Should detect multiple suggestions', function (done) {
        assert.deepEqual(eprime('I\'m not sure where to delivery the pizza because my map was stolen'), [{
            index: 0,
            offset: 3
        }, {
            index: 56,
            offset: 3
        }]);

        done();
    });

    it('Should detect \'isn’t(smart quote)', function (done) {
        assert.deepEqual(eprime('That isn’t my droid.'), [{
            index: 5,
            offset: 5
        }]);

        done();
    });
});