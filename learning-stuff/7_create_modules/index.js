console.log("This is index.js");
const mod = require("./mod");
console.log("Using sum function from mod module ",mod.sum(2,3));
console.log("Using average function from mod module ",mod.avg([2,3,4]));
console.log("Use the object module.export print the name: "+mod.name);


