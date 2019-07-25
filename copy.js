const fs = require('fs');
const glob = require('glob');

glob('./web/main.*.js', (err,files) => {
  fs.copyFile(files[0], './web/main.js', err => {if (err){console.log(err)}});
});

glob('./web/main.*.css', (err,files) => {
  fs.copyFile(files[0], './web/main.css', err => {if (err){console.log(err)}});
});

