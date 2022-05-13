var path = require('path');
var webpack = require('webpack');
var fs = require('fs');

var widgetSrcDir = "./src/js/widgets";
//Make sure this value matches the 'Class' section of the config.json of your widgets
//If jsClientName is 'MyNamespace' then your 'Class' should be 'MyNamespace.Widgets'
var jsClientName = "ak"; //[ClientName].Widgets.WidgetName
var useTypeScript = true;

var genWidgetsConfig = function (widgetName) {
    var ext = '.js';
    if (useTypeScript) {
        ext = '.ts';
    }
    var extOut = '.js';
    var o = {
        filename: widgetName + extOut,
        path: path.resolve(__dirname, 'dist/widgets'),
        library: [jsClientName, 'Widgets', widgetName],
        libraryTarget: 'var',
    };
    if (useTypeScript) {
        o.libraryExport = widgetName;
    }

    return {
        name: "core",
        // target: "node",
        entry: widgetSrcDir + '/' + widgetName + '/js/widgets/' + widgetName + ext,
        output: o,
        externals: {
            "akumina-core": "Akumina",
            "jquery": "jQuery",
            "Akumina": "Akumina"
        },
        resolve: {
            extensions: ['.ts']
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                Akumina: "Akumina"
            }),
        ],
        module: {
            rules: [
                { test: /\.ts?$/, loader: 'ts-loader' }
            ]
        }
    };

};

module.exports = function () {
    var widgetConfigArray = [];
    fs.readdirSync(widgetSrcDir).forEach(function (file) {
        if (file.indexOf('.') == -1) {
            widgetConfigArray.push(genWidgetsConfig(file));
        }
    });
    return widgetConfigArray;
};
