#!/usr/bin/env node

var exec = require('child_process').exec
    , p = process.argv;

if(p[3]) {
    console.log('git clone git@github.com:'+ p[2] +'.git '+ p[3]);
    exec('git clone git@github.com:'+ p[2] +'.git '+ p[3], function(error, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        if (error !== null) {
            console.log(error);
        }
    });
} else {
    console.log('git clone git@github.com:'+ p[2] +'.git');
    exec('git clone git@github.com:'+ p[2] +'.git', function(error, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        if (error !== null) {
            console.log(error);
        }
    });
}
