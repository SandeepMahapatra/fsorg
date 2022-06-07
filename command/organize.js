import fs from 'fs';
import path from 'path';
import catExt from '../category.js';
import chalk from 'chalk';
import ws from 'windows-shortcuts';
import readlineSync from 'readline-sync';

// optionVal 1-> orgc, 2-> orgm, 3-> orgs
let optionVal;
function organize(dirPath, destPath, option) {
    optionVal = option;
    //dirPath undefined, take current working direcory as both source and destination path
    //At destination path, create "organized_files" folder to arrange files in category wise
    if (dirPath == undefined) {
        dirPath = process.cwd();
        destPath = path.join(dirPath, 'organized_files');
    }
    else {
        while (true) {
            let doesPathExist = fs.existsSync(dirPath);
            if (doesPathExist) {
                //dirPath(source path) is valid
                if (destPath == undefined) {
                    //destPath is not passed, then destPath is same as dirPath
                    destPath = path.join(dirPath, 'organized_files');
                } else {
                    //destPath is passed
                    while (true) {
                        let doesDestExist = fs.existsSync(destPath);
                        if (doesDestExist) {
                            //destPath is valid
                            destPath = path.join(destPath, 'organized_files');
                            break;
                        } else {
                            //destPath is invalid
                            console.log(chalk.magenta(`
    Destination path doesn\'t exist.
                            `));
                            //Ask user to re-enter destination path
                            if (readlineSync.keyInYN(chalk.yellowBright('Do you want re-enter destination path?'))) {
                               //if yes, take the input and check the validity
                                destPath = readlineSync.question(chalk.greenBright('Enter the destintion path: '));
                            } else {
                                //if no, then return
                                console.log(chalk.magenta(`
    Exit Successful.
                                `));
                                return;
                            }
                        }
                    }
                }
                break;
            }
            else {
                //dirPath(source path) is invalid
                console.log(chalk.magenta(`
    Source path doesn\'t exist.
                `));
                //Ask user to re-enter source path
                if (readlineSync.keyInYN(chalk.yellowBright('Do you want re-enter source path?'))) {
                   //if yes, take the source path and check validity
                    dirPath = readlineSync.question(chalk.greenBright('Enter the source path: '));
                } else {
                    console.log(chalk.magenta(`
    Exit Successful.
                    `));
                    return;
                }
            }
        }

    }
    // console.log(dirPath);
    // console.log(destPath);


    //make directory "organized_files", if not there
    if (fs.existsSync(destPath) == false) {
        fs.mkdirSync(destPath);
    }

    organizeHelper(dirPath, destPath);
}

function organizeHelper(src, dest) {
    let childNames = fs.readdirSync(src);
    for (let i = 0; i < childNames.length; i++) {
        let childAddress = path.join(src, childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();

        if (isFile) {
            //get the category of each files
            let category = getCategory(childNames[i]);
            //send that particular file to its category in the destination folder
            sendFiles(childAddress, dest, category);
        }
    }

    console.log(chalk.greenBright(`
Task has been completed successfully.
`))
}

function sendFiles(srcFilePath, destPath, category) {
    let categoryPath = path.join(destPath, category);

    //make the category folder if not there
    if (fs.existsSync(categoryPath) == false) {
        fs.mkdirSync(categoryPath);
    }

    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath, fileName);

    
    if (optionVal == 1) {
        // copy from source to desinatin path
        fs.copyFileSync(srcFilePath, destFilePath);
        console.log(chalk.yellowBright(fileName), "copied to ", chalk.greenBright(category));
    } else if(optionVal==2){
        // move from source to destination path
        fs.copyFileSync(srcFilePath, destFilePath);
        fs.unlinkSync(srcFilePath);
        console.log(chalk.redBright(fileName), "transfered to ", chalk.greenBright(category));
    }else{
        // create shortcut file in destination path
            let compFile = fileName.split('.');
            compFile.pop();
            fileName = compFile.join('.');
            fileName = fileName + '-shortcut';
            // for windows shortcut extension is .lnk
           let fileNameWithExt = fileName + '.lnk';
             
            destFilePath = path.join(categoryPath, fileNameWithExt);
            ws.create(destFilePath,srcFilePath);
            console.log(chalk.yellowBright(fileName), "copied to ", chalk.greenBright(category));
    }


}

function getCategory(name) {
    //return category type of each file
    let extension = path.extname(name);
    extension = extension.slice(1);

    for (let type in catExt.types) {
        let catTypeArr = catExt.types[type];
        for (let i = 0; i < catTypeArr.length; i++) {
            if (extension == catTypeArr[i]) {
                return type;
            }
        }
    }

    return 'others';
}

export const organizeFn = organize;