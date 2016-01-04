var fis = require("fis3");
fis.conf = require('../conf/config.js');

function getLocalFisConf(product, namespace){
    fis.conf.setConfigData(product, namespace);
};

exports.getLocalFisConf = getLocalFisConf;