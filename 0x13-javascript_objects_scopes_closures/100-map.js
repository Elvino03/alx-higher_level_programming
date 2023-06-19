#!/usr/bin/node
import { list } from "./100-data.js";
const newList = list.map((value, index) => value * index);
console.log("Initial list:", list);
console.log("New list:", newList);
