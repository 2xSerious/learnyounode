const mymodule = require("./mymodule.js");

const filename = process.argv[2];
const pat = process.argv[3];

mymodule(filename, pat, function(err, files) {
    for (let i = 0; i < files.length; i++) {
        console.log(files[i])
    }
});