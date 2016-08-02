/**
 * Created by s.cosma on 02/08/2016.
 */

define([], function () {
    return {
        greet: function (name) {
            name = name || 'world';

            return 'Hello, ' + name + '!';
        }
    };
});