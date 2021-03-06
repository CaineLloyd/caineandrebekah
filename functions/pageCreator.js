/////////////// Initial Variables
'use strict';

/////////////// Local Modules
var dataBase = require('./database.js');

/////////////// Create a new page
exports.createPage = function(req, res) {
    var queryData = req.query;
    if (typeof queryData.routeName !== 'undefined') {
        console.log('Data Received');
        dataBase.setFireStoreData('routes', queryData.routeName, queryData, true);
        res.redirect('http://www.caineandrebekah.com');
    } else {
        console.error('Not enough data!');
        res.write('<h1>Not Enough Data</h1>');
    }
}