/**
 * Created by s.cosma on 02/08/2016.
 */
// Learn more about configuring this file at <https://github.com/theintern/intern/wiki/Configuring-Intern>.
// These default settings work OK for most people. The options that *must* be changed below are the
// packages, suites, excludeInstrumentation, and (if you want functional tests) functionalSuites.
define({
    // The port on which the instrumenting proxy will listen
    proxyPort: 9000,
    //
    // // A fully qualified URL to the Intern proxy
    proxyUrl: 'http://localhost:9000/',

    // Default desired capabilities for all environments. Individual capabilities can be overridden by any of the
    // specified browser environments in the `environments` array below as well. See
    // https://code.google.com/p/selenium/wiki/DesiredCapabilities for standard Selenium capabilities and
    // https://saucelabs.com/docs/additional-config#desired-capabilities for Sauce Labs capabilities.
    // Note that the `build` capability will be filled in with the current commit ID from the Travis CI environment
    // automatically
    capabilities: {
        'selenium-version': '2.53.1'
    },

    // Browsers to run integration testing against. Note that version numbers must be strings if used with Sauce
    // OnDemand. Options that will be permutated are browserName, version, platform, and platformVersion; any other
    // capabilities options specified for an environment will be copied as-is
    environments: [
        { browserName: 'firefox' },
        // With chrome it is possible to emulate a mobile device
        // http://stackoverflow.com/questions/38767438/is-it-possible-to-run-chrome-in-mobile-emulation-mode-with-selenium-server-with
        { browserName: 'chrome' },
        // // // ATTENTION: to use IE you have to to enable intranet protected mode (SETTING -> Internet Options -> Security)
         { browserName: 'internet explorer',
                 'ie.ensureCleanSession': true
         },
         { browserName: 'MicrosoftEdge' }
    ],

    //tunnel: 'SauceLabsTunnel',

    // Maximum number of simultaneous integration tests that should be executed on the remote WebDriver service
    maxConcurrency: 4,
    useSauceConnect: false,
    // Configuration options for the module loader; any AMD configuration options supported by the Dojo loader can be
    // used here

    loader: {
        // Packages that should be registered with the loader in each testing environment
        packages: [
            { name: 'dojo', location: 'bower_components/dojo' },
            { name: 'dojox', location: 'bower_components/dojox' },
            { name: 'dijit', location: 'bower_components/dijit' },
            { name: 'gridx', location: 'bower_components/gridx' },
            // The next package is VERY important, because set the right test suites path when you use the runner
            { name: 'intern_tests', location: 'intern_tests' },
            { name: 'app', location: 'src/app' }
        ]
    },

    // Non-functional test suite(s) to run in each browser
    suites: [ 'intern_tests/all' ],
    // Functional test suite(s) to run in each browser once non-functional tests are completed
    functionalSuites: [ 'intern_tests/functional/Grid' ],
    // Leave browser opened when test is complete
    // https://github.com/theintern/intern/issues/397
    //https://github.com/theintern/intern/issues/144
    leaveRemoteOpen: false,
    // We use an older version of dojo, so we can set the right package loader
    loaders: {
        'host-browser': 'bower_components/dojo/dojo.js'
    },
    // Use a reporter to generate several kind of documents
    // It's not possible to use the HTML reporters to create a functionals test summary
    // You have to create a new one (try starting from JUnit reporters)
    // http://stackoverflow.com/search?q=%5Bintern%5D+html+reporter
    // http://stackoverflow.com/questions/37701036/how-to-generate-html-reports-for-functional-tests-using-intern-tool/37701566#37701566
    // reporters: [
    //     { id: 'JUnit', filename: 'intern_tests\\test_results.xml' }
    // ],
    // A regular expression matching URLs to files that should not be included in code coverage analysis
    excludeInstrumentation: /^(?:tests|node_modules|bower_components)\//
});
