/**
 * Created by s.cosma on 02/08/2016.
 */
define(function (require) {
    var registerSuite = require('intern!object');
    var assert = require('intern/chai!assert');
    var hello = require('app/hello');

    registerSuite({
        name: 'hello',

        greet: function () {
            assert.strictEqual(hello.greet('Simone'), 'Hello, Simone!',
                'hello.greet should return a greeting for the person named in the first argument');
            assert.strictEqual(hello.greet(), 'Hello, world!',
                'hello.greet with no arguments should return a greeting to "world"');
        }
    })
});