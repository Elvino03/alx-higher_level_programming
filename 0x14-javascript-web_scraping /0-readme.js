#!/usr/bin/node
const fs = require('fs');

function readFileContent(filePath) {
  fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) {
      console.error(error);
    } else {
      console.log(data);
    }
  });
}

// Usage: Provide the file path as the first argument when running the script
const filePath = process.argv[2];
readFileContent(filePath);
