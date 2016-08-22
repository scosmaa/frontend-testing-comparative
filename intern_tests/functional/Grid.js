/**
 * Created by s.cosma on 22/08/2016.
 */
define([
    'intern!object',
    'intern/chai!assert',
    'require',
    'intern/dojo/node!fs'
], function (registerSuite, assert, require,fs) {
    var url = '../../src/index.html';

    registerSuite({
        name: 'Grid (functional)',
        timeout: 300000,
        'Sort First Column': function () {
            var browserName = this.remote.environmentType.browserName;
            console.log('browser name', browserName);
            return this.remote
                .get(require.toUrl(url))
                .setFindTimeout(5000)
                .takeScreenshot()
                .then(function(data) {
                    fs.writeFileSync(['intern_tests\\screenshots',browserName,"test1_start.png"].join('\\'), data);
                })
                .end()
                .findById('gridNode-1')
                .click()
                .click()
                .end()
                .takeScreenshot()
                .then(function(data) {
                    fs.writeFileSync(['intern_tests\\screenshots',browserName,"test1_end.png"].join('\\'), data);
                })
                .findByCssSelector('.gridxMain [colid="1"]')
                .getVisibleText()
                .then(function (val) {
                    assert.ok(val === "4", 'The grid is sorted descending');
                });
        }
    });
});