#!/usr/bin/env node

var execFile = require('child_process').execFile
    , p = process.argv
    , name = p[2]
    , localName = p[3];

if(localName) {
    console.log('git clone git@github.com:'+ name +'.git '+ localName);
    execFile('git', ['clone', 'git@github.com:'+ name +'.git', localName], function(error, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        if (error !== null) {
            console.log(error);
        }
    });
} else {
    console.log('git clone git@github.com:'+ name +'.git');
    execFile('git', ['clone', 'git@github.com:'+ name +'.git'], function(error, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        if (error !== null) {
            console.log(error);
        }
    });
}
