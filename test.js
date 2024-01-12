const fs = require("fs");
const path = require("path")

const importOrder = ["Important", "Audio", "Feed"];

let archivo = fs.readFileSync(path.join(__dirname , 'dev-options.json'), 'utf-8');

console.log(shiftElement(importOrder, 0, JSON.parse(archivo)))

function shiftElement(arr, element, index) {
    arr.splice(index, 0, element); 
    arr.splice(arr.indexOf(element), 1);
    return arr;
  }