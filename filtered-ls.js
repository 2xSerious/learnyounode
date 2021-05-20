const fs = require("fs");
const filename = process.argv[2];
const pat = process.argv[3];
const exp = RegExp("\\." + pat + "$");

const file = fs.readdir(filename, function(err, list) {
    if (err) { console.log(err) }
    for ( let i = 0; i < list.length; i++) {
        if (exp.test(list[i])) {
            console.log(list[i])
        }
    }
});