#!/usr/bin/env node

import inquirer from "inquirer";
import { clear } from "console";
import { me, questions } from "./lib/content";
import { calculateAge } from "./lib/utils";

const name: string = "Abdulhameed";
const age = calculateAge("2005-12-09");

clear();

console.log(
  `My name is ${name} and I am ${age} years old, very happy to start this project `
);

console.log(me);

const prompt = inquirer.createPromptModule();
prompt(questions).then((answer: { action: () => any }) => answer.action());
