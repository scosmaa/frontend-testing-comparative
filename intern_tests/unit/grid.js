/**
 * Created by s.cosma on 02/08/2016.
 */
define([
    'intern!object',
    'intern/chai!assert',
    'dojo/store/Memory',
    'gridx/Grid',
    'gridx/core/model/cache/Sync',
    'gridx/modules/SingleSort'
], function(registerSuite,
            assert,
            Store,
            Grid,
            Cache,
            SingleSort
            ){

    var grid;

    var beatles = [
        {id: 1, name: 'John', surname: 'Lennon', instrument: 'Guitar'},
        {id: 2, name: 'Paul', surname: 'McCartney', instrument: 'Bass'},
        {id: 3, name: 'George', surname: 'Harrison', instrument: 'Guitar'},
        {id: 4, name: 'Ringo', surname: 'Starr', instrument: 'Drums'}
    ];
    registerSuite({
        name: 'Grid Test Suite',

        setup: function () {


            var gridModel = new Store({
                data: beatles
            });

            var columns = [
                {field: 'id', name: 'Identity'},
                {field: 'name', name: 'Name'},
                {field: 'surname', name: 'Surname'},
                {field: 'instrument', name: 'Main Instrument'}
            ];

            grid = new Grid({
                cacheClass: Cache,
                store: gridModel,
                structure: columns,
                // You can add modules here
                // Every module contains a reference to the model and to the grid instance
                // You can access to the each module using gridVariable.moduleName
                modules: [
                    SingleSort
                ],
                // You can pass parameters to a single module using the convention moduleNameParameterName
                columnResizerMinWidth: 10,
                paginationInitialPageSize: 15,
                paginationBarMessage: "${2} to ${3} of ${0} items ${1} items selected"
            });

            //grid.startup();
        },

        'Grid elements number': function () {
            assert.strictEqual(grid.store.data.length,beatles.length, 'The grid should have the same element as the array')
        }
    })

});