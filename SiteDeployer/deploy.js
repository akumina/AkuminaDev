var exeCute = require('exe');


var options = [];
//options.push("masterpage");
//options.push("js");
//options.push("css");
//options.push("lists");
//options.push("layouts");
//options.push("pages");
//options.push("pagewidgets");
//options.push("addtermsets");
//options.push("controls");
options.push("widgets");
//options.push("contentfiles");
//options.push("imagefiles");
//options.push("updatelists");
//options.push("homepage");
//options.push("fonts");
//options.push("addwiki");


var spUrlDev = "";
var spUserDev = "";
var spPassDev = "";


var args = {
    "options": options.toString(),
    "envdir": "M:\\Akumina-Products\\DigitalWorkplaceWidgets\\Releases\\4.1.0.0\\Src",
    "assetdirectory": "DigitalWorkplaceCore",
    "spdirectory": "DigitalWorkplace",
    "spurl": spUrlDev,
    "spuser": spUserDev,
    "sppassword": spPassDev
};

exeCute('.\\tools\\Akumina.SiteDeployer.exe options ' + args.options + ' envdir ' + args.envdir + ' assetdirectory ' + args.assetdirectory + ' spdirectory ' + args.spdirectory + ' spurl ' + args.spurl + ' spuser ' + args.spuser + ' sppassword ' + args.sppassword);
