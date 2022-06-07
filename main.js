#!/usr/bin/env node

/*
1.help -  show all commands
2.tree -  show files and folders in tree format   
3.orgc -  copy files and organize them in 'organized_files' folder
          (after command execution, files are avaialbe at both source and destination)
4.orgm -  move files and organize them in 'organized_files' folder
          (after command execution, files are available at destination only)
5.orgs -  create shortcut files and organize those shortcut in 'organized_files' folder   
          (after command execution, files are available at source and shortcuts are at destination)
*/

import { helpFn } from './command/help.js';
import { organizeFn } from './command/organize.js';
import { treeFn } from './command/tree.js';



// Taking input from command prompt
let commandInput = process.argv.slice(2);
//console.log(commandInput);

//Extracing the main command
let command = commandInput[0];

// check the command and call the respective fumction
switch (command) {
    case 'help':
                //console.log('help is called');
                helpFn();
                break;
    case 'orgc':
                //console.log('organize is called');
                organizeFn(commandInput[1], commandInput[2], 1);
                break;
    case 'orgm':
                //console.log('organize is called');
                organizeFn(commandInput[1], commandInput[2], 2);
                break;
    case 'orgs':
                //console.log('organize is called');
                organizeFn(commandInput[1], commandInput[2], 3);
                break;
    case 'tree':
                //console.log('tree is called');
                treeFn(commandInput[1]);
                break;
    default:
        console.log(`Error: No such command is found.
'fsorg help' command for help.`);
        break;
}



