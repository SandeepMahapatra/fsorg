import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

function tree(dirPath){
    //if dirPath is undefined, call the treeHelper function on current working directory
    if(dirPath == undefined){
        treeHelper(process.cwd(),"");
    }
    else{
        //check dirPath is valid or not
        let doesExist = fs.existsSync(dirPath);
        //if dirPath is invalid, then dirPath is current working directory
        if(!doesExist){
            dirPath = process.cwd();
        }
        treeHelper(dirPath,"");
    }
    console.log(' ');
    console.log(chalk.greenBright('Green'),chalk.magenta('for Files,'), chalk.yellowBright('Yellow'),chalk.magenta('for Folders.'));
}

function treeHelper(dirPath, indent){
    //if the dirPath is a file, then print the filename, termination condition of recurrsion
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile){
        let fileName = path.basename(dirPath);
        console.log(indent+ "├──" + chalk.greenBright(fileName));
    }
    else{
        let dirName = path.basename(dirPath);
        // collect the files and folder present inside dirPath
        let childNames = fs.readdirSync(dirPath);
        let fileCount = 0;
        let folderCount = 0;

        //keep count of no. of files and folders in a specific dirPath
        for(let i=0;i<childNames.length;i++){
            let childPath = path.join(dirPath,childNames[i]);
            let vldFile = fs.lstatSync(childPath).isFile();
            if(vldFile){
                fileCount++;
            }else{
                folderCount++;
            }
        }

        //print the Directory(folder) name
        console.log(indent + "└──" + chalk.yellowBright.underline(dirName) + chalk.magenta(` (${folderCount} folders, ${fileCount} files)`));

        
        //recurrsively call all folders 
        for(let i=0; i<childNames.length;i++){
            let childPath = path.join(dirPath,childNames[i]);
            treeHelper(childPath, indent + "\t");
        }
    }
}

export const treeFn = tree;
