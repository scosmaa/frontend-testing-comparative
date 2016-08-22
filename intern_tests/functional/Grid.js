/**
 * Created by s.cosma on 22/08/2016.
 */
define([
    'intern!object',
    'intern/chai!assert',
    'require'
], function (registerSuite, assert, require) {
    var url = '../../src/index.html';

    registerSuite({
        name: 'Grid (functional)',
        timeout: 300000,
        'Sort First Column': function () {
            return this.remote
                .get(require.toUrl(url))
                .setFindTimeout(5000)
                .findById('gridNode-1')
                .click()
                .click()
                .end()
                .findByCssSelector('.gridxMain [colid="1"]')
                .getVisibleText()
                .then(function (val) {
                    assert.ok(val === "4", 'The grid is sorted descending');
                });
        }
    });
});