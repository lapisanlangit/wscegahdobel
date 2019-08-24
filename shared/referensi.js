

var db = require('../db/dbpool');
var base = require('../shared/base');
const crypto = require('crypto');
const strKey="aplikasiSPPDpalingOyeSeduania";
module.exports = {

  

  cipherPassword:function(iPass){
		const cipher = crypto.createCipher('aes192', strKey);
		let encrypted = cipher.update(iPass, 'utf8', 'hex');
		encrypted += cipher.final('hex');
		return encrypted;
  },

  decipherPassword:function(iPass){
		const decipher = crypto.createDecipher('aes192', strKey);
		const encrypted =iPass;
		let decrypted = decipher.update(encrypted, 'hex', 'utf8');
		decrypted += decipher.final('utf8');
		return decrypted;

  },
  
}
