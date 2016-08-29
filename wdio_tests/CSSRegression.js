/**
 * Created by s.cosma on 29/08/2016.
 */

/**
 *   HOWTO: Questo esempio serve per verificare le potenzialità del CSS regression testing
 *   Per eseguirlo correttamente:
 *      - Avviare selenium
 *      - Avviare WebdriverCSS Admin Panel (server per visualizzare eventuali regressioni)
* */

var webdriverio = require('webdriverio');
var webdrivercss = require('webdrivercss');

var browsers = ['internet explorer', 'chrome', 'firefox','MicrosoftEdge'];

browsers.forEach(function (element) {
    var client = webdriverio.remote({
        desiredCapabilities: {
            browserName: element
        }
    });

    webdrivercss.init(client, {
        screenshotRoot: ['css','regression','test',element].join('-'),
        api: 'http://localhost:8080/api/repositories/'
    });

    client
        .init()
        .url('http://localhost:63342/frontend-testing-comparative/src/index.html')
        .click('#gridNode-1')
        .click('#gridNode-1')
        .webdrivercss('gridx', [{
            name: 'grid',
            elem: 'div'
        }])
        .sync()
        .end();
});

