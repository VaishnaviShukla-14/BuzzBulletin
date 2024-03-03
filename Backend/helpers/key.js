const crypto = require('crypto')
const secrateKey = crypto.randomBytes(64).toString("binary")
console.log(secrateKey);