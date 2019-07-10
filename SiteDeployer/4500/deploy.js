var exeCute = require('exe');
const dotenv = require('dotenv');
const siteDeployerConfig = require('./akumina.siteDeployer.config.json');
dotenv.config();

/*-----------------------------------------------------------------
Whereas this file was previously edited, it is no longer
necessary to do so. One can just edit .env and siteDeployer.config.json
-----------------------------------------------------------------*/

const options = Object.entries(siteDeployerConfig.Options)
    .filter(([k, v]) => v == true).map(([k, v]) => k).toString()

const envParams = Object.entries(process.env).filter(([key, value]) =>
    siteDeployerConfig.Args.includes(key) && value != '').map(o =>
        `${o[0]} ${o[1]}`).join(' ')

exeCute('.\\tools\\Akumina.SiteDeployer.exe options ' + options + ' ' + envParams);