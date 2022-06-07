import chalk from 'chalk';

function help() {
    console.log(`
    ${chalk.greenBright('command')} : ${chalk.yellowBright('fs')}

    ${chalk.greenBright('Description')} : ${chalk.yellowBright('This is a File System Organization Command.')}
                  ${chalk.yellowBright('This command arrange the files according to their')}
                  ${chalk.yellowBright('category and store in a \'organized_files\'(folder).')}
                   

    ${chalk.magenta.underline('Options')} :
    ${chalk.greenBright('fs help')}                             ${chalk.yellowBright('List of all commands')}
    
    ${chalk.greenBright('fs tree')}                             ${chalk.yellowBright('Display the files and folders of')}
                                        ${chalk.yellowBright('Current working directory in tree format')}

    ${chalk.greenBright('fs tree [directory]')}                 ${chalk.yellowBright('Display the files and folders of')}
                                        ${chalk.yellowBright('mentioned directory in tree format')}

    ${chalk.greenBright('fs orgc')}                             ${chalk.yellowBright('copy files from current working directory, organize files ')}
                                        ${chalk.yellowBright('in \"orgnanized_file\" folder in current working directory')}

    ${chalk.greenBright('fs orgm')}                             ${chalk.yellowBright('move files from current working directory, organize files')}
                                        ${chalk.yellowBright('in \"orgnanized_file\" folder in current working directory')}                                                
    ${chalk.greenBright('fs orgs')}                             ${chalk.yellowBright('create shortcut of files from current working directory, organize')}
                                        ${chalk.yellowBright('files in \"orgnanized_file\" folder in current working directory')}   

    ${chalk.greenBright('fs orgc [srcDir]')}                    ${chalk.yellowBright('copy files from srcDir, organize files ')}
                                        ${chalk.yellowBright('in \"orgnanized_file\" folder in same srcDir')}

    ${chalk.greenBright('fs orgm [srcDir]')}                    ${chalk.yellowBright('move files from srcDir, organize files ')}
                                        ${chalk.yellowBright('in \"orgnanized_file\" folder in same srcDir')}         

    ${chalk.greenBright('fs orgs [srcDir]')}                    ${chalk.yellowBright('create shortcut of files from srcDir, organize')}
                                        ${chalk.yellowBright('files in \"orgnanized_file\" folder in same srcDir')}      

    ${chalk.greenBright('fs orgc [srcDir] [destDir]')}          ${chalk.yellowBright('copy files from srcDir, organize files ')}
                                        ${chalk.yellowBright('in \"orgnanized_file\" folder in destDir')}

    ${chalk.greenBright('fs orgm [srcDir] [destDir]')}          ${chalk.yellowBright('move files from srcDir, organize files ')}
                                        ${chalk.yellowBright('in \"orgnanized_file\" folder in destDir')}             

    ${chalk.greenBright('fs orgs [srcDir] [destDir]')}          ${chalk.yellowBright('create shortcut of files from srcDir, organize')}
                                        ${chalk.yellowBright('files in \"orgnanized_file\" folder in destDir')}                                                                                          
    `);
}


export const helpFn = help;